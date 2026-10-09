import { Page, Locator, expect } from "@playwright/test";

export class DashboardPage {

    constructor(private readonly page: Page) {}

    private productCard(productName: string): Locator {
        return this.page
            .locator(".card-body")
            .filter({ hasText: productName });
    }

    private get cartButton() {
        return this.page.locator("[routerlink*='cart']");
    }

    async open(): Promise<void> {
        await this.page.goto(
            "https://rahulshettyacademy.com/client/#/dashboard/dash"
        );
    }

    async addProductToCart(productName: string): Promise<boolean> {

        const card = this.productCard(productName);

        if (await card.count() === 0) {
            return false;
        }

        await card
            .getByRole("button", { name: /Add To Cart/i })
            .click();

        return true;
    }

    async expectProductNotVisible(productName: string): Promise<void> {
    await expect(
        this.productCard(productName)
    ).toHaveCount(0);
}

    async openCart(): Promise<void> {
        await this.cartButton.click();
    }
}