export interface ProjectLink {
    label: string;
    url: string;
    type: 'figma' | 'live' | 'github' | 'docs' | 'other';
    icon?: string;
    isPrimary?: boolean;
    description?: string;
}

export interface ProjectModule {
    name: string;
    tag?: string;
    description: string;
    highlights?: string[];
}

export interface BusinessWorkflowStep {
    stepNumber: string;
    title: string;
    actor: string;
    description: string;
}

export interface ProblemPainPoint {
    title: string;
    desc: string;
}

export interface DocumentationItem {
    caption: string;
    tag: string;
    url?: string;
    description?: string;
}

export interface ProjectTab {
    id: string;
    tabName: string;
    tabColor: string;
    title: string;
    category: string;
    overview: string;
    techStack: string[];
    deliverables: string[];
    metrics: string;
    thumbnail: string;
    thumbnailAlt?: string;
    projectLinks?: ProjectLink[];
    academicMeta?: {
        institution?: string;
        course?: string;
        year?: string;
        team?: string;
        role?: string;
    };
    problemStatement?: {
        summary: string;
        painPoints?: ProblemPainPoint[];
    };
    gdriveDocumentationUrl?: string;
    documentationLabels?: string[];
    keyModules?: ProjectModule[];
    businessWorkflow?: BusinessWorkflowStep[];
    galleryDocumentation?: DocumentationItem[];
    interactiveDemoTitle?: string;
    interactiveType?:
    | 'damakara_schema'
    | 'clevago_flow'
    | 'howl_relations'
    | 'empact_tree'
    | 'gocamp_sheets'
    | 'edulms_progress'
    | 'elo_loop'
    | 'volleyball_game';
    interactiveData?: Record<string, any>;
}

export interface ProjectCategory {
    id: 'catA' | 'catB' | 'catC';
    volumeLabel: string;
    title: string;
    subtitle: string;
    countLabel: string;
    icon: string;
    spineColor: string;
    bgColor: string;
    textColor: string;
    badgeBg: string;
    badgeTextColor: string;
    tabs: ProjectTab[];
}

export interface OrganizationJourneyStep {
    year: string;
    title: string;
    role?: string;
    description: string;
    image?: string;
    imageCaption?: string;
    tags?: string[];
}

export interface OrganizationExperience {
    id: string;
    name: string;
    shortDescription: string;
    activeYears: string;
    currentRole: string;
    currentRolePeriod: string;
    logo: string;
    logoAlt?: string;
    type?: 'organisasi' | 'event';
    periodBadgeColor?: 'pastel' | 'peach' | 'pond';
    washiColor?: 'green' | 'peach';
    washiRotation?: string;
    tags?: string[];
    journey: OrganizationJourneyStep[];
}

export interface CertificateItem {
    id: string;
    title: string;
    issuer: string;
    issueDate: string;
    category: string;
    badgeColor?: 'pastel' | 'peach' | 'pond';
    image: string;
    imageAlt?: string;
    shortDescription: string;
    fullDescription: string;
    skills: string[];
    credentialId?: string;
    credentialUrl?: string;
}

export interface QuickHighlight {
    id: string;
    title: string;
    category: string;
    type: string;
    description: string;
    targetCategory: 'catA' | 'catB' | 'catC';
    targetTabId: string;
    categoryBadgeClass: string;
}

export interface EducationTimelineItem {
    id: string;
    period: string;
    periodEn?: string;
    institution: string;
    institutionFull?: string;
    level: string;
    levelEn?: string;
    major: string;
    majorEn?: string;
    status: string;
    statusEn?: string;
    badgeColor?: string;
}

export interface ProfileData {
    name: string;
    shortName: string;
    taglineBadge: string;
    roleHeadline: string;
    bio: string;
    campusBadge: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    techStack: { name: string; featured?: boolean }[];
    education: {
        institution: string;
        department: string;
        focusAreas: string;
    };
    educationTimeline?: EducationTimelineItem[];
    highlights: QuickHighlight[];
}
