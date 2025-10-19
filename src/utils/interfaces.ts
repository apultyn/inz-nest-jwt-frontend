export interface Review {
    id: number;
    user: {
        email: string;
    };
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

export interface NestError {
    message: string | string[];
    error: string;
    statusCode: number;
}

export interface User {
    id: number;
    email: string;
    role: string;
}

export interface DecodedToken {
    email: string;
    exp: number;
    iat: number;
    role: string;
    sub: number;
}

export interface LoginRes {
    access_token: string;
    expires_in: number;
}

export interface RegisterRes {
    message: string;
    user: User;
}

export interface ReviewCreateReq {
    stars: number;
    comment: string;
    bookId: number;
}

export interface ReviewUpdateReq {
    stars: number;
    comment: string;
}

export interface BookCreateReq {
    title: string;
    author: string;
}

export interface BookUpdateReq {
    title: string;
    author: string;
}

export interface RegisterReq {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface LoginReq {
    email: string;
    password: string;
}
