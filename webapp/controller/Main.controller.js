sap.ui.define([
    "ui5/challenge/controller/BaseController"
], function (Controller) {
    "use strict";

    return Controller.extend("ui5.challenge.controller.Main", {
        onPress: function () {
            let oRouter = this.getOwnerComponent().getRouter()
                oRouter.navTo("Detail", {}, false)
        }
    });
});