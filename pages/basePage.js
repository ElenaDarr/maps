export class BasePage {
    constructor (page) {
        this.page = page,
        this.accetpAllButton = page.getByRole('button', { name: 'Accept all' })
      }

    async openBasePage () {
      await this.page.goto('', { waitUntil: 'domcontentloaded' })
      await this.clickOnAcceptAllButton()
    }

    async clickOnAcceptAllButton () {
      await this.accetpAllButton.click()
    }

    async waitForLocatorToBeVisible (locator){
      await this.page.waitForSelector(locator, { state: 'visible' });
    }

    async getLocatorByLabel (label) {
      const locator = this.page.getByLabel(label)

      return locator
    }
}