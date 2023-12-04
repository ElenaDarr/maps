import { BasePage } from "./basePage"

let basePage

export class MainSearchPage {
    constructor (page) {
        this.page = page,
        this.searchField = page.getByRole('textbox', { name: 'Search Google Maps' })
        this.searchButton = page.getByRole('button', { name: 'Search' })
        this.directionsButton = page.getByText('Directions')
        this.destinationField = page.locator("div[role='combobox'] input[class='tactile-searchbox-input']").last()
        this.closeSearchButton = page.getByRole('button', { name: 'Close' })
        this.searchInputField = page.locator('#searchbox'),
        this.searchGoogleMapsPlaceholder = page.locator("div[aria-label='Search Google Maps']")
        this.recentSearchButton = page.getByText('Recents')
    }

    async inputTextInSearchBoxAndSearch (text) {
        await this.searchField.fill(text)
        await this.clickOnSearchButton()

        await this.page.waitForLoadState('domcontentloaded')
      }

      async clickOnSearchButton () {
        await this.searchButton.click()
      }

      async getHeadingNameLocator (text) {
        const locator = this.page.getByRole('heading', { name: `${text}`, exact: true })

        return locator
      }

      async clickOnDirectionsButton () {
        await this.directionsButton.click()
      }

      getSearchErrorLocator(text) {
        const locator = this.page.getByText(`Google Maps can't find ${text}`)

        return locator
      }

      async clickOnCloseSearchButton () {
        await this.closeSearchButton.click()
      }

     async waitForDefaultSearchPlaceholder () {
       basePage = new BasePage(this.page)

       await basePage.waitForLocatorToBeVisible("div[aria-label='Search Google Maps']")
    }

    async clickOnRecentsButton (){
      await this.recentSearchButton.click()
    }

    async clickOnRecentSearchValue (text){
      const locator = this.page.getByRole('button', { name: `${text} ${text}` })

      await locator.click()
    }
}