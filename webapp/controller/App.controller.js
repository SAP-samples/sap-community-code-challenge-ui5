sap.ui.define(["./BaseController"], function (BaseController) {
  "use strict";

  return BaseController.extend("ui5.challenge.controller.App", {
    onAfterRendering: function () {
      document.title = this.getView().getModel("i18n").getResourceBundle().getText("appTitle");
    },
  });
});
