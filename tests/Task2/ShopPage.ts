import { Page ,expect} from "@playwright/test";

export class ShopPage{
 
    constructor(readonly page: Page) {}
    
    async Locators(){
      await this.page.getByRole('link', { name: 'Shop' }).click();

      await this.page
     .locator('app-card')
     .first()
     .getByRole('button')
     .click();

     await this.page
     .locator('app-card')
     .last()
     .getByRole('button')
     .click();

     await expect(this.page.getByText('Checkout ( 2 ) (current)')).toBeVisible();
    }

}