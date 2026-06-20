import {expect, test} from '@playwright/test';
import {Navigation} from '../POM/navigation';

test.beforeEach(async ({page}) => {
    await page.goto('https://conduit.bondaracademy.com/');
});

//Home Page UI checks
test('Verify that all expected elements are visible on the home page', async ({page}) => {
    const navigation = new Navigation(page);
    await expect(navigation.conduitIcon).toBeVisible();
    await expect(navigation.homeButton).toBeVisible();
    await expect(navigation.signInNav).toBeVisible();
    await expect(navigation.signUpNav).toBeVisible();
    await expect(navigation.globalFeed).toBeVisible();
    await expect(navigation.articleUsername).toBeVisible();
    await expect(navigation.homeBannerText).toBeVisible();
    await expect(navigation.articleDate).toBeVisible();
    await expect(navigation.articleFavouriteIcon).toBeVisible();    
    await expect(navigation.yourFeed).toBeVisible();
    await expect(navigation.articlePreview).toBeVisible();
    await expect(navigation.readMore).toBeVisible();
    await expect(navigation.popularTags).toBeVisible();
    await expect(navigation.conduitBannerText).toBeVisible();
    await expect(navigation.bannerText).toBeVisible();
    await expect(navigation.bannerLink).toBeVisible();
});

//Article Page UI checks
test('Verify that all the expected elements are visible on the article page', async ({page}) => {
    const navigation = new Navigation(page);
        await (navigation.articlePreview).click();
        await expect(page).toHaveURL(/article\//);
        await expect(navigation.conduitIcon).toBeVisible();
        await expect(navigation.homeButton).toBeVisible();
        await expect(navigation.signInNav).toBeVisible();
        await expect(navigation.signUpNav).toBeVisible();
        await expect(navigation.articleBanner).toBeVisible();
        await expect(navigation.articleUsername).toBeVisible();
        await expect(navigation.articleDate).toBeVisible();
        await expect(navigation.articleFavouriteIcon).toBeVisible();
        await expect(navigation.articleFollowButton).toBeVisible();
});

//Sign In Page UI checks
test('Verify that all the expected elements are visible on the sign in page', async ({page}) => {
    const navigation = new Navigation(page);
    await (navigation.signInNav).click();
    await expect(page).toHaveURL(/login/);
    await expect(navigation.conduitIcon).toBeVisible();
    await expect(navigation.homeButton).toBeVisible();
    await expect(navigation.signInNav).toBeVisible();
    await expect(navigation.signUpNav).toBeVisible();
    await expect(navigation.signInPageText).toBeVisible();
    await expect(navigation.needAnAccount).toBeVisible();
    await expect(navigation.signInEmailField).toBeVisible();
    await expect(navigation.signInPasswordField).toBeVisible();
    await expect(navigation.signInButton).toBeVisible();
});


test('Verify that all the expected elements are visible on the sign up page', async ({page}) => {
    const navigation = new Navigation(page);
    await (navigation.signUpNav).click();
    await expect(page).toHaveURL(/register/);
    await expect(navigation.conduitIcon).toBeVisible();
    await expect(navigation.homeButton).toBeVisible();
    await expect(navigation.signInNav).toBeVisible();
    await expect(navigation.signUpNav).toBeVisible();
    await expect(navigation.signUpText).toBeVisible();
});




/*
Sign Up
Go to https://conduit.bondaracademy.com/
Click sign up button
Ensure URL is https://conduit.bondaracademy.com/
Ensure we display:
Conduit icon
Home button
Sign in button
Sign up button
Ensure 'Sign up' text displays
Ensure 'Need an account?' is hyperlinked and visible
Ensure Username field displays
Ensure Email field displays
Ensure Password field displays
Ensure Sign up button displays
Ensure Sign up button cannot be clicked whilst fields are empty


To effectively catch bugs throughout your entire frontend, you need to combine them into a cohesive testing strategy.

Logic: Is the underlying application logic correct (e.g.: logic for adding items to a cart or calculating tax based on the user’s location)?
Visual: Does the UI render correctly in different app states and variations?
Functional: Does the component respond to user interactions and update accordingly?
Accessibility: Does the UI adapt to the user’s needs (i.e.: screen readers & keyboard-only navigation)?
User flows: Can users complete core functionalities across multiple pages? */

