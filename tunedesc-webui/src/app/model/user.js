"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    //public full_name: string;
    function User(username, password, email, phonenumber, roleDtos) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phonenumber = phonenumber;
        this.roleDtos = roleDtos;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map