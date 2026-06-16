import {Locator, Page} from '@playwright/test';   


export class Navigation {

readonly page: Page;
readonly conduitIcon: Locator;
readonly homeButton: Locator;
readonly signInButton: Locator;
readonly signUpButton: Locator;
readonly globalFeed: Locator;
readonly articleUserIcon: Locator;
readonly articleName: Locator;
readonly articleDate: Locator;
readonly articleFavouriteIcon: Locator;
readonly yourFeed: Locator;
readonly articlePreview: Locator;
readonly readMore: Locator;
readonly popularTags: Locator;
readonly conduitBannerText: Locator;
readonly bannerText: Locator;
readonly bannerLink: Locator;


constructor(page:Page) {
this.page = page;

// Header/Nav
this.conduitIcon = page.locator('.navbar-brand' , {hasText: 'conduit'});
this.homeButton = page.locator('.nav-link' , {hasText: 'Home'});
this.signInButton = page.locator('.nav-link' , {hasText: 'Sign In'});
this.signUpButton = page.locator('.nav-link' , {hasText: 'Sign Up'});
// Banner
this.conduitBannerText = page.locator('h1[_ngcontent-ng-c3430183876]', {hasText: 'conduit'});
this.bannerText = page.getByText('A place to learn and practice test automation.');
this.bannerLink = page.getByRole('link', { name: 'https://bondaracademy.com' });
// Tabs & Sidebar
this.yourFeed = page.getByText('Your Feed');
this.globalFeed = page.getByText('Global Feed');
this.popularTags = page.locator('.sidebar', {hasText: 'Popular Tags'});
// Articles
this.articleUserIcon = page.getByText('A place to learn and practice test automation.');
this.articleName = page.locator('.author').first();
this.articleDate = page.locator('.date').first();
this.articleFavouriteIcon = page.getByRole('button', { name: /\d+/ }).first();
this.articlePreview = page.locator('.preview-link').first();
this.readMore = page.getByText('Read more...').first();

};
};
