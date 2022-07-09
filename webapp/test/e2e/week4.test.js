const { wdi5 } = require("wdio-ui5-service");
const Detail = require("./pageObjects/Detail");
const Main = require("./pageObjects/Main");

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

describe("week4: detail page test sections", () => {
  before(async () => {
    await Detail.open();
  });

  it("should have a fee section visible", async () => {
    const control2bTested = await browser.asControl({
      selector: {
        id: /.*feeSection$/,
        viewName: Detail._viewName,
      },
    });
    expect(await control2bTested.getVisible()).toBeTruthy();
  });

  it("should have a more information section visible", async () => {
    const control2bTested = await browser.asControl({
      selector: {
        id: /.*moreInfosSubsection$/,
        viewName: Detail._viewName,
      },
    });
    expect(await control2bTested.getVisible()).toBeTruthy();
  });

  it("Link to xrpl docs should open in new Window", async () => {
    const control2bTested = await browser.asControl({
      selector: {
        id: /.*linkToXrplDoc$/,
        viewName: Detail._viewName,
      },
    });
    expect(await control2bTested.getTarget()).toBe("_blank");
  });

  it("Link to xrpl docs should open in new Window", async () => {
    const control2bTested = await browser.asControl({
      selector: {
        id: /.*linkToXummDoc$/,
        viewName: Detail._viewName,
      },
    });
    expect(await control2bTested.getTarget()).toBe("_blank");
  });
});
