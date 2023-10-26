# Apple Music Clone with React

This project is a simple Apple Music clone built using React, Styled Components, React Router, and Material UI. It allows you to explore and play music just like the real Apple Music app.

## Installation

To get this project up and running on your local machine, follow these steps:

Clone the repository

```bash
 git clone https://github.com/your-username/apple-music-clone.git
```

Navigate to the project directory

```bash
 cd apple-music-clone

```

Install dependencies

```bash
 npm install

```

Start the development server

```bash
 npm start
```

## Host Link
hemanthkrishna-apple-music-clone.netlify.app

## Technologies Used

- React: A popular JavaScript library for building user interfaces.
- Styled Components: A CSS-in-JS library that allows you to write actual CSS in your JavaScript files.
- React Router: A routing library for React that enables navigation between different components.
- Material UI: A UI library for React that provides pre-built, customizable components following Google's Material Design guidelines.

## Technologies Used

- React: A popular JavaScript library for building user interfaces.
- Styled Components: A CSS-in-JS library that allows you to write actual CSS in your JavaScript files.
- React Router: A routing library for React that enables navigation between different components.
- Material UI: A UI library for React that provides pre-built, customizable components following Google's Material Design guidelines.

## Features

Browse and play your favorite music.
Organize your library with playlists and favorites.
Search for songs, artists, and albums.
User-friendly interface inspired by Apple Music.

## components functionality

## login

This React component, named "Login," handles user authentication for a music app. It consists of a login form where users can input their email and password. The component communicates with an API endpoint for user authentication. If the authentication is successful, it updates the user's authorization status using the setAuthrise function from the UserContext. The component also offers the option to navigate to the sign-up page by clicking the "SignUp" button. It utilizes state management with the useState hook, makes API requests with fetch, and integrates context for user authentication. Styling is achieved with CSS classes, including Bootstrap-like UI components.

## DataLayer

This code sets up a React context for managing global state with a data layer pattern. It creates a DataLayerContext and exports a DataLayer component that wraps the app's children with a context provider. This provider initializes and manages state using the provided initialState and reducer functions, which are typical in React's use of the Context API. It also exports a custom hook useDataLayerValue for accessing the context's state and dispatch functions within components. This pattern enables centralized state management and sharing of data and actions across the entire React application.

## Home page

This code establishes a global state management system for a React application using the Context API. It creates a DataLayerContext and exports a DataLayer component that wraps the app's content, providing access to the global state and dispatch functions via the useDataLayerValue custom hook. This facilitates the sharing of state and actions across various components. The initialState and reducer parameters are used to initialize and modify the state. In this specific example, it is utilized in the "Home" component to manage user authentication and access tokens. The code also demonstrates usage of styled-components for styling, and it leverages React Router for routing with the Outlet component.

## Body

This React component, named "Body," is responsible for rendering the main content of a music application. It uses the Context API to access global state variables such as favorite and songs via the useDataLayerValue hook. It fetches and displays lists of new music releases, top trending songs, albums, and artists using asynchronous functions like getListOfMusic and getListOfAlbum. The component also utilizes styled-components for styling and React Router's Link for navigating to artist and album details pages. Additionally, it includes a "Footer" and "Contact" section at the end for more exploration and contact information.

## Many More.....

- Set up the project and UI design, Navbar
- Home Page and Featured Music, Music Player Component
- Browse and Search Music, Song, and Album Details Page
- Register and Login, Favorite Songs/ Liked Song
- Add Subscription Modal
- Adding Footer
