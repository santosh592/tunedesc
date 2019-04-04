import{Role}from'./role';

export class User {

private username: string;
private password: string;
// private confirm_password: string;
private email: string;
private phonenumber:string;
private roleDtos:Role[];
//public full_name: string;

constructor(username: string, password: string,
        email: string, phonenumber: string,roleDtos:Role[]) {
            this.username=username;
            this.password=password;
            this.email=email;
            this.phonenumber=phonenumber;
            this.roleDtos=roleDtos;

    }

    
  
    
}