# Meta-Front-End-Developer
Documenting my journey and progress of the Meta Front-End Developer Cert through Meta Elevate


## Objectives

* Document, study, and learn course materials
* Build at least three projects
* Portfolio project which houses existing projects

## Current stage

### Course 2 - Programming with JavaScript

Complete! - https://coursera.org/share/63c15f3b5306ec64b756e597bc0e2d58 

![Coursera WB2D4WHMLFF9](https://github.com/Mattx2k1/Meta-Front-End-Developer/assets/44537080/406739af-a918-4639-8cf3-1bb0e0199ee3)

Course 2 - Programming with Javascript (notes; will do this in another section going forward to avoid clutter)

#### Week 4 - Writing tests with Jest

I have been stuck on week 3 and week for the longest. I think I lost a bit of motivation due to my demands at work and limited time with my family and friends because of it. Getting back on track now. Another component to the delay is testing has always been the more difficult subject for me to understand, at least in the coding bootcamp I attended. I will add here some info that may be useful, the tools and frameworks have newer versions since the time this course was created: 

Steps:
1. Checking NodeJS and version installed
2. Checking NPM and version installed
3. Checking Jest and version installed
4. Installing Jest

Checking to see if I have NodeJS installed on my system:

```
node --version
```
- Instructor version: 16.15
- My version: v18.8.0


Checking to see if I have NPM installed on my system:

```
npm --version
```

- Instructor version: 8.5
- My version: 9.8.1

Checking to see if I have Jest testing framework installed on my system:

```
jest --version
```

- Instructor version: 'command jest not found'
- My version: 'command not found: jest'

We then get into the install steps, which I tried several times and Jest is still not found. Documenting below:

Adding the package.json file to the project:

```
npm init -y
```

"The dash y flag automatically answers yes to all the questions that init command asks during installation."

"Since I want to use the jest testing library, I'll need to install it locally, which means installing it for this project. So I run:"

```
npm install --save -dev jest
```

The above seemed to work, my terminal window showed the library being downloaded or loaded in. Message:

```
npm WARN config dev Please use --include=dev instead
added 1 package, changed 61 packages, and audited 293 packages in 16s
```

I see a message that '31 packages are looking for funding run `npm fund` for details'. I run this:

```
npm fund
```

I try using:

```
jest --version
```

Getting the same result:

```
zsh: command not found: jest
```

I found this in my search:
https://stackoverflow.com/questions/50138532/command-not-found-jest

"I ran into similar issue. I fixed it by installing jest globally.":

```
npm install -g jest
```

I also run:

```
npm fund
```

Success! I now see '29.7.0' as a result to 'jest --version'

Side note; I forgot I had to do a 'git pull' before doing a 'git push' since I updated this readme file via the remote repository here on Github. Seems everything is up to date; including the updated Jest modules.

Next steps:
1. changes are made to the package.json file. In the "test" key/value pair entry under the "scripts" object I replace the text that is assigned to the "test" key, with "jest" and save the file.
2. create addFive.test.js
3. import the addFive function by creating a variable const:
4. write the test

Import function:

```
addFive = require(`./addFive`)
```

Write the test:

```
test('returns the number plus 5', () => {
    expect(addFive(1)).toBe(6);
})
```

Still not working as expected; I do not see a pass or fail message. I got this error message:

```
/addFive.test.js:4
test('returns the number plus 5', () => {
^

ReferenceError: test is not defined
```

I believe this is because I installed Jest globally and still need to install it correctly locally. Even though I'm now returning a version number as a result for the 'jest --version' command, it seems something else is missing.

Seeing this on the discussion forums: 

> open terminal 
> 
> step 1 : type cd ./jest-testing
> 
> step 2 :  type npm install --save-dev jest 
> 
> ---wait----
> 
> step 3 : type npm run test 
> 
> --wait--
> 
> if everything is green it means u have passed .

It looks like that folder is not present in that path. 

https://www.coursera.org/learn/programming-with-javascript/discussions/forums/GfMA9PNNEeyFLA7-B9YT0Q/threads/m4GkZjtJEe6fqw5g8_UaQQ

Looks like the correct syntax to add it locally is:

```
npm install --save-dev jest
```

I can see this better now with the improved screen resolution. I can also see the attribute changes for the "dependencies" key to "devDependencies":

![Screen Shot 2023-09-17 at 12 59 49 PM](https://github.com/Mattx2k1/Meta-Front-End-Developer/assets/44537080/c8b4e15b-3d07-4fd0-8134-a974fa878eee)


Now I am getting more errors because of readme file updates. Let me save this so far and try again.

Steps:
1. found this: https://stackoverflow.com/questions/19085807/please-enter-a-commit-message-to-explain-why-this-merge-is-necessary-especially
2. Decided to open a new terminal window
3. git commit -m"updated readme from remote repository"
4. saved/commit this readme file on github
5. See another error message; rinse and repeats steps 2-4 to screenshot error (it disappears as I scroll)
6. Advice in the above article from stackoverflow still not working. Just opened a new terminal tab and did a new git commit command to save time
7. git pushed my remaining changes.

And success, after installing the Jest framework local to the project, using the exact command line syntax, I get the expected test results when running the test:

<img width="395" alt="Screen Shot 2023-09-17 at 1 04 42 PM" src="https://github.com/Mattx2k1/Meta-Front-End-Developer/assets/44537080/22e5b35f-2e13-45c0-9315-d3c76d6fc34f">


#### Feedback on this module/section of the course:
1. It got difficult to follow along with what the instructor was saying, mainly because the closed captions weren't 100% correct, and because the instructional videos were so blurry, it was nearly impossible to make out what I was reading. I will have to test this on other screens to be sure and will report back with updates. Nevermind; I see now in the settings menu at the bottom-right of the video embed that the quality can be adjusted. 
2. I got caught up for a while just figuring out how to get the expected output from the console and installing the prject dependencies. It was a good learning experience to work through and troubleshoot why it all wasn't working. I complicated this by my use of git and github within the project, but I think it helped with my learning overall.


### Course 1 - Introduction to Front-End Development: 

Complete! - https://coursera.org/share/749b19d28c0eea372d32a8408f179e07 

![Screen Shot 2023-02-19 at 1 31 58 PM](https://user-images.githubusercontent.com/44537080/219967903-23eb67dc-6a09-422b-b005-750e9fe436b7.png)


