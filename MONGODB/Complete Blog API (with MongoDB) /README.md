 **First Full Blog API with MongoDB (Learning Project)**

I built my first complete REST API using Node.js, Express, and MongoDB with Mongoose. This project helped me understand how real backend systems work—from schema design to validation and error handling.

### 🧱 Features Implemented

* Connected to a real MongoDB database
* Created a structured blog schema with validation:

  * `title` (required, min 5 chars)
  * `content` (required, min 20 chars)
  * `author` (required)
  * `tags` (array of strings)
  * `published` (default: false)
  * `createdAt` (auto timestamp)

### 🔗 API Routes

* `GET /api/posts` → Fetch all posts
* `GET /api/posts/:id` → Fetch single post
* `POST /api/posts` → Create a new post (with validation)
* `PUT /api/posts/:id` → Update a post
* `DELETE /api/posts/:id` → Delete a post
* `GET /api/posts/published` → Fetch only published posts
* `GET /api/posts/author/:authorName` → Fetch posts by author

### ⚙️ Key Learnings

* Implemented Mongoose schema validation for clean data
* Used `runValidators: true` for update operations
* Handled errors properly with try-catch
* Returned meaningful HTTP status codes (200, 201, 400, 404, 500)
* Understood how CRUD operations actually work with a database

### 🧠 Reflection

This is my first “real” backend project where everything is connected and working together. I ran into bugs (especially with updates and validation), but debugging them helped me understand how things actually work under the hood.

Looking forward to improving this by adding authentication, middleware, and better structure.

---
