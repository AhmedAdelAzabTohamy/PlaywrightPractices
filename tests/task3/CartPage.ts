import{expect, Page} from "@playwright/test";

export class CartBage{

    constructor(private page: Page){}

    async CarttPage(){

   await  this.page.getByRole("button", {name: "Checkout"}).click();
    }
}