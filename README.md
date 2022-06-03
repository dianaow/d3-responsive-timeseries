# Responsive timeseries chart

An interactive visualization (built with React and D3v4) showing stress of level of patient through 3 metrics:
1. Heart rate
2. Activity
3. Blood pulse wave

Features:
 - Single view to evaluate the 3 metrics simultaneously, with summary panel showing key statistics.
 - Chart is updated in real time for every one minute
 - Tooltip shows values of each metric at specific timestamp on mouse hover and hides on mouse out.
 - Responsive across all screen sizes and compatability across all web browsers

Responsive-first:​ Chart is able to fit into all screen sizes including mobile
screens. On smaller screen widths, time range is shortened to allow sufficient space between each timestamp and ensure chart readability.

Laptop view
![laptop view](/laptop_view.png)

iPad view
![ipad view](/ipad_view.png)

Mobile view
![mobile view](/mobile_view.png)

Design Decisions:
- Most intuitive to display​ time along a horizontal x-axis​. As the chart has to be updated live, it fits users’ mental model for new data points to appear on the right and past data to remain on the left.
- To synchronize the presentation of ‘intensity’ values, motion intensity and blood pulse wave intensity are both displayed as a heatmap side by side. Most common or familiar way to represent heart rate is through a line chart. The ​overlay of the heart rate line path and activity intensity bars​ displays correlation between the 2 vitals. Segments of high heart rate together with high activity intensity can be easily recognized.
- Color palette​: Red-blue diverging color palette to represent values on each end of the spectrum. Red represents ‘heat’ which comes from high energy expenditure when doing activities of high intensity, while blue represents ‘cool’ when the body is at rest. Purple for blood pulse wave intensity fits nicely with the overall color scheme.

## Getting started - step by step

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- Install [NodeJS](https://nodejs.org/en/)
- `cd` into this folder
- Run `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!