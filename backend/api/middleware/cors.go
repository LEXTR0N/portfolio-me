package middleware

import (
	"net/http"

	"github.com/rs/cors"
)

// CorsMiddleware creates a middleware that handles CORS
func CorsMiddleware(next http.Handler) http.Handler {
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:4200"}, // Your Angular dev server
		AllowedMethods:   []string{"GET", "POST", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
		Debug:            false, // Set to true for debugging
	})

	return c.Handler(next)
}