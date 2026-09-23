import { type Page} from '@playwright/test';
import { loginPage } from './loginPage.ts';

export class Login extends loginPage {

    constructor( page: Page){
        super(page); 
    }

    override async open(): Promise<void> {
        await super.open();
        await this.page.getByPlaceholder("Username").waitFor();
        await this.page.getByPlaceholder("Password").waitFor();
    }

    async addTodo(): Promise<void>{
      await this.page.getByPlaceholder("Username").fill("standard_user");
      await this.page.getByPlaceholder("Password").fill("secret_sauce");
      await this.page.getByRole("button", { name: "Login" }).click();
    }
}