import {Page , expect} from "@playwright/test";

export class RegisterPage{
    constructor(private page: Page){}

    async RegisterLink(){
    await  this.page.getByText('Don\'t have an account?').click();
    }

    async RegisterForm(){
     

        await this.page.getByRole('textbox', { name: 'First Name' }).fill("Ahmed");
        await  this.page.getByRole('textbox', { name: 'Last Name' }).fill("Adel");

        await  this.page.getByPlaceholder("email@example.com").fill("ahmedd.testt13@gmail.com");
        await this.page.getByRole('textbox', { name: 'enter your number' }).fill("1176987675");

        await this.page.getByRole('combobox').selectOption('3: Engineer');

        await this.page.getByRole('radio', { name: 'Male', exact: true }).check();

       await this.page.getByRole('textbox', { name: 'Passsword' }).fill("Test1234");

        await this.page.getByRole('textbox', { name: 'Confirm Password' }).fill("Test1234");
        await this.page.getByRole('checkbox').check();
        await this.page.getByRole('button', { name: 'Register' }).click();

        await expect(this.page.getByText("Account Created Successfully")).toBeVisible();

        await this.page.getByRole("button", {name:"Login"}).click();
    }

}