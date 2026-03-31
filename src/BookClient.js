export class BookClient{
    endpointURL = "https://69c8836f68edf52c954dd038.mockapi.io/books/v1/Book"

    async getBooks(){
        return await fetch(this.endpointURL)
    }

    async getBook (id){
         return await fetch(this.endpointURL +`/${id}`)
    }

    async postBook(book){
        return await fetch(this.endpointURL, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
    }

    async deleteBook(id){
        return fetch(this.endpointURL + `/${id}`, {
            method: "DELETE"
        })
    }
}

