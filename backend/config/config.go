package config

import (
	"encoding/json"
	"log"
	"os"
	"sync"
)

// Config holds the application configuration
type Config struct {
	Server struct {
		Port string `json:"port"`
	} `json:"server"`
	Email struct {
		Host     string `json:"host"`
		Port     int    `json:"port"`
		Username string `json:"username"`
		Password string `json:"password"`
		From     string `json:"from"`
		To       string `json:"to"`
	} `json:"email"`
}

var (
	config Config
	once   sync.Once
)

// Load reads the configuration from a JSON file
func Load(configPath string) *Config {
	once.Do(func() {
		// Open config file
		file, err := os.Open(configPath)
		if err != nil {
			log.Printf("Warning: Could not open config file: %v", err)
			// Set defaults if config file not found
			config.Server.Port = "8080"
			return
		}
		defer file.Close()

		// Parse JSON into Config struct
		decoder := json.NewDecoder(file)
		if err := decoder.Decode(&config); err != nil {
			log.Fatalf("Failed to parse config file: %v", err)
		}

		log.Println("Configuration loaded successfully")
	})

	return &config
}

// Get returns the loaded configuration
func Get() *Config {
	return &config
}