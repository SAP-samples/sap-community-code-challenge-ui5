sap.ui.define([
	"./BaseController",
    "sap/ui/model/json/JSONModel"
], function(BaseController,JSONModel) {
	"use strict";

	return BaseController.extend("ui5.challenge.controller.Main", {

		onInit: function() {
            var data = [
                {value:"A"},
                {value:"B"},
                {value:"C"}
            ];

            var oModel = new JSONModel(data);
            this.getView().setModel(oModel,"list");

		},

        firePress: function(){
            var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail");
        }

	});

}); 