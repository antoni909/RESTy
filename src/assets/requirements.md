# Phases

## Phase 1: Begin work on the RESTy API testing application

LAB - Component Based UI
RESTy Phase 1: Begin work on the RESTy API testing application

Before you begin
Refer to Getting Started in the lab submission instructions for complete setup, configuration, deployment, and submission instructions.

Create a UML diagram of the RESTy system on a whiteboard before you start

Create a new repository for this project, called ‘resty’ and work in a branch called ‘base’

Business Requirements
Refer to the RESTy System Overview for a complete review of the application, including Business and Technical requirements along with the development roadmap.

Phase 1 Requirements
Today, we begin the first of a 4-Phase build of the RESTy application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application, with intent being to add more functionality to the system as we go. This initial build sets up the file structure so that we can progressively build this application in a scalable manner

Preview

Technical Requirements / Notes
The application, as written by our development team was done using class components as a proof of concept. In order to go to production, we’re going to have to convert this to an application written using React function components so that our foundation is both stable and high performing.

Refactor the RESTy application as follows:

Convert all child components of App.js from classes to functions
The App component serves as the container for all sub-components of this application.
Leave this component as a Class.
Make sure all base styles for App are included in a .scss imported within App.js.
Ensure that the Header, Footer, Results and Form components are imported using ES6 import syntax.
Use .scss files to style each component
Each of the components use their own .scss file for styling.
Core application functionality should remain unchanged:
The <Form> component should:
Call a function on submit that updates the <App/> component via a function sent down as a prop so that the app can process the form values.
The <Results/> component should show mock API results.
Assignment Submission Instructions
Refer to the the Submitting React Apps Lab Submission Instructions for the complete lab submission process and expectations

NOTE: For this assignment, testing is not required

## Phase 2: Retrieving User Input and Managing State

LAB - useState() Hook
RESTy Phase 2: Retrieving User Input and Managing State

Before you begin
Refer to Getting Started in the lab submission instructions for complete setup, configuration, deployment, and submission instructions.

Continue working in your ‘resty’ repository, extending your previous work in a new branch called ‘state’

Business Requirements
Refer to the RESTy System Overview for a complete review of the application, including Business and Technical requirements along with the development roadmap.

Phase 2 Requirements
In phase 2, we will be receiving user input in preparation of connecting to live APIs, using the useState() hook in our functional components

The following user stories detail the major functionality for this phase of the project.

As a user, I want to enter the REST Method and URL to an API
As a user, I want to see a summary of my request as well as results returned from an API request in my browser in a readable format
Application Flow:

User enters an API URL
Chooses a REST Method
Clicks the “Go” button
Application fetches data from the URL given, with the method specified
Displays the response headers and results separately
Both headers and results should be “pretty printed” JSON
One possible design/layout. Please use your judgement and taste in styling your version of this application.

Resty

Technical Requirements / Note
Extend your React Application so that your functional components are able to manage their own state variables using the useState Hook.
NOTE: It is not a requirement to make the actual API call. That can be mocked with “fake” data

Refactor any components using this.setState to implement the useState react API hook.
Refactor the Form Component to implement user input from form elements, instead of hard coded string values.
Suggested Component Hierarchy and Application Architecture:

index.js - Entry Point
App.js - Container
Holds application state: The Request (from the form) and the Response (from the API)
A class method that can update state
Renders 2 Child Components
<Form />
Expects a function to be sent to it as a prop
Renders a URL entry form
A selection of REST methods to choose from (“get” should be the default)
The active selection should be displayed/styled differently than the others
Renders a Textarea to allow the user to type in a JSON object for a POST or PUT request
On submit
Send the Form entries back to the <App> using the method sent down in props
Form will run the API request
Toggle the “loading” status before and after the request
<Results />
Conditionally renders “Loading” or the data depending on the status of the request
Expects the count, headers, results to be sent in as props
Renders the count
Renders the Result Headers as “pretty” JSON
Renders the Result Body as “pretty” JSON
Tests
Install the React Testing Library framework
Assert that upon submitting the form will result in data being rendered in the output area
Install the GitHub action that will auto-run your tests on all check-ins
Deployment
Deploy your application to GitHub pages using a GitHub action which will publish the “build” to the gh-pages branch of your repository on all check-ins

Stretch Goals
Connect the App component to an API and make an actual call (focusing on GET) to the URL requested in the form

Assignment Submission Instructions
Refer to the the Submitting React Apps Lab Submission Instructions for the complete lab submission process and expectations

## Component Based UI

Component based UI systems like `React`, `Angular`, `Vue` and the like all operate on a variation of "Atomic Design", using "Components" as the means of delivery.

"Thinking in React" means re-evaluating how you look at a web application: Breaking down it's functional parts, data dependencies, behaviors, and styles into independent, deliverable, re-usable components.

## Learning Objectives

### Students will be able to

#### Describe and Define

- SASS - Nesting and Variables
- "Component Architecture"
- Application and Component "State"
- Debate/Discuss Libraries vs Frameworks
- Basics of a React App
  - index.html in public (root div)
  - index.js as an untouchable "bootstrap" or "entry point"
  - React Renders into that div
  - JSX is actually javascript but it looks like markup
  - Components can be classes or functions. What gets "returned" gets "rendered"
    - Class - `render() { return(jsx) }`
    - Function - `return(jsx)`
  - Components can load and render each other
  - Components can load their own css

#### Execute

- Begin a React project locally with `create-react-app`
- Use codesandbox.io to work live on a React application
- Create and render `Class` and `Functional` React components to the DOM
- Add event listeners to React components
- Update React component state
- Style React applications/components using SASS

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

As a component based system, React does an awful lot for us, principally, it gets out out of the way and makes it EASY to implement your application the way you see it, using familiar tools.

> JSX looks like markup, but it's actually Javascript. If you had to code it out, you wouldn't...

JSX

```javascript
const element = () => {
  return {
    <h1 className="greeting">
      Hello, world!
    </h1>
  }
);
```

Behind the scenes...

```javascript
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

### Basic (Basic) React

1. React is a series of modules (components) that can be ES6 Classes or Functions. They "render" what they "return"
1. An "index" that imports 'React', includes components, which returns their output into the DOM into `<div id="root"></div>`

   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom';
   import App from './app.js';

   class Main extends React.Component {
     render() {
       return <App />;
     }
   }

   const rootElement = document.getElementById('root');
   ReactDOM.render(<Main />, rootElement);
   ```

1. An "app" that imports other components and "renders" what they "return"

   ```javascript
   import React from 'react';
   import Content from './content.js';

   class App extends React.Component {
     render() {
       return (
         <React.Fragment>
           <Header />
           <Main />
           <Footer />
         </React.Fragment>
       );
     }
   }

   export default App;

   ```

1. Components that do work and render content

   ```javascript
   import React from 'react';

   class Content extends React.Component {
     handleClick = () => {
       console.log('clicked');
     }
     render() {
       return (
         <div>
           <button onClick={this.handleClick}>Click Me!</button>
         </div>
       );
     }
   }

   export default Content;

   ```
