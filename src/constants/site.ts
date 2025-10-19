export type NavigationItem = {
    name: string;
    path: string;
};

export const SITE = {
    name: "David Trejo",
    title: "Estudiante en su ultimo año de Ingeniería en Mecatrónica",
    description: "Personal portfolio and blog",
    url: "https://dtrejo0611.github.io",
    defaultImage: "/default-og-image.jpg",
} as const;

export const NAVIGATION: {
    main: NavigationItem[];
} = {
    main: [
        { name: "Home", path: "/" },
        { name: "Sobre mi", path: "/about" },
        { name: "Notes", path: "/notes" },
        { name: "Bookmarks", path: "/bookmarks" }
    ],
} as const;

export const CONTENT = {
    postsPerPage: 10,
    recentPostsLimit: 3,
    featuredProjectsLimit: 3,
} as const;

export const META = {
    openGraph: {
        type: "website",
        locale: "en_US",
    },
    twitter: {
        cardType: "summary_large_image",
    }
} as const; 