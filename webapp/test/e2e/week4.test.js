const { wdi5 } = require("wdio-ui5-service")
const Detail = require("./pageObjects/Detail")

/*
You have all done a great job so far in building an app that passes predefined tests 🎉
Now it's time to take it one step further and write your own tests 🚀
For week 4 the task is to write a minimum of 2 tests and make them pass ✅✅
There are no boundaries, get creative and explore the framework 🎨

You can get inspiration here:
    🗓  test files of the previous weeks
    ℹ️  examples in wdi5 repository: https://github.com/js-soft/wdi5/tree/main/examples/ui5-js-app/e2e-test-config
    📚  official wdi5 documentation: https://js-soft.github.io/wdi5/#/

You can share your results and experience in the SAP Community 💙
https://groups.community.sap.com/t5/coffee-corner-discussions/sap-community-code-challenge-testing-ui5-apps-with-wdi5/td-p/5229
*/

describe("week4: main or detail page ...", () => {
    before(async () => {
        await Detail.open()
    })

    it("should have correct panel title", async () => {
        // const detailPanel = await browser.asControl({
        //     selector: {
        //         id: /.*detailPanel$/,
        //         viewName: Detail._viewName
        //     }
        // })

        // Doesn't work unfortunately - https://github.com/ui5-community/wdi5/issues/252
        // const viewBinding = detailPanel.getBindingContext()
        // The idea here was to get properties from the binding and match them properly

        const panelTitle = await browser.asControl({
            selector: {
                id: "panelTitle",
                viewName: Detail._viewName
            }
        })

        expect(await panelTitle.getText()).toEqual("fresh-thinking (80f91695-461a-455e-8dd4-06deb7c48ea8)")
    })

    it("should have tag status", async () => {
        const genericTag = await browser.asControl({
            selector: {
                id: "statusTag",
                viewName: Detail._viewName
            }
        })

        expect(await genericTag.getStatus()).toEqual("Error")
    })
})