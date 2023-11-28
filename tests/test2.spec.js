const {test, expect} = require("@playwright/test")

test("Get title of a web page", async function({page}){
    await page.goto("https://www.google.com")
    const url = await page.url()
    console.log("URL of the web page is: "+url)
    const title = await page.title()
    await expect(page).toHaveTitle(title)
})