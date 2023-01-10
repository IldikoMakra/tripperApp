# The Tripper App

Hei,
Olen Ildikó Makra, ohjelmistotekniikan opiskelija Jyväskylän ammattikorkeakoulusta. Tämä full stack ohjelmistoprojekti on tehty 2022 kesän opintojaksoa varten. Kehitys ja testaus jatkuu edelleen.

## Julkaistu Demoversio

[Pyöräretket-App-Demo-cPouta-Pilvessä](http://86.50.228.217/)

## Table of contents

React ja NodeJs Express, tietokantana MongoDB Atlas

## Määrittely

Sovelluksen perusideana oli tehdä MERN-stackilla single page-sovellus Pyöräretket, jolla käyttäjä pääsee selailemaan kirjautuneiden käyttäjien tekemiä pyöräretkiä ja lisätä niitä itse. Käyttöliittymä on englanninkielinen ja sitä koskeva alkuperäinen vaatimusmäärittely näkyy kuvassa alla.

- Frontend: React
- Backend: Node Express
- Database: Mongo Atlas

## Features

- Registration
- User Login
- Read stories with user selection (public)
- List all users (public)
- Post a new story (users only)
- Edit posted story (users only)

## API endpoints

**GET /api/stories/all** - Get all stories from the DB

**GET /api/stories/user** - Get all stories of one selected user

**POST /api/stories** - Create a new story - **Private Access**

**PATCH /api/stories:storyid** - Edit one existing story - **Private Access**

**DELETE /api/stories:storyid** - Delete one story from the DB

**POST /api/users/signup** - Create new user account

**GET /api/users** - Get all users

**POST /api/users/login** - User Login

**GET /api/users/:id** - Find a User by ID

**PATCH /api/users/:name** - Update User Data - **Private, Under Test**

**POST /api/users/upload** - Upload a user image

**DELETE /api/users/:id** - Delete a user - **Private**

## React Components

Layout components and pages are directly connected to App.js while the components are connected to the different pages as shown in the image below.

![component-diagram](Component-Diagram.png)

## Testing

Example Users for testing (Anna, Beata, Clara)

- User 1: Anna, annA123
- User 2: Beata, beatA456
- User 3: Clara, clarA789

## Demo

[Link to the live version](http://86.50.228.217/)
