<style>
b { color: purple;} 
.one b { color: black; }
</style>

# recipes-react app

This is a small react app designed for learning react that demonstrates the following concepts:

<div class="one"> 
    <ul class="one">
        <li>Using <b>Functional Components</b> instead of React Class Components</li>
        <li>Using React <b>useState</b> and <b>UseEffect</b> hooks</li>   
        <li>Acquiring <b>data from an API</b> </li>
        <li>Using Javascript <b>async</b> and <b>await</b> instead of promises</li>
        <li><b>Deconstructing props</b> and using those values in the UI</li>
        <li>Using an <b>inline function</b> for an event</li>
        <li>Calling a <b>function from an onClick</b> event</li>
        <li>Using <b>.map</b> to provide iteration of an object</li>
        <li>Creating and using a <b>CSS module</b></li>
    </ul>
</div>

## Get an edaman.com APP_KEY and API_KEY

- Go to the [edaman site](https://www.edamam.com)
- Click on <b>MENU</b>
- Click <b>Sign In</b> from the menu
- Click <b>Sign Up</b>
- Provide your email and a password
- Click <b>Sign In</b> from the menu, then log in to the edaman site with the email and password you provided
- Click on <b>DASHBOARD</b> > click <b>Account</b> > click <b>Personal Details</b>
- Make a note of the <b>Username</b> that edaman has assigned to you
- Click <b>API Developer Portal</b> at the top of the page
- Click <b>SIGN UP</b> in the Recipe Search card
- Enter your Username, email, password, confirm password and enter None for the Organization Name.
- Leave the plan chosen as <b>Developer</b>
- Check the <b>I Agree to Term & Privacy Policy</b>; then click <b>SIGN UP</b>

### Where are the APP_ID and API_KEY for my account and where do they go?

- Go to the [edaman site](https://www.edamam.com)
- Click on <b>MENU</b>
- Click <b>Sign In</b> from the menu and sign in if you have not already done so.
<br><br>
- Click <b>DASHBOARD</b> > click <b>Applications</b> > click the <b>View</b> button
- Both your <b>Application ID</b> and your <b> Application Keys</b> display in green
- Copy the <b>Application ID</b> to the APP_ID value in constants/index.js
- Copy the <b>Application Keys</b> to the API_KEY value in constants/index.js

NOTE: As this is a free account, it is limited. If you reach your limitation, no data will be returned, and a fetch error appears in the browser console. However, if you wait awhile (less than 10 minutes), your limit gets reset, and you can resume working on and testing your app.

## Github Commands

### Clone this github repository

`git clone https://github.com/lorilevy/recipes-react.git`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
