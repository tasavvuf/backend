// Build a Book Library API:

// Data:
// const books = [
//   { id: 1, title: "Atomic Habits", author: "James Clear", year: 2018, genre: "Self-help" }
// ];

// Routes:
// - GET '/api/books' → All books
// - GET '/api/books/:id' → Single book
// - GET '/api/books/search?title=atomic' → Search by title (partial match)
// - GET '/api/books/filter?genre=self-help' → Filter by genre
// - POST '/api/books' → Add book
// - PUT '/api/books/:id' → Update book
// - DELETE '/api/books/:id' → Delete book

// Advanced:
// - GET '/api/books/author/:authorName' → Get all books by an author
// - GET '/api/books/year/:year' → Get books published in a year

const express = require("express")
const app = express()
app.use(express.json())
const books = [
{ id: 1, title: "Atomic Habits", author: "James Clear", year: 2018, genre: "Self-help" } ]
app.get('/api/books',(_,res)=>{
    res.json(books)
})
app.get('/api/books/:id',(req,res)=>{
    const id = Number(req.params.id)    
    const book = books.find((elem)=>elem.id===id)
    if(!book){ res.status(404).send("dint find the book with this id"); return;}
    res.json(book)
})
app.post("/api/books",(req,res)=>{
    const id = books.length+1
    const {title, author, year, genre} = req.body
    if(!title && !author && !year&& !genre) {res.status(400).send("all the feilds must be reqiued title, author, year, genre") ; return;}
    books.push({id,title, author, year, genre})
    res.json({message:"doneee you book has been added ", addeditem: {id,title, author, year, genre}})
    
})
app.put("/api/books/:id",(req,res)=>{
    const id = Number(req.params.id)
    const book = books.find((elem)=>elem.id===id)
    const {title, author, year, genre} = req.data
     if(!book){ res.status(404).send("dint find the book with this id"); return;}
    res.json(book)
    if(title) {book.title= title}
    if(author) {book.author= author}
    if(year) {book.year= year}
    if(genre) {book.genre= genre}
    res.json(book)
})
app.delete("/api/books/:id",(req,res)=>{
    const id = Number(req.params.id)
    const idx = books.findIndex((elem)=>elem.id===id)
    const deleted = books.splice(idx,1)
    res.json(deleted)
})
app.get('/api/books/author/:authorName',(req,res)=>{
    const authorName = Number(req.params.authorName)
    const filterdata = books.filter((elem)=>elem.author==authorName)
    res.json(filterdata)
})
app.get("/api/books/year/:year",(req,res)=>{
     const year = Number(req.params.year)
    const filterdata = books.filter((elem)=>elem.year==year)
    res.json(filterdata)
})

app.get
app.listen(5000, () => {
  console.log("server is running on port http://localhost:5000");
});