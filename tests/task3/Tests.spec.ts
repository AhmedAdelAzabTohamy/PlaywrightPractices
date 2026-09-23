import {test, expect,Page} from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";
import { HomePage } from "./HomePage";
import { CartBage } from "./CartPage";
import { CheckOut } from "./CheckOutPage";


test.use({
    launchOptions: {slowMo: 700},
});


test("E2e Valid Scenario" , async({page}) =>{

    const login = new LoginPage(page);
    const Register = new RegisterPage(page);
    const home =new HomePage(page);
    const cart=new CartBage(page);
    const checkout = new CheckOut(page);


    await login.OpenWebsite();
    await Register.RegisterLink();
    await Register.RegisterForm();
    
    await login.LoginForm();

    await home.Addproduct();

    await cart.CarttPage();

    await checkout.CheckoutForm();


});