import { expect, Page } from "@playwright/test";
import fs from "fs";
import path from "path";

export class LOGINPAGE{
      constructor (private page: Page){}

      private get email()
      {
        return this.page.getByPlaceholder("email@example.com");
      }
      private get password(){
        return this.page.getByPlaceholder("enter your passsword");
      }

      async OpenWebsite(){
      await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
      }

    

      async LoginForm(data:any)
      {
        await this.email.fill(data.email);
        await this.password.fill(data.password);
      }

       async loginbutton() {
  await Promise.all([
    this.page.waitForURL("**/dashboard/**"),
    this.page.getByRole("button", { name: "Login" }).click()
  ]);
}
}    