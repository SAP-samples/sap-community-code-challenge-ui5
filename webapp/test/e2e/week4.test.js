const { wdi5 } = require("wdio-ui5-service")
const Detail = require("./pageObjects/Detail")
const Main = require("./pageObjects/Main")

describe("week4: main or detail page ...", () => {
    before(async () => {
        await Main.open()
        // or
        await Detail.open()
    })

    it("", async () => {
        // your first test
    })

    it("", async () => {
        // your second test
    })
})