import {Page, expect} from "@playwright/test";

 export class LoginPage {

    constructor(private page: Page){}

    async OpenWebsite(){
     await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    }
   
    async LoginForm(){

        await this.page.getByPlaceholder("email@example.com").fill("ahmedd.testt13@gmail.com");
        await this.page.getByPlaceholder("enter your passsword").fill("Test1234");
        await this.page.getByRole("button", {name: "login"}).click();
    }
    

}