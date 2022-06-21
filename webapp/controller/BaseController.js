sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent"], function (Controller,UIComponent) {
    "use strict";

    return Controller.extend("ui5.challenge.controller.BaseController", {
        navTo: function (psTarget, pmParameters, pbReplace) {
            const r = this.getRouter()
            r.navTo(psTarget, pmParameters, pbReplace);
        },
        getRouter: function () {
            return UIComponent.getRouterFor(this);
        }
    });
});
