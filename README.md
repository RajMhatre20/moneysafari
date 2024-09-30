# Welcome to the Money Safari code

## Introduction

This repository contains the codebase for MoneySafari, a finance management platform. This README.md file provides essential information on setting up the environment and getting started with the project.

## Setup

### Environment Variables

To run the project locally, you need to create an `.env` file in the root directory of the project. This file should contain the following parameters:

-   `PORT`: The port number on which the server will run.
-   `MONGODB_URI`: The URI for connecting to your MongoDB database.
-   `CORS_ORIGIN`: The CORS origin for allowing cross-origin requests.

Ensure you replace placeholders with appropriate values.

### Running the Project

Make sure you have node version above `20.6.0` and all dependencies installed using the command `npm install`, and that the MongoDB instance is running. Once you have set up the environment variables in the `.env` file, you can run the project using `npm run dev`.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.