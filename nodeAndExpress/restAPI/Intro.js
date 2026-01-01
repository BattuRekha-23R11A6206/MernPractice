//REST API = Representational State Transfer Application Programming Interface

//A REST API is a set of rules and conventions for building and interacting with web
//  services. It allows different software applications to communicate with each other
//  over the internet using standard HTTP methods.

//Key Concepts of REST API:

//1. Resources: In REST, everything is considered a resource, which can be any type of
//   data or service that can be accessed and manipulated. Each resource is identified
//   by a unique URL (Uniform Resource Locator).

//2. HTTP Methods: RESTful APIs use standard HTTP methods to perform operations on
//   resources. The most common methods are:
//   - GET: Retrieve data from the server. (get data)
//   - POST: Create a new resource on the server.(post or store data)
//   - PUT: Update an existing resource on the server.(update data)
//   - DELETE: Remove a resource from the server.(delete data)

//3. Statelessness: REST APIs are stateless, meaning that each request from a client
//   to the server must contain all the information needed to understand and process
//   the request. The server does not store any client context between requests.

//4. JSON/XML: REST APIs commonly use JSON (JavaScript Object Notation) or XML
//   (eXtensible Markup Language) as the format for data exchange between the client
//   and server. JSON is more popular due to its simplicity and ease of use with
//   JavaScript.

//================Routes=====================

//In REST API, routes are the specific URLs that correspond to different resources
//In the context of a REST API, "routes" typically refer to the mapping of URLs or endpoints to 
//specific functions or actions on both the API server and the client side application.
//Routes define how requests are handled and what responses are sent back to the client.

//For example, consider a REST API for managing a collection of books. The routes might look like this:
//GET /books - Retrieve a list of all books
//POST /books - Create a new book
//GET /books/:id - Retrieve a specific book by its ID   
//PUT /books/:id - Update a specific book by its ID
//DELETE /books/:id - Delete a specific book by its ID

//==================MVC=====================

//MVC stands for Model-View-Controller, which is a software architectural pattern
//used for developing user interfaces by separating the application into three
//main components:
//1. Model: The Model represents the data and business logic of the application. It is responsible
//   for managing the data, handling database interactions, and enforcing business rules.
//2. View: The View is responsible for the presentation layer of the application. It defines how the data
//   is displayed to the user and handles the user interface elements.
//3. Controller: The Controller acts as an intermediary between the Model and the View. It processes
//   user input, interacts with the Model to retrieve or update data, and determines which View to render.

//we applies operations to the APIs we created following the MVC architecture.

//For example, in a Node.js and Express application, you might have separate files or directories for
//models, views, and controllers to organize your code according to the MVC pattern.
//This separation of concerns helps in maintaining and scaling the application more effectively.

