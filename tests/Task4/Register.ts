import { expect, Page } from "@playwright/test";



export class REGISTERPAGE {


    constructor (private page: Page){}

     private get Firstname(){
        return this.page.getByRole('textbox', { name: 'First Name' });
     }
      private get Lastname(){
        return this.page.getByRole('textbox', { name: 'Last Name' });
     }
     private get email(){
      return this.page.getByPlaceholder("email@example.com");
     }
     private get phoneNumber(){
        return this.page.getByRole('textbox', { name: 'enter your number' });
     }
     private get Occupation(){
        return this.page.getByRole('combobox');
     }
     private get Password(){
        return this.page.getByRole('textbox', { name: 'Passsword' });
     }
     private get ConfirmPassword(){
        return  this.page.getByRole('textbox', { name: 'Confirm Password' });
     }
     private get year(){
        return this.page.getByRole('checkbox');
     }
     private get gender(){
        return this.page.getByRole('radio', { name: 'Male', exact: true });
     }


      async registerbutton(){
      await  this.page.getByRole('button', { name: 'Register' }).click();
    }

    async RegisterLink(){
    await  this.page.getByText('Don\'t have an account?').click();
    }
    
    async RegisterForm(data: {
      firstName: string;
      lastName: string;
      email: string;
      mobileNumber: string;
      occupation: string;
      password: string;
      confirmPassword: string;
      gender: string;
    }) {

    await this.Firstname.fill(data.firstName);

    await this.Lastname.fill(data.lastName);

    await this.email.fill(data.email);

    await this.phoneNumber.fill(data.mobileNumber);

    await this.Occupation.selectOption(` ${data.occupation}`);

    await this.gender.check();

    await this.Password.fill(data.password);

    await this.ConfirmPassword.fill(data.confirmPassword);
     await this.year.check();
}

async login(){
 await expect(this.page.getByText("Account Created Successfully")).toBeVisible(); 
 await this.page.getByRole("button", {name:"Login"}).click();
}


}