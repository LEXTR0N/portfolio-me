package models

// ContactForm represents the data submitted through the contact form
type ContactForm struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Subject string `json:"subject"`
	Message string `json:"message"`
}

// Validate performs validation on the contact form fields
func (f *ContactForm) Validate() []string {
	var errors []string

	if f.Name == "" {
		errors = append(errors, "Name is required")
	}

	if f.Email == "" {
		errors = append(errors, "Email is required")
	} else if !isValidEmail(f.Email) {
		errors = append(errors, "Email is invalid")
	}

	if f.Subject == "" {
		errors = append(errors, "Subject is required")
	}

	if f.Message == "" {
		errors = append(errors, "Message is required")
	} else if len(f.Message) < 10 {
		errors = append(errors, "Message must be at least 10 characters")
	}

	return errors
}

// isValidEmail performs a simple validation of email format
func isValidEmail(email string) bool {
	// This is a very basic validation
	// In a production environment, consider using a more robust validation
	// or a dedicated email validation library
	return true // Simplified for this example
}