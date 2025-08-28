# PGSERVE Backend

A NestJS backend application for PG (Pay Guest) management system with MongoDB Atlas integration.

## Features

- User management with MongoDB Atlas
- TypeORM integration for database operations
- RESTful API endpoints
- Environment-based configuration

## Prerequisites

- Node.js (v16 or higher)
- pnpm package manager
- MongoDB Atlas account

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PG-Server
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the MongoDB Atlas connection string in `.env`:
```env
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/your_database?retryWrites=true&w=majority
DB_NAME=pgserve_db
PORT=3000
NODE_ENV=development
```

## MongoDB Atlas Setup

1. Create a MongoDB Atlas account at [https://www.mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Create a database user with read/write permissions
4. Get your connection string from the cluster dashboard
5. Replace the placeholder values in your `.env` file

## Running the Application

### Development
```bash
pnpm run start:dev
```

### Production
```bash
pnpm run build
pnpm run start:prod
```

## API Endpoints

### Users
- `POST /users/create` - Create a new user
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `PATCH /users/:id` - Update user
- `DELETE /users/:id` - Delete user

## Database Schema

### User Entity
- `id` - MongoDB ObjectId (auto-generated)
- `fullName` - User's full name
- `username` - Unique username
- `phoneNumber` - Phone number
- `email` - Unique email address
- `password` - User password (should be hashed in production)
- `role` - User role ('TENANT' or 'PG-OWNER')
- `createdAt` - Creation timestamp
- `updatedAt` - Last update timestamp

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB Atlas connection string | Required |
| `DB_NAME` | Database name | `pgserve_db` |
| `PORT` | Application port | `3000` |
| `NODE_ENV` | Environment | `development` |

## Security Notes

- Never commit your `.env` file to version control
- In production, ensure passwords are properly hashed
- Use environment-specific configuration
- Consider implementing authentication and authorization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request
