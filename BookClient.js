export class BookClient{
    endpointURL = "https://69c8836f68edf52c954dd038.mockapi.io/books/v1"

    async getBooks(){
        const requestURL = this.endpointURL + "/Book"

        const rawResponse = await fetch(requestURL)
        return await rawResponse.json()

    }

    async getBook (id){
        const requestURL = this.endpointURL + `/Book/${id}`

        const rawResponse = await fetch(requestURL)

        return await rawResponse.json()
    }

    async postBook(book){
        const requestURL = this.endpointURL + "Book"
        const rawResponse = await fetch(requestURL, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
        return await rawResponse.json()
    }

    async deleteBook(id){
        const requestURL = this.endpointURL + `/Book/${id}`

        await fetch(requestURL, {
            method: "DELETE"
        })
    }
}

