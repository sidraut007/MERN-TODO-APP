# Use the official Node.js 18 image as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Fix for OpenSSL 3 incompatibility with Webpack used in react-scripts
ENV NODE_OPTIONS=--openssl-legacy-provider

# Start the app
CMD ["npm", "start"]
