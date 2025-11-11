// Base WordPress REST API types
export interface WPRendered {
    rendered: string;
    protected?: boolean;
}

export interface WPLink {
    href: string;
    embeddable?: boolean;
    count?: number;
    id?: number;
    taxonomy?: string;
    templated?: boolean;
    name?: string;
    targetHints?: {
        allow: string[];
    };
}

export interface WPLinks {
    self?: WPLink[];
    collection?: WPLink[];
    about?: WPLink[];
    author?: WPLink[];
    replies?: WPLink[];
    "version-history"?: WPLink[];
    "predecessor-version"?: WPLink[];
    "wp:attachment"?: WPLink[];
    "wp:term"?: WPLink[];
    curies?: WPLink[];
}

// WordPress Post type
export interface WPPost {
    id: number;
    date: string;
    date_gmt: string;
    guid: WPRendered;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: WPRendered;
    content: WPRendered;
    excerpt: WPRendered;
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: {
        _acf_changed: boolean;
        footnotes: string;
    };
    categories: number[];
    tags: number[];
    class_list: string[];
    acf: Record<string, unknown>;
    _links: WPLinks;
}

// WordPress Book custom post type
export interface WPBook {
    id: number;
    date: string;
    date_gmt: string;
    guid: WPRendered;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: WPRendered;
    content: WPRendered;
    excerpt: WPRendered;
    featured_media: number;
    template: string;
    meta: {
        _acf_changed: boolean;
        footnotes: string;
    };
    genre: number[];
    class_list: string[];
    acf: {
        pages: number;
        year: string;
    };
    _links: WPLinks;
}
