# Netflix Clone Coding

## Getting Started

### DB

First, run postgresql container:

```bash
docker run -d \
  --name postgres-server \
  -p 5432:5432 \
  -e POSTGRES_USER=myuser \
  -e POSTGRES_PASSWORD=mypassword \
  -e POSTGRES_DB=netflix \
  postgres:14.0
```

push schema to database

```
npx prisma db push
```

### Server

Second, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
