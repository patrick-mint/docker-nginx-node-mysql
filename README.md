# Docker Nginx Node MySQL

This project demonstrates a simple setup using Docker to run a Node.js application with an Nginx reverse proxy and a MySQL database.

## Project Structure

- `backend`: Contains the Node.js application
- `nginx`: Contains the Nginx configuration
- `docker-compose.yml`: Docker Compose file to orchestrate the services

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/patrick-mint/docker-nginx-node-mysql.git
    ```

2. Navigate to the project directory:
    ```sh
    cd docker-nginx-node-mysql
    ```

3. Build and start the services:
    ```sh
    docker-compose up --build
    ```

### Usage

- The Node.js application will be accessible at `http://localhost:3000`.
- Nginx will proxy the application and it will be accessible at `http://localhost`.

## License

This project is licensed under the MIT License.
