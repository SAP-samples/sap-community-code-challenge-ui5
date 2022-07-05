sap.ui.define(["./BaseController","sap/m/Button","sap/m/Dialog"], function (Controller,Button,Dialog) {
    "use strict";

    return Controller.extend("ui5.challenge.controller.DetailController", {
        showDialog: function () {
            if (!this.dialog) {
                this.dialog = new Dialog({
                    id: "myDialog",
                    title:"dialog",
                    beginButton:new Button({text:"ok",press:()=>this.dialog.close()})
                })
                this.getView().addDependent(this.dialog)
            }
            this.dialog.open()
        }
    });
});