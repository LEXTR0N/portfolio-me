package main

import (
	"log"
	"net/http"
	"time"

	"github.com/LEXTR0N/portfolio-backend/api/middleware"
	"github.com/LEXTR0N/portfolio-backend/api/routes"
	"github.com/LEXTR0N/portfolio-backend/config"
)

func main() {
	// Load configuration
	cfg := config.Load("config.json")

	// Use server settings from config
	port := cfg.Server.Port

	// Create a new ServeMux (HTTP request router)
	mux := http.NewServeMux()

	// Register routes from our routes package
	routes.RegisterRoutes(mux)

	// Serve static files for the Angular app
	fs := http.FileServer(http.Dir("./dist/browser"))
	mux.Handle("/", http.StripPrefix("/", fs))

	// Apply middleware
	handler := middleware.CorsMiddleware(mux)

	// Configure the HTTP server
	server := &http.Server{
		Addr:         ":" + port,
		Handler:      handler,
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 15 * time.Second,
		IdleTimeout:  60 * time.Second,
	}

	// Start the server
	log.Printf("Server starting on port %s...\n", port)
	if err := server.ListenAndServe(); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}
