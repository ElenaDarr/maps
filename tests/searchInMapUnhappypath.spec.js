import { BasePage } from '../pages/basePage';
import { test, expect } from '@playwright/test';
import { MainSearchPage } from '../pages/mainSearchPage';

let basePage, mainSearchPage

const invalidSearchValue = '...'

test.beforeEach('Open main Google Maps page', async ({ page }) => {
  basePage = new BasePage(page)
  mainSearchPage = new MainSearchPage(page)
  await basePage.openBasePage()
  
  await expect(page).toHaveTitle("Google Maps")
});

test(`Search for ${invalidSearchValue} in maps and check search error message is displayed`, async ({ page }) => {
    
  await test.step(`Check search result page for ${invalidSearchValue} is loaded`, async () => {
    mainSearchPage = new MainSearchPage(page)

    await mainSearchPage.inputTextInSearchBoxAndSearch(invalidSearchValue)
    await expect(page).toHaveTitle(`${invalidSearchValue} - Google Maps`)
  })   

  await test.step(`Check search error message is displayed for '${invalidSearchValue} search value`, async () => {
    mainSearchPage = new MainSearchPage(page)
    
    const errorMessageLocator = mainSearchPage.getSearchErrorLocator(invalidSearchValue)
    await expect(errorMessageLocator).toBeVisible()
  })
});  

test('Verify search is not working for empty search field', async ({ page }) => {
  mainSearchPage = new MainSearchPage(page)

  await mainSearchPage.clickOnSearchButton()
  await expect(page).toHaveTitle("Google Maps")
});
