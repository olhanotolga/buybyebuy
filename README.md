# BuyByeBuy — an online shop simulation

## TODOS

- [x] Style with Styled Components
- [x] Create styled button component
- [x] Refactor the Styled Components
- [x] Pre-save the products (so that individual propducts can be also accessed)
- [x] Add pre-filled demo user data at login
- [ ] Split Contexts
- [x] Remove pointer cursor from logout when user is undefined
- [ ] Add protected routes / redirects
- [ ] Check how the states persist across the pages / on refresh
- [ ] MORE ERRORS in Login/Registration
- [ ] Check responsiveness
- [ ] Add screenshots
- [ ] Deploy! Add link in README
- [ ] Link in Portfolio

## Tech & tools

- React
- Context API
- React Router
- Google Sheets
- Styled Components

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Designed with Canva.

## Challenges

To display the data on the 'Products' page, I created a Google Sheet and turned it into a JSON endpoint, which I then used to fetch the data. Throughout the walkthrough, I am storing the fetched products in the app's Context.

Designing the app was another tricky part, especially styling the components in a modular way. At first I used plain CSS, which was not the best decision. Switching to Styled Components made my styles look much neater.

## Running the app locally

Clone the repository and run `npm install` in the project directory to install the dependencies.

`npm run start` — runs the app in the development mode at `http://localhost:3000`.

`npm run build` — builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
