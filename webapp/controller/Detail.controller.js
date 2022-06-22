sap.ui.define([
	"./BaseController",
    "sap/ui/model/json/JSONModel",
	"sap/m/Dialog",
	"sap/m/List",
	"sap/m/Button",
	"sap/m/StandardListItem"
], function(BaseController,JSONModel,Dialog,List,Button,StandardListItem) {
	"use strict";

	return BaseController.extend("ui5.challenge.controller.Detail", {

		onInit: function() {

		},
        onNavigateToMain: function(oEvent){
            var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("main");
        },
		onDetailDialogPress: function () {
			if (!this.oResizableDialog) {
				this.oResizableDialog = new Dialog({
					id:"myDialog",
					title: "Week 3 test",
					contentWidth: "550px",
					contentHeight: "300px",
					resizable: true,
					draggable: true,
					content: new List({
						items: {
							path: "/todos",
							template: new StandardListItem({
								title: "{title}"
							})
						}
					}),
					endButton: new Button({
						text: "Close",
						press: function () {
							this.oResizableDialog.close();
						}.bind(this)
					})
				});

				//to get access to the controller's model
				this.getView().addDependent(this.oResizableDialog);
			}

			this.oResizableDialog.open();
		},
    
	});

});  