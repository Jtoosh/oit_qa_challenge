export class Book{
    id
    author
    title

    constructor(id, author, title) {
      this.id = id
      this.author = author
      this.title = title
    }
}

const dummyData = [
    { "title": "To Kill a Mockingbird", "author": "Harper Lee", "id": "1" },
    { "title": "1984", "author": "George Orwell", "id": "2" },
    { "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "id": "3" },
    { "title": "One Hundred Years of Solitude", "author": "Gabriel García Márquez", "id": "4" },
    { "title": "Brave New World", "author": "Aldous Huxley", "id": "5" },
    { "title": "The Catcher in the Rye", "author": "J.D. Salinger", "id": "6" },
    { "title": "Pride and Prejudice", "author": "Jane Austen", "id": "7" },
    { "title": "The Hobbit", "author": "J.R.R. Tolkien", "id": "8" },
    { "title": "Fahrenheit 451", "author": "Ray Bradbury", "id": "9" },
    { "title": "Crime and Punishment", "author": "Fyodor Dostoevsky", "id": "10" }
]

export const testData = dummyData.map((item) => new Book(item.id, item.author, item.title))
