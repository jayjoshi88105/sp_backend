const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
    ac.grant("customer")
        .readOwn("profile")
        .updateOwn("profile")

    ac.grant("manager")
        .extend("customer")
        .readAny("profile")

    ac.grant("admin")
        .extend("customer")
        .extend("manager")
        .updateAny("profile")
        .deleteAny("profile")

    return ac;
})();