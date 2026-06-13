sap.ui.define([
    "./BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("ui5.challenge.controller.Main", {
        onNavigate: function () {
            this.getRouter().navTo('detail')
        }
    });
});
