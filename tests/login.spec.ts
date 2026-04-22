import {test, expect} from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import data from './testData/orangeHrmLoginData.json';

test("Login test with valid credentials", async ({page}) => {

    const loginPage = new LoginPage(page);
    await loginPage.b_navigateTo('https://opensource-demo.orangehrmlive.com/');
    await loginPage.enterUsername(data.validUsername);
    await loginPage.enterPassword(data.validPassword);
    await loginPage.clickLogin();
});