sap.ui.define([
	"ui5/challenge/controller/BaseController"
], function(
	BaseController
) {
	"use strict";

	return BaseController.extend("ui5.challenge.controller.Main", {
        onItem1Press: function(oEvent) {
            this.getOwnerComponent().getRouter().navTo("RouteDetail")
        }
	});
});