import { Page, expect } from "@playwright/test";

export class CheckOut{
    constructor (private page: Page){}

    private get Country()
    {
        return this.page.locator("#country");
    }

    private Suggestions(countryName: string)
    {
        return this.page.locator(".suggestions li")
            .filter({ hasText: countryName });
    }

    async CheckoutLocators(){

      await this.page.getByText('Checkout ( 2 ) (current)').click();
      await this.page.getByRole("button", {name: "Checkout "}).click();
    }

    async SelectCountry(partial: string, countryFullName: string) {
      await this.Country.pressSequentially(partial, { delay: 80 });

      const suggestion = this.Suggestions(countryFullName);
      await expect(suggestion).toBeVisible();
      await suggestion.click();
    }

    async termsandConditions(){
      await this.page.getByText("I agree with the ").check();
    }

    async PurchaseButton(){
      await this.page.getByRole("button", {name: "Purchase"}).click();
      await expect(this.page.getByText('Success! Thank you! Your')).toBeVisible();
    }
}

