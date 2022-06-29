sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("ui5.challenge.controller.BaseController", {
        navTo: function (psTarget, pmParameters, pbReplace) {
            this.getRouter().navTo(psTarget, pmParameters, pbReplace);
        },
        getRouter: function () {
            return this.getOwnerComponent().getRouter();
        },

        /**
             * get table binding by table id
             *
             * @param {string} sTableId table id
             * @returns {Array[Object]} table binding
             */
         getListBinding: function (sListId) {
            return this.byId(sListId).getBinding("items");
        },
    });
});
