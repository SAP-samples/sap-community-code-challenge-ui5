sap.ui.define([
	"./BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("ui5.challenge.controller.Main", {

		onInit: function() {
		},
		navToDetail: function() {
			this.navTo("Detail");
		}


	});

});