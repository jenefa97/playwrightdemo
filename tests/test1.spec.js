//require  -  to install module
// test - to write test, expect - for assertions
//console.log - print in stdout

const {test,expect}=require('@playwright/test')

test("Demo1", async function({page}){
    expect(100).toBe(100)
})
    

test("Demo2", async function({page}){
    expect(12).toBe(121)
//
})

test("Demo3" ,async function({page}){
    expect(121).toBe(121)
//
})

//npx playwright test - i.will run all test in test FileSystemDirectoryReader, ii.default in headless mode
//