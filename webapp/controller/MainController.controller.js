sap.ui.define([
    "./BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("ui5.challenge.controller.MainController", {
        onPress: function () {
            this.navTo("Detail");
        }
    });
});
