#!/bin/bash

rsync -arv /usr/src/cache/node_modules/. /usr/src/app/node_modules/
npx prisma generate
exec npm run dev