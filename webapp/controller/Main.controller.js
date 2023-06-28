sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
], function (BaseController,
	JSONModel,
	MessageBox) {
    "use strict";

    return BaseController.extend("ui5.challenge.controller.Main", {
        onInit: function () {
            let model = {
                items : [{
                    title: "First Item",
                    counter: 1 
                },{
                    title: "Secone Item",
                    counter: 2 
                },{
                    title: "Third Item",
                    counter: 1 
                }]
            }
            this.getView().setModel(new JSONModel(model), "viewModel")
        },

        onGoToDetail: function () {
            this.navTo("Detail", undefined, undefined)
        },

        onMainButtonPress: function () {
            const message = this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("message")
            MessageBox.information(message)
        }
        
    });
});
