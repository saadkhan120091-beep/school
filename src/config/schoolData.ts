export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface PortalItem {
  id: 'staff-login' | 'parent-portal';
  label: string;
  status: string;
  description: string;
}

export interface AboutPillar {
  id: string;
  title: string;
  status: string;
  summary: string;
}

export interface WhyChooseUsItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: 'book-open' | 'users' | 'shield-check' | 'compass';
}

export interface StatisticItem {
  id: string;
  label: string;
  value: string;
  iconName: 'graduation-cap' | 'user-check' | 'layout-grid' | 'award';
}

export type FacilityCategory = 'All' | 'Academic & Labs' | 'Campus & Athletics';

export interface FacilityItem {
  id: string;
  title: string;
  category: Exclude<FacilityCategory, 'All'>;
  description: string;
  /**
   * Optional path or URL to an official photograph.
   * When undefined or empty, the replaceable SVG architectural visual is displayed.
   */
  imageUrl?: string;
  illustrationType: 'computer-lab' | 'science-lab' | 'library' | 'sports-ground' | 'classrooms' | 'school-campus';
}

export type SocialPlatformId = 'facebook' | 'instagram' | 'youtube' | 'whatsapp' | 'tiktok';

export interface SocialLinkItem {
  id: SocialPlatformId;
  platform: string;
  /**
   * Editable URL for the official social media page.
   * Leave empty ('') while links are not yet available.
   */
  url: string;
  status: string;
}

export interface SchoolConfig {
  schoolName: string;
  shortInitials: string;
  address: string;
  /**
   * Set `officialLogoUrl` when the official school crest image becomes available.
   * Leave empty to render the temporary UFPS emblem component.
   */
  officialLogoUrl: string;
  palette: {
    white: string;
    lightGray: string;
    orange: string;
    navyBlue: string;
    black: string;
  };
  navigation: NavItem[];
  portals: PortalItem[];
  hero: {
    heading: string;
    supportingText: string;
    admissionsBadgeLabel: string;
    admissionDatesStatus: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    /**
     * Set `heroImageUrl` when an official campus hero photograph is available.
     */
    heroImageUrl: string;
  };
  about: {
    sectionLabel: string;
    heading: string;
    introduction: AboutPillar;
    mission: AboutPillar;
    vision: AboutPillar;
    principalMessage: AboutPillar;
  };
  whyChooseUs: {
    sectionLabel: string;
    heading: string;
    subtitle: string;
    items: WhyChooseUsItem[];
  };
  statistics: {
    sectionLabel: string;
    heading: string;
    items: StatisticItem[];
  };
  facilities: {
    sectionLabel: string;
    heading: string;
    subtitle: string;
    items: FacilityItem[];
  };
  admissions: {
    sectionLabel: string;
    heading: string;
    description: string;
    ctaLabel: string;
  };
  contact: {
    sectionLabel: string;
    heading: string;
    address: string;
    phone: string;
    email: string;
    officeHours: string;
  };
  socialMedia: SocialLinkItem[];
}

/**
 * Centralized School Configuration for Umar Farooq Public School.
 * Designed so administrators or future Firebase Firestore sync can update
 * official school details, photographs, and logo from a single source of truth.
 */
export const SCHOOL_DATA: SchoolConfig = {
  schoolName: 'Umar Farooq Public School',
  shortInitials: 'UFPS',
  address: 'Pandhu Road, Urmar Miana',
  officialLogoUrl: '',
  palette: {
    white: '#FFFFFF',
    lightGray: '#FAF5F2',
    orange: '#F59E0B',
    navyBlue: '#8B1518',
    black: '#18181B',
  },
  navigation: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About Us', href: '#about' },
    { id: 'why-choose-us', label: 'Why Choose Us', href: '#why-choose-us' },
    { id: 'facilities', label: 'Facilities', href: '#facilities' },
    { id: 'admissions', label: 'Admissions', href: '#admissions' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],
  portals: [
    {
      id: 'staff-login',
      label: 'Staff Login',
      status: 'Coming Soon',
      description: 'Dedicated faculty workspace for attendance, lesson planning, and academic reporting.',
    },
    {
      id: 'parent-portal',
      label: 'Parent Portal',
      status: 'Coming Soon',
      description: 'Online portal for parents and guardians to view notices, schedules, and student updates.',
    },
  ],
  hero: {
    heading: 'Building Bright Futures Through Quality Education',
    supportingText:
      'Welcome to Umar Farooq Public School. Discover an environment where learning, character and confidence grow together.',
    admissionsBadgeLabel: 'Admissions Open',
    admissionDatesStatus: 'Coming Soon',
    primaryCtaLabel: 'Contact Us',
    secondaryCtaLabel: 'Learn More',
    heroImageUrl: '',
  },
  about: {
    sectionLabel: 'About Our School',
    heading: 'Nurturing Knowledge, Character & Excellence',
    introduction: {
      id: 'introduction',
      title: 'School Introduction',
      status: 'Coming Soon',
      summary: 'Coming Soon',
    },
    mission: {
      id: 'mission',
      title: 'Mission',
      status: 'Coming Soon',
      summary: 'Coming Soon',
    },
    vision: {
      id: 'vision',
      title: 'Vision',
      status: 'Coming Soon',
      summary: 'Coming Soon',
    },
    principalMessage: {
      id: 'principal-message',
      title: "Principal's Message",
      status: 'Coming Soon',
      summary: 'Coming Soon',
    },
  },
  whyChooseUs: {
    sectionLabel: 'Why Choose Us',
    heading: 'Pillars of Our Educational Approach',
    subtitle: 'Focused on foundational learning, personal integrity, and student growth.',
    items: [
      {
        id: 'quality-education',
        number: '01',
        title: 'Quality Education',
        description:
          'Structured classroom instruction designed to build strong conceptual understanding and curiosity across core subjects.',
        iconName: 'book-open',
      },
      {
        id: 'dedicated-teachers',
        number: '02',
        title: 'Dedicated Teachers',
        description:
          'Supportive educators committed to guiding learners with patience, clarity, and attentive mentorship.',
        iconName: 'users',
      },
      {
        id: 'character-building',
        number: '03',
        title: 'Character Building',
        description:
          'Emphasis on respect, responsibility, honesty, and positive citizenship in daily school life.',
        iconName: 'shield-check',
      },
      {
        id: 'student-development',
        number: '04',
        title: 'Student Development',
        description:
          'Encouraging confidence, communication skills, and balanced intellectual and personal growth.',
        iconName: 'compass',
      },
    ],
  },
  statistics: {
    sectionLabel: 'School Overview',
    heading: 'School Statistics',
    items: [
      {
        id: 'stat-students',
        label: 'Students',
        value: 'Coming Soon',
        iconName: 'graduation-cap',
      },
      {
        id: 'stat-teachers',
        label: 'Teachers',
        value: 'Coming Soon',
        iconName: 'user-check',
      },
      {
        id: 'stat-classes',
        label: 'Classes',
        value: 'Coming Soon',
        iconName: 'layout-grid',
      },
      {
        id: 'stat-results',
        label: 'Results',
        value: 'Coming Soon',
        iconName: 'award',
      },
    ],
  },
  facilities: {
    sectionLabel: 'Campus Infrastructure',
    heading: 'Facilities',
    subtitle: 'Explore our planned and campus learning spaces. Official facility photographs and details will be updated soon.',
    items: [
      {
        id: 'computer-lab',
        title: 'Computer Lab',
        category: 'Academic & Labs',
        description: 'Coming Soon',
        imageUrl: '',
        illustrationType: 'computer-lab',
      },
      {
        id: 'science-lab',
        title: 'Science Lab',
        category: 'Academic & Labs',
        description: 'Coming Soon',
        imageUrl: '',
        illustrationType: 'science-lab',
      },
      {
        id: 'library',
        title: 'Library',
        category: 'Academic & Labs',
        description: 'Coming Soon',
        imageUrl: '',
        illustrationType: 'library',
      },
      {
        id: 'sports-ground',
        title: 'Sports Ground',
        category: 'Campus & Athletics',
        description: 'Coming Soon',
        imageUrl: '',
        illustrationType: 'sports-ground',
      },
      {
        id: 'classrooms',
        title: 'Classrooms',
        category: 'Academic & Labs',
        description: 'Coming Soon',
        imageUrl: '',
        illustrationType: 'classrooms',
      },
      {
        id: 'school-campus',
        title: 'School Campus',
        category: 'Campus & Athletics',
        description: 'Coming Soon',
        imageUrl: '',
        illustrationType: 'school-campus',
      },
    ],
  },
  admissions: {
    sectionLabel: 'Enrollment',
    heading: 'Admissions Information',
    description: 'Coming Soon',
    ctaLabel: 'Contact Us',
  },
  contact: {
    sectionLabel: 'Get In Touch',
    heading: 'Contact Us',
    address: 'Pandhu Road, Urmar Miana',
    phone: 'Coming Soon',
    email: 'Coming Soon',
    officeHours: 'Coming Soon',
  },
  socialMedia: [
    { id: 'facebook', platform: 'Facebook', url: '', status: 'Coming Soon' },
    { id: 'instagram', platform: 'Instagram', url: '', status: 'Coming Soon' },
    { id: 'youtube', platform: 'YouTube', url: '', status: 'Coming Soon' },
    { id: 'whatsapp', platform: 'WhatsApp', url: '', status: 'Coming Soon' },
    { id: 'tiktok', platform: 'TikTok', url: '', status: 'Coming Soon' },
  ],
};
