import {Locator, Page} from '@playwright/test';   


export class Navigation {

readonly page: Page;
readonly ConduitIcon: Locator;
/*readonly HomeButton: Locator
readonly SignInButton:: Locator
readonly SignUpButton: Locator
readonly GlobalFeed: Locator
readonly ArticleIcon: Locator
readonly ArticleName: Locator
readonly ArticleDate: Locator
readonly ArticleFavouriteIcon: Locator
readonly ArticleTitle: Locator
readonly ArticlePreview: Locator
readonly  ReadMoreButton: Locator*/

constructor(page:Page) {
this.page = page;
this.ConduitIcon = page.locator('.navbar-brand' , {hasText: 'conduit'});
/*this.HomeButton = page.locator('.nav-link' , {hasText: 'Home'});
this.SignInButton = page.locator('.nav-link' , {hasText: 'Sign In'});
this.SignUpButton = page.locator('.nav-link' , {hasText: 'Sign Up'});
this.GlobalFeed = page.locator('.nav-link active' , {hasText: 'Global Feed'});
this.ArticleIcon = page.locator
this.ArticleName = page.locator('.author');
this.ArticleDate = page.locator('.date');
this.ArticleFavouriteIcon = page.locator('.btn btn-sm btn-outline-primary');
this.ArticleTitle = page.getByRole
this.ArticlePreview = page.locator
this.ReadMoreButton = page.locator*/


};
};