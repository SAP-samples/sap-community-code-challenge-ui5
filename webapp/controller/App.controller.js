sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("ui5.challenge.controller.App", {
        navTo: function (psTarget, pmParameters, pbReplace) {
            this.getRouter().navTo(psTarget, pmParameters, pbReplace);
        },
        getRouter: function () {
            return UIComponent.getRouterFor(this);
        },
        onPress: function () {

        }
    });
});
