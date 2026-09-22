import {expect , Page} from "@playwright/test";

export class CheckOut{
    constructor(private page:Page){}
    
    async CheckoutForm(){
  await this.page.getByRole('textbox').first().fill("1234 4321 1234 4321");
  await this.page.getByRole('combobox').first().selectOption('11');
  await this.page.getByRole('combobox').nth(1).selectOption('22');
  await this.page.getByRole('textbox').nth(1).fill('356');
  await this.page.getByRole('textbox').nth(2).fill('Ahmed Adel');
  await this.page.locator('input[name="coupon"]').fill('1234');
  await this.page.getByRole('button', { name: 'Apply Coupon' }).click();

  await this.page.getByText('Place Order').click();      
    }}