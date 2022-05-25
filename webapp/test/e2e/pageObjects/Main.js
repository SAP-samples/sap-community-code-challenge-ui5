const Page = require("./Page")

class Main extends Page {
    async open() {
        await super.open("#/")
    }

    _viewName = "ui5.challenge.view.Main"
}

module.exports = new Main()