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

