# db-hw-NoteTaker

## Value Add Proposal

Application allows users to write and save notes in the browser. Saved notes can be viewed with a click.


## Tech Stack

Application demonstrates ability to use Express and Node.js. Deployed via heroku. Also includes the npm package Generate-Unique-ID.


## Functionality

Launching the app presents the user with a landing page and start button. Clicking the start button brings the user to the notes page.

Any existing notes are fetched from the file db.json via an express GET route in server.js and displayed in the lefthand sidebar.

Main section of the page contains text input fields for note title and note text. Upon clicking the save button, entered text is routed via an Express POST route that utilizes node's fs to read the db.json file and rewrite it after pushing the new request object into it as though it were an array. The package Generate-Unique-ID is also called as a function to generate a random string as a unique id for each note upon creation.


##Demo

App is deployed to Heroku and can be found here https://cryptic-fortress-45570.herokuapp.com/

The app's github repository can be viewed here https://github.com/dboren/db-hw-NoteTaker