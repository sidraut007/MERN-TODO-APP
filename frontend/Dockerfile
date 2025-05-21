# Build stage
FROM node:18 AS builder

WORKDIR /usr/src/app
ENV NODE_OPTIONS=--openssl-legacy-provider

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-slim

WORKDIR /usr/src/app
ENV NODE_OPTIONS=--openssl-legacy-provider

# Install a static server to serve the build
RUN npm install -g serve

# Copy only the build output
COPY --from=builder /usr/src/app/build ./build

EXPOSE 3000

# Use serve to serve the build directory
CMD ["serve", "-s", "build"]
