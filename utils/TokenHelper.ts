import {Page} from '@playwright/test';

export class TokenHelper {
    static async inject(Page: Page , token:string): Promise<void> {
        await Page.addInitScript((value) => {
            window.localStorage.setItem("token", value);
        }, 
        token);
    }
}