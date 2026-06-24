import { Locator, Page } from '@playwright/test';

export class Header {

readonly page: Page;
readonly conduitIcon: Locator;
readonly homeButton: Locator;
readonly signInNav: Locator;
readonly signUpNav: Locator;
readonly conduitBannerText: Locator;
readonly bannerText: Locator;
readonly bannerLink: Locator;


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
};
}; 



