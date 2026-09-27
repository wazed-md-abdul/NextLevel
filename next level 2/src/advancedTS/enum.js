"use strict";
var User;
(function (User) {
    User["Admin"] = "admin";
    User["User"] = "user";
    User["Guest"] = "guest";
})(User || (User = {}));
const user = User.Admin;
console.log(user);
