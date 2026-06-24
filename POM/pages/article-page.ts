import { Locator, Page } from '@playwright/test';

export class ArticlePage{

readonly page: Page;
//Article Page
readonly articleBanner: Locator;
readonly articleFollowButton: Locator;

constructor(page:Page) {
this.page = page;


// Article Page
this.articleBanner = page.locator('.banner');
this.articleFollowButton = page.getByRole('button', { name: /Follow/i}).first();
};
}; 



