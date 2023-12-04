import { BasePage } from '../../pages/basePage';
import { test, expect } from '@playwright/test';
import { MainSearchPage } from '../../pages/mainSearchPage';

let basePage, mainSearchPage

test('Search for UK in map and compare screenshot', async ({ page }) => {

  await test.step('Open main Google Maps page', async () => {
    basePage = new BasePage(page)

    await basePage.openBasePage()   
    await expect(page).toHaveTitle("Google Maps")
  })

  await test.step('Search for UK in map and compare screenshot', async () => {
    mainSearchPage = new MainSearchPage(page)
   
    await mainSearchPage.inputTextInSearchBoxAndSearch('UK')
    const headingNameLocator = await mainSearchPage.getHeadingNameLocator('United Kingdom')
  
    await expect(headingNameLocator).toBeVisible()

    expect(await page.screenshot()).toMatchSnapshot({ threshold: 1 });
  })
})