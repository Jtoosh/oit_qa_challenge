import {BookClient} from "./BookClient.js";

async function main(){
    const bookClient = new BookClient()

    const allBooks = await bookClient.getBooks()
    const book1 = await bookClient.getBook("1")
}
main()