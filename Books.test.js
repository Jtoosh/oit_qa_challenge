import {describe, it, beforeAll, expect, afterAll} from "@jest/globals"
import {BookClient} from "./BookClient.js";
import {Book, testData} from "./Book.js";

const api_URL = "https://69c8836f68edf52c954dd039.mockapi.io/books/v1/Book";
const timeout = 10000
let bookClient;

describe("API Tests", () => {
    beforeAll(async () => {
        bookClient = new BookClient();
        //Cleanup if after-all fails
        const response = await bookClient.getBooks();
        const content = await response.json();
        for (let i = 1; i <= content.length; i++) {
            await bookClient.deleteBook(`${i}`);
        }

        //Setup
        for (let i = 0; i < testData.length; i++) {
            await bookClient.postBook(testData[i]);
        }
    }, timeout)
    //Extra test, not included in specs
    it("gets a list of books", async () => {
        const response = await bookClient.getBooks();
        const content = await response.json();
        expect(response.status).toBe(200);
        expect(content[0]).toEqual(testData[0]);
        expect(content.length).toBe(10);

    }, timeout)
    it("Posts a valid book", async () =>{
        const id =`${testData.length + 1}`;
        const newBook = new Book(
            id,
            "The Adventures of Huckleberry Finn",
            "Mark Twain"
        );
        const response = await bookClient.postBook(newBook);
        expect(response.status).toBe(201);

        const getResponse = await bookClient.getBook(id);
        const getContent = await getResponse.json();
        expect(getResponse.status).toBe(200);
        expect(getContent).toEqual(newBook)
    }, timeout)
    it("Posts an invalid book", async () =>{
        const newBook = {
            title: "Title"
        };

        const response = await bookClient.postBook(newBook);
        expect(response.status).toBe(400);
    }, timeout)
    afterAll(async () => {
        const response = await bookClient.getBooks();
        const content = await response.json();
        for (let i = 1; i <= content.length; i++) {
            await bookClient.deleteBook(`${i}`);
        }
    }, timeout)
})