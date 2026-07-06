sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent"], function (Controller, UIComponent) {
  "use strict";

  return Controller.extend("ui5.challenge.controller.BaseController", {
    navTo: function (psTarget, pmParameters, pbReplace) {
      this.getRouter().navTo(psTarget, pmParameters, pbReplace);
    },
    getRouter: function () {
      return UIComponent.getRouterFor(this);
    },
    formatXrplDrops: function (value) {
      const result = value / 1000000;
      if (isNaN(result)) {
        return 0;
      } else {
        return result;
      }
    },
    formatBaseFee: function (value) {
      const result = parseInt(value, 16);
      return result / 1000000;
    },
  });
});
