FROM node:18-alpine
WORKDIR /app

COPY ./package.json ./yarn.* ./
# Install both dev and devDependencies
RUN yarn install --frozen-lockfile
COPY . /app

RUN yarn build:app --production

COPY ./packages/app/.next/server/client-reference-manifest.js /app/dist/packages/app/.next/server/client-reference-manifest.js

COPY ./packages/app/.next/server/client-reference-manifest.json /app/dist/packages/app/.next/server/client-reference-manifest.json

WORKDIR /app/dist/packages/app/.next/server

RUN ls -alh

WORKDIR /app

ENV NODE_ENV="production"

CMD ["yarn", "start:app"]

# FROM node:18-alpine
# WORKDIR /app

# COPY ./package.json ./yarn.* ./
# # Install both dev and devDependencies
# RUN yarn install --frozen-lockfile
# COPY . /app

# RUN yarn build:app --production
# COPY ./packages/app/server.js /app/dist/packages/app/server.js

# WORKDIR /app/dist/packages/app
# RUN yarn global add next
# RUN yarn add express cors sharp compression
# RUN yarn install

# ENV NODE_ENV="production"
# EXPOSE 3000
# CMD ["node", "server.js"]


