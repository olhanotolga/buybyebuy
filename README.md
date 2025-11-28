# BuyByeBuy — an online shop simulation

A frontend-only webshop simulation. [Shop away here](https://buybyebuy.vercel.app/). Have fun!

## Tech & tools

- React
- Context API
- React Router
- Styled Components
- Material design icons
- Canva (design & prototyping)
- Webpack
- S3 for image storage
- ImageMagick CLI for resizing images

This project was migrated from CRA (Create React App) to Webpack.

## Look & Feel

### Mobile screenshots

<img src="./screenshots/10-home-mobile.png" width="300" alt="BuyByeBuy homepage (mobile screen)">
<img src="./screenshots/40-products-mobile.png" width="300" alt="BuyByeBuy products view - 2 (mobile screen)">
<img src="./screenshots/50-cart-mobile.png" width="300" alt="BuyByeBuy shopping cart (mobile screen)">
<img src="./screenshots/60-checkout-mobile.png" width="300" alt="BuyByeBuy checkout (mobile screen)">

### Tablet/Desktop screenshots

<img src="./screenshots/1-products-desktop.png" width="600" alt="BuyByeBuy products view (tablet and desktop screen)">
<img src="./screenshots/3-checkout-desktop.png" width="600" alt="BuyByeBuy checkout (tablet and desktop screen)">

## Challenges

### Maintenance (2025)

I was reluctant to kill this project as I kind of liked its look and feel. To keep it going, I had to:

1. Deal with the Google Sheets as the URL has expired.
First, I wanted to continue using Google Sheets but realized that setting up a project in Console and managing the authentication and choosing a Node-friendly library to use was probably an overkill.
So I am lazily keeping the JSON file with all the products inside the project folder.

2. Move away from the discontinued CRA.
I decided to go with Webpack because that's what I used in my latest job. Took me some time to set it up because of different requirements, e.g. using an SVG as a mask for images.

3. Store resized images on S3 to avoid cases when they disappear from Unsplash.

### Old (2021)

To display the data on the 'Products' page, I created a Google Sheet and turned it into a JSON endpoint, which I then used to fetch the data. In my shop simulation, I am storing the fetched products in the app's Context.

Designing the app was another tricky part, especially styling the components in a modular way. At first I used plain CSS, which was not the best decision. Therefore, I organized my styles in a much neater way with Styled Components, even though refactoring took some time.

## Running the app locally

Clone the repository and run `npm install` in the project directory to install the dependencies.

`npm run start` — runs the app in the development mode at `http://localhost:3000`.

`npm run build` — builds the app for production to the build folder.
