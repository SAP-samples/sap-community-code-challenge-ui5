sap.ui.define(["./BaseController"], function (BaseController) {
  "use strict";

  return BaseController.extend("ui5.challenge.controller.Detail", {
    onInit: function () {},
    openDialog: function () {
      // ui5 create dialog
      var oDialog = new sap.m.Dialog({
		id: "myDialog",
        title: "Dialog",
        content: [
          new sap.m.Text({
            text: "Dialog content",
          }),
        ],
        beginButton: new sap.m.Button({
          text: "OK",
          press: function () {
            oDialog.close();
          },
        }),
        afterClose: function () {
          oDialog.destroy();
        },
      });
      // open dialog
      oDialog.open();
    },
  });
});
