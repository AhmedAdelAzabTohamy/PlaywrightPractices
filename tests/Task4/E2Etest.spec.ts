import { test , expect } from "@playwright/test";
import fs from "fs";
import path from "path";
import { REGISTERPAGE } from "./Register";
import { LOGINPAGE } from "./login";
import { ProductPage } from "./productPage";
import { CartPage } from "./Cart";
import { CheckOut } from "./CheckOut";


test.use({
    launchOptions: {slowMo: 500},
});

const jsonPath = path.join(
    process.cwd(),
    "test-data/register.json"
);

const registerData = JSON.parse(
    fs.readFileSync(jsonPath, "utf-8")
);


const jsonPath1 = path.join(
  process.cwd(),
  "test-data/products.json"
);

const productsData = JSON.parse(
  fs.readFileSync(jsonPath1, "utf-8")
);

const jsonPath2 = path.join(
    process.cwd(),
    "test-data/checkout.json"
);

const checkoutData = JSON.parse(
    fs.readFileSync(jsonPath2, "utf-8")
);


for (const data of registerData) {
test(`E2E scenario - ${data.email}`, async({page}) => {

const registerpage = new REGISTERPAGE(page);
const loginpage = new LOGINPAGE(page);
const productPage = new ProductPage(page);
const cartpage = new CartPage(page);
const checkout = new CheckOut(page);

await loginpage.OpenWebsite();

await registerpage.RegisterLink();
await registerpage.RegisterForm(data);
await registerpage.registerbutton();
await registerpage.login();

await loginpage.LoginForm(data);
await loginpage.loginbutton();

await expect(page.locator(".card").first()).toBeVisible();

for (const product of productsData) {
  await productPage.addProduct(
    product.productName,
    product.quantity
  );
}

await productPage.buttonCart();

await cartpage.CheckoutButton();

 for (const checkoutDataItem  of checkoutData) {

      await checkout.FillCheckout(checkoutDataItem);
   }


    await checkout.Couponbutton();
    await checkout.placeorderbutton();

});
}
