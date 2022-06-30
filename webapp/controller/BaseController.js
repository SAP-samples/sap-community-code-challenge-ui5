sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/Fragment",
    "sap/ui/core/routing/History"
], function (Controller, UIComponent, Fragment, History) {
    "use strict";

    return Controller.extend("ui5.challenge.controller.BaseController", {
        navTo: function (psTarget, pmParameters, pbReplace) {
            this.getRouter().navTo(psTarget, pmParameters, pbReplace);
        },
        getRouter: function () {
            return UIComponent.getRouterFor(this);
        },

		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("Main", {}, true);
			}
		},

        onPress: function () {

        },

        loadFragment: function (sFragmentName, oController, sId) {
            if (!this._aFragments) {
                this._aFragments = {};
            }

            return new Promise(function(resolve, reject) {
                if (!this._aFragments[sFragmentName]) {
                    var sName = this.getOwnerComponent().getMetadata().getComponentName() + ".fragment." + sFragmentName;
                    Fragment.load({
                        id: sId,
                        name: sName,
                        controller: oController
                    }).then(function(oFragment) {
                        this._aFragments[sFragmentName] = oFragment;
                        this.getView().addDependent(oFragment);
                        resolve(this._aFragments[sFragmentName]);
                    }.bind(this));              
                }else {
                    resolve(this._aFragments[sFragmentName]);
                }
            }.bind(this));
        },

        getFragment: function (sFragmentName) {
            return this._aFragments[sFragmentName];
        }

    });
});
