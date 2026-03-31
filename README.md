# oit_qa_challenge

## Submission Details

1. Track chosen: **API**
2. Prerequisites: Node.js version 20.x, public mockapi.io endpoint: https://69c8836f68edf52c954dd038.mockapi.io/books/v1/Book (Link to clone endpoint, if needed: https:/¸/mockapi.io/clone/69c8836f68edf52c954dd039)
3. How to run:
   1. In the project root, run `npm install` to install dependencies.
   2. Run `npm test`. Jest tests will run with line coverage output.
4. Endpoints/Mapping:
   - The public API I created on mockapi.io allowed me to define a mapping that follows the one provided in the challenge specifications. Namely:
   ```json
    {
    "id": "123",
    "title": "The Hobbit",
    "author": "J. R. R. Tolkien"
    }
    ```
   - With this mapping, the following endpoints were created by default by mockapi.io and could not be modified (without a paid subscription):
     - `/Book` (GET): Returns all JSON data in an array.
     - `/Book/:id` (GET): Returns a specific book's JSON data.
     - `/Book` (POST): Adds a new book, JSON data specified in the request body
     - `/Book/:id` (PUT): Updates the JSON data of a specific book
     - `/Book/:id` (DELETE) Deletes the JSON data form the specified book
5. Test Summary
   1. `Gets a list of books` - This test was created first as a sanity check. Retrieves all books, verifies 200 status code and that the first book in the list matches the first book in the testData list.
   2. `Posts a valid book` - This test adds a correctly structured Book object to the "database" using a POST request. It then verifies the new book's presence by calling the `/Book/:id` endpoint.
   3. `Posts an invalid book` - This test adds an incorrectly structured Book object to the "database" using a POST request, and expects a error 400 status code in response. This test fails because of some limitations that will be outlined below.
   4. `Fails to delete nonexistant id` - This test attempts to delete a book with an ID that does not exist, and expects a error 404 "Not Found" status code.
6. Design Rationale:
   - I decided to structure the tests the way I did because of their related nature (all endpoint tests) and their small number. In a larger system I would consider separating endpoint tests further if needed. Or, if I were writing multiple types of tests (API, UI, and more), I would separate them based on the separation of the application code. 
   - The helper files, `Book.js` and `BookClient.js` I placed in the `src` directory, and the tests in the `test` directory to mirror common conventions for file organization in Node.js projects.
7. Fallback instructions:
   - Because this submission uses a public mock API, a fallback is not necessary.
8. Limitations
    - As noted earlier, some limitations interfered with my ability to create a working edge case test for the POST endpoint. The current edge case test, `Posts an invalid book` fails due to some limitations with mockapi.io.
    - To customize endpoint settings like return value and response status codes, a paid subscription plan for mockapi.io is necessary. I did not want to assume the personal cost of this subscription for this coding challenge, and did not recognize this limitation with enough time left to pivot to another public mock API service.
    - With more time, I would investigate other public API options that would allow me to specify response codes, so that this edge case could be handled correctly.