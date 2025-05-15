
# Unveil Backend API

RESTful API for the Unveil photography showcase platform.

## Setup Instructions

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file based on `.env.example`
4. Start the development server with `npm run dev`

## Environment Variables

- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT token generation
- `JWT_EXPIRE` - JWT token expiration (e.g., 30d)

## API Documentation

### Authentication Routes

- `POST /api/v1/auth/register` - Register user
- `POST /api/v1/auth/login` - Login user
- `GET /api/v1/auth/me` - Get current user

### User Routes

- `GET /api/v1/users` - Get all users (admin only)
- `GET /api/v1/users/:id` - Get single user
- `PUT /api/v1/users/:id` - Update user
- `DELETE /api/v1/users/:id` - Delete user (admin only)

### Photographer Routes

- `GET /api/v1/photographers` - Get all photographers
- `GET /api/v1/photographers/featured` - Get featured photographers
- `GET /api/v1/photographers/:id` - Get single photographer
- `GET /api/v1/photographers/:id/works` - Get photographer works

### Portfolio Routes

- `GET /api/v1/portfolios` - Get all portfolios
- `GET /api/v1/portfolios/:id` - Get single portfolio
- `POST /api/v1/portfolios` - Create new portfolio
- `PUT /api/v1/portfolios/:id` - Update portfolio
- `DELETE /api/v1/portfolios/:id` - Delete portfolio

### Photo Routes

- `GET /api/v1/photos` - Get all photos
- `GET /api/v1/photos/:id` - Get single photo
- `POST /api/v1/portfolios/:portfolioId/photos` - Upload photo to portfolio
- `PUT /api/v1/photos/:id` - Update photo
- `DELETE /api/v1/photos/:id` - Delete photo
- `PUT /api/v1/photos/:id/like` - Like/unlike photo

### Collection Routes

- `GET /api/v1/collections` - Get all collections
- `GET /api/v1/collections/featured` - Get featured collections
- `GET /api/v1/collections/:id` - Get single collection
- `POST /api/v1/collections` - Create new collection
- `PUT /api/v1/collections/:id` - Update collection
- `DELETE /api/v1/collections/:id` - Delete collection
- `PUT /api/v1/collections/:id/photos` - Add photo to collection
- `DELETE /api/v1/collections/:id/photos/:photoId` - Remove photo from collection

### Comment Routes

- `GET /api/v1/photos/:photoId/comments` - Get comments for a photo
- `POST /api/v1/photos/:photoId/comments` - Add comment to photo
- `PUT /api/v1/comments/:id` - Update comment
- `DELETE /api/v1/comments/:id` - Delete comment
