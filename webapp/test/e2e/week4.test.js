const { wdi5 } = require("wdio-ui5-service")
const Detail = require("./pageObjects/Detail")
const Main = require("./pageObjects/Main")

/*
You have all done a great job so far in building an app that passes predefined tests đ
Now it's time to take it one step further and write your own tests đ
For week 4 the task is to write a minimum of 2 tests and make them pass ââ
There are no boundaries, get creative and explore the framework đ¨

You can get inspiration here:
    đ  test files of the previous weeks
    âšī¸  examples in wdi5 repository: https://github.com/js-soft/wdi5/tree/main/examples/ui5-js-app/e2e-test-config
    đ  official wdi5 documentation: https://js-soft.github.io/wdi5/#/

You can share your results and experience in the SAP Community đ
https://groups.community.sap.com/t5/coffee-corner-discussions/sap-community-code-challenge-testing-ui5-apps-with-wdi5/td-p/5229
*/

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