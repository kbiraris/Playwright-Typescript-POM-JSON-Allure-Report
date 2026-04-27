import {test, expect} from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import data from './testData/orangeHrmLoginData.json';
import { DashboardPage } from './pages/dashboardPage';
import { AdminPage } from './pages/adminPage';

test("Login test with valid credentials", async ({page}) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const adminPage = new AdminPage(page);
    await loginPage.b_navigateTo('https://opensource-demo.orangehrmlive.com/');
    await loginPage.enterUsername(data.validUsername);
    await loginPage.enterPassword(data.validPassword);
    await loginPage.clickLogin();

    await dashboardPage.clickAdminTab();
    await adminPage.enterUserName(data.validUsername);
    await adminPage.clickSearch();

    await dashboardPage.clickProfileAccordion();
    await dashboardPage.clickLogout();
});