"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auth = (function () {
    function Auth(grant_type, username, password, scope, client_id, client_secret) {
        this.grant_type = grant_type;
        this.username = username;
        this.password = password;
        this.scope = scope;
        this.client_id = client_id;
        this.client_secret = client_secret;
    }
    return Auth;
}());
exports.Auth = Auth;
//# sourceMappingURL=Auth.js.map