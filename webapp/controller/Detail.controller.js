sap.ui.define([
    "ui5/challenge/controller/BaseController",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/List",
	"sap/m/StandardListItem"
],
    function (BaseController, Dialog, Button, List, StandardListItem) {
        "use strict";
        return BaseController.extend("webapp.controller.Detail", {
            
            navButtonPress: function () {
                this.navTo("Main")
            },
            onPressDialogButton: function() {
                if (!this.oDefaultDialog) {
                    this.oDefaultDialog = new Dialog({
                        id: "myDialog",
                        title: "myDialog",
                        content: new List({
                            items: {
                                path: "/Stores",
                                template: new StandardListItem({
                                    title: "{Name}"                                    
                                })
                            }
                        }),
                        beginButton: new Button({
                            text: "OK",
                            press: function () {                                
                                this.oDefaultDialog.close();
                            }.bind(this)
                        })
                    });
    
                    // to get access to the controller's model
                    this.getView().addDependent(this.oDefaultDialog);
                }
    
                this.oDefaultDialog.open();
            }
        });
    }
);
