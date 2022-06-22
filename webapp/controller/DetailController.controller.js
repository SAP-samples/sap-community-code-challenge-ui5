sap.ui.define([
    "./BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("ui5.challenge.controller.DetailController", {
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
        }
    });
});
