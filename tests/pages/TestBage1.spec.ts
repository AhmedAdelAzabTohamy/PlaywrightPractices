import { Page , test,expect } from "@playwright/test";
import { RegisterPage } from "./RegisterPage";
import { LoginPage } from "./LoginPgae";

test("Register and Login Flow", async ({ page }) => {

    const loginPage = new LoginPage(page);
    const registerPage = new RegisterPage(page);

    await loginPage.OpenWebsite();
    await loginPage.registerHere().click();

    const email = `ahmed${Date.now()}@test.com`;
    const password = "Ahmed@123";

    await registerPage.register(
        "Ahmed",
        "Adel",
        email,
        "01012345678",
        "Engineer",
        "Male",
        password
    );

    await registerPage.loginHere().click();

    await loginPage.login(email, password);

});