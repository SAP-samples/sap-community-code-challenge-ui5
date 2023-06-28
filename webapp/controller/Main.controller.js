sap.ui.define([
    "ui5/challenge/controller/BaseController",
    "sap/ui/model/json/JSONModel"
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
            // var oModel = new JSONModel(sap.ui.require.toUrl("ui5/challenge/mockdata/products.json"));
            // this.getView().setModel(oModel);
        },

        onButtonPress: function (oEvent) {
            alert("Will be implemented soon ...");
        },

        onMyControlPress: function (oEvent) {
            var oList = this.getView().byId("productsList");
            var oSelectedItem = oList.getSelectedItem();
            if (!oSelectedItem) {
                this.getRouter().navTo("RouteDetail");
            } else {
                this.getRouter().navTo("RouteProductDetail", { "ProductID": oSelectedItem.getBindingContext().getProperty("ProductId") });
            }
        }
    });
});