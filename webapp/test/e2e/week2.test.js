const { wdi5 } = require("wdio-ui5-service")
const Main = require("./pageObjects/Main")

describe("week2: main page", () => {
    before(async () => {
        await Main.open()
    })

    it("should have localized title (i18n)", async () => {
        const title = await browser.asControl({
            selector: {
                i18NText: {
                    propertyName: "text",
                    key: "mainTitleText"
                },
                controlType: "sap.m.Title",
                viewName: Main._viewName
            }
        })

        const titleText = await title.getText()
        expect(titleText).toEqual("wdi5 rocks")
    })

    it("should have control that opens detail page", async () => {
        const control = await browser.asControl({
            selector: {
                id: "myControl",
                viewName: Main._viewName
              }
        })
        await control.firePress()
        const url = await browser.getUrl()
        expect(url).toMatch(/.*#\/RouteDetail$/)
    })
})