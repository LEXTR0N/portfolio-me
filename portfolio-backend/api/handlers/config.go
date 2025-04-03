package handlers

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

// HandleConfig handles the configuration API endpoints
func HandleConfig(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		getConfig(w, r)
	case http.MethodPost:
		updateConfig(w, r)
	default:
		sendJSONResponse(w, http.StatusMethodNotAllowed, Response{
			Success: false,
			Message: "Method not allowed",
		})
	}
}

// getConfig retrieves the current configuration
func getConfig(w http.ResponseWriter, r *http.Request) {
	configPath := "./dist/browser/assets/config.json"

	// Check if config file exists
	if _, err := os.Stat(configPath); os.IsNotExist(err) {
		// Return default empty config
		sendJSONResponse(w, http.StatusOK, Response{
			Success: true,
			Data:    map[string]interface{}{},
		})
		return
	}

	// Read config file
	configData, err := ioutil.ReadFile(configPath)
	if err != nil {
		log.Printf("Error reading config file: %v", err)
		sendJSONResponse(w, http.StatusInternalServerError, Response{
			Success: false,
			Message: "Failed to read configuration",
		})
		return
	}

	// Parse config as JSON
	var config map[string]interface{}
	if err := json.Unmarshal(configData, &config); err != nil {
		log.Printf("Error parsing config file: %v", err)
		sendJSONResponse(w, http.StatusInternalServerError, Response{
			Success: false,
			Message: "Failed to parse configuration",
		})
		return
	}

	// Return config
	sendJSONResponse(w, http.StatusOK, Response{
		Success: true,
		Data:    config,
	})
}

// updateConfig saves the configuration
func updateConfig(w http.ResponseWriter, r *http.Request) {
	// Parse the request body
	var config map[string]interface{}
	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&config); err != nil {
		sendJSONResponse(w, http.StatusBadRequest, Response{
			Success: false,
			Message: "Invalid request format",
		})
		return
	}

	// Ensure assets directory exists
	assetsDir := "./dist/browser/assets"
	if err := os.MkdirAll(assetsDir, 0755); err != nil {
		log.Printf("Error creating assets directory: %v", err)
		sendJSONResponse(w, http.StatusInternalServerError, Response{
			Success: false,
			Message: "Failed to create assets directory",
		})
		return
	}

	// Convert config to JSON
	configData, err := json.MarshalIndent(config, "", "  ")
	if err != nil {
		log.Printf("Error serializing config: %v", err)
		sendJSONResponse(w, http.StatusInternalServerError, Response{
			Success: false,
			Message: "Failed to serialize configuration",
		})
		return
	}

	// Write config to file
	configPath := filepath.Join(assetsDir, "config.json")
	if err := ioutil.WriteFile(configPath, configData, 0644); err != nil {
		log.Printf("Error writing config file: %v", err)
		sendJSONResponse(w, http.StatusInternalServerError, Response{
			Success: false,
			Message: "Failed to save configuration",
		})
		return
	}

	// Return success
	sendJSONResponse(w, http.StatusOK, Response{
		Success: true,
		Message: "Configuration saved successfully",
	})
}
