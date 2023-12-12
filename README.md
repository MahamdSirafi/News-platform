# News Platform Project with Microservices Architecture

## Project Description
This project aims to develop a news platform using microservices architecture to provide a range of advanced functionalities. The platform includes APIs for image processing, PDF processing, and language error handling. Additionally, there is a main server where news articles are added by journalists. Users can input text either through images, PDFs, or regular text.

## Services Provided

### 1. Image Processing API
An API has been developed for image processing, allowing users to upload images and apply various processing operations. This interface can be used to Extract text from image.

### 2. PDF Processing API
An API has been developed for PDF processing, enabling users to upload PDF files, extract their content, and convert it into editable text format. This interface can be utilized to convert PDF files into searchable and editable texts.

### 3. Language Error Handling API
An API has been developed for language error handling, allowing users to input texts and receive recommendations to improve grammar, correct spelling, syntax, and formatting errors. This interface can be used to enhance the quality and credibility of texts.

### 4. Main Server
The main server has been developed to receive and manage news articles added by journalists. The news articles are stored in a database, and an API is provided to access, view, edit, and delete the articles.

## Available Text Input Methods
The project offers three methods for users to input texts on the platform:

1. Regular Text Input: Users can directly enter texts using the platform's interface through a keyboard.

2. Image-to-Text Input: Users can upload an image containing text and use the Image Processing API to extract the text from the image and convert it into editable text.

3. PDF-to-Text Input: Users can upload a PDF file and use the PDF Processing API to extract the text from the file and convert it into editable text.

## Additional Guidelines
- APIs should be provided for each processing service (image processing, PDF processing, language error handling) to facilitate easy access and usage by users and other applications.
- Implement microservices architecture to divide the application into small, independent services that can be developed and updated separately.
- Provide a user-friendly and appealing user interface for users to access the platform and utilize its various functionalities.
- Implement robust security mechanisms to protect users' data and sensitive information associated with users and news articles.
- APIs should have high responsiveness and excellent performance to ensure fast response times and a smooth user experience.

## Conclusion
This project has been designed to provide an advanced news platform utilizing microservices architecture. It offers APIs for image processing, PDF processing, and language error handling. Users can add news articles through regular text, images, or PDF files. Implement the mentioned guidelines to ensure a successful and secure implementation of the project.

## Client-side Instructions

1. Clone the repository:

   git clone https://github.com/MahamdSirafi/News-platform.git

## spellcheck-service Instructions
1. Navigate to the project directory:

   cd spellcheck-service

2. Install the required dependencies:

   npm install or yarn 
   
3. Start the server:

   npm start or yarn start 

4. The server will run on `http://localhost:3500`.

## pdf-service Instructions
1. Navigate to the project directory:

   cd pdf-service

2. Install the required dependencies:

   npm install or yarn 
   
3. Start the server:

   npm start or yarn start 

4. The server will run on `http://localhost:3400`.

## image-service Instructions
1. Navigate to the project directory:

   cd image-service

2. Install the required dependencies:

   npm install or yarn 
   
3. Start the server:

   npm start or yarn start 

4. The server will run on `http://localhost:3300`.

## app pug Instructions

### Setting Up .env File

This guide explains how to set up an `.env` file to configure environment variables.

### Steps

1. Create a new file and name it `.env` in your project directory.

2. Open the `.env` file using any text editor.

3. Add the environment variables and their values to the file. Write each variable on a separate line in the following format:

Here are some examples:

PORT=4000
DATABASE_LOCAL=mongodb://127.0.0.1:27017/News_Platform_Database
JWT_SECRET=sadD123fdqwffsfw12e224@!#sdad
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90

### Run

1. Navigate to the project directory:

   cd "app pug"

2. Install the required dependencies:

   npm install or yarn 
   
3. Start the server:

   npm start or yarn start 

4. The server will run on `http://localhost:4000`.

## API Endpoints

- `GET /news`: Get a list of all news.
- `GET /news/:id`: Get details of a specific news identified by `id`.
- `POST /car`: Create a new car.
- `PUT /news/:id`: Update details of a specific news identified by `id`.
- `DELETE /news/:id`: Delete a specific news identified by `id`.

Make sure to review the API documentation for more details on request and response formats.

## Technologies Used

- Express.js: Fast, unopinionated, minimalist web framework for Node.js
- Node.js: JavaScript runtime environment
- MongoDB: NoSQL document database

## License

This project is licensed under the [MIT License](LICENSE).
