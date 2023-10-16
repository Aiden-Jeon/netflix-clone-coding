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

Second, push schema to database

```bash
npx prisma db push
```

Third, push mock movie data to database trough `psql` terminal:

```sql
INSERT INTO "Movie" ("id", "title", "description", "videoUrl", "thumbnailUrl", "genre", "duration")
VALUES
  (gen_random_uuid(), 'Big Buck Bunny', 'Three rodents amuse themselves by harassing creatures of the forest. However, when they mess with a bunny, he decides to teach them a lesson.', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', 'https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png', 'Comedy', '10 minutes'),
  (gen_random_uuid(), 'Sintel', 'A lonely young woman, Sintel, helps and befriends a dragon, whom she calls Scales. But when he is kidnapped by an adult dragon, Sintel decides to embark on a dangerous quest to find her lost friend Scales.', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', 'http://uhdtv.io/wp-content/uploads/2020/10/Sintel-3.jpg', 'Adventure', '15 minutes'),
  (gen_random_uuid(), 'Tears of Steel', 'In an apocalyptic future, a group of soldiers and scientists takes refuge in Amsterdam to try to stop an army of robots that threatens the planet.', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', 'https://mango.blender.org/wp-content/uploads/2013/05/01_thom_celia_bridge.jpg', 'Action', '12 minutes'),
  (gen_random_uuid(), 'Elephant''s Dream', 'Friends Proog and Emo journey inside the folds of a seemingly infinite Machine, exploring the dark and twisted complex of wires, gears, and cogs, until a moment of conflict negates all their assumptions.', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', 'https://download.blender.org/ED/cover.jpg', 'Sci-Fi', '15 minutes');

```

### Server

Second, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
