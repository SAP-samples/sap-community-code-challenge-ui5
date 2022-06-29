sap.ui.define([
    "ui5/challenge/controller/BaseController",
    "sap/ui/model/Filter", 
    "sap/ui/model/FilterOperator"
],
    function (BaseController, Filter, FilterOperator) {
        "use strict";
        return BaseController.extend("ui5.challenge.controller.List", {            
            onPressDetail: function () {                
                this.navTo("Detail")
            },

            /**
             * This function prepares data for filtering by ComboBox when the selection is finished
             *
             * @param {sap.ui.base.Event} oEvent - event object
             */
             onComboBoxChangeFinish: function (oEvent) {
                var aProducts = oEvent.getParameter("selectedItems").map((oSelected) => oSelected.getText());
                var aFilters = aProducts.map((sCategory) => new Filter("Name", FilterOperator.Contains, sCategory));
                if (aProducts.length) {
                    this.getListBinding("productList").filter(aFilters);
                } else {                    
                    this.getListBinding("productList").filter(null);
                }
            },
        });
    }
);
