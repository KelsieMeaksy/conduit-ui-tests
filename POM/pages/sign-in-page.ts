import { Locator, Page } from '@playwright/test';


export class SignInPage {

readonly page: Page;
//Sign In Page
readonly signInPageText: Locator;
readonly needAnAccount: Locator;
readonly signInEmailField: Locator;
readonly signInPasswordField: Locator;
readonly signInButton: Locator;


constructor(page:Page) {
this.page = page;

//Sign In Page
this.signInPageText = page.getByRole('heading', { name: 'Sign in' });
this.needAnAccount = page.getByRole('link',  { name: 'Need an account?' });
this.signInEmailField = page.getByPlaceholder('Email');
this.signInPasswordField = page.getByPlaceholder('Password');
this.signInButton = page.getByRole('button', { name: 'Sign in' })

};
}; 



