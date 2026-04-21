import { Page, Locator } from "@playwright/test";

export default class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async b_navigateTo(url: string, maxTimeout?: number): Promise<void>{
        await this.page.goto(url,{timeout: maxTimeout, waitUntil: 'networkidle'});
    }

    async b_fillField(locator: Locator, text: string): Promise<void>{
        await locator.fill(text);
    }

    async b_clickElement(locator: Locator): Promise<void>{
        await locator.click();
    }


}