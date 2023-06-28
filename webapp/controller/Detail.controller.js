sap.ui.define([
	"./BaseController",
    "sap/ui/model/json/JSONModel"
], function(BaseController,JSONModel) {
	"use strict";

	return BaseController.extend("ui5.challenge.controller.Detail", {

		onInit: function() {

		},
        onNavigateToMain: function(oEvent){
            var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("main");
        }
    
	});

});  