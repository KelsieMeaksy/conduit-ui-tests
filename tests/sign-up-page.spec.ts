import {expect, test} from '@playwright/test';
import {Header} from '../POM/pages/components/header.page';
import { SignUpPage } from '../POM/pages/sign-up-page';
import { SignInPage } from '../POM/pages/sign-in-page';

test.beforeEach(async ({page}) => {
    await page.goto('https://conduit.bondaracademy.com/');
});

test('Verify that all the expected elements are visible on the sign up page', async ({page}) => {
    const signUpPage = new SignUpPage(page);
    const header = new Header(page);
    const signInPage = new SignInPage(page);
    await (header.signUpNav).click();
    await expect(page).toHaveURL(/register/);
    await expect(header.conduitIcon).toBeVisible();
    await expect(header.homeButton).toBeVisible();
    await expect(header.signInNav).toBeVisible();
    await expect(header.signUpNav).toBeVisible();
    await expect(signUpPage.signUpText).toBeVisible();
    await expect(signUpPage.haveAnAccountLink).toBeVisible();
    await expect(signInPage.signInEmailField).toBeVisible();
    await expect(signInPage.signInPasswordField).toBeVisible();
    await expect(signUpPage.signUpUsernameField).toBeVisible();
    await expect(signUpPage.signUpButton).toBeVisible();
});
