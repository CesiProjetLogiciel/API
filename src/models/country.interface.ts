import joi from 'joi';

export interface Country {
    id: number;
    name: string;
    phone_country_code: string;
}