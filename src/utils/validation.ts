import { FacilityCategory, FacilityItem, SchoolConfig } from '../config/schoolData';

export interface ContactFormInput {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ContactFormErrors;
}

export interface PortalCredentialsInput {
  identifier: string;
  accessCode: string;
}

export interface PortalValidationResult {
  isValid: boolean;
  errors: {
    identifier?: string;
    accessCode?: string;
  };
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+\-\s()]{7,20}$/;

/**
 * Pure validation logic for the Contact Us form.
 * Never substitutes silent default values when required inputs are empty or invalid.
 */
export function validateContactForm(input: ContactFormInput): ValidationResult {
  const errors: ContactFormErrors = {};

  const trimmedName = input.name.trim();
  const trimmedPhone = input.phone.trim();
  const trimmedEmail = input.email.trim();
  const trimmedMessage = input.message.trim();

  if (!trimmedName) {
    errors.name = 'Please enter your full name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  if (!trimmedPhone) {
    errors.phone = 'Please enter a contact phone number.';
  } else if (!PHONE_REGEX.test(trimmedPhone)) {
    errors.phone = 'Please enter a valid phone number (7–20 digits).';
  }

  if (!trimmedEmail) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!trimmedMessage) {
    errors.message = 'Please enter your inquiry or message.';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Pure validation for Staff Login and Parent Portal credential check UI.
 */
export function validatePortalCredentials(input: PortalCredentialsInput): PortalValidationResult {
  const errors: { identifier?: string; accessCode?: string } = {};

  if (!input.identifier.trim()) {
    errors.identifier = 'Please enter your ID or registered email.';
  }

  if (!input.accessCode.trim()) {
    errors.accessCode = 'Please enter your password or access code.';
  } else if (input.accessCode.trim().length < 4) {
    errors.accessCode = 'Access code must be at least 4 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Pure filtering function for school facilities.
 */
export function filterFacilitiesByCategory(
  facilities: FacilityItem[],
  category: FacilityCategory
): FacilityItem[] {
  if (category === 'All') {
    return facilities;
  }
  return facilities.filter((item) => item.category === category);
}

/**
 * Verifies that centralized school data adheres strictly to the non-hallucination
 * and "Coming Soon" placeholder rules and restricted color palette.
 */
export function verifySchoolDataCompliance(config: SchoolConfig): {
  compliant: boolean;
  violations: string[];
} {
  const violations: string[] = [];

  if (config.schoolName !== 'Umar Farooq Public School') {
    violations.push('School name must be Umar Farooq Public School.');
  }
  if (config.address !== 'Pandhu Road, Urmar Miana') {
    violations.push('Address must be Pandhu Road, Urmar Miana.');
  }
  if (config.shortInitials !== 'UFPS') {
    violations.push('Initials must be UFPS.');
  }

  // Verify About section placeholders
  const aboutFields = [
    config.about.introduction.summary,
    config.about.mission.summary,
    config.about.vision.summary,
    config.about.principalMessage.summary,
  ];
  if (aboutFields.some((val) => val !== 'Coming Soon')) {
    violations.push('All About section details must display Coming Soon.');
  }

  // Verify Statistics section placeholders
  if (config.statistics.items.some((stat) => stat.value !== 'Coming Soon')) {
    violations.push('All Statistics values must display Coming Soon.');
  }

  // Verify Facilities descriptions
  if (config.facilities.items.some((fac) => fac.description !== 'Coming Soon')) {
    violations.push('All Facility descriptions must display Coming Soon.');
  }

  // Verify Admissions description
  if (config.admissions.description !== 'Coming Soon') {
    violations.push('Admissions description must display Coming Soon.');
  }

  // Verify Contact details
  if (
    config.contact.phone !== 'Coming Soon' ||
    config.contact.email !== 'Coming Soon' ||
    config.contact.officeHours !== 'Coming Soon'
  ) {
    violations.push('Unavailable contact details must display Coming Soon.');
  }

  // Verify Social Media platforms and non-invented URLs
  const expectedPlatforms = ['facebook', 'instagram', 'youtube', 'whatsapp', 'tiktok'];
  const configuredPlatforms = config.socialMedia.map((s) => s.id);
  if (
    expectedPlatforms.some((id) => !configuredPlatforms.includes(id as typeof configuredPlatforms[number])) ||
    config.socialMedia.some((s) => s.status !== 'Coming Soon' || s.url !== '')
  ) {
    violations.push('All 5 social media platforms must be present, marked Coming Soon, and have no invented URLs.');
  }

  return {
    compliant: violations.length === 0,
    violations,
  };
}

export const DESKTOP_CANVAS_WIDTH = 1280;

export interface DesktopScaleMetrics {
  isScaled: boolean;
  scale: number;
  canvasWidth: number;
  scaledHeight: number;
}

/**
 * Calculates proportional scale factor and adjusted wrapper height so the desktop
 * layout scales down cleanly to fit any mobile/tablet screen width from top-left origin
 * without blank space or horizontal overflow.
 */
export function calculateDesktopScaleLayout(
  viewportWidth: number,
  unscaledHeight: number,
  desktopWidth: number = DESKTOP_CANVAS_WIDTH
): DesktopScaleMetrics {
  const safeViewportWidth = Math.max(0, viewportWidth);
  const safeUnscaledHeight = Math.max(0, unscaledHeight);

  if (safeViewportWidth > 0 && safeViewportWidth < desktopWidth) {
    const scale = safeViewportWidth / desktopWidth;
    return {
      isScaled: true,
      scale,
      canvasWidth: desktopWidth,
      scaledHeight: Math.ceil(safeUnscaledHeight * scale),
    };
  }

  return {
    isScaled: false,
    scale: 1,
    canvasWidth: desktopWidth,
    scaledHeight: safeUnscaledHeight,
  };
}

