import {test, expect} from '@playwright/test';
import { LoginPage } from './pages/loginPage';

test("Login test with valid credentials", async ({page}) => {

    const loginPage = new LoginPage(page);
    await loginPage.b_navigateTo('https://opensource-demo.orangehrmlive.com/');
    await loginPage.enterUsername('Admin');
    await loginPage.enterPassword('admin123');
    await loginPage.clickLogin();
});