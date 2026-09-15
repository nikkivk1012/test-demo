import {Locator, Page} from '@playwright/test';

export class LoginPage {
    private username!: Locator;
    private password!: Locator;
    private loginButton!: Locator;

    constructor(private page: Page) {
    }

    async login(username:string, password:string) {
        this.username=this.page.getByPlaceholder('Email Address or mobile number');
        this.password=this.page.getByPlaceholder('Password');
        this.loginButton=this.page.getByRole('button', { name: 'Log In' });
    }
}