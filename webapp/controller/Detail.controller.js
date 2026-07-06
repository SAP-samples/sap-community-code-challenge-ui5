sap.ui.define(["ui5/challenge/controller/BaseController", "ui5/challenge/plugins/xrpl/xrpl-latest", "sap/ui/core/Fragment"], function (BaseController, Xrpl, Fragment) {
  "use strict";

  return BaseController.extend("ui5.challenge.controller.Detail", {
    onInit: function () {
      this.readXRPL();
    },
    navBack: function (event) {
      this.navTo("Main");
    },
    readXRPL: async function () {
      // Fee Information lesen
      const PUBLIC_SERVER = "wss://xrplcluster.com/";
      const client = new xrpl.Client(PUBLIC_SERVER);
      await client.connect();
      client
        .request({
          id: "get_reserve_entry",
          command: "ledger_entry",
          index: "4BC50C9B0D8515D3EAAE1E74B29A95804346C491EE1A95BF25E4AAB854A6A651",
        })
        .then(
          function (response) {
            const xrplModel = this.getOwnerComponent().getModel("xrpl");
            xrplModel.setProperty("/LedgerFees", response.result.node);
          }.bind(this)
        );
    },
    onFeeDetailsDialog: function (event) {
      var view = this.getView();

      // create dialog lazily
      if (!this.byId("myDialog")) {
        // load asynchronous XML fragment
        Fragment.load({
          id: view.getId(),
          name: "ui5.challenge.view.FeeDetails",
          controller: this,
        }).then(function (dialog) {
          // connect dialog to the root view of this component (models, lifecycle)
          view.addDependent(dialog);
          dialog.open();
        });
      } else {
        this.byId("myDialog").open();
      }
    },
    onCloseFeeDialog: function (event) {
      const feeDialog = this.byId("myDialog");
      feeDialog.close();
    },
  });
});
