import { Page , expect } from "@playwright/test";

export type CheckoutData = {
    cardNumber: string;
    expiryMonth: string;
    expiryYear: string;
    cvv: string;
    nameOnCard: string;
    country: string;
};

export class CheckOut {

    constructor(private page: Page) {}

    private get CreditCardNumber() {
        return this.page.locator('input[type="text"]').nth(0);
    }

    private get ExpiryMonth() {
        return this.page.locator("select").nth(0);
    }

    private get ExpiryYear() {
        return this.page.locator("select").nth(1);
    }

    private get CVV() {
        return this.page.locator('input[type="text"]').nth(1);
    }

    private get NameOnCard() {
        return this.page.locator('input[type="text"]').nth(2);
    }


   

    private get Country() {
        return this.page.getByPlaceholder("Select Country");
    }

    private get PlaceOrder() {
        return this.page.locator("a.action__submit");
    }

    async fillCheckout(data: CheckoutData): Promise<void> {

        await this.CreditCardNumber.fill(data.cardNumber);

        await this.ExpiryMonth.selectOption(data.expiryMonth);

        await this.ExpiryYear.selectOption(data.expiryYear);

        await this.CVV.fill(data.cvv);

        await this.NameOnCard.fill(data.nameOnCard);

await this.Country.fill("");

await this.Country.pressSequentially(data.country, {
    delay: 100
});

const countryOption = this.page
    .locator("span.ng-star-inserted")
    .filter({ hasText: data.country });

await expect(countryOption).toBeVisible();

await countryOption.click();

    }


    async placeOrder(): Promise<void> {
        await this.PlaceOrder.click();
    }

        async ShippingValidation(): Promise<void> {
        await expect(
            this.page.getByText("Please Enter Full Shipping Information")
        ).toBeVisible();
    }

async getOrderId(): Promise<string> {
    const orderIds = this.page.getByText(/\|.*[a-f0-9]{24}.*\|/);

    await expect(orderIds.last()).toBeVisible();

    const text = await orderIds.last().textContent();

    const match = text?.match(/[a-f0-9]{24}/);

    expect(
        match,
        `Order ID was not found. Actual text: ${text}`
    ).toBeTruthy();

    const orderId = match![0];

    console.log("ORDER ID FROM THANK YOU:", orderId);

    return orderId;
}
 
}