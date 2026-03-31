import {describe, it, beforeAll} from "@jest/globals"
import {BookClient} from "./BookClient.js";

const api_URL = "https://69c8836f68edf52c954dd039.mockapi.io/books/v1/Book"
let bookClient

describe("Get tests", () => {
    beforeAll(() =>{
        bookClient = new BookClient()
    })
  it("gets a list of books", async ()=> {
    const response = await bookClient.getBooks()
    const resJson = await response.json()
  })
})