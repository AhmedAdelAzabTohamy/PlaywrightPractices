import { test, expect } from "@playwright/test";
import { AuthApi } from "../Api/AuthApi";
import { TokenHelper } from "../utils/TokenHelper";
import { DashboardPage } from "../pages/Dashboard";
import { CartPage } from "../pages/Cart";
import loginData from "../testdata/data.json";
import productsData from "../testdata/products.json";
import checkoutData from "../testdata/checkout.json";
import { CheckOut } from "../pages/CheckOut";
import { OrdersPage } from "../pages/Order";

test("E2E - Complete purchase using API authentication", async ({ page }) => {

    const authApi = await AuthApi.create();

    try {

        const validLogin = loginData.find(
            data => data.validity === "valid"
        );

        expect(validLogin).toBeDefined();

        const token = await authApi.login({
            userEmail: validLogin!.userEmail,
            userPassword: validLogin!.userPassword
        });

        await TokenHelper.inject(page, token);

        const dashboardPage = new DashboardPage(page);

        await dashboardPage.open();

        
        for (const product of productsData) {

            if (product.validity === "valid") {

                const added = await dashboardPage.addProductToCart(
                    product.productName
                );

                expect(
                    added,
                    `Expected product "${product.productName}" to be added`
                ).toBeTruthy();

            } else {

                await dashboardPage.expectProductNotVisible(
                    product.productName
                );
            }
        }

     
        await dashboardPage.openCart();

        const cartPage = new CartPage(page);

        for (const product of productsData) {

            if (product.validity === "valid") {

                await cartPage.expectProductAdded(
                    product.productName
                );
            }
        }

        await cartPage.CheckoutButton();

        
        const checkoutPage = new CheckOut(page);
        const ordersPage = new OrdersPage(page);



        const validCheckout = checkoutData.find(
    checkout => checkout.validity === "valid"
);

expect(validCheckout).toBeDefined();

await checkoutPage.fillCheckout(validCheckout!);

await checkoutPage.placeOrder();

console.log(await page.locator("body").innerText());

const orderId = await checkoutPage.getOrderId();

await ordersPage.openOrders();

await ordersPage.orderVisible(orderId);

await ordersPage.viewOrder(orderId);


     }
    
    finally {

        await authApi.dispose();
    }
});