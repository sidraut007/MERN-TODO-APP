FROM node:14-alpine
# Set the working directory
WORKDIR /usr/src/app
# Install only production dependencies (no devDependencies)
COPY package*.json ./
RUN npm install 
# Copy only the necessary app files
COPY . .
# Expose the app port
EXPOSE 8080
# Run the app
CMD ["node", "index.js"]
