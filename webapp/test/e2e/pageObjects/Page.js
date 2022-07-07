const { wdi5 } = require("wdio-ui5-service")

module.exports = class Page {
    async open(path) {
        await wdi5.goTo(path)
    }
}