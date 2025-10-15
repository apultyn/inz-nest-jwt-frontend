export interface Review {
    id: number;
    user: { email: string };
    stars: number;
    comment: string;
    bookId: number;
}

export interface Book {
    id: number;
    title: string;
    author: string;
    reviews: Review[];
}

export interface SpringError {
    detail: string;
    description: string | null;
    violations: string[] | null;
}

export interface DecodedToken {
    email: string;
    exp: number;
    iat: number;
    sub: string;
    role: string;
}
