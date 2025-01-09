# File Uploader Docker Project

This Docker project is a Node.js application designed to handle image uploads.

## Key Components

### Frontend

- **index.html**: Provides a form for users to select and upload images.
- **script.js**: Handles image preview and form submission using JavaScript.
- **styles.css**: Styles the frontend components.

### Backend

- **server.js**: Uses Express.js to handle HTTP requests. It includes:
  - Middleware for CORS, JSON parsing, URL encoding, security headers, and logging.
  - Static file serving for the frontend and uploaded images.
  - Multer for handling image uploads with storage configuration and file filtering.
  - Routes for serving the frontend, uploading images, and displaying uploaded images.

### Docker Configuration

- **Dockerfile**: Defines the Docker image, setting up the Node.js environment, copying application files, installing dependencies, and specifying the command to run the server.
- **docker-compose.yml**: Defines the Docker service for the application, mapping ports and volumes for persistent storage of uploaded images.

## Running the Project

To run the file-uploader project, use Docker Compose:

```sh
docker-compose up
```

This command will build the Docker image and start the container, making the application accessible at [http://localhost:3000](http://localhost:3000). Users can upload images through the frontend, and the server will handle storing and serving the images.

You can go to the following URL to see the images you have uploaded:
`/image/show/:imageID`

To find the ImageID, you can use the “fileName” value from the image information that comes after uploading an image from the terminal where you run Docker.
