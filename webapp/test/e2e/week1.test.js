const { wdi5 } = require("wdio-ui5-service")
const Main = require("./pageObjects/Main")

describe("week1: main page", () => {
    before(async () => {
        await Main.open()
    })

    it("should have the right title", async () => {
        const title = await browser.getTitle()
        expect(title).toEqual("ui5-challenge")
    })

    it("should have button with text", async () => {
        const button = await browser.asControl({
            selector: {
                id: "mainButton",
                viewName: Main._viewName
              }
        })
        const buttonText = await button.getText()
        expect(buttonText).not.toEqual("")
    })


    it("should have list with at least three items", async () => {
        const List = await browser.asControl({
            selector: {
                controlType: "sap.m.List",
                viewName: Main._viewName
              }
        })
        const ListItems = await List.getItems()
        expect(ListItems.length).toBeGreaterThanOrEqual(3)
    })
})