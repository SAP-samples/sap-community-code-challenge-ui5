sap.ui.define([
	"./BaseController",
    "sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"sap/m/Dialog"
], function(BaseController,JSONModel,History,Dialog) {
	"use strict";

	return BaseController.extend("ui5.challenge.controller.Detail", {

		onInit: function() {

		},

		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("overview", {}, true);
			}
		},
		/* Not get ID in test */
		showDialog2 : function () {
			// create dialog lazily
			if (!this.pDialog) {
				this.pDialog = this.loadFragment({
					name: "ui5.challenge.view.HelloDialog"
				});
			}

			this.pDialog.then(function(oDialog) {
				oDialog.open();
			});
		},
		showDialog : function () {
            if (!this.dialog) {
                this.dialog = new Dialog({
                    id: "myDialog",
                    title:"Hello",
                })
                this.getView().addDependent(this.dialog)
            }
            this.dialog.open()
        }

	});

}); 