import {test, expect} from '@playwright/test';

test.use({
    launchOptions: {slowMo: 800},
});

test("Handle a child Window Tab", async ({context , page}) => {
    
await page.goto("https://rahulshettyacademy.com/locatorspractice/");

const bannerLink = page.getByRole('link', { name: ' I’ll help you prepare for your next QA job — Exp' });


const [newTab] = await Promise.all([
   context.waitForEvent("page"),
   bannerLink.click(),
]);


await expect(newTab).toHaveURL(/rahulshettyacademy/);
await newTab.close();

await expect(bannerLink).toBeVisible();
});
 