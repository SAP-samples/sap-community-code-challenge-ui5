const { wdi5 } = require("wdio-ui5-service")
const Detail = require("./pageObjects/Detail")

describe("week3: detail page", () => {
    before(async () => {
        await Detail.open()
    })

    it("should have the right title", async () => {
        const title = await browser.getTitle()
        expect(title).toEqual("ui5-challenge")
    })

    it("should have button to navigate back", async () => {
        const navButton = await browser.asControl({
            selector: {
                id: /.*navButton$/,
                viewName: Detail._viewName
              }
        })
        expect(await navButton.getVisible()).toBeTruthy()
    })

    it("should have button that opens dialog", async () => {
        const dialogButton = await browser.asControl({
            selector: {
                id: "dialogButton",
                viewName: Detail._viewName
              }
        })
        await dialogButton.firePress()

        //it's also possible to use WebdriverIO selectors
        const dialog = await $("#myDialog")
        expect(dialog.error).toBeFalsy()
    })
})