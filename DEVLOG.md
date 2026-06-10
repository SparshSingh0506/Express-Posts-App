# Project Vision

Instagram-style social media application for learning purposes.

# Core features:

* Image upload
* Public feed
* User profiles
* Likes and comments

# Goals:

* Understanding Backend development
* Implementing CRUD operations
* Handling File uploads 

# Architectural & Tech Decisions:

## Backend - Express
**Reason:**
- Helps understand core backend concepts directly

## Database - Neon PostgreSQL

**Reason:** Understanding SQL databases and relationships that naturally fit in such an application as:
* User -> Posts, Comments, Likes (One to Many)
* Posts -> User (One to One)

**Alternatives Considered:**
* MongoDB

## ORM - Drizzle
**Reason:**
* Close to raw SQL
* Type safety with typescript


# Day ~3 (late documentation)
* Made post & user schema as separate files to enforce Separation of Concerns, barrel exporting them in a single schema.ts file
* This allows schemas to be individually scalable for new future fields, and a single barrel export keeps them clean & consistent.

# Day 4
* Decided to use **Cloudinary** as the Object Storage Service to get direct links of images uploaded from the backend.
* As a standard approach, this keeps the database clean as heavy media blob files do not clog it's rows, thus preventing inefficient searching.
* **Flow:** React Frontend (media file) -> Express Backend  (upload media file) -> cloudinary (stores media & returns link) -> Express (insert URL) -> PG DB (inject to react img src) -> React
* This would also utilize **multer** as a middleware to handle media uploads to the backend.
* Read cloudinary & multer docs to understand implementation
* Segregated currently dummy routes to mount them cleanly in app.ts
* Renamed files into suffix based naming for a clearer notaiton

# Day 5
* Read and understood multer's working, reading docs and through AI
* Tested image upload from postman to the backend server, by creating the multer middleware that handles the media upload.
