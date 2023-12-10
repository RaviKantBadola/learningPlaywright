const {test, expect } = require('@playwright/test')

test('Home Page',async({page})=>{
await  page.goto('https://www.demoblaze.com/index.html');

const pageTitle =page.title();
console.log(pageTitle);

await expect(page).toHaveTitle('STORE');

await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
const pageURL = PageTransitionEvent.url();
console.log(pageURL)
await page.close();
})
