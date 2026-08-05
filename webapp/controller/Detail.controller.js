sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Dialog",
    "sap/m/Text",
    "sap/m/Button"
], function (Controller, Dialog, Text, Button) {
    "use strict";

    return Controller.extend("ui5.challenge.controller.Detail", {
        onPress: function () {
            this.oErrorMessageDialog = new Dialog({
                type: "Standard",
                title: "Title",
                id: "myDialog",
                content: new Text({ text: "My Text" }).addStyleClass("sapUiTinyMargin"),
                beginButton: new Button({
                    text: "OK",
                    press: function () {
                        this.oErrorMessageDialog.close()
                    }.bind(this)
                })
            })
            this.oErrorMessageDialog.open();
        }
    });
});
