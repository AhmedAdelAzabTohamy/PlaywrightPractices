import { Page , expect } from "@playwright/test";

export class HomePage{
 
    constructor(private page:Page){}
  
    async Addproduct(){

   const product = this.page
    .locator('.card')
    .filter({ has: this.page.getByRole('heading', { name: 'ZARA COAT 3' }) });


  await product.getByRole('button', { name: 'Add To Cart' }).click();

 await expect(this.page.getByRole('button', { name: /Cart/ }).locator('label')).toHaveText('1');
 
 await expect(
 this.page.getByRole('button', { name: /Cart/ }).locator('label')
).toHaveText('1');

await this.page.getByRole('button', { name: /Cart/ }).locator('label').click();
}
}

  