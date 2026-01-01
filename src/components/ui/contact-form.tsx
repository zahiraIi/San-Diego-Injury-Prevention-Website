"use client";

import { Mail, User, MessageSquare } from "lucide-react";

export default function ContactForm() {
  return (
    <form className="contact-form">
      <div className="flex-column">
        <label>First Name *</label>
      </div>
      <div className="inputForm">
        <User className="h-5 w-5 text-accent-blue" />
        <input type="text" className="input" placeholder="Enter your First Name" required />
      </div>

      <div className="flex-column">
        <label>Last Name</label>
      </div>
      <div className="inputForm">
        <User className="h-5 w-5 text-accent-blue" />
        <input type="text" className="input" placeholder="Enter your Last Name" />
      </div>

      <div className="flex-column">
        <label>Email *</label>
      </div>
      <div className="inputForm">
        <Mail className="h-5 w-5 text-accent-blue" />
        <input type="email" className="input" placeholder="Enter your Email" required />
      </div>

      <div className="flex-column">
        <label>Message</label>
      </div>
      <div className="inputForm textarea-container">
        <MessageSquare className="h-5 w-5 text-accent-blue self-start mt-3" />
        <textarea 
          className="input textarea" 
          rows={5} 
          placeholder="Write us a message or ask a question!"
        />
      </div>

      <button type="submit" className="button-submit">Send Message</button>
    </form>
  );
}

