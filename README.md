# Meta-Front-End-Developer
Documenting my journey and progress of the Meta Front-End Developer Cert through Meta Elevate


## Objectives

* Document, study, and learn course materials
* Build at least three projects
* Portfolio project which houses existing projects

## Current stage

### Course 1 - Introduction to Front-End Development: 

Complete! - https://coursera.org/share/749b19d28c0eea372d32a8408f179e07 

![Screen Shot 2023-02-19 at 1 31 58 PM](https://user-images.githubusercontent.com/44537080/219967903-23eb67dc-6a09-422b-b005-750e9fe436b7.png)

### Course 2 - Programming with Javascript

#### Week 4 - Writing tests with Jest

I have been stuck on week 3 and week for the longest. I think I lost a bit of motivation due to my demands at work and limited time with my family and friends because of it. Getting back on track now. Another component to the delay is testing has always been the more difficult subject for me to understand, at least in the coding bootcamp I attended. I will add here some info that may be useful, the tools and frameworks have newer versions since the time this course was created: 

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


#### Feedback on this module/section of the course:
1. It got difficult to follow along with what the instructor was saying, mainly because the closed captions weren't 100% correct, and because the instructional videos were so blurry, it was nearly impossible to make out what I was reading. I will have to test this on other screens to be sure and will report back with updates.
2. 
