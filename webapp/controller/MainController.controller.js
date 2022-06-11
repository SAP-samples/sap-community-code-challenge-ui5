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

            var oDummyData = {
                Employees: [{
                    Name: "Name1",
                    Surname: "Surname1",
                    Age: 26
                }, {
                    Name: "Name2",
                    Surname: "Surname2",
                    Age: 23
                }, {
                    Name: "Name3",
                    Surname: "Surname3",
                    Age: 32
                }]
            };

            const oModel = new JSONModel(oDummyData);
            this.getView().setModel(oModel);

        },

        onPress: function () {
            MessageToast.show("You pressed the Button!");
        }
    });
});