import { ContactFormInput } from '../utils/validation';

export interface SubmittedInquiry extends ContactFormInput {
  id: string;
  submittedAt: string;
  status: 'Queued for School Office (Frontend Stage)';
}

/**
 * Architecture prepared for future Firebase Firestore integration.
 *
 * Stage 1 (Current): Pure frontend state repository with zero fake backend claims.
 * Stage 2 (Future Firebase): Replace `inMemoryInquiries` with Firestore `collection(db, 'inquiries')`
 * and `Firebase Auth` for `Staff Login` and `Parent Portal`.
 */
class SchoolDataService {
  private inquiries: SubmittedInquiry[] = [];

  public submitInquiry(input: ContactFormInput): SubmittedInquiry {
    const newInquiry: SubmittedInquiry = {
      id: `INQ-${Date.now().toString().slice(-6)}`,
      name: input.name.trim(),
      phone: input.phone.trim(),
      email: input.email.trim(),
      message: input.message.trim(),
      submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Queued for School Office (Frontend Stage)',
    };
    this.inquiries = [newInquiry, ...this.inquiries];
    return newInquiry;
  }

  public getSessionInquiries(): SubmittedInquiry[] {
    return [...this.inquiries];
  }
}

export const schoolService = new SchoolDataService();
