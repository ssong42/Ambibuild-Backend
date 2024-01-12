#Synthwear Backend

#Node.js App with Docker and Local Database
This is a simple Node.js app that can be run inside a Docker container and uses a local database.

#Project Description
This app provides a basic framework for a web application that allows users to be able to look at posts and like and comment on them.

  Authentication: Allows customers to create an account and log in to the app using a secure token-based authentication system.

  Posts Feed: Displays a list of posts with photo and user that posted it.

  Shopping Cart: Allows customers to add products to a shopping cart and adjust the quantity of each item.

  Checkout: Lets customers complete their purchase by entering their shipping address and payment details.

  Order History: Displays a list of past orders for each customer, including the order date, order status, and details about each item purchased.

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
curl "https://api.sandbox.prodigi.com/v4.0/Orders" \
  -X POST \
  -H "X-API-Key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '
    {
        "merchantReference": "MyMerchantReference1",
        "shippingMethod": "Overnight",
        "recipient": {
            "name": "Mr Testy McTestface",
            "address": {
                "line1": "14 test place",
                "line2": "test",
                "postalOrZipCode": "12345",
                "countryCode": "US",
                "townOrCity": "somewhere",
                "stateOrCounty": null
            }
        },
        "items": [
            {
                "merchantReference": "item #1",
                "sku": "GLOBAL-CFPM-16X20",
                "copies": 1,
                "sizing": "fillPrintArea",
                "attributes": {
                    "color": "black"
                },
                "recipientCost": {
                    "amount": "15.00",
                    "currency": "USD"
                },
                "assets": [
                    {
                        "printArea": "default",
                        "url": "https://pwintyimages.blob.core.windows.net/samples/stars/test-sample-grey.png",
                        "md5Hash": "daa1c811c6038e718a23f0d816914b7b"
                    }
                ]
            }
        ],
        "metadata": {
            "mycustomkey":"some-guid",
            "someCustomerPreference": {
                "preference1": "something",
                "preference2": "red"
            },
            "sourceId": 12345
        }
    }
  '
