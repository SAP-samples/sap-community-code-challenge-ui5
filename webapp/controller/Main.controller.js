sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
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
        }
        
    });
});
