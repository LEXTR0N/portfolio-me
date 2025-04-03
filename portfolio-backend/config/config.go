package config

import (
	"os"
	"strconv"
	"strings"
	"sync"
)

// Config holds the application configuration
type Config struct {
	Server struct {
		Port string
	}
	Email struct {
		Host     string
		Port     int
		Username string
		Password string
		From     string
		To       string
	}
	CORS struct {
		AllowedOrigins []string
	}
}

var (
	config Config
	once   sync.Once
)

// Load reads the configuration from environment variables
func Load() *Config {
	once.Do(func() {
		// Server configuration
		config.Server.Port = getEnv("SERVER_PORT", "8080")

		// Email configuration
		config.Email.Host = getEnv("EMAIL_HOST", "")
		emailPort, _ := strconv.Atoi(getEnv("EMAIL_PORT", "587"))
		config.Email.Port = emailPort
		config.Email.Username = getEnv("EMAIL_USERNAME", "")
		config.Email.Password = getEnv("EMAIL_PASSWORD", "")
		config.Email.From = getEnv("EMAIL_FROM", "")
		config.Email.To = getEnv("EMAIL_TO", "")

		// CORS configuration
		originsStr := getEnv("ALLOWED_ORIGINS", "http://localhost:4200")
		config.CORS.AllowedOrigins = strings.Split(originsStr, ",")
	})

	return &config
}

// Get returns the loaded configuration
func Get() *Config {
	return &config
}

// Helper function to get environment variables with a default value
func getEnv(key, defaultValue string) string {
	value := os.Getenv(key)
	if value == "" {
		return defaultValue
	}
	return value
}