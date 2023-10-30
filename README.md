A simple user management application built using React and Axios for fetching user data. This application allows you to view, add, edit, and delete user records.

Overview
This React application provides a user interface for managing user records. It fetches user data from the Reqres API and allows you to:

View a list of users.
Add new users.
Edit existing user records.
Delete user records.
Prerequisites
Before you begin, ensure you have the following software installed on your machine:

Node.js (LTS version recommended)
npm (usually comes with Node.js)

Install the project dependencies:
npm install

Start the development server:
npm start

Open your web browser and go to http://localhost:3000 to view the app.

Usage
Viewing Users
Upon starting the application, you will see a list of users fetched from the Reqres API.
Each user is displayed with their name, email, bio, and avatar.
If there are no users, a message will be displayed indicating that there are no users to show.
Adding Users
To add a new user, click the "Add User" button on the right sidebar.
Fill in the user details, including first name, last name, bio, age, and check the "Is Europe?" checkbox if applicable.
Click the "Add" button to add the user to the list.
Editing Users
To edit an existing user, click the hammer icon (edit) on the user card.
This will open an edit form where you can modify the user's details.
Click the "Add" button on the edit form to save the changes.
Deleting Users
To delete a user, click the X icon (delete) on the user card.
Confirm the deletion in the confirmation dialog.
