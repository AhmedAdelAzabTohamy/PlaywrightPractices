import { Page } from "@playwright/test";

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

    private get Coupon() {
        return this.page.locator('input[name="coupon"]');
    }

    private get ApplyCouponButton() {
    return this.page.getByRole('button', { name: 'Apply' });
}

    private get Country() {
        return this.page.getByPlaceholder("Select Country");
    }

    private get PlaceOrder() {
        return this.page.locator("a.action__submit");
    }

    async FillCheckout(data: any) {

        await this.CreditCardNumber.fill(data.cardNumber);

        await this.ExpiryMonth.selectOption(data.expiryMonth);

        await this.ExpiryYear.selectOption(data.expiryYear);

        await this.CVV.fill(data.cvv);

        await this.NameOnCard.fill(data.nameOnCard);

       await this.Coupon.fill(data.coupon);

     await this.Country.fill(data.country);

    }

    async placeorderbutton(){
        await this.PlaceOrder.click();
    }

    async Couponbutton(){
        await this.ApplyCouponButton.click();
    }
}