# Use the official Node runtime with Alpine as the parent image
FROM node:18-alpine



# Set the working directory in the container
WORKDIR /app



# Copy the package.json and package-lock.json
COPY package*.json ./



# Install the application dependencies
RUN npm install



# Copy the rest of the application code into the container
COPY . .



# Specify the command to start the React development server
CMD ["npm", "start"]