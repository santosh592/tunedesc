export class Auth {
    constructor(public grant_type:string,
        public username:string,
        public password:string,
        public scope:string,
        public client_id:string,
        public client_secret:string){}
}