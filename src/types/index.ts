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
    interactiveDemoTitle: string;
    interactiveType:
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

export interface OrganizationExperience {
    id: string;
    period: string;
    periodBadgeColor: 'pastel' | 'peach' | 'pond';
    organization: string;
    role: string;
    description: string;
    tags: string[];
    icon: string;
    washiColor: 'green' | 'peach';
    washiRotation: string;
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
    highlights: QuickHighlight[];
}