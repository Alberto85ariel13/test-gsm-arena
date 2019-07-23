FROM node:8-alpine
LABEL name=test-gsm-arena-service version=latest

# Install yarn and other dependencies via apk
RUN apk update \
    && apk add --no-cache tzdata \
    && cp /usr/share/zoneinfo/US/Eastern /etc/localtime \
    && echo "US/Eastern" > /etc/timezone \
    && apk del tzdata \
    && apk add yarn python g++ make \
    && rm -rf /var/cache/apk/*

ARG NPM_TOKEN
ENV NODE_ENV=production

WORKDIR /app

COPY dist/ dist/
COPY package.json swagger.json yarn.lock .env.example ./
RUN mkdir -p tmp

RUN yarn --production

EXPOSE 1337

CMD ["yarn", "start"]