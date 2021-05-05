FROM node:14-alpine
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile
COPY . .
EXPOSE 8000
CMD ["yarn", "start"]