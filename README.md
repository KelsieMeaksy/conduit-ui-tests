# conduit-ui-tests
An automated UI verification test suite built with Playwright and TypeScript using the Page Object Model (POM) pattern for the Conduit website

**Test Planning**

**In scope**
- Visual checks of:
- Home Page
- Article Page
- Log In Page
- Sign Up Page

**Out of scope functionality**
- Functionality of adding articles
- Functionality of logging in
- Functionality of signing up 

**Risks**
- TBD

**Assumptions**
- Environment is stable during testing

**Test approach**
- Design tests using Playwright with TypeScript. Utilize the Page Object Model (POM) pattern for clean separation of elements and actions.
- Executing cross-browser testing across Chromium & Firefox.
- Includes UI verification testing.

**Entry criteria**
- UI elements are mostly stable.
- Environment has been deployed and is accessible.

**Exit criteria**
- 100% of the planned critical UI tests are automated and passing.

**Home Page**
Go to https://conduit.bondaracademy.com/
Ensure the following are visible:
- conduit icon
- Home button
- Sign in button
- Sign up button
Ensure we default to Global Feed
Ensure first article displays:
- Icon
- Name
- Date
- Favourite Icon
- Title
- Paragraph/preview
- Read more..

**Article Page**
Go to https://conduit.bondaracademy.com/
Click first article
Ensure URL contains https://conduit.bondaracademy.com/article/...
Ensure when title is clicked page displays:
- Conduit icon
- Home button
- Sign in button
- Sign up button
- Title
- Icon
- Name
- + Follow Button
- Favourite article button
- Article text
- Icon
- Name
- + Follow Button
- Favourite article button

**Sign In Page** 
Go to https://conduit.bondaracademy.com/
Click sign in button
Ensure URL is https://conduit.bondaracademy.com/login
Ensure we display:
- Conduit icon
- Home button
- Sign in button
- Sign up button
Ensure text 'Sign in' displays
Ensure 'Need an account?' displays
Ensure 'Need an account?' is hyperlinked and visible
Ensure Email field displays
Ensure Email field has placeholder text 'Email'
Ensure Password field displays
Ensure Password field has placeholder text 'Password'
Ensure Sign In button displays
Ensure Sign in button cannot be clicked whilst fields are empty

**Sign Up**
Go to https://conduit.bondaracademy.com/
Click sign up button
Ensure URL is https://conduit.bondaracademy.com/register
Ensure we display:
- Conduit icon
- Home button
- Sign in button
- Sign up button
Ensure 'Sign up' text displays
Ensure 'Need an account?' is hyperlinked and visible
Ensure Username field displays
Ensure Email field displays
Ensure Password field displays
Ensure Sign up button displays
Ensure Sign up button cannot be clicked whilst fields are empty
