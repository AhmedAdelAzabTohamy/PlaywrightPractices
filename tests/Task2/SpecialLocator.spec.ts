import {Page, test, expect} from "@playwright/test";
import { Home } from "./Home";
import { ShopPage } from "./ShopPage";
import { CheckOut } from "./CheckOut";


test.use({
    launchOptions: {slowMo: 700},
});

test("Playwright test locators", async ({page}) =>{

     const home= new Home(page);
     const Shop = new ShopPage(page);
     const checkout = new CheckOut(page);

    await home.open();
    await home.locators();

    await Shop.Locators();

    await checkout.CheckoutLocators();
    await checkout.SelectCountry("Ge", "Germany");
    await checkout.termsandConditions();
    await checkout.PurchaseButton();
});
