import {expect, test} from '@playwright/test';
import {Navigation} from '../POM/navigation';

test.beforeEach(async ({page}) => {
    await page.goto('https://conduit.bondaracademy.com/');
});

test('Verify that all expected elements are visible on the home page', async ({page}) => {
    const navigation = new Navigation(page);
    await expect(navigation.ConduitIcon).toBeVisible();
    await expect(navigation.HomeButton).toBeVisible();
    await expect(navigation.SignInButton).toBeVisible();
    await expect(navigation.SignUpButton).toBeVisible();
    await expect(navigation.GlobalFeed).toBeVisible();
    await expect(navigation.ArticleName).toBeVisible();
    await expect(navigation.ArticleUserIcon).toBeVisible();
    await expect(navigation.ArticleDate).toBeVisible();
    await expect(navigation.ArticleFavouriteIcon).toBeVisible();    
    await expect(navigation.yourFeed).toBeVisible();
});

