import { BasePage } from '../pages/basePage';
import { test, expect } from '@playwright/test';
import { MainSearchPage } from '../pages/mainSearchPage';

let basePage, mainSearchPage

const city1 = 'Paris'
const city2 = 'London'
const city3 = 'Warsaw'
const coordinates = '52.5200° N, 13.4050° E'
const address = 'GC94+X2R Berlin, Germany'

test.beforeEach('Open main Google Maps page', async ({ page }) => {
  basePage = new BasePage(page)
  mainSearchPage = new MainSearchPage(page)
  await basePage.openBasePage()
  
  await expect(page).toHaveTitle('Google Maps')
});

test(`Search for '${city1}' in maps and check '${city1}' is displayed as the headline text`, async ({ page }) => {

  await test.step(`Check search result page for ${city1} is loaded`, async () => {
    mainSearchPage = new MainSearchPage(page)

    await mainSearchPage.inputTextInSearchBoxAndSearch(city1)
   
    await expect(page).toHaveTitle(`${city1} - Google Maps`)
  })

  await test.step(`Check '${city1}' is displayed as the headline text`, async () => {
    mainSearchPage = new MainSearchPage(page)

    const headingNameLocator = await mainSearchPage.getHeadingNameLocator(city1)
  
    await expect(headingNameLocator).toBeVisible()
  })
});

test(`Search for '${city2}' in maps and check '${city2}' is displayed as the headline text and destination`, async ({ page }) => {
    
  await test.step(`Check search result page for '${city2}' is loaded`, async () => {
    mainSearchPage = new MainSearchPage(page)
  
    await mainSearchPage.inputTextInSearchBoxAndSearch(city2)
     
    await expect(page).toHaveTitle(`${city2} - Google Maps`)
  })

  await test.step(`Check '${city2}' is displayed as the headline text`, async () => {
    mainSearchPage = new MainSearchPage(page)

    const headingNameLocator = await mainSearchPage.getHeadingNameLocator(city2)
  
    await expect(headingNameLocator).toBeVisible()
  })

  await test.step(`Check '${city2}' is displayed in 'Destination' field`, async () => {
    mainSearchPage = new MainSearchPage(page)

    await mainSearchPage.clickOnDirectionsButton()
  
    await expect(mainSearchPage.destinationField).toHaveValue(`${city2}, UK`)
  })
});  

test(`Search for '${city3}' in maps, close search and choose '${city3}' from recent search`, async ({ page }) => {
 
  await test.step(`Check search result page for '${city3}' is loaded`, async () => {
    mainSearchPage = new MainSearchPage(page)

    await mainSearchPage.inputTextInSearchBoxAndSearch(city3)
   
    await expect(page).toHaveTitle(`${city3} - Google Maps`)
  })

  await test.step(`Check '${city3}' is displayed as the headline text`, async () => {
    mainSearchPage = new MainSearchPage(page)

    const headingNameLocator = await mainSearchPage.getHeadingNameLocator(city3)
  
    await expect(headingNameLocator).toBeVisible()
  })
  
  await test.step(`Close search and check that '${city3}' is not in search field anymore`, async () => {
    mainSearchPage = new MainSearchPage(page)
    
    await mainSearchPage.clickOnCloseSearchButton()
    await mainSearchPage.waitForDefaultSearchPlaceholder()

    await expect(mainSearchPage.searchGoogleMapsPlaceholder).toBeVisible()
  })

  await test.step(`Choose '${city3}' from recent search and check '${city3}' is displayed as the headline text`, async () => {
    mainSearchPage = new MainSearchPage(page)
    
    await mainSearchPage.clickOnRecentsButton()
    await mainSearchPage.clickOnRecentSearchValue(city3)
    const headingNameLocator = await mainSearchPage.getHeadingNameLocator(city3)
  
    await expect(headingNameLocator).toBeVisible()
  })
});

test(`Search for '${coordinates}' coordinates in maps and check '${address}' is showing as location on the left panel`, async ({ page }) => {
  
  await test.step(`Input '${coordinates}' coordinates and check '${address}' is showing as location on the left panel`, async () => {
    mainSearchPage = new MainSearchPage(page)
    basePage = new BasePage(page)

    await mainSearchPage.inputTextInSearchBoxAndSearch(coordinates)
    const addressLocator = await basePage.getLocatorByLabel(address)
   
    await expect(addressLocator).toBeVisible()
  })
});