**Framework overview**:

Test automation framework (Playwright + JavaScript) for https://www.google.com/maps website. Framework contains 6 functional tests (happy- and unhappypath) and 1 non-functional (visual comparison). HTML reporter with screenshots and video for failed tests. 

**How to run tests**: 

Prerequisites: Playwright and Node.js are installed. 

Clone repository and open it in a code editor. Open terminal and run the following commands:

- npm install: installing all the dependencies. 
- npx playwright test --headed: running tests in headed mode.
- npx playwright show-report reports\playwright-report: showing test result report.


**Included test scenarios**: 

**Happypath**

*Acceptance Criteria 1*:
> Given a user is on the Google Maps page
> 
> When the user enters “Paris” in the search box
> 
> AND clicks “Search”
> 
> Then the left panel should have "Paris" as the headline text

*Acceptance Criteria 2*:

> Given a user is on the Google Maps page
> 
> When the user enters “London” in the search box
> 
> AND clicks “Search”
> 
> Then the left panel should have "London" as the headline text
> 
> When the user clicks the “Directions” button
> 
> Then the destination field should contain "London"

*Acceptance Criteria 3*:

> Given a user is on the Google Maps page
>
>When the user enters "Warsaw" in the search box
> 
>AND clicks “Search”
> 
>Then the left panel should have "Warsaw" as the headline text
> 
>When user clicks "Close" button on search panel
> 
>AND clicks "Recents" on the side bar
> 
>Then "Warsaw" should appear on left panel
> 
>When user click on "Warsaw" on the left panel
> 
>Then the left panel should have "Warsaw" as the headline text

*Acceptance Criteria 4*:

>Given a user is on the Google Maps page
>
>When the user enters '52.5200° N, 13.4050° E' coordinates in the search box
>
>AND clicks “Search”
>
>Then the left panel should have "'GC94+X2R Berlin, Germany'" as address

**Unhappypath**

*Acceptance Criteria 1*:
>
>Given a user is on the Google Maps page
>
>When the user enters ... in the search box
>
>AND clicks “Search”
>
>Then the left panel should have "Google Maps can't find ..." as error message

*Acceptance Criteria 2*:

>Given a user is on the Google Maps page
>
>When the user clicks “Search”
>
>Then search is not happening
>
>AND page title is "Google Maps"


**Visual**

*Acceptance Criteria 1*:

>Given a user is on the Google Maps page
>
>When the user enters "UK" in the search box
>
>AND clicks “Search”
>
>Then the left panel should have "United Kingdom" as the headline text
>
>AND screenshot is correct
