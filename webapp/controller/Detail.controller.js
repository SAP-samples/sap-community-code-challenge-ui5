sap.ui.define([
    "ui5/challenge/controller/BaseController",
    "sap/ui/core/routing/History",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel"
], function (
    BaseController,
    History,
    MessageBox,
    JSONModel
) {
    "use strict";

    return BaseController.extend("ui5.challenge.controller.Detail", {
        /**
         * @override
         */
        onInit: function () {
            this.getRouter().getRoute("RouteProductDetail").attachPatternMatched(this._onPatternMatched, this);
        },

        _onPatternMatched: function (oEvent) {
            var sProductId = window.decodeURIComponent(oEvent.getParameter("arguments").ProductID);
            var oProductData = this.getOwnerComponent().getModel().getProperty("/ProductCollection").find(function (oProduct) {
                return oProduct.ProductId == sProductId;
            });
            var oDetailModel = new JSONModel(oProductData);
            this.getView().setModel(oDetailModel, "detailModel");
        },

        onNavButtonPress: function (oEvent) {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                this.getRouter().navTo("RouteMain");
            }
        },

        onDialogButtonPress: function () {
            var oModel = this.getView().getModel("detailModel");
            var sPrice = "NA";
            if (oModel) {
                var sPrice = oModel.getProperty("/Price") + " " + oModel.getProperty("/CurrencyCode");
            }

            MessageBox.information(sPrice, {
                id: "myDialog"
            });
        }
    });
});