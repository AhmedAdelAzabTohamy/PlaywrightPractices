import { Page } from "@playwright/test";

export class LoginPage {

    constructor(private page: Page) {}

    async OpenWebsite() {
        await this.page.goto(
            "https://rahulshettyacademy.com/client/#/auth/login"
        );
    }

    private email(email: string) {
        return this.page
            .getByPlaceholder("email@example.com")
            .fill(email);
    }

    private password(password: string) {
        return this.page
            .getByPlaceholder("enter your passsword")
            .fill(password);
    }

    private loginButton() {
        return this.page.locator('input[type="submit"][value="Login"]');
    }

    public registerHere() {
        return this.page.getByText("Register here", { exact: true });
    }

    async login(email: string, password: string) {
        await this.email(email);
        await this.password(password);
        await this.loginButton().click();
    }
}