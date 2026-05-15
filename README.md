This is Cypress Learning
Overview:
1. Installed Cypress and Executed simple Login case
2. Understand default Timeout of the commands in cases of finding unavailable elements
3. How to interacte with basic element items: 
 - checkboxes
 - dropdown list
4. Simple structure POM (Page Object Model) in Cypress:
 - pages:
    - AmazonHomePage.js (return elements to execute search: textbox, seach button)
    - AmazonSearchResultPage.js (return search list )
 - tests
    - AmazonSearchTest.js (execute test by calling these elements from 2 pages )
5. Get Element Data by using cy.wrap()
6. Practice using WITHIN and EACH to get an element in a array
7. Get Data from API and Verify it
 - simple GET request
 - Practice with GET API request and verify: status, body length, no empty items with DESTRUCTURE response
 - Practice with Post API request and verify requestBody = responseBody using DESTRUCTURE
 - Practice with Put API request and verify
8. Practice with Before and BeforeEach, make the code becomes clean and easy to maintain
9. Use API to login and Verify the HomePage is displayed successful
10. Practice with Custom Command of Cypress
11. Practice simple POM and verify Header/Footer elements are visible
- models/components:
    - HeaderComponents.js (return elements to verify: logo brand, brand text, header menu list, header menu details)
    - FooterComponent.js (return elements to verify: AboutUs and ContactUs data + handle strings)
    - ProductDetailsComponent.js (return elements to verify: Img, Name, Price and Description of random product)
 - tests/components:
    - HeaderTest.js (verify)
    - FooterTest.js (verify)
    - ProductDetailsTest.js (Select random product -> verify: Img: be.visible, Name: have.text, Price: contain.text, Description: not.be.empty )
12. Practice with API of getting categories and using String literal
13. E2E for one simple scenario
14. Working with mochawesome report