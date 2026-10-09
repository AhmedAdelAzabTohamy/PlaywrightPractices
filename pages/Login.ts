import { Page } from "@playwright/test";

export type LoginData = {
    userEmail: string;
    userPassword: string;
    validity: "valid" | "invalid";
};

export class LoginPage {
    constructor(private readonly page: Page) {}

    private get email() {
        return this.page.locator("#userEmail");
    }

    private get password() {
        return this.page.locator("#userPassword");
    }

    private get loginButton() {
        return this.page.getByRole("button", { name: "Login" });
    }

   async open(): Promise<void> {
    await this.page.goto(
        "https://rahulshettyacademy.com/client/#/auth/login"
    );
}

    async fillLoginForm(data: LoginData): Promise<void> {
        await this.email.fill(data.userEmail);
        await this.password.fill(data.userPassword);
    }

    async clickLogin(): Promise<void> {
        await this.loginButton.click();
    }

    async login(data: LoginData): Promise<void> {
        await this.fillLoginForm(data);
        await this.clickLogin();
    }
}