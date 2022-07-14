# Install dependencies only when needed 
FROM node:16-alpine 

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install 

COPY next.config.js ./next.config.js
COPY public ./public
COPY src ./src


ENV PORT 8080

EXPOSE 8080


CMD ["yarn", "dev"]
