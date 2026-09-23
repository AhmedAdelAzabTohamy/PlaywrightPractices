import { Page, expect } from "@playwright/test";

export class CheckOut{
    constructor (private page: Page){}


    async CheckoutLocators(){

      await this.page.getByText('Checkout ( 2 ) (current)').click();
      await this.page.getByRole("button", {name: "Checkout "}).click();
      await this.page.getByText("I agree with the ").check();

      await this.page.getByRole("button" , {name: "Purchase"}).click();
      await expect(this.page.getByText('Success! Thank you! Your')).toBeVisible();
    }
}


