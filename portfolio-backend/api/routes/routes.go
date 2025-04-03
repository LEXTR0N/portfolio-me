package routes

import (
	"net/http"

	"github.com/LEXTR0N/portfolio-backend/api/handlers"
)

// RegisterRoutes configures all API routes
func RegisterRoutes(mux *http.ServeMux) {
	// Health check endpoint
	mux.HandleFunc("/api/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte(`{"status":"ok"}`))
	})

	// Contact form endpoint
	mux.HandleFunc("/api/contact", handlers.HandleContactForm)

	// Configuration endpoint
	mux.HandleFunc("/api/config", handlers.HandleConfig)
}
