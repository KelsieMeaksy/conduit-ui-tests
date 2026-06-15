import {expect, test} from '@playwright/test';
import {Navigation} from '../POM/navigation';

test.beforeEach(async ({page}) => {
    page.goto('https://conduit.bondaracademy.com/');
});

test('Verify that the Conduit icon is visible on the home page', async ({page}) => {
    const navigation = new Navigation(page);
    await expect(navigation.ConduitIcon).toBeVisible();
});