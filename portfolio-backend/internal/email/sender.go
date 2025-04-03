package email

import (
	"fmt"

	"github.com/LEXTR0N/portfolio-backend/config"
	"github.com/LEXTR0N/portfolio-backend/internal/models"

	"gopkg.in/mail.v2"
)

// SendContactFormEmail sends an email with the contact form information
func SendContactFormEmail(form *models.ContactForm) error {
	cfg := config.Get()

	// Create a new message
	m := mail.NewMessage()

	// Set headers
	m.SetHeader("From", cfg.Email.From)
	m.SetHeader("To", cfg.Email.To)
	m.SetHeader("Reply-To", form.Email)
	m.SetHeader("Subject", fmt.Sprintf("Portfolio Contact: %s", form.Subject))

	// Set email body - you can use HTML here if preferred
	body := fmt.Sprintf(`
New contact form submission:

Name: %s
Email: %s
Subject: %s

Message:
%s
`, form.Name, form.Email, form.Subject, form.Message)

	m.SetBody("text/plain", body)

	// Create a new SMTP dialer
	d := mail.NewDialer(cfg.Email.Host, cfg.Email.Port, cfg.Email.Username, cfg.Email.Password)

	// Send the email
	if err := d.DialAndSend(m); err != nil {
		return fmt.Errorf("failed to send email: %w", err)
	}

	return nil
}
