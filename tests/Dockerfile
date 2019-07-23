FROM node:8-alpine
LABEL name=test-gsm-arena-service version=latest

# install yarn and other dependencies via apk
RUN apk update \
    && apk add --no-cache tzdata \
    && cp /usr/share/zoneinfo/US/Eastern /etc/localtime \
    && echo "US/Eastern" > /etc/timezone \
    && apk del tzdata \
    && apk add yarn python g++ make \
    && rm -rf /var/cache/apk/*

ARG npm_token
ENV NPM_TOKEN ${npm_token}

WORKDIR /app

COPY src/ src/
COPY tests/ tests/
COPY scripts/ scripts/
COPY tsconfig.json tslint.json .nycrc package.json yarn.lock swagger.json ./
RUN chmod +x scripts/wait.sh

RUN yarn

EXPOSE 1337

CMD yarn test-ci
