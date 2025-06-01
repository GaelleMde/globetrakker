# Globetrakker

## [See the App!](https://globetrakker.netlify.app/)

![App Logo](../public/Logo.svg)

## Description

This web application was developed during Module 2 of my web development studies at Ironhack. It allows users to create a personalized list of countries they have visited, as well as a wishlist of countries they would like to explore. Users can add notes to each entry and view detailed information about each country.

#### [Client Repo here](https://github.com/GaelleMde/globetrakker)

#### [Server Repo here](https://github.com/GaelleMde/globetrakker-server)

## Technologies, Libraries & APIs used

HTML, CSS, Javascript, React, axios, Bootstrap, Vite

# Client Structure

## User Stories

- Homepage - As a user, I want to access the homepage so that I can understand what the app is about and easily navigate

- Events list \_ As a user, I want to see both the countries I’ve visited and those on my wishlist, displayed in the "Visited Countries" and "Places to Visit" lists, so I can easily keep track of my travels and future plans.

- Event details - As a user, I want to view detailed information about a country I have visited or wish to visit, along with my personal notes, so I can easily remember important details.

- Edit event - As a user, I want to edit my travel entries so that I can update the information when needed.

- Delete event - As a user, I want to delete travel logs I created in case they are posted by mistake and do not wish to go to a country.

- Search events - As a user, I want to search a country by its name , so that I can quickly find what interests me.

## Client Routes

## React Router Routes (React App)

| Path                            | Page                 | Components           | Behavior                                            |
| ------------------------------- | -------------------- | -------------------- | --------------------------------------------------- |
| `/`                             | Dashboard            |                      | Home page                                           |
| `/visitedcountries`             | VisitedCountriesList | VisitedCountriesCard | Check the country you already traveled to           |
| `/wishlist`                     | Wishlist             | WishListCard         | Check the country you would like to traveled to     |
| `/travelLogs/:travellogid`      | TravelLogDetails     |                      | See the details of your travel                      |
| `//wishlist/:wishlistId`        | WishlistDetails      |                      | See the details of a country on your wishlist       |
| `/travelLogs/:logType/add`      | AddPage              | Addform, SearchBar   | Add a travel entry to visited countries or wishlist |
| `/travelLogs/:travellogid/edit` | TravelLogEditForm    |                      | Edit a travel entry to visited countries            |
| `//wishlist/:wishlistId/edit`   | WishlistEditForm     |                      | Add a travel entry to the wishlist                  |
| `/AboutMe`                      | AboutMe              |                      | Learn more about the creator of this web app        |

## Other Components

- Navbar

## Links

### Developer

[Gaëlle Madelaine](https://github.com/GaelleMde)

### Project

[Repository Link Client](www.your-github-url-here.com)

[Repository Link Server](www.your-github-url-here.com)

[Deploy Link](https://globetrakker.netlify.app/)

### Slides

[Slides Link](https://www.canva.com/design/DAGo51T3xvM/J5eZp84Xro2Rz0efA4vJ8w/view?utm_content=DAGo51T3xvM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9a6070e445)
