sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
  "use strict"

  return BaseController.extend("ui5.challenge.controller.Main", {

    onInit: function() {

      var aData = {
        persons: [ 
          {
            name: "Max Mustermann",
            alter: 33
          },
          {
            name: "Maria Musterfrau",
            alter: 40
          },
          {
            name: "Mara Mustermensch",
            alter: 24
          } 
        ]
      };

      var oModel = new JSONModel(aData);
      this.getView().setModel(oModel);
    },

    navToDetail: function() {
      this.navTo("Detail");
    }

  })
})