export class BookClient{
    endpointURL = "https://69c8836f68edf52c954dd038.mockapi.io/books/v1"

    async getBooks(){
        const requestURL = this.endpointURL + "/Book"

        return await fetch(requestURL)


    }

    async getBook (id){
        const requestURL = this.endpointURL + `/Book/${id}`

         return await fetch(requestURL)


    }

    async postBook(book){
        const requestURL = this.endpointURL + "Book"
        return await fetch(requestURL, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })

    }

    async deleteBook(id){
        const requestURL = this.endpointURL + `/Book/${id}`

        return fetch(requestURL, {
            method: "DELETE"
        })
    }
}

