sap.ui.define([
    "ui5/challenge/controller/BaseController",
    "sap/ui/model/json/JSONModel",
], function (
    Controller,
    JSONModel
) {
    "use strict";

    return Controller.extend("ui5.challenge.controller.Main", {
        /**
         * @override
         */
        onInit: function () {
            var oModel = new JSONModel(sap.ui.require.toUrl("ui5/challenge/mockdata/products.json"));
            this.getView().setModel(oModel);
        },

        onButtonPress: function (oEvent) {
            alert("Pressed");
        }
    });
});