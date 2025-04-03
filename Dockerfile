# Build the frontend
FROM node:18-alpine as frontend-builder

WORKDIR /app/frontend

# Copy package files and install dependencies
COPY portfolio-frontend/package*.json ./
RUN npm install

# Copy the source code
COPY portfolio-frontend/ ./

# Update project name in config files
RUN find . -type f -name "*.json" -exec sed -i 's/reach-me-portfolio/portfolio-frontend/g' {} \; && \
    find . -type f -name "*.ts" -exec sed -i 's/reach-me-portfolio/portfolio-frontend/g' {} \;

# Build the frontend
RUN npm run build

# Build the backend
FROM golang:1.22-alpine as backend-builder

WORKDIR /app/backend

# Copy go mod files and download dependencies
COPY portfolio-backend/go.mod portfolio-backend/go.sum ./
RUN go mod download

# Copy the backend source code
COPY portfolio-backend/ ./

# Create directory for frontend files
RUN mkdir -p dist/browser

# Copy the frontend build
COPY --from=frontend-builder /app/frontend/dist/browser dist/browser

# Build the backend application
RUN CGO_ENABLED=0 GOOS=linux go build -o portfolio-backend ./main.go

# Final stage - runtime image
FROM alpine:latest

WORKDIR /app

# Install CA certificates for HTTPS
RUN apk --no-cache add ca-certificates

# Copy the binary and frontend files
COPY --from=backend-builder /app/backend/portfolio-backend /app/
COPY --from=backend-builder /app/backend/dist /app/dist

# Create a data directory if needed
RUN mkdir -p /app/data

# Expose the server port
EXPOSE 8080

# Run the application
CMD ["/app/portfolio-backend"]