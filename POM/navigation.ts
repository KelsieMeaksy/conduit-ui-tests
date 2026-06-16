import {Locator, Page} from '@playwright/test';   


export class Navigation {

readonly page: Page;
readonly ConduitIcon: Locator;
readonly HomeButton: Locator;
readonly SignInButton: Locator;
readonly SignUpButton: Locator;
readonly GlobalFeed: Locator;
readonly ArticleUserIcon: Locator;
readonly ArticleName: Locator;
readonly ArticleDate: Locator;
readonly ArticleFavouriteIcon: Locator;
//readonly ArticleTitle: Locator;
//readonly ArticlePreview: Locator;
//readonly ReadMoreButton: Locator;
//readonly popularTags: Locator;
//readonly conduitbannertext: Locator;
//readonly bannerText: Locator;
//readonly bannerLink: Locator;
readonly yourFeed: Locator;


constructor(page:Page) {
this.page = page;
this.ConduitIcon = page.locator('.navbar-brand' , {hasText: 'conduit'});
this.HomeButton = page.locator('.nav-link' , {hasText: 'Home'});
this.SignInButton = page.locator('.nav-link' , {hasText: 'Sign In'});
this.SignUpButton = page.locator('.nav-link' , {hasText: 'Sign Up'});
this.GlobalFeed = page.getByText('Global Feed');
this.ArticleUserIcon = page.getByRole('link').nth(5); //this is brittle/flaky try find an alternative
this.ArticleName = page.locator('.author').first();
this.ArticleDate = page.locator('.date').first();
this.ArticleFavouriteIcon = page.getByRole('button', { name: /\d+/ }).first();
this.yourFeed = page.getByText('Your Feed');
//readonly ArticleTitle: Locator;
//readonly ArticlePreview: Locator;
//readonly ReadMoreButton: Locator;
//readonly popularTags: Locator;
//readonly conduitbannertext: Locator;
//readonly bannerText: Locator;
//readonly bannerLink: Locator;
};
};
