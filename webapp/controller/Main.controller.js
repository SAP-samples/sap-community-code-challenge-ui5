sap.ui.define([
    "ui5/challenge/controller/BaseController",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Text"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Dialog, Button, Text) {
        "use strict";

        return Controller.extend("ui5.challenge.controller.Main", {
            onNav: function (oEvent) {
                let oItem = oEvent.getSource()
                let routeTo = oItem.getProperty("title")
                let oRouter = this.getOwnerComponent().getRouter()
                oRouter.navTo(routeTo, {}, false)
            },
            onFeedback: function () {
                this.oFeedbackDialog = new Dialog({
                    type: "Standard",
                    title: "Bear with us.",
                    state: "Error",
                    content: new Text({ text: "We are working on implementing this feature." })
                    .addStyleClass("sapUiTinyMargin"),
                    beginButton: new Button({
                        text: "OK",
                        press: function () {
                            this.oFeedbackDialog.close()
                        }.bind(this)
                    })
                })
                this.oFeedbackDialog.open();
            }
        });
    });
