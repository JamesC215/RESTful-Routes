# RESTful-Routes Web Application
## Description

As a cohort of General Assembly SEI-73, we were given the task of creating a web application and deploying it through Heroku. 

The requirements of this app were that it should have full CRUD functionality using the MEN (MongoDB, Express, Node.js) application stack and also that we had to implement OAuth authorisation to protect certain routes in the project.

I wanted to create a Rock Climbing Planner, to be able to plan routes and have details of what equipment would be needed, and if it had been completed yet.

As a Rock Climber myself, I thought it would be a good app to create.

## Deployment link


## Getting Started/Code Installation

Fork and clone this repo if you want to take a deeper look into the code.

You can also access the files through GitHub in my repository.

## Timeframe & Working Team (Solo/Pair/Group)

We were asked to work individually on this project and given four days on Project Week to complete the assigned task.

## Technologies Used

**Back End**
- MongoDB & Mongoose - database usage for the application
- Express - creating a skeleton app using Express Generator and implementing EJS into the project
- Node.js - running the app outside the browser and installing relevant packages

**Front End**
- EJS - embedded JavaScript into the HTML
- CSS - for styling the application
- Bootstrap - additional styling for the application
- HTML - to display information on pages

**Development Tools**
- VS Code - to write code and add features
- Chrome Dev Tools - to debug and help figure out routes, cookies etc.
- Google Developers Console - for Authentication and API usage
- Terminal/Command Line - creation of folders/files and downloading of packages needed for the project


## Brief

See below the brief given my my instructional team:

Your App Must:

☐ Have at least 2 data entities (data resources) in addition to the User Model - one entity that represents the main functional idea for your app and another with a One:Many or Many:Many relationship with that main entity (embedded or referenced).

☐ Use OAuth authentication.

☐ Implement basic authorization that restricts access to features that need a logged in user in order to work (typically CUD data operations) by "protecting" those routes from anonymous users using the ensureLoggedIn middleware from the OAuth lesson. In addition, ensure that editing and deletion of a data resource can only be done by the user that created that data (this is done in the controller - refer to the Guide to User-Centric CRUD).

☐ Have full-CRUD data operations somewhere within the app's features. For example, you can have functionality that Creates & Updates a post and satisfy Delete functionality by implementing the ability to delete comments.

☐ Be styled such that the app looks and feels similar to apps we use on a daily basis - in other words, it should have a consistent and polished user interface.

☐ Be deployed online (Heroku).

Optionally, Your App May:

☐ Consume a third-party API. If you choose to implement this option, it's likely that the data from the API will be a key data resource in your app, therefore it's important to consider how to implement whatever CRUD data operations will apply. For example, when will data from the API find its way into your database? Be sure to discuss with an instructor when planning your app's features.

☐ Expose its own API where it returns data resources as JSON.



Necessary Deliverables

☐ A working full-stack app that meets or exceeds the above technical requirements, built by you, and hosted on Heroku.

A README.md file with these sections (here's a basic template):☐ App Title: Contains a description of what the app does and optional background info.☐ Screenshot(s): A screenshot of your app's landing page and any other screenshots of interest.☐ Technologies Used: List of the technologies used.☐ Getting Started: Include a link to the deployed app and your Trello board with the project's planning.☐ Next Steps: Planned future enhancements (icebox items).

## Planning

For the majority of the planning stage, I used a Trello Board with all of the instructions/information I would need to create the project, including Wireframes  and an ERD to guide me through the MVC stage of my project.

### Find below a screenshot of an example of one of my wireframes:
To create my wireframes, I used https://excalidraw.com/

<img width="1354" alt="Screenshot 2023-07-14 at 16 33 18" src="https://github.com/JamesC215/RESTful-Routes/assets/136309778/703e2aa0-f18c-49d0-bf7b-373a7211fde2">

### See below a screenshot of my Trello Board:
To create this, I used https://trello.com/

<img width="1427" alt="Screenshot 2023-07-20 at 11 25 34" src="https://github.com/JamesC215/RESTful-Routes/assets/136309778/f2914ed0-730f-4cec-91c1-802aa81e517d">


### Please see a screenshot of my ERD below:
To create my ERD, I used the website: https://www.lucidchart.com/pages/

<img width="952" alt="Screenshot 2023-07-14 at 15 31 24" src="https://github.com/JamesC215/RESTful-Routes/assets/136309778/2b9c7328-70b1-44a9-a0c1-32f72a9b0d0b">

## Build/Code Process

Instructions

The Build/Code Process will be the longest section of your ReadMe and will be most insightful to the engineers that review them. This is where you will discuss the steps you took to code the project.

You want to see your ReadMes as a way to walk the engineers through your approach and problem solving from the start of the project through to the end.

You'll need to include a minimum of 3-4 code snippets, highlighting code you're particularly proud of and these code snippets will have descriptions on what you did, how and why to set the context of the snippet you include. These explanations are important for the engineers, as they will want to understand what you did and the reasoning behind the steps you took.

You don't need to document every single thing you coded, but walk them through the key sections of the project build.

For any group project, you will just focus on your contributions. 

Some people will document the build/code process by discussing the key stages they worked on. Others will do a day by day guide. It’s entirely up to you how you structure this, as long as you discuss all the key things above.

Insert your Build/Code Process here:

To begin my build, I started by creating a skeleton app through Express-Generator to create a rudimentary Express application that I could edit to build my project.

I then installed all of the relevant packages I would need by running the command npm (Node Package Manager) to install what I needed, such as Mongoose, Google OAuth and Method_Override.

I then initialised my database through a .env file, and passed it into a config folder that included a database file.

After doing these steps, I created basic landing pages that I would need through the views folder, after which I could move on to creating basic navigation.

I created basic navigation around the app using the MVC method, of which I created hyperlinks through HTML and attached GET requests so the server would recognise that we were wanting to navigate to a new page.

Then, I moved onto adding features to my app, of which the CREATE functionality came first:



## Challenges

One of my main challenges I found was sometimes when creating new functionality for the application, it would sometimes break other lines of code in my application. 

To help solve this, I would use Chrome Dev Tools to help work out certain routes when I was clicking buttons, for example, and then jump back into the code and edit certain routers etc.

Another challenge was CSS, which I struggle with at the best of times.

To help solve this, I implemented some Bootstrap into my application, which is easier to use than CSS I find. I will opt to learn more about it in the future.

## Wins

Instructions

The Wins section is your opportunity to highlight the aspects of your project you are most proud of. See this as your chance to showcase these parts of your projects to the engineers reading your ReadMes.

Things you could discuss here:

Interesting problem solving you did
Strong sections of code
Collaboration with other team members
Visual design of the project

Insert your Wins here:


## Key Learnings/Takeaways

This is my first time using Bootstrap in an application, which on first impressions I find a lot easier to implement than using standard CSS stylings. I will work on it a bit more and hopefully be able to use it more efficiently in future projects.

I feel like I know a lot more about the MVC pattern after using it to implement functionality into my application.

I know now I need to be a bit more proactive when I am coding, as I get stuck on one section for a long while, whereas I find I should leave it alone and go and do other things to refresh myself and hopefully find a solution when I return to the problem.

## Bugs

TBC

## Future Improvements

Upon completion of the project, I had several things I wanted to implement but I either did not have the time or the technical ability to do so.

These include:
- Adding an Outdoor Climbs page, which would have a GeoLocation tag users could update so other users can see where the climb is.
- Add a gym page for the app.
