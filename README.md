# Incorta Plotter

## Project Structure

Here I decided to wrap my application into the following structure:

- `components` folder is responsible for having the generic components that will display UI or column items
- `utils` have some basic functions that are used for utilities
- `state` is a folder that contains my context setup that holds the app's global state (selected measures/dimensions)
- `api` have my calls to the backend or api side

## Used Libs and why I used them

I used multiple libraries here and I wanted to explain why.

- `React Query` could be an overkill here but I wanted to try it and to have the ability to get the `loading` and `error` objects out of the box
- `react dnd` is used mainly for items dragging
- `material` for design
- `jest` for testing
- `nivo` for charts

## Why I used context and how it is made

Basically I used it to life all of the logic of handling the dimensions added or measures added away from the components and making a single `reducer` handling all of such logic.

inside the `state/index.ts` file there will be the reducer and the context basic initilization.

## My two cents on using `Nivo` charts

There is a checkbox in the application for handling multiple charts or a single chart. I made the single chart display data and the Y-Axis spans in a `log` of 5 increase or decrease. this made to make multiple plots look good, if a single plot is plotted a `linear` plot type would be choosen.

## Testing

I tried my best to unit test everything and I created a wrapper around my `index.tsx` main component to test components that depend on the app's initiation.

I have not tested everything due to time and I choosed to implement first then add tests later on.

## Final Note

I used `Typescript` here cause simply it makes coding and testing my code a lot easier and because I simply enjoy coding with it.
