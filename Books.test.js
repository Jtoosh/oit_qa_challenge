import {describe, it, beforeAll, expect, afterAll} from "@jest/globals"
import {BookClient} from "./BookClient.js";
import {testData} from "./Book.js";

const api_URL = "https://69c8836f68edf52c954dd039.mockapi.io/books/v1/Book"
let bookClient

describe("Get tests", () => {
    beforeAll(async () => {
        bookClient = new BookClient()
        for (let i = 0; i < testData.length; i++) {
            await bookClient.postBook(testData[i])
        }
    })
    it("gets a list of books", async () => {
        const content = await bookClient.getBooks()
        // const retrievedData = content.map((item) => JSON.parse(item))
        expect(content[0]).toEqual(testData[0])

    })
    afterAll(async () => {
        for (let i = 1; i <= testData.length; i++) {
            await bookClient.deleteBook(`${i}`)
        }
    })
})