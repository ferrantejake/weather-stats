# weather-stats
NodeJS weather app

## What should this application do?
This application that will be reaching out to weather services
(provided via npm modules or using HTTP requests) and make a webhook
call every 20 minutes giving a status update of the current weather.

To do this, the following will be required:
- Setup a timer
- Establish a connection with a weather service
- Translate and handle data as it comes in
- Make webhooks calls every 20 minutes to an online endpoint or when
    there is a drastic change in weather.

## How does it work? (using Gulp..)
They way I have set this up is very similar to the current architecture
that is used at Droplit, using TypeScript and Gulp to lint and build the
project, respectively. Gulp is the automation that many software development
teams thrive on. Either that or Grunt. This does all of the work of taking
TypeScript and converting it into JavaScript, linting to tell you if the
TypeScript is wrong, and building and running the project.

__Gulp commands__
- __gulp build__ - _Lints and builds the project's source files (`app/src`)
    into JavaScript and places the lint and js files in `app/lib`._
- __gulp watch__ - _Does the same thing as build, but every time you make an
    change to the source files, the project will rebuild._
- __gulp clean__ - _in case of emergency, this removes the lib folder so you
    can start over with a fresh build,_
- __gulp debug__ - _starts the application in debug mode. Debug mode attaches
    to watch so if you are debugging with watch on in another window, the debugging
    application will restart automatically._

## Places to get started

### JavaScript
Anything JavaScript-related can be found here or on StackOverflow. I would highly
reccomend googling any question you have before reaching out to me, as there is almost
certaintly an answer online, as the JavaScript community is breathtakingly large.

[https://developer.mozilla.org/en-US/](https://developer.mozilla.org/en-US/)

### NodeJS & NPM
There is a lot of good information on working with npm and installing modules.

[https://docs.npmjs.com/getting-started/installing-node](https://docs.npmjs.com/getting-started/installing-node)

### TypeScript
This is a superset of the JavaScript (ES) language, which compiles
down into JavaScript. It is super handy because it enables TypeScript
for the JavaScript language, something you see in other modern languages
like C# or Java.

For more information on TypeScript, take a look at the TypeScript Handbook.
reference: [https://www.TypeScriptlang.org/docs/tutorial.html](https://www.TypeScriptlang.org/docs/tutorial.html)

#### Things that are TypeScript-related that you'll find in this project:
- Typings - _adds type references for external modules (like an ext. lib)_
- .ts files - _TypeScript files_
- .tslint.json - _adds linting for your code editor_
- .tsconfig - _configuration file for the TypeScript compiler_

### Gulp
This project has already been setup with all of the automation that you could
really want using the tools specified. If you'd like to learn more about
the build tool chain and how grunt does it's automation, as well as learning
how to build automated tool chains with this, the Gulp git page is helpful.

[https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
