sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("ui5.challenge.controller.BaseController", {
        navTo: function (psTarget, pmParameters, pbReplace) {
            this.getRouter().navTo(psTarget, pmParameters, pbReplace);
        },
        getRouter: function () {
            return this.getOwnerComponent().getRouter();
        },
        onPress: function () {

        }
    });
});
