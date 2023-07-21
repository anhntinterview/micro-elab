FROM node:18-alpine
WORKDIR /app

COPY ./package.json ./yarn.* ./
# Install both dev and devDependencies
RUN yarn install --frozen-lockfile
COPY . /app

RUN yarn build:app --production
COPY ./packages/app/server.js /app/dist/packages/app/server.js

WORKDIR /app/dist/packages/app
RUN yarn global add next
RUN yarn add express cors sharp compression
RUN yarn install

ENV NODE_ENV="production"
EXPOSE 3000
CMD ["node", "server.js"]

# RUN: docker run -p 3000:3000 -t <IMAGE_ID>


