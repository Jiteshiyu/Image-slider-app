# Snapslide

An Image Slider application built with React.

![React](https://img.shields.io/badge/React-007ACC?style=for-the-badge&logo=react&logoColor=white)
![JSX](https://img.shields.io/badge/JSX-React%20Component-informational?style=for-the-badge&logo=react)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [How It Works](#how-it-works)
- [Future Improvements](#future-improvements)
- [Challenges and Learnings](#challenges-and-learnings)

## Demo

You can view a live demo of the project [Snapslide](https://snapslide.netlify.app/).

## Features

- View a collection of images with smooth transitions.
- Navigate through images using "Next" and "Previous" buttons.
- Responsive design suitable for various screen sizes.
- Clean and intuitive user interface.

## Technologies Used

- React (For building the UI and component-based architecture)
- Vite (For fast development and optimized build processes)
- JavaScript/JSX (For the functionality and structure of the app)
- CSS (For styling and layout)

## Getting Started

Follow the instructions below to run the project locally.

### Prerequisites

Make sure you have **Node.js** and **npm** installed. If not, download them [here](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Jiteshiyu/Snapslide.git
   cd Snapslide
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:3000` to see the app in action.

## Available Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build.

## How It Works

The Image Slider App is a simple, responsive application built using React components.

Here's how the core functionality works:

1. **State Management:** The `Slider` component manages the index of the currently displayed image using the `useState` hook.
2. **Image Transitions:** When the user clicks the "Next" or "Previous" buttons, the index is updated, and the corresponding image is displayed.
3. **Modular Components:** The app is divided into modular components like `ImageSlider` for displaying images and `Controls` for navigation.

## Future Improvements

- Add animation transitions between images for a smoother experience.
- Include swipe gestures for better mobile usability.
- Display image captions or descriptions below each image.
- Implement lazy loading for images to improve performance.

## Challenges and Learnings

- **State Management:** Managing and updating state efficiently using React's `useState` hook was essential for smooth transitions.
- **Responsive Design:** Ensuring the app works across different screen sizes and resolutions required careful attention to CSS.
- **Image Indexing:** Implementing a circular image indexing system so the user can infinitely cycle through images, even at the start or end of the list.

## Support
Give a 🌟 to this repo if you liked it .

Connect with me

[![Github](https://img.shields.io/badge/-FOLLOW-555555?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Jiteshiyu)
[![LinkedIn](https://img.shields.io/badge/-CONNECT-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jiteshkumar9)
[![Jiteshiyu](https://img.shields.io/badge/-VISIT-F17829?style=for-the-badge&logo=react&logoColor=white)](https://jiteshiyu.netlify.app)

