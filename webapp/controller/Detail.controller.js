sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
    "use strict";

    return BaseController.extend("ui5.challenge.controller.Detail", {
        onInit: function () {
        },

        onOpenDialog: function () {
            this.loadFragment("Dialog", this, undefined)
            .then(oDialog => {
                oDialog.open()
            })
        },

        onCloseDialog: function () {
            this.getFragment("Dialog").close()
        },

        onBack: function () {
            this.onNavBack()
        }
        
    });
});
