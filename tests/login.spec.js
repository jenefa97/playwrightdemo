const { test,expect } = require("@playwright/test")

test("Login Sample", async function({page}){
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.locator("//input[@id='username']").type("student")

    await page.locator("//input[@id='password']").type("Password123")

    await page.locator("//button[@id='submit']").click()

    await expect(page).toHaveURL(/logged-in-successfully/)

    console.log("Page successfully logged in and verified")
})