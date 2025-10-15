import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import type { DecodedToken } from "./interfaces";

export function decodeToken(): DecodedToken {
    const token = Cookies.get("token");
    if (!token) {
        return { email: "", exp: 0, iat: 0, sub: "", role: "" };
    }
    return jwtDecode<DecodedToken>(token);
}

export function getIsAdmin() {
    return decodeToken().role === "ADMIN";
}

export function getIsUser() {
    return decodeToken().role === "USER";
}
