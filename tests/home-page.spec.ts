import {expect, test} from '@playwright/test';
import {HomePage} from '../POM/pages/home-page';
import {Header} from '../POM/pages/components/header.page';


test.beforeEach(async ({page}) => {
    await page.goto('https://conduit.bondaracademy.com/');
});

//Home Page UI checks
test('Verify that all expected elements are visible on the home page', async ({page}) => {
    const homePage = new HomePage(page);
    const header = new Header(page);
    await expect(header.conduitIcon).toBeVisible();
    await expect(header.homeButton).toBeVisible();
    await expect(header.signInNav).toBeVisible();
    await expect(header.signUpNav).toBeVisible();
    await expect(homePage.globalFeed).toBeVisible();
    await expect(homePage.articleUsername).toBeVisible();
    await expect(homePage.homeBannerText).toBeVisible();
    await expect(homePage.articleDate).toBeVisible();
    await expect(homePage.articleFavouriteIcon).toBeVisible();    
    await expect(homePage.yourFeed).toBeVisible();
    await expect(homePage.articlePreview).toBeVisible();
    await expect(homePage.readMore).toBeVisible();
    await expect(homePage.popularTags).toBeVisible();
    await expect(header.conduitBannerText).toBeVisible();
    await expect(header.bannerText).toBeVisible();
    await expect(header.bannerLink).toBeVisible();
});

