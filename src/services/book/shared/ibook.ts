import type { IUser } from './iuser';

export interface IBook{
    id: number;
    title: string;
    user: IUser;
    price: number;
    pages: number;

}
