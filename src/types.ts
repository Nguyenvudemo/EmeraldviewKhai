/**
 * Types and interfaces for the Real Estate Landing Page
 */

export interface LeadSubmission {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  purpose: 'living' | 'renting' | 'investing' | '';
  budget: string;
  preferredTime: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'following' | 'closed';
  notes?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'indoor' | 'outdoor' | 'commercial';
}

export interface ProjectFact {
  label: string;
  value: string;
  description?: string;
  highlight?: boolean;
}

export interface PainPoint {
  title: string;
  description: string;
  solution: string;
}

export interface ValueProposition {
  title: string;
  description: string;
  iconName: string;
}
