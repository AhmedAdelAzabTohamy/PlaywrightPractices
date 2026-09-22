import {Page, test, expect} from "@playwright/test";
import { Home } from "./Home";
import { ShopPage } from "./ShopPage";
import { CheckOut } from "./CheckOut";


test.use({
    launchOptions: {slowMo: 900},
});

test("Playwright test locators", async ({page}) =>{

     const home= new Home(page);
     const Shop = new ShopPage(page);
     const checkout = new CheckOut(page);

    await home.open();
    await home.locators();

    await Shop.Locators();

    await checkout.CheckoutLocators();
});

