sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/Dialog",
	"sap/m/Button"
], function(
	Controller,
	Dialog,
	Button
) {
	"use strict";

	return Controller.extend("ui5.challenge.controller.Detail", {
        onOpenDialog: function(oEvent) {
            if (!this.oDialog) {
                this.oDialog = new Dialog({
                    title: "Test dialog",
                    id:"myDialog",
                    beginButton: new Button({
                        text: "close",
                        press: function() {
                            this.oDialog.close()
                        }.bind(this)
                    })
                }).addStyleClass("myDialog")
            }
            this.oDialog.open()
        }
	});
});