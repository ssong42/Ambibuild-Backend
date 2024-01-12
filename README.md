#Social Media Backend

#Node.js App with Docker and Local Database
This is a simple Node.js app that can be run inside a Docker container and uses a local database.

#Project Description
This app provides a basic framework for a web application that allows users to be able to look at posts and like and comment on them.

  Authentication: Allows customers to create an account and log in to the app using a secure token-based authentication system.

  Posts Feed: Displays a list of posts with photo and user that posted it.

  Users can like posts.

  Users can comment on posts.

#Prerequisites
Before you begin, make sure you have the following installed on your machine:

Docker
Getting Started
To get started with this app, follow these steps:

Clone this repository to your local machine:

Navigate to the project directory:

cd node-docker-app

Build the Docker image with setup script:

bash ./db/startup.sh

Open a web browser and go to http://localhost:3000/shipping to see the app running.

Customization
To customize this app, you can edit the server.js file to add your own functionality.

You can also customize the Dockerfile to add any additional dependencies or configurations that your app may require.

License
This project is licensed under the MIT License. See the LICENSE file for details.
            "sourceId": 12345
        }
    }
  '
