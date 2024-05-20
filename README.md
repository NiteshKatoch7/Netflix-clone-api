# Netflix API

This is the backend API for a Netflix clone application. It helps in managing user-related movie choices or preferences.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/netflix-api.git
    ```
2. Navigate to the project directory:
    ```sh
    cd netflix-api
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Start the server:
    ```sh
    npm start
    ```

## Usage

After installing the dependencies and starting the server, the API will be running locally. You can interact with it using tools like Postman or through your frontend application.

## API Endpoints

Here are the available API endpoints for managing user movie preferences:

- **Add to Liked Movies**
    - **URL:** `/add`
    - **Method:** `POST`
    - **Description:** Adds a movie to the user's list of liked movies.
    - **Example Request:**
        ```json
        {
          "email": "user@example.com",
          "movieId": "12345"
        }
        ```

- **Get Liked Movies**
    - **URL:** `/liked/:email`
    - **Method:** `GET`
    - **Description:** Retrieves the list of liked movies for the specified user.
    - **Example Request:**
        ```
        GET /liked/user@example.com
        ```

- **Remove from Liked Movies**
    - **URL:** `/delete`
    - **Method:** `PUT`
    - **Description:** Removes a movie from the user's list of liked movies.
    - **Example Request:**
        ```json
        {
          "email": "user@example.com",
          "movieId": "12345"
        }
        ```

## Features

- Add movies to user's liked list
- Retrieve user's liked movies
- Remove movies from user's liked list

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgements

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/)

---
