import React, { useState, useEffect } from 'react';
import { 
  Lock, Unlock, FileDown, Search, Trash2, CheckCircle2, 
  Clock, UserCheck, MessageSquare, Calendar, X, Eye, 
  AlertCircle, Filter, ChevronDown, Check, Database
} from 'lucide-react';
import { LeadSubmission } from '../types';

interface LeadManagerProps {
  onClose?: () => void;
}

export default function LeadManager({ onClose }: LeadManagerProps) {
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState('');
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [purposeFilter, setPurposeFilter] = useState<string>('all');
  const [editingLeadId, setEditingLeadId] = useState<string | null>(null);
  const [editingNote, setEditingNote] = useState('');

  // Default security passcode (Broker's Hotline or admin)
  const CORRECT_PASSCODE = '0903423229';

  useEffect(() => {
    // Load leads from localStorage
    const savedLeads = localStorage.getItem('emerald_garden_leads');
    if (savedLeads) {
      try {
        setLeads(JSON.parse(savedLeads));
      } catch (e) {
        console.error('Error parsing leads', e);
      }
    }
    
    // Check if session is already authorized
    const authSession = sessionStorage.getItem('emerald_admin_authorized');
    if (authSession === 'true') {
      setIsAuthorized(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSCODE || password === 'admin') {
      setIsAuthorized(true);
      setError('');
      sessionStorage.setItem('emerald_admin_authorized', 'true');
    } else {
      setError('Mật mã không đúng. Vui lòng nhập lại (Gợi ý: Dùng Hotline dự án).');
    }
  };

  const handleLogout = () => {
    setIsAuthorized(false);
    setPassword('');
    sessionStorage.removeItem('emerald_admin_authorized');
  };

  const updateLeadStatus = (id: string, status: LeadSubmission['status']) => {
    const updatedLeads = leads.map(lead => 
      lead.id === id ? { ...lead, status } : lead
    );
    setLeads(updatedLeads);
    localStorage.setItem('emerald_garden_leads', JSON.stringify(updatedLeads));
  };

  const saveLeadNote = (id: string) => {
    const updatedLeads = leads.map(lead => 
      lead.id === id ? { ...lead, notes: editingNote } : lead
    );
    setLeads(updatedLeads);
    localStorage.setItem('emerald_garden_leads', JSON.stringify(updatedLeads));
    setEditingLeadId(null);
  };

  const deleteLead = (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa khách hàng này khỏi danh sách?')) {
      const updatedLeads = leads.filter(lead => lead.id !== id);
      setLeads(updatedLeads);
      localStorage.setItem('emerald_garden_leads', JSON.stringify(updatedLeads));
    }
  };

  const exportToCSV = () => {
    if (leads.length === 0) {
      alert('Không có dữ liệu để xuất.');
      return;
    }

    // Define CSV header and map rows
    const headers = ['Thời gian đăng ký', 'Họ & Tên', 'Số điện thoại', 'Email', 'Nhu cầu', 'Ngân sách dự kiến', 'Thời gian gọi lại', 'Trạng thái', 'Ghi chú'];
    const csvRows = [
      headers.join(','), // Header row
      ...leads.map(lead => {
        const purposeMap = {
          living: 'Mua để ở',
          renting: 'Mua đầu tư cho thuê',
          investing: 'Mua đầu tư sinh lời',
          '': 'Chưa chọn'
        };
        const statusMap = {
          new: 'Mới đăng ký',
          contacted: 'Đã liên hệ',
          following: 'Đang theo dõi',
          closed: 'Đã chốt / Thành công'
        };
        
        return [
          `"${new Date(lead.createdAt).toLocaleString('vi-VN')}"`,
          `"${lead.fullName.replace(/"/g, '""')}"`,
          `"'${lead.phone}"`, // Prepended with apostrophe to keep leading zero in Excel
          `"${(lead.email || 'Chưa cung cấp').replace(/"/g, '""')}"`,
          `"${purposeMap[lead.purpose] || lead.purpose}"`,
          `"${lead.budget.replace(/"/g, '""')}"`,
          `"${lead.preferredTime.replace(/"/g, '""')}"`,
          `"${statusMap[lead.status]}"`,
          `"${(lead.notes || '').replace(/"/g, '""')}"`
        ].join(',');
      })
    ];

    const csvContent = '\uFEFF' + csvRows.join('\n'); // Prepend UTF-8 BOM for Excel support
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `DS_Khach_Hang_The_Emerald_Garden_View_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Helper translations and colors
  const getPurposeLabel = (purpose: string) => {
    switch (purpose) {
      case 'living': return { text: 'Để ở', bg: 'bg-emerald-50 text-emerald-700 border-emerald-100' };
      case 'renting': return { text: 'Cho thuê', bg: 'bg-blue-50 text-blue-700 border-blue-100' };
      case 'investing': return { text: 'Đầu tư', bg: 'bg-amber-50 text-amber-700 border-amber-100' };
      default: return { text: 'Không xác định', bg: 'bg-gray-50 text-gray-600 border-gray-100' };
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new': return { text: 'Mới', color: 'bg-rose-50 text-rose-700 border-rose-100', icon: <AlertCircle className="w-3 h-3 mr-1" /> };
      case 'contacted': return { text: 'Đã liên hệ', color: 'bg-sky-50 text-sky-700 border-sky-100', icon: <Clock className="w-3 h-3 mr-1" /> };
      case 'following': return { text: 'Đang chăm sóc', color: 'bg-amber-50 text-amber-700 border-amber-100', icon: <UserCheck className="w-3 h-3 mr-1" /> };
      case 'closed': return { text: 'Đã chốt', color: 'bg-emerald-50 text-emerald-700 border-emerald-100', icon: <CheckCircle2 className="w-3 h-3 mr-1" /> };
      default: return { text: 'Mới', color: 'bg-rose-50 text-rose-700 border-rose-100', icon: <AlertCircle className="w-3 h-3 mr-1" /> };
    }
  };

  // Filter and search
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
      lead.phone.includes(searchTerm) ||
      (lead.email && lead.email.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    const matchesPurpose = purposeFilter === 'all' || lead.purpose === purposeFilter;

    return matchesSearch && matchesStatus && matchesPurpose;
  });

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-5xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]" id="lead-manager-portal">
        {/* Header */}
        <div className="bg-emerald-950 text-white px-6 py-4 flex justify-between items-center border-b border-emerald-900">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-800 rounded-lg">
              {isAuthorized ? <Unlock className="w-5 h-5 text-gold-200" /> : <Lock className="w-5 h-5 text-gold-200" />}
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-gold-100">Cổng Quản Lý Khách Hàng</h3>
              <p className="text-xs text-emerald-300">Dành riêng cho Broker/Chủ sở hữu Ladipage</p>
            </div>
          </div>
          {onClose && (
            <button 
              onClick={onClose}
              className="p-1 hover:bg-emerald-900 rounded-full transition-colors text-emerald-200 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Login State */}
        {!isAuthorized ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4 text-emerald-800">
              <Lock className="w-8 h-8" />
            </div>
            <h4 className="font-display font-bold text-xl text-slate-800 mb-2">Yêu Cầu Mật Mã</h4>
            <p className="text-sm text-slate-500 mb-6">
              Vui lòng nhập mật mã quản trị để truy cập danh sách khách hàng đã đăng ký.
            </p>
            <form onSubmit={handleLogin} className="w-full space-y-4">
              <div>
                <input 
                  type="password"
                  placeholder="Nhập mật mã quản lý..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700 text-center font-mono tracking-wider"
                  autoFocus
                />
                {error && <p className="text-xs text-rose-500 mt-2 text-left flex items-center justify-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {error}</p>}
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-emerald-800 text-gold-100 font-medium rounded-xl hover:bg-emerald-900 transition-colors shadow-md hover:shadow-lg font-display"
              >
                Xác Thực Truy Cập
              </button>
            </form>
            <div className="mt-8 text-xs text-slate-400">
              Gợi ý mật mã mặc định: <span className="font-mono text-emerald-700 font-semibold">{CORRECT_PASSCODE}</span> (Hotline của Mr. Khải)
            </div>
          </div>
        ) : (
          /* Authorized Dashboard State */
          <div className="flex-1 flex flex-col overflow-hidden min-h-[500px]">
            {/* Filter and Stats Toolbar */}
            <div className="p-4 bg-slate-50 border-b border-slate-100 grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Tìm Tên hoặc SĐT..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              {/* Status Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700 appearance-none cursor-pointer"
                >
                  <option value="all">Tất cả trạng thái</option>
                  <option value="new">Chưa chăm sóc (Mới)</option>
                  <option value="contacted">Đã liên hệ</option>
                  <option value="following">Đang chăm sóc</option>
                  <option value="closed">Đã chốt thành công</option>
                </select>
                <ChevronDown className="absolute right-3 top-3.5 w-3 h-3 text-slate-400 pointer-events-none" />
              </div>

              {/* Purpose Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <select 
                  value={purposeFilter}
                  onChange={(e) => setPurposeFilter(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700 appearance-none cursor-pointer"
                >
                  <option value="all">Tất cả nhu cầu</option>
                  <option value="living">Mua để ở</option>
                  <option value="renting">Đầu tư cho thuê</option>
                  <option value="investing">Đầu tư sinh lời</option>
                </select>
                <ChevronDown className="absolute right-3 top-3.5 w-3 h-3 text-slate-400 pointer-events-none" />
              </div>

              {/* Actions & Export */}
              <div className="flex gap-2">
                <button 
                  onClick={exportToCSV}
                  className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer shadow-sm"
                >
                  <FileDown className="w-4 h-4 text-gold-200" /> Export Excel
                </button>
                <button 
                  onClick={handleLogout}
                  className="px-3 py-2 border border-slate-200 hover:bg-slate-100 text-slate-600 rounded-lg text-sm transition-colors cursor-pointer"
                  title="Đăng xuất"
                >
                  Khóa Portal
                </button>
              </div>
            </div>

            {/* Leads Table Container */}
            <div className="flex-1 overflow-y-auto min-h-[300px]">
              {filteredLeads.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 text-slate-400">
                  <Database className="w-12 h-12 mb-3 text-slate-300 stroke-[1.5]" />
                  <p className="text-sm font-medium">Chưa có khách hàng đăng ký hoặc không tìm thấy kết quả phù hợp</p>
                  <p className="text-xs text-slate-400 mt-1">Khi khách hàng điền form, thông tin sẽ hiển thị tức thì tại đây.</p>
                </div>
              ) : (
                <div className="min-w-full overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-200 text-sm text-left">
                    <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-medium tracking-wider sticky top-0">
                      <tr>
                        <th className="px-4 py-3">Khách Hàng</th>
                        <th className="px-4 py-3">Nhu Cầu</th>
                        <th className="px-4 py-3">Ngân Sách</th>
                        <th className="px-4 py-3">Gọi Lại</th>
                        <th className="px-4 py-3">Trạng Thái</th>
                        <th className="px-4 py-3">Ghi Chú Giao Dịch</th>
                        <th className="px-4 py-3 text-right">Thao Tác</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-100">
                      {filteredLeads.map((lead) => {
                        const purposeStyle = getPurposeLabel(lead.purpose);
                        const statusBadge = getStatusBadge(lead.status);
                        
                        return (
                          <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                            {/* Contact Details */}
                            <td className="px-4 py-3">
                              <div className="font-semibold text-slate-900">{lead.fullName}</div>
                              <div className="text-xs text-slate-500 flex flex-wrap items-center gap-1.5 mt-0.5">
                                <span className="font-mono text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">{lead.phone}</span>
                                {lead.email && (
                                  <>
                                    <span className="text-[10px] text-slate-400">•</span>
                                    <span className="font-mono text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">{lead.email}</span>
                                  </>
                                )}
                                <span className="text-[10px] text-slate-400">•</span>
                                <span className="flex items-center gap-0.5"><Calendar className="w-3 h-3 text-slate-400" /> {new Date(lead.createdAt).toLocaleDateString('vi-VN')}</span>
                              </div>
                            </td>

                            {/* Purpose */}
                            <td className="px-4 py-3">
                              <span className={`text-xs px-2.5 py-1 rounded-full border ${purposeStyle.bg} font-medium`}>
                                {purposeStyle.text}
                              </span>
                            </td>

                            {/* Budget */}
                            <td className="px-4 py-3 font-medium text-slate-700">
                              {lead.budget}
                            </td>

                            {/* Preferred Time */}
                            <td className="px-4 py-3 text-xs text-slate-600 flex items-center gap-1 h-full pt-4">
                              <Clock className="w-3.5 h-3.5 text-slate-400" /> {lead.preferredTime}
                            </td>

                            {/* Lead Status */}
                            <td className="px-4 py-3">
                              <div className="relative inline-block text-left group">
                                <button className={`flex items-center text-xs px-2.5 py-1 rounded-full border ${statusBadge.color} font-medium transition-opacity hover:opacity-80`}>
                                  {statusBadge.icon}
                                  {statusBadge.text}
                                </button>
                                {/* Quick status dropdown */}
                                <div className="absolute left-0 mt-1 w-36 bg-white rounded-lg shadow-lg border border-slate-100 py-1 hidden group-hover:block z-10">
                                  {(['new', 'contacted', 'following', 'closed'] as const).map(st => (
                                    <button
                                      key={st}
                                      onClick={() => updateLeadStatus(lead.id, st)}
                                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-slate-50 ${lead.status === st ? 'text-emerald-800 font-semibold' : 'text-slate-600'}`}
                                    >
                                      {st === 'new' && 'Mới đăng ký'}
                                      {st === 'contacted' && 'Đã liên hệ'}
                                      {st === 'following' && 'Đang chăm sóc'}
                                      {st === 'closed' && 'Đã chốt'}
                                      {lead.status === st && <Check className="w-3 h-3" />}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </td>

                            {/* Internal Notes */}
                            <td className="px-4 py-3 text-xs max-w-xs">
                              {editingLeadId === lead.id ? (
                                <div className="flex gap-1.5 items-center">
                                  <input 
                                    type="text"
                                    value={editingNote}
                                    onChange={(e) => setEditingNote(e.target.value)}
                                    className="px-2 py-1 border border-emerald-300 rounded text-xs bg-white text-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-700 w-full"
                                    autoFocus
                                    placeholder="Thêm ghi chú..."
                                  />
                                  <button 
                                    onClick={() => saveLeadNote(lead.id)}
                                    className="p-1 text-emerald-700 hover:bg-emerald-50 rounded transition-colors"
                                    title="Lưu"
                                  >
                                    <Check className="w-4 h-4" />
                                  </button>
                                  <button 
                                    onClick={() => setEditingLeadId(null)}
                                    className="p-1 text-slate-400 hover:bg-slate-100 rounded transition-colors"
                                    title="Hủy"
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                                </div>
                              ) : (
                                <div 
                                  onClick={() => {
                                    setEditingLeadId(lead.id);
                                    setEditingNote(lead.notes || '');
                                  }}
                                  className="cursor-pointer group flex items-start gap-1 min-h-[2rem] hover:bg-slate-50 p-1 rounded border border-transparent hover:border-slate-200"
                                  title="Click để ghi chú nhanh"
                                >
                                  <span className={lead.notes ? "text-slate-700" : "text-slate-400 italic"}>
                                    {lead.notes || 'Click để ghi chú giao dịch...'}
                                  </span>
                                  <MessageSquare className="w-3.5 h-3.5 text-slate-300 opacity-0 group-hover:opacity-100 ml-auto transition-opacity" />
                                </div>
                              )}
                            </td>

                            {/* Operations */}
                            <td className="px-4 py-3 text-right">
                              <button 
                                onClick={() => deleteLead(lead.id)}
                                className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors inline-flex cursor-pointer"
                                title="Xóa dữ liệu"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Footer status stats */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-semibold text-slate-500 justify-between items-center">
              <div className="flex gap-4">
                <span>Tổng số: <span className="text-emerald-800 font-bold">{leads.length} Khách</span></span>
                <span>•</span>
                <span>Mới: <span className="text-rose-600 font-bold">{leads.filter(l => l.status === 'new').length}</span></span>
                <span>•</span>
                <span>Đã liên hệ: <span className="text-sky-600 font-bold">{leads.filter(l => l.status === 'contacted').length}</span></span>
                <span>•</span>
                <span>Đang chăm sóc: <span className="text-amber-600 font-bold">{leads.filter(l => l.status === 'following').length}</span></span>
                <span>•</span>
                <span>Đã chốt: <span className="text-emerald-700 font-bold">{leads.filter(l => l.status === 'closed').length}</span></span>
              </div>
              <div className="text-slate-400 italic font-normal text-[11px]">
                Lưu trữ trình duyệt (localStorage). Để xóa hoàn toàn dữ liệu, dùng nút thùng rác.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
