# BemAgroTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

## Environment variables

It is necessary to create an environment.ts file in the src/environments folder.

An example of what this file should look like is in the src/environment.example file

### Description of environment variables

GOOGLE_API_KEY: You need to create this key in google cloud and go to credentials

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Description

- Search for a user in the GitHub API based on username
- Build a list of informed users
- By clicking on the username, access a screen with details, where you need to show the information returned from the API:
  - At that moment, print the user's location on the map using LeafLet tools such as marker or circle.
- Remove user from list
