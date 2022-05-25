const Page = require("./Page")

class Detail extends Page {
    async open() {
        await super.open("#/RouteDetail")
    }

    _viewName = "ui5.challenge.view.Detail"
}

module.exports = new Detail()