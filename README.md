# [Hosted_Link](https://upliance-assignment-amanullas-projects.vercel.app/)

# Upliance Project Overview

## Counter:

    - Functionality: Provides buttons to increment, decrement, and reset a count value.
    - State Management: Maintains count across re-renders using local component state.
    - Visual Feedback: Background color intensity increases with the count, providing visual feedback to the user.
    - Reset Functionality: Reset button resets the count and the background color to their initial states.

## User Data Form:

    - Functionality: Allows users to input their name, address, email, and phone number.
    - Data Management: Autogenerates a unique user ID and saves user data to local storage for persistence.
    - Unsaved Changes Warning: Displays a warning message for unsaved changes when attempting to close the browser, ensuring data integrity.
    - Made email, name and unique Id persistance in application.

## Text Editor:

    - Functionality: Visualizes user data with a rich text editor interface.
    - Formatting Options: Provides formatting options such as bold, italic, underline for enhanced text manipulation.

## Additional Features (Authentication):

    - User Authentication: Integrates Google Sign-In for user authentication(not working on vercel, in localhost working), Normal Signup and Signin authentication ensuring secure access to the application.
    - Routes: Implements routes to restrict access to certain pages based on user authentication status.
    - Dashboard Visualization: Combines the functionality of the counter and user profile into a dashboard view, and chart, providing users with a comprehensive overview of their data and interactions within the application.

## Component Structure

### UI Components

    - UI components are responsible for presenting the user interface to the end-user. Examples include forms, buttons, and charts. These components are implemented using React and styled using TailwindCSS.

### Container Components

    - Redux is utilized for managing global application state. In this application, the 'Layout' component handles routing, and the "Counter" page manages count state.

### State Management Choices:

    - The application using Redux for managing global application state.

### Redux:

    - Redux is utilized for managing global state, particularly user data and authentication state. The 'createSlice' function from @reduxjs/toolkit is used to define a slice of the Redux store for user data. Actions such as saveUserData, setAuthState, and resetUserData are dispatched to modify the state.

### Local Component State:

    - The BasicDetailsForm component utilizes local state to manage form inputs for address and phone number.

### React Router:

    - React Router is used for declarative routing within the application, enabling navigation between different pages/components. The Router component and Route elements are utilized to define the application's routing logic.
