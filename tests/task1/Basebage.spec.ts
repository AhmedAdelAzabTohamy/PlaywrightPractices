import {test, expect, type Page} from '@playwright/test';
import { Login } from './Login.ts';

test.use({
    launchOptions: {slowMo: 800},
});

test("login page", async ({page}) => {

    const loginPage = new Login(page);
    await loginPage.open();
    await loginPage.addTodo();

    await expect (page.getByText("Swag Labs")).toBeVisible();
});
