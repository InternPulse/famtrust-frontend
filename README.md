# FamTrust Frontend

This is a `Vite, React and Tailwindcss` project.

## Getting Started

This project uses `npm workspaces` as default monorepo architecture.

#### First clone the repo

```bash
git clone https://github.com/InternPulse/famtrust-frontend.git
```

#### Install all dependencies

```bash
npm install
```

#### Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
### Project Structure

- `src/assets`: Static assets like images.
- `src/components`: React components.
- `src/helpers`: Custom authentication handlers (`withAuth.jsx`, `withoutAuth.jsx`).
- `src/http`: Axios setup and API call handlers.
- `src/pages`: Application pages.
- `src/services`: Services like API integrations.
- `App.jsx`
- `index.css`: Global Styles.
- `main.jsx`

# Commit Standards

## Branches

- **dev** -> pr this branch for everything `frontend` related
- **main** -> **dont touch** this branch, this is what is running in production.

## Contributions

FamTrust is open to contributions, but I recommend creating an issue or replying in a comment to let us know what you are working on first that way we don't overwrite each other.

## Contribution Guidelines

1. Clone the repo `git clone https://github.com/InternPulse/famtrust-frontend.git`.
2. Open your terminal & set the origin branch: `git remote add origin https://github.com/InternPulse/famtrust-frontend.git`
3. Pull origin `git pull origin dev`
4. Create a new branch for the task you were assigned to, eg `TicketNumber/(Feat/Bug/Fix/Chore)/Ticket-title` : `git checkout -b NA-001/Feat/Sign-Up-from`
5. After making changes, do `git add .`
6. Commit your changes with a descriptive commit message : `git commit -m "your commit message"`.
7. To make sure there are no conflicts, run `git pull origin dev`.
8. Push changes to your new branch, run `git push -u origin NA-001/Feat/Sign-Up-from`.
9. Create a pull request to the `dev` branch not `main`.
10. Ensure to describe your pull request.
11. > If you've added code that should be tested, add some test examples.
# Merging

Under any circumstances should you merge a pull request on a specific branch to the `dev` or `main` branch

### _Commit CheatSheet_

| Type     |                          | Description                                                                                                 |
| -------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| feat     | Features                 | A new feature                                                                                               |
| fix      | Bug Fixes                | A bug fix                                                                                                   |
| docs     | Documentation            | Documentation only changes                                                                                  |
| style    | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| refactor | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |
| perf     | Performance Improvements | A code change that improves performance                                                                     |
| test     | Tests                    | Adding missing tests or correcting existing tests                                                           |
| build    | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| ci       | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore    | Chores                   | Other changes that don't modify, frontend or test files                                                    |
| revert   | Reverts                  | Reverts a previous commit                                                                                   |

> _Sample Commit Messages_
- `chore: Updated README file` := `chore` is used because the commit didn't make any changes to the frontend or test folders in any way.
- `feat: Added plugin info endpoints` := `feat` is used here because the feature was non-existent before the commit.

## Code Explanation

### API Calls

A separate folder called http contains axios.js and index.js files to handle any outgoing or incoming HTTP requests/responses. The index.js file should contain all outgoing API calls to the backend server.

> ❗❗Do not create any custom http calls inside a page or components. Whatever calls need to be processed by the server should be called within the `index.js` file.
### Custom Authentication Handler

Within the `helpers` folder contains **two** different files called `withAuth.js` and `withoutAuth.js`.

- **WithAuth.jsx** :- contains two `HOF` called `withUserAuth` and `withAdminAuth` which are functions that wrap every component that needs protection or protected route components for user and admin respectively. for eg `Dashboard` or any other page that require the user to be loggedIn. All you have to do is import the cusstom handler and wrap your component inside it. i.e

```js
withUserAuth(Dashboard);
withUserAuth(Promotion);
```

for e.g `AnalyticsAndReportingLayouts` or any other page that requires the user to be an admin before they access it. All you have to do is import the custom handler and wrap your component inside it. i.e

```js
withAdminAuth(AnalyticsAndReportingLayouts);
withAdminAuth(SanctionedProducts);
```

- **WithoutAuth.jsx** :- is the opposite of `withAuth.jsx` HOF. It only meant to be used to prevent loggedIn users from redirecting or navigating to a page. i.e when a user is loggedIn and you dont want them to view a certain page, use this function.

```js
withoutAuth(Login);
withoutAuth(Signup);
```

### MainLayout.jsx

Within this file contains a `MainLayout` component, rather than calling `Footer`, `Sidebar`, `TopBar` component on every file manually, all you have to do is first invoke the `<MainLayout>` component inside any page before adding the children of that page.

for eg

```js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './components/Layout/MainLayout';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
```

You also get to decide whether to show the footer or sidebar using the available props.