import {FieldValues, UseFormRegister, FieldErrors} from "react-hook-form";

export interface IPropsLogin<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    >{
    navigate: (to:string)=> void
    register: UseFormRegister<TFieldValues>
    errors: FieldErrors<TFieldValues>;
}

export interface IPropsRegister<TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    >{
    navigate: (to:string)=> void
    register: UseFormRegister<TFieldValues>
    errors: FieldErrors<TFieldValues>;
    }



export interface IAuthState{
    user:{}|IPublicUser
    isLogged:boolean
}
interface IPublicUser {
    id: number|null,
    firstName: string,
    userName: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    watchlist: [IWatchlist]
}

interface IWatchlist{
    "id": number|null,
    "name": string,
    "assetID": string,
    "createdAt": string,
    "updatedAt": string,
    "user": number|null
}