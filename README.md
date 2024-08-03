# Phase1ProjectP
# Autism-Friendly Learning Tool

Welcome to the Autism-Friendly Learning Tool project! This project aims to create an engaging and educational web application for children with autism. The application provides various interactive activities designed to improve cognitive and language skills in a fun and accessible way.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Autism-Friendly Learning Tool is a Single Page Application (SPA) built with HTML, CSS, and JavaScript. The frontend communicates with a backend JSON server to fetch and display interactive activities. The app includes games, puzzles, and other educational activities tailored for children with autism.

## Features

- **Shape Matching Game**: Match shapes to their corresponding outlines.
- **Animal Sounds Puzzle**: Solve puzzles to hear different animal sounds.
- **Interactive Storybook**: Read and interact with stories to improve language skills.
- **Color and Draw**: Color various pictures and practice drawing.
- **Memory Card Game**: Enhance memory by finding matching pairs of cards.
- **Dark Mode Toggle**: Switch between light and dark mode for better accessibility.

## Technologies Used

- HTML
- CSS
- JavaScript
- JSON Server

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/autism-friendly-learning-tool.git
    cd autism-friendly-learning-tool
    ```

2. Install JSON Server globally if you haven't already:
    ```sh
    npm install -g json-server
    ```

3. Start the JSON Server:
    ```sh
    json-server --watch db.json
    ```

4. Open `index.html` in your preferred web browser.

## Usage

- Upon opening the application, you will see a list of available activities.
- Click on any activity to start engaging with it.
- Use the "Toggle Dark Mode" button at the top to switch between light and dark mode.

## API Endpoints

The application uses JSON Server to simulate a backend. Here are the available endpoints:

- `GET /activities`: Retrieve a list of activities.
- `POST /activities`: Add a new activity.
- `GET /activities/:id`: Retrieve a specific activity.
- `PATCH /activities/:id`: Update a specific activity.
- `DELETE /activities/:id`: Delete a specific activity.

## Project Structure

```plaintext
├── db.json              # JSON file containing the activity data
├── index.html           # Main HTML file
├── styles.css           # CSS file for styling
└── script.js            # JavaScript file for functionality
