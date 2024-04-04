# Shopping Cart Web App

This is a simple shopping cart web application built using React. It allows users to browse through a list of products, add them to their cart, and view their cart contents.

## Features

- **Components**: The app is divided into four main components:
  - Header
  - Footer
  - Product
  - Navbar

- **Props**: Data is passed down the component tree using props, ensuring smooth communication between components.

- **Adding to Cart**: Products can be added to the cart using the filter method. Once added, they are displayed in the cart count in the navbar.

- **Cart Count Display**: The navbar dynamically updates to display the count of items in the cart. This count changes when items are added or removed from the cart.

- **Conditional Rendering**: Add and remove cart buttons are toggled using conditional rendering. Buttons change appearance based on whether the item is already in the cart or not.

## Usage

To run the application locally:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install nodejs and vite js in your system.
4. Install dependencies using `npm install`.
5. Start the development server using `npm run dev`.
6. Open your browser and navigate to `http://localhost:3000` to view the application.

