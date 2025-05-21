# -------------------------
# Builder Stage
# -------------------------
FROM node:18 AS builder

WORKDIR /app

# Copy only dependency files for layer caching
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# -------------------------
# Production Stage
# -------------------------
FROM node:18-slim

WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy only production dependencies and compiled code
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app ./

# Expose the backend port
EXPOSE 8080

# Start the app
CMD ["node", "index.js"]
