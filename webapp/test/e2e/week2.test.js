const { wdi5 } = require("wdio-ui5-service")
const Main = require("./pageObjects/Main")

describe("i18NText matcher", () => {
    before(async () => {
        await Main.open()
    })

    it("w/ propertyName + key", async () => {
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

    // it("check i18nText matcher user button", async () => {
    //     const i18nSelector = {
    //         selector: {
    //             i18NText: {
    //                 propertyName: "text",
    //                 key: "startPage.userButton.text"
    //             },
    //             controlType: "sap.m.Button",
    //             viewName: "test.Sample.view.Main"
    //         }
    //     }

    //     const button = await browser.asControl(i18nSelector)
    //     const buttonText = await button.getText()
    //     expect(buttonText).toEqual("User Test Text")
    // })

    // it("use 18n with parameters other than propertyName and key")
})