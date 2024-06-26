# Dashboard App Demo
You can see the demo here: https://dashboard-app-roan-eight.vercel.app/

### Second Iteration of Dashbaord App
Consumes real application data from the 3rd party API using an api proxy. You can find the repo under https://github.com/daniel-moya/dashboard-proxy

### First Iteration of Dashbaord App
Uses mocked Data. You can checkout first iteration (v1) under `v1` branch

- Pie Chart Metrics for application Reports.
- Table with application reports.
- Nicely formatted data.
- Data can be sorted and grouped by different fields in the table.
- Data is paginated so it can be read easily.
- Status are colored for readability.
- Ability to take action for each report by clicking the icon on the right side of each row.

# Template 
<img width="1348" alt="image" src="https://github.com/daniel-moya/dashboard-app/assets/20147650/20193162-c946-4b70-a56a-5e1d99d1aa95">

# Demo
https://dashboard-app-roan-eight.vercel.app/
<img width="1063" alt="image" src="https://github.com/daniel-moya/dashboard-app/assets/20147650/c8e7169b-353d-438a-9b0c-05a9011af4b1">

# Build and run with Docker
Make sure docker is running on your localhost. You can build the image running directly the following command on your terminal.

```docker build . -t dashboard_app```

Then run the container based on the image you just built.

`docker run -p 3000:3000 dashboard_app`


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
