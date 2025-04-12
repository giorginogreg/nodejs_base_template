# nodejs_base_template
This is a Node JS template project, from which to start to create your own app

## Basic setup instructions

- Copy .env.example file in .env, change vars as needed
- run `docker compose up`
- For linting dockerfiles, run `./dockerfile-linter.sh backend/docker/Dockerfile.backend`

### Prisma

Generate migrations with generators: `npx prisma migrate dev`

Create generator: `npx prisma generate`. It updates libraries for typehint and other checks (run when migrate is run)

Push changes to dev DB: `npx prisma db push`