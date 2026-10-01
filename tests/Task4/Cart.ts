import { Page } from "@playwright/test";

export class CartPage {

  constructor(private page: Page) {}


  async CheckoutButton(){
    await  this.page.getByRole("button", {name: "Checkout"}).click();
  }

}