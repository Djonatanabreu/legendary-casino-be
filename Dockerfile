FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN apk add --no-cache openssl python3 make g++
ENV PRISMA_CLI_BINARY_TARGET=linux-musl-openssl-3.0.x

# Install dependencies
RUN yarn install

# Copy source files
COPY . .

RUN yarn prisma:migrate

RUN yarn build

EXPOSE 3000

CMD ["node", "./dist/src/app.js"]