# Use the official Node.js image as the base image
FROM node:18-slim

# Set the working directory
WORKDIR /usr/src/app

# Update apt-get and install dependencies, including ffmpeg
RUN apt-get update && apt-get install -y ffmpeg && apt-get clean

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source code
COPY . .

# Expose the port on which your app will run
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
