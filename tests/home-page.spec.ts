import {expect, test} from '@playwright/test';
import {Navigation} from '../POM/navigation';

test.beforeEach(async ({page}) => {
    await page.goto('https://conduit.bondaracademy.com/');
});

test('Verify that all expected elements are visible on the home page', async ({page}) => {
    const navigation = new Navigation(page);
    await expect(navigation.conduitIcon).toBeVisible();
    await expect(navigation.homeButton).toBeVisible();
    await expect(navigation.signInButton).toBeVisible();
    await expect(navigation.signUpButton).toBeVisible();
    await expect(navigation.globalFeed).toBeVisible();
    await expect(navigation.articleName).toBeVisible();
    await expect(navigation.articleUserIcon).toBeVisible();
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

