sap.ui.define([
    "ui5/challenge/controller/BaseController"
],
    function (BaseController) {
        "use strict";
        return BaseController.extend("ui5.challenge.controller.List", {            
            onPressDetail: function () {                
                this.navTo("Detail")
            }
        });
    }
);
