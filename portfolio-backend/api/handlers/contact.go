package handlers

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/LEXTR0N/portfolio-backend/internal/email"
	"github.com/LEXTR0N/portfolio-backend/internal/models"
)

// Response represents the API response structure
type Response struct {
	Success bool        `json:"success"`
	Message string      `json:"message,omitempty"`
	Errors  []string    `json:"errors,omitempty"`
	Data    interface{} `json:"data,omitempty"`
}

// HandleContactForm processes the contact form submission
func HandleContactForm(w http.ResponseWriter, r *http.Request) {
	// Only allow POST method
	if r.Method != http.MethodPost {
		sendJSONResponse(w, http.StatusMethodNotAllowed, Response{
			Success: false,
			Message: "Method not allowed",
		})
		return
	}

	// Parse the request body
	var form models.ContactForm
	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&form); err != nil {
		sendJSONResponse(w, http.StatusBadRequest, Response{
			Success: false,
			Message: "Invalid request format",
		})
		return
	}

	// Validate the form
	if errors := form.Validate(); len(errors) > 0 {
		sendJSONResponse(w, http.StatusBadRequest, Response{
			Success: false,
			Message: "Validation failed",
			Errors:  errors,
		})
		return
	}

	// Send email
	err := email.SendContactFormEmail(&form)
	if err != nil {
		log.Printf("Error sending email: %v", err)
		sendJSONResponse(w, http.StatusInternalServerError, Response{
			Success: false,
			Message: "Failed to send email",
		})
		return
	}

	// Return success response
	sendJSONResponse(w, http.StatusOK, Response{
		Success: true,
		Message: "Message sent successfully",
	})
}

// sendJSONResponse sends a JSON response with the given status code and data
func sendJSONResponse(w http.ResponseWriter, statusCode int, response Response) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)

	if err := json.NewEncoder(w).Encode(response); err != nil {
		log.Printf("Error encoding JSON response: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
	}
}
