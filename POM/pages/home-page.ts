import { Locator, Page } from '@playwright/test';

export class HomePage {

readonly page: Page;

readonly globalFeed: Locator;
readonly homeBannerText: Locator;
readonly articleUsername: Locator;
readonly articleDate: Locator;
readonly articleFavouriteIcon: Locator;
readonly yourFeed: Locator;
readonly articlePreview: Locator;
readonly readMore: Locator;
readonly popularTags: Locator;



constructor(page:Page) {
this.page = page;


this.yourFeed = page.getByText('Your Feed');
this.globalFeed = page.getByText('Global Feed');
this.popularTags = page.locator('.sidebar', {hasText: 'Popular Tags'});
this.homeBannerText = page.getByText('A place to learn and practice test automation.');
this.articleUsername = page.locator('.author').first();
this.articleDate = page.locator('.date').first();
this.articleFavouriteIcon = page.getByRole('button', { name: /\d+/ }).first();
this.articlePreview = page.locator('.preview-link').first();
this.readMore = page.getByText('Read more...').first();
}; 
};


