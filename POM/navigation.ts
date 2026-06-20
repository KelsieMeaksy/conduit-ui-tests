import {Locator, Page} from '@playwright/test';   


export class Navigation {

readonly page: Page;
readonly conduitIcon: Locator;
readonly homeButton: Locator;
readonly signInNav: Locator;
readonly signUpNav: Locator;
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
//Sign In Page
readonly signInPageText: Locator;
readonly needAnAccount: Locator;
readonly signInEmailField: Locator;
readonly signInPasswordField: Locator;
readonly signInButton: Locator;
//Sign Up Page
readonly signUpButton: Locator;
readonly signUpText: Locator;

constructor(page:Page) {
this.page = page;

// Header/Nav
this.conduitIcon = page.locator('.navbar-brand' , {hasText: 'conduit'});
this.homeButton = page.locator('.nav-link' , {hasText: 'Home'});
this.signInNav = page.locator('.nav-link' , {hasText: 'Sign In'});
this.signUpNav = page.locator('.nav-link' , {hasText: 'Sign Up'});
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
//Sign In Page
this.signInPageText = page.getByRole('heading', { name: 'Sign in' });
this.needAnAccount = page.getByRole('link',  { name: 'Need an account?' });
this.signInEmailField = page.getByPlaceholder('Email');
this.signInPasswordField = page.getByPlaceholder('Password');
this.signInButton = page.getByRole('button', { name: 'Sign in' })
//Sign Up Page
this.signUpButton = page.getByRole('button', { name: 'Sign up' })
this.signUpText = page.getByRole('heading', { name: 'Sign up' });
};
}; 




/*

https://docs.github.com/en/actions/get-started/quickstart

//build CI/CD pipeline for the Conduit application using GitHub Actions. The pipeline should include the following steps:
1. Checkout the code from the repository.
2. Install dependencies using npm install.
3. Run tests using npm test.
4. Generate a test report and upload it as an artifact.
5. Deploy the application to a staging environment if all tests pass.

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
Ensure Sign up button cannot be clicked whilst fields are empty*/

//Learn to scrape values from the page and use them in your tests. 
//For example, you can scrape the article name and date, and then use them to verify that the article is displayed correctly in the feed.