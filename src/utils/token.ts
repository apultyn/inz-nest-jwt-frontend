import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import type { DecodedToken } from "./interfaces";

export function decodeToken(): DecodedToken {
    const token = Cookies.get("token");
    if (!token) {
        return {
            email: "",
            iat: 0,
            exp: 0,
            roles: [],
            sub: 0,
        };
    }
    const decoded = jwtDecode<DecodedToken>(token);
    console.log(decoded);
    return decoded;
}

const RolesToStringArray = (
    rolesFromToken: {
        roleName: string;
    }[]
): string[] => {
    if (!rolesFromToken) return [];

    return rolesFromToken.map((role) => role.roleName);
};

export function getIsAdmin(): boolean {
    const roles = RolesToStringArray(decodeToken().roles);
    return roles.includes("ADMIN");
}

export function getIsUser(): boolean {
    const roles = RolesToStringArray(decodeToken().roles);
    return roles.includes("USER");
}
