sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
], function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("ui5.challenge.controller.MainController", {
        onInit: function () {
            // This is used for Dynamically change title
            // document.title = 'ui5-challenge';

            console.log(this.getView().byId('titleId'));

            var oDummyData = {
                Employees: [{
                    Id: 1,
                    Name: "Betty",
                    Surname: "Buzzell",
                    Age: 26
                }, {
                    Id: 2,
                    Name: "Donna",
                    Surname: "Rosen",
                    Age: 23
                }, {
                    Id: 3,
                    Name: "Craig",
                    Surname: "Reid",
                    Age: 32
                }]
            };

            const oModel = new JSONModel(oDummyData);
            this.getView().setModel(oModel);

        },

        onTestBtnPress: function (oEvent) {
            console.log(oEvent);
            MessageToast.show("You pressed the Test Button!");
        },


        onNextPagePress: function () {
            this.navTo("RouteDetailView");
        }

    });
});