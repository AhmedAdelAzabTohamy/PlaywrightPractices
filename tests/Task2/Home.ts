import {test, Page , expect} from"@playwright/test";

export class Home {
 constructor(readonly page:Page){}

 async open(){
    await this.page.goto("https://rahulshettyacademy.com/angularpractice/");
 }

 async locators(){
    await this.page.locator('form input[name="name"]').fill("Ahmed Adel") ;
    await this.page.locator('form input[name="email"]').fill("ahmed.test@gmail.com") ;
    await this.page.getByPlaceholder("Password").fill("Aa12345");
    await this.page.locator("#exampleCheck1").check();
    await this.page.getByLabel('Gender').selectOption("Male");
    await this.page.getByRole('radio', { name: 'Student' }).click();
    await this.page.locator('input[name="bday"]').fill('2027-06-17');
    await this.page.getByRole('button', { name: 'Submit' }).click();
    await expect(this.page.getByText(" The Form has been submitted successfully!.")).toBeVisible();

 }
 
}