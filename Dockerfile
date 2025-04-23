FROM node:18-alpine

# Install Yarn globally
RUN npm install -g yarn

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./
COPY prisma ./prisma/

# Install dependencies using Yarn

COPY . .

run yarn

RUN yarn build
RUN yarn prisma:generate

EXPOSE 3000

CMD ["yarn", "start"]