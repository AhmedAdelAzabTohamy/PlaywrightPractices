import { Page } from "@playwright/test";

export class RegisterPage{
    constructor (private page: Page){}
    
    
  private FirstName(firstName: string) {
    return this.page.getByPlaceholder("First Name").fill(firstName);
}

private LastName(lastName: string) {
    return this.page.getByPlaceholder("Last Name").fill(lastName);
}

  private email(email: string) {
    return this.page.getByPlaceholder("email@example.com").fill(email);
}

private PhoneNumber(phonenumber: string){

    return this.page.getByPlaceholder("enter your number").fill(phonenumber);
}

private occupation(occupation: string) {
    return this.page
        .locator('select[formcontrolname="occupation"]')
        .selectOption({ label: occupation });
}

private gender(gender: string) {
    return this.page
        .locator(`input[type="radio"][formcontrolname="gender"][value="${gender}"]`)
        .check();
}

  private password(password: string) {
    this.page.locator("#userPassword").fill(password);
    this.page.locator("#confirmPassword").fill(password);
}

private ageCheckbox() {
    return this.page.getByRole("checkbox");
}

private registerButton() {
    return this.page.locator('input[type="submit"][value="Register"]');
}

public loginHere() {
    return this.page.getByText("Login here", { exact: true });
}

 async register(
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        occupation: string,
        gender: string,
        password: string
    ) {
        await this.FirstName(firstName);
        await this.LastName(lastName);
        await this.email(email);
        await this.PhoneNumber(phone);
        await this.occupation(occupation);
        await this.gender(gender);
        await this.password(password);
        await this.ageCheckbox().check();
        await this.registerButton().click();
    }

}