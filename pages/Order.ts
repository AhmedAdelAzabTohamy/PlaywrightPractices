import { expect, Page } from "@playwright/test";

export class OrdersPage {

    constructor(private page: Page) {}

    private get ordersButton() {
        return this.page.getByRole("button", { name: /ORDERS/i });
    }

    async openOrders(): Promise<void> {
        await this.ordersButton.click();

        await expect(
            this.page.getByRole("heading", { name: /Your Orders/i })
        ).toBeVisible();
    }

async orderVisible(orderId: string): Promise<void> {
    const orderRow = this.page
        .getByRole("row")
        .filter({ hasText: orderId });

    await expect(orderRow).toBeVisible();
}

async viewOrder(orderId: string): Promise<void> {
    const orderRow = this.page
        .getByRole("row")
        .filter({ hasText: orderId });

    await orderRow
        .getByRole("button", { name: "View" })
        .click();
}

}