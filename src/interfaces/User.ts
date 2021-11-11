export interface User {
    id?: string,
    first_name: string,
    last_name: string,
    email_address: string,
    role: string,
    gender: string
    phone_number?: string,
    photo_url?: string,
    active?: boolean,
    voided?: boolean
    first_login?: boolean
    created_at?: string,
    updated_at?: string
}

export interface AuthUser {
    name: string,
    email: string,
    role: string,
    photo_url?: string
}