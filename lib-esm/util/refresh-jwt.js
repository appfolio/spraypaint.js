export function refreshJWT(klass, serverResponse) {
    var jwt = serverResponse.headers.get('X-JWT');
    if (jwt) {
        klass.setJWT(jwt);
    }
}
//# sourceMappingURL=refresh-jwt.js.map