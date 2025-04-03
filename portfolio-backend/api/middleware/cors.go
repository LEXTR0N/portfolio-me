package middleware

import (
	"net/http"

	"github.com/LEXTR0N/portfolio-backend/config"
	"github.com/rs/cors"
)

// CorsMiddleware creates a middleware that handles CORS
func CorsMiddleware(next http.Handler) http.Handler {
	cfg := config.Get()
	
	c := cors.New(cors.Options{
		AllowedOrigins:   cfg.CORS.AllowedOrigins,
		AllowedMethods:   []string{"GET", "POST", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
		Debug:            false, // Set to true for debugging
	})

	return c.Handler(next)
}