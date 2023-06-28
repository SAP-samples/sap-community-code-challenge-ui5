sap.ui.define([
    "./BaseController",
    "sap/m/Dialog"
], function (BaseController, Dialog) {
    "use strict";

    return BaseController.extend("ui5.challenge.controller.Detail", {
        onDialog: function () {
            if (!this._dialog) {
                this._dialog = new Dialog({ id: 'myDialog' })
                this.getView().addDependent(this._dialog)
            }
            this._dialog.open()
        }
    });
});
