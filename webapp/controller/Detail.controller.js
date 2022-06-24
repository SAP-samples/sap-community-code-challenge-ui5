sap.ui.define([
    "ui5/challenge/controller/BaseController",
    "sap/ui/core/routing/History",
    "sap/m/MessageBox"
], function (
    BaseController,
    History,
    MessageBox
) {
    "use strict";

    return BaseController.extend("ui5.challenge.controller.Detail", {
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
            MessageBox.information(this.getResourceBundle().getText("Detail.messageBox.text"), {
                id: "myDialog"
            });
        }
    });
});