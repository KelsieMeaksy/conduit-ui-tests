import {expect, test} from '@playwright/test';
import {HomePage} from '../POM/pages/home-page';
import {Header} from '../POM/pages/components/header.page';
import { SignInPage } from '../POM/pages/sign-in-page';

test.beforeEach(async ({page}) => {
    await page.goto('https://conduit.bondaracademy.com/');
});


//Sign In Page UI checks
test('Verify that all the expected elements are visible on the sign in page', async ({page}) => {
    const homePage = new HomePage(page);
    const header = new Header(page);
    const signInPage = new SignInPage(page);
    await (header.signInNav).click();
    await expect(page).toHaveURL(/login/);
    await expect(header.conduitIcon).toBeVisible();
    await expect(header.homeButton).toBeVisible();
    await expect(header.signInNav).toBeVisible();
    await expect(header.signUpNav).toBeVisible();
    await expect(signInPage.signInPageText).toBeVisible();
    await expect(signInPage.needAnAccount).toBeVisible();
    await expect(signInPage.signInEmailField).toBeVisible();
    await expect(signInPage.signInPasswordField).toBeVisible();
    await expect(signInPage.signInButton).toBeVisible();
});






