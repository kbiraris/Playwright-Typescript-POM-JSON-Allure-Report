import { Page, Locator } from '@playwright/test';
import BasePage from './basePage';

export class LoginPage extends BasePage {

    private readonly usernameTextbox: Locator;
    private readonly passwordTextbox: Locator;
    private readonly loginButton: Locator;
    
    constructor(page: Page) {
        super(page);
        this.usernameTextbox = page.locator('input[name="username"]');
        this.passwordTextbox = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
    }

    async enterUsername(username: string){
        await this.b_fillField(this.usernameTextbox, username);
    }

    async enterPassword(password: string){
        await this.b_fillField(this.passwordTextbox, password);
    }

    async clickLogin(){
        await this.b_clickElement(this.loginButton);
    }

}