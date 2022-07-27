# Install dependencies only when needed 
FROM node:16-alpine 

ARG PRISMIC_ENDPOINT=https://carreiracloud-blog.prismic.io/api/v2
ARG PRISMIC_ACCESS_TOKEN=MC5ZdUZFbEJBQUFDWUFsWnFY.77-9MO-_vQjvv73vv71677-977-977-977-9Jh_vv73vv73vv73vv71c77-9dO-_ve-_vXDvv70hCO-_vX3vv73vv70OVw

ARG NEXT_PUBLIC_MAILCHIMP_U=c7e59d5acc6ee288cf87cf839
ARG NEXT_PUBLIC_MAILCHIMP_ID=cf0624d673
ARG NEXT_PUBLIC_MAILCHIMP_URL=https://cloud.us18.list-manage.com/subscribe/post

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install 

COPY next.config.js ./next.config.js
COPY public ./public
COPY src ./src


ENV PORT 8080

EXPOSE 8080


CMD ["yarn", "dev"]
