# Legendary Casino API

A Node.js Express API server with TypeScript for managing casino games.

## Prerequisites

- Node.js 18 or higher
- Docker and Docker Compose
- PostgreSQL (provided via Docker)

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the PostgreSQL database:

```bash
docker-compose up -d
```

3. Create a .env file (already done) with:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/legendary_casino"
PORT=3000
NODE_ENV=development
```

4. Run database migrations:

```bash
npx prisma migrate dev
```

5. Seed the database with initial games:

```bash
npx prisma db seed
```

## Development

Start the development server:

```bash
npm run dev
```

## API Endpoints

- GET /api/games - List all games
- GET /api/games/:id - Get a specific game
- GET /api/games/category/:category - Get games by category
- POST /api/games - Create a new game
- PUT /api/games/:id - Update a game
- DELETE /api/games/:id - Delete a game

## Production Deployment (Render)

1. Fork or clone this repository
2. Create a new Web Service on Render
3. Connect your repository
4. Add environment variables:
   - DATABASE_URL (Your production PostgreSQL URL)
   - NODE_ENV=production
5. Deploy!
