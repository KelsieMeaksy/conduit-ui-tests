import {Locator, Page} from '@playwright/test';   


export class SignUpPage {

readonly page: Page;
//Sign Up Page
readonly signUpButton: Locator;
readonly signUpText: Locator;
readonly haveAnAccountLink: Locator;
readonly signUpUsernameField: Locator;

constructor(page:Page) {
this.page = page;

//Sign Up Page
this.signUpButton = page.getByRole('button', { name: 'Sign up' })
this.signUpText = page.getByRole('heading', { name: 'Sign up' });
this.haveAnAccountLink = page.getByRole('link', { name: 'Have an account?' });
this.signUpUsernameField = page.getByPlaceholder('Username');
};
}; 
