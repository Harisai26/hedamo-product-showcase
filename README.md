# Hedamo Product Showcase
This project is a responsive, card-based product information page built with React. It features a clean product summary that expands into an animated, detailed view with a modular layout inspired by modern user interfaces like the Samsung Weather app.

Note: You can replace the image URL above with a screenshot of your actual project.

# Key Features
**Product Summary View: An attractive preview on the main page to entice users to learn more.

Card-Based Details: A modular system where each product aspect (Features, Nutrition, Traceability, etc.) has its own distinct card.

Smooth Animations: Integrated with framer-motion to provide fluid transitions between the summary and detailed views.

Responsive Design: A modern, mobile-first design that ensures a great user experience on all screen sizes.

Clean & Separated Code: The project is structured with separate components for better organization and maintainability.

# Technology Stack
Frontend: React.js

Styling: Plain CSS (with a structure inspired by utility-first principles)

Animations: Framer Motion

Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

# Prerequisites
You need to have Node.js and npm (or yarn) installed on your machine.

Node.js

npm / yarn

# Installation
Clone the repository

git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)

Navigate to the project directory

cd your-repo-name

# Install dependencies

npm install

or

yarn install

Install the animation library

npm install framer-motion

or

yarn add framer-motion

Run the development server

npm start

or

yarn start

Open http://localhost:3000 to view it in the browser.

## File Structure
The project follows a standard component-based structure to keep the code organized and reusable.

src/
|-- components/
|   |-- DetailCard.js         # Card for individual product details
|   |-- Icon.js               # SVG icon components
|   |-- ProductDetailsView.js # The modal view with all detail cards
|   |-- ProductSummaryCard.js # The main product preview card
|-- App.js                    # Main application component
|-- styles.css                # All styles for the application
