import { test, expect } from '@playwright/test';
import {HomePage} from '../POM/pages/home-page';
import {Header} from '../POM/pages/components/header.page';
import { ArticlePage } from '../POM/pages/article-page';

test.beforeEach(async ({page}) => {
    await page.goto('https://conduit.bondaracademy.com/');
});


//Article Page UI checks
test('Verify that all the expected elements are visible on the article page', async ({page}) => {
    const header = new Header(page);
    const article = new ArticlePage(page);
    const homePage = new HomePage(page);
        await (homePage.articlePreview).click();
        await expect(page).toHaveURL(/article\//);
        await expect(header.conduitIcon).toBeVisible();
        await expect(header.homeButton).toBeVisible();
        await expect(header.signInNav).toBeVisible();
        await expect(header.signUpNav).toBeVisible();
        await expect(article.articleBanner).toBeVisible();
        await expect(homePage.articleUsername).toBeVisible();
        await expect(homePage.articleDate).toBeVisible();
        await expect(homePage.articleFavouriteIcon).toBeVisible();
        await expect(article.articleFollowButton).toBeVisible();
});
