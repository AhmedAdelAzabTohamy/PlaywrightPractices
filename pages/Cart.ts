import { expect, Page } from "@playwright/test";

export class CartPage {

    constructor(private page: Page) {}

    private product(productName: string) {
        return this.page
            .locator(".cartSection")
            .filter({ hasText: productName });
    }

    async expectProductAdded(productName: string): Promise<void> {

        await expect(
            this.product(productName),
            `Expected "${productName}" to be added to the cart`
        ).toBeVisible();
    }

    async CheckoutButton(): Promise<void> {

        await this.page
            .getByRole("button", { name: "Checkout" })
            .click();
    }
}