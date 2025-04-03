# Portfolio Application - Setup and Run Instructions

This guide explains how to set up and run your portfolio application with Docker or for local development.

## Preparation

Before you begin, make sure you have:
- Git
- Docker and Docker Compose (for Docker setup)
- Node.js and npm (for local development)
- Go 1.22+ (for local development)

## Directory Structure

First, ensure your project is structured correctly:

```
project-root/
├── portfolio-frontend/       # Frontend Angular application
├── portfolio-backend/        # Backend Go application
├── docker-compose.yml        # Docker Compose configuration
├── Dockerfile                # Multi-stage Docker build file
└── .env                      # Environment variables (create from .env.example)
```

## Option 1: Run with Docker (Recommended)

The Docker setup builds and runs both the frontend and backend in a single container:

1. **Create a .env file**

   ```bash
   cp .env.example .env
   ```

2. **Customize your .env file**

   Edit the `.env` file and add your actual information, especially:
   - Email configuration (for contact form)
   - Personal information (for portfolio content)

3. **Build and run with Docker Compose**

   ```bash
   docker-compose up -d
   ```

4. **Access your application**

   Open your browser and navigate to: http://localhost:8080

5. **View logs (if needed)**

   ```bash
   docker-compose logs -f
   ```

6. **Stop the application**

   ```bash
   docker-compose down
   ```

## Option 2: Local Development Setup

For local development, you'll need to run the frontend and backend separately:

### Backend Setup

1. **Navigate to the backend directory**

   ```bash
   cd portfolio-backend
   ```

2. **Set environment variables**

   You can set these in your terminal session:

   ```bash
   export SERVER_PORT=8080
   export EMAIL_HOST=your-smtp-server.com
   export EMAIL_PORT=587
   export EMAIL_USERNAME=your-email@example.com
   export EMAIL_PASSWORD=your-password
   export EMAIL_FROM=your-email@example.com
   export EMAIL_TO=recipient@example.com
   export ALLOWED_ORIGINS=http://localhost:4200
   ```

   Or create a `.env` file in the backend directory and use a tool like `direnv` to load it.

3. **Run the backend**

   ```bash
   go run main.go
   ```

   The backend will start at: http://localhost:8080

### Frontend Setup

1. **Navigate to the frontend directory**

   ```bash
   cd portfolio-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   ng serve
   ```

   The frontend will start at: http://localhost:4200

4. **Build for production**

   To build the frontend for production use, run:

   ```bash
   ng build
   ```

   This will create a `dist` directory with the built application.

5. **Copy the built frontend to the backend**

   After building, copy the frontend files to the backend's static files directory:

   ```bash
   mkdir -p ../portfolio-backend/dist
   cp -r dist/browser ../portfolio-backend/dist/
   ```

## Troubleshooting

### Common Issues:

1. **Backend can't find frontend files**

   Make sure the frontend is built and its files are in the `portfolio-backend/dist/browser` directory.

2. **Contact form doesn't work**

   Check the email configuration in your environment variables.

3. **CORS issues**

   Ensure `ALLOWED_ORIGINS` includes the URL where your frontend is running (e.g., `http://localhost:4200`).

4. **Docker build fails**

   Check if all files are in the correct locations and Docker has access to them.

5. **Go module issues**

   If you get Go module errors, try:
   ```bash
   cd portfolio-backend
   go mod tidy
   ```

For additional help, refer to the Docker and Angular documentation.