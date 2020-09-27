import { Role } from "./role";

export class User {

    username: string;
    password: string;
    // private confirm_password: string;
    email: string;
    phonenumber: string;
    roleDtos: Role[];
    //public full_name: string;

    constructor(username: string, password: string,
        email: string, phonenumber: string, roleDtos: Role[]) {

        this.username = username;
        this.password = password;
        this.email = email;
        this.phonenumber = phonenumber;
        this.roleDtos = roleDtos;

    }

}
