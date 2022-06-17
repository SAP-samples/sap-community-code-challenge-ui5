sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
], function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("ui5.challenge.controller.DetailController", {

        goBack: function () {
            this.onNavBack();
        }

    });
});