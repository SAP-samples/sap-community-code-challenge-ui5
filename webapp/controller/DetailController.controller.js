sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/library",
    "sap/m/VBox",
], function (Controller, JSONModel, MessageToast, Dialog, Button, mobileLibrary, VBox) {
    "use strict";
    // shortcut for sap.m.ButtonType
    const ButtonType = mobileLibrary.ButtonType;

    return Controller.extend("ui5.challenge.controller.DetailController", {

        onOpenDialog: function () {

            if (!this.oDefaultDialog) {
                this.oDefaultDialog = new Dialog({
                    id: "myDialog",
                    title: "Dialog Title",
                    content: new VBox(),
                    beginButton: new Button({
                        type: ButtonType.Emphasized,
                        text: "OK",
                        press: function () {
                            this.oDefaultDialog.close();
                        }.bind(this)
                    }),
                    endButton: new Button({
                        text: "Close",
                        press: function () {
                            this.oDefaultDialog.close();
                        }.bind(this)
                    })
                });

                // to get access to the controller's model
                this.getView().addDependent(this.oDefaultDialog);
            }

            this.oDefaultDialog.open();
        },

        goBack: function () {
            this.onNavBack();
        }

    });
});