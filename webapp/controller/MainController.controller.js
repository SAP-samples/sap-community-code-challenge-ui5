sap.ui.define([ "./BaseController" ], function (Controller) {
    "use strict";

    return Controller.extend("ui5.challenge.controller.MainController", {
        onPress: function () {
            this.navTo("Detail")
        }
    });
});