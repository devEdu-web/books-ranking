# Book ranking

This is a simple application to understand how to implement the basics of **Mongoose** with **MongoDB**. The idea behind it is pretty simple, I can add a book, specify the title, author, its pages quantity and write a comment about it. I only created the back of this project because that was my focus, but it was built in a way that is easy to implement a front with some adjustments.

***
<br>

## Routes

| Fixed path                     | Route           | Method   | Description                   | 
| ------------------------------ | --------------- | -------- | ----------------------------- |
| `http://localhost:5000/books`  | `/all`          | Get      | Return all Books              |
| `http://localhost:5000/books`  | `/book/:title`  | Get      | Return a book by its title    |
| `http://localhost:5000/books`  | `/addBook`      | Post     | Post a new book into database |
| `http://localhost:5000/books`  | `/delete/:id`   | Delete   | Delete a book by its id       |
| `http://localhost:5000/books`  | `/update/:id`   | Put      | Update a book by its id       |



***
<br>

## Sending book's information

The data is sent through a formulario, that must have the following inputs:

* title **(required)**
* pages
* author
* comments
* rate **(required)**

If the field author is not provided, the application will set it as *'Unkown'*. There's no need to set an ID manually, the database do that for us. To deletem, update or to find an specific book, its ID must be passed through the URL.

***
<br>

## Author
* Eduardo Oliveira 