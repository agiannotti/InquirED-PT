Thank you for taking the time to take the InquirED React/Typescript Performance task.

As developers at InquirEd, we strive to deliver products with accessible, responsive, and intuitive front end designs.

This performance task will test your ability to visualize, filter, and update large collections of data.

Clone down this repository and create a new branch titled with your_name

Open the repository in your favorite code-editor and run:

    - npm install
    - npm start

What you are being handed is a skeleton of the completed feature. We are more interested in how you make this project yours as opposed to simply being able to build it.

When you are finished, push changes to your branch and let us know you are done working.

The Task:
Build a UserTable component that lists the entries within the /public/users.json collection.
The component should: - 'fetch()' the users.json to demonstrate Promise handling - set the user collection as state - list the users in an admin-panel style table with action-buttons to edit and delete users - handle events to edit and delete users - deleting a user should trigger a confirmation modal - deleting should simply remove that user from the user collection in state.

Build a Filter component that sorts/filters the users collection
The filter should be able to select users that - are currently active/inactive (toggle) - belong to the same district (dropdown select)

Build a NewUser form component
The component should have the following fields with respective validations: - firstName *required, only letters - middleInitial *not required, single letter only - lastName *required, only letters - email *required, valid email (includes '@something.com') - active *required - district *required - district options must match those from the /public/districts.json; - the values should be the district id's
Submitting a new user should:

        - append a new User object to the user collection in state
    	- should include all the fields other User entries have
        - "verified" should default to false
        - "createdAt" should be a SQL style Timestamp

Guidelines/Rules:

    - You can use any packages/libraries you'd like
    - You can use any CSS framework (if so desired)
    - You should create TS interfaces for User and District
    - Any props should be typed (*i.e. const Component = (prop1: string, prop2: number) => {}*)
    - change anything you want/need to in order to complete the task
    - ask as many questions as you want/need to in order to complete the task
    - Go as far beyond the requirements as you see fit
    - Yes, semi-colons.

Expectations:

    My expectation is that you make this feature as full and real as possible.
    You should have a strong sense of design, and what makes a feature intuitive/accessible.
    Take your time and have fun with it!
