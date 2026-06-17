import {Locator, Page} from '@playwright/test';   


export class Navigation {

readonly page: Page;
readonly conduitIcon: Locator;
readonly homeButton: Locator;
readonly signInButton: Locator;
readonly signUpButton: Locator;
readonly globalFeed: Locator;
readonly homeBannerText: Locator;
readonly articleUsername: Locator;
readonly articleDate: Locator;
readonly articleFavouriteIcon: Locator;
readonly yourFeed: Locator;
readonly articlePreview: Locator;
readonly readMore: Locator;
readonly popularTags: Locator;
readonly conduitBannerText: Locator;
readonly bannerText: Locator;
readonly bannerLink: Locator;
//Article Page
readonly articleBanner: Locator;
readonly articleFollowButton: Locator;


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
this.homeBannerText = page.getByText('A place to learn and practice test automation.');
this.articleUsername = page.locator('.author').first();
this.articleDate = page.locator('.date').first();
this.articleFavouriteIcon = page.getByRole('button', { name: /\d+/ }).first();
this.articlePreview = page.locator('.preview-link').first();
this.readMore = page.getByText('Read more...').first();
this.articleBanner = page.locator('.banner');
this.articleFollowButton = page.getByRole('button', { name: /Follow/i}).first();

};
};


//Learn to scrape values from the page and use them in your tests. 
//For example, you can scrape the article name and date, and then use them to verify that the article is displayed correctly in the feed.
