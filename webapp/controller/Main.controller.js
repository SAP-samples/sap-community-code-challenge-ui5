sap.ui.define(["sap/ui/core/mvc/Controller", "ui5/challenge/plugins/xrpl/xrpl-latest"], function (Controller, Xrpl) {
  "use strict";

  return Controller.extend("ui5.challenge.controller.Main", {
    onInit: function () {
      this.readXRPL();
    },
    readXRPL: async function () {
      const PUBLIC_SERVER = "wss://xrplcluster.com/";
      const client = new xrpl.Client(PUBLIC_SERVER);
      await client.connect();
      client
        .request({
          id: 420,
          command: "ledger_data",
          ledger_index: "current",
          limit: 50,
        })
        .then(
          function (response) {
            const result = response.result.state.filter((xrplData) => {
              // We only want to see Accounts in the List
              return xrplData.Account !== undefined;
            });
            const xrplModel = this.getOwnerComponent().getModel("xrpl");
            xrplModel.setProperty("/LedgerData", result);
          }.bind(this)
        );
    },
    onLoadXrplData: function (event) {
      this.readXRPL();
    },
    formatXrplDrops: function (value) {
      const result = value / 1000000;
      if (isNaN(result)) {
        return 0;
      } else {
        return result;
      }
    },
  });
});
