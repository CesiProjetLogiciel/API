export interface BaseGrant {
    grant_type: string;
}

export interface Authentication extends BaseGrant {
    email: string;
    password: string;
}

export interface Refresh extends BaseGrant {
    refresh_token: string;
}

export interface RefreshTokenResponse {
    user_id: number;
    access_token: string;
    expires_in: number;
    refresh_token: string;
    api_key?: string;
}

export interface TokenResponse extends RefreshTokenResponse {
    user_type: string;
}

export interface Jwt {
    jti: string,
    sub: number,
    iat: number,
    exp: number,
    type: string
}

export enum UserType {
    CLIENT = "client",
    DELIVERYMAN = "delivery_man",
    RESTAURANT = "restaurant",
    THIRD_PARTY_DEV = "third_party_dev",
    COMMERCIAL = "commercial",
    TECHNICAL = "technical"
}