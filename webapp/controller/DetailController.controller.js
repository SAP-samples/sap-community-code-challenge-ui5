sap.ui.define([
    "./BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("ui5.challenge.controller.DetailController", {
        onInit: function () {
            this.getRouter().getRoute("Detail").attachPatternMatched(this._onObjectMatched, this);
        },

        onPress: function () {
            this.loadFragment({
                name: "ui5.challenge.view.fragment.Dialog",
                autoPrefixId: false
            }).then(function (oDialog) {
                oDialog.open();
                oDialog.attachAfterClose(function () {
                    oDialog.destroy();
                })
            });
        },

        _onObjectMatched: function () {
            this.getView().bindElement({
                path: "/items/1"
            });            
        }
    });
});
