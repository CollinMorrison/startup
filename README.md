# startup
* I use Git frequently at my job, but haven't done much with merge conflicts. This was a good exercise to resolve a simple merge conflict and get an idea of what it means.

URL:  http://3.129.176.78/ OR getreced.click
SSH command: ssh -i ~/AWS/CollinMorrison/pem ubuntu@3.129.176.78

**Simon notes:**

* If the deployment script isn't working, check permissions on the file
* deployment command: "./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s simon"

**HTML Notes**
* <div>: creates a division
* <b>: bring attention

**CSS notes:**
* Selectors: "body {}, h1 {}. .class{}"
* Animations: "animation-name, animation-duration, @keyframe <animation-name> {}"
* Flex Box: "body { display: flex; flex-direction: row; }", "flex: 1;", "flex: 0 80px;"
* Grid: "display: grid;", "grid-template columns: repeat(auto-fill, minmax(300px, 1fr));", "grid-auto-rows: 300px;", "grid-gap: 1em;"

**BootStrap:**
* CSS framework
* Tutorial with basic explanations: https://www.w3schools.com/bootstrap5/index.php
* When you include bootstrap in your project, you can use bootstrap classes and custom classes as needed together.
* You can override a bootstrap class by using !important
* m-5 sets a margin of level 5
* bg-dark
* text-center
* h-100 sets a height of 100%

**JavaScript**
* Rest and Spread: someFunction(baseCase, ...theRestOfTheParameters)
  * someFunction(parameterOne, parameterTwo)
  * a = sumFunction(...array)
* Error Handling:
 * You can add a "finally" block after the catch block that houses code that always runs
* To include js in an HTML file, use the <script> tag
* To select an element by it's class, use `document.querySelector('')`
* You can use a for-loop syntax like `for (const [i, reservation] of reservations.entries()) {}` to use a hybrid iteration loop where you still have access to the index.
* Add classes to elements created by javascript with `element.classList.add('')`
 
 **Express**
 * Express simplifies and streamlines http route handling
 * To include express: `const express = require('express');
 * Declare app: `const app = express();`
 * Declare router: `const apiRouter = express.Router();`
 * http methods: `apiRouter.get(), apiRouter.post, etc.`
 * To listen on a port: `app.listen(port, () -> {
  console.log(`Listening on port ${port}`);
 });`

**MongoDB**
* use `npm install mongodb`
* to use environment variables: `const userName = process.env.MONGOUSER; const password = proccess.env.MONGOPASSWORD; const hostname = process.env.MONGOHOSTNAME;`
* mongo url: `mongodb+srv://${userName}:${password}@${hostname}`
 
 **Login Notes**
 * To authenticate a user, get the username that they input with something like `const userName = localStorage.getItem('username')`
 * Check if the username exists, then get the boolean of whether or not the user was authenticated with something like `if (userName) {
    const nameEl = document.querySelector('#userName');
    nameEl.value = userName;
    const user = await getUser(nameEl.value);
    authenticated = user?.authenticated;
  }`
 * fetch takes up to two parameters - 
 ** The endpoint being called ie. `'/api/auth/create'`
 ** The information to pass in the request ie. `method: post,
 body: JSON.stringify({ email: userName, password: password }),
 headers: {
 'Content-type': 'application/json; charset=UTF-8',
 },
 });`
 * To use fetch, use `const reponse = await fetch(...)`
 * To get the body of the response in json, use `const body = await response.json();`
