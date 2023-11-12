import "../style/styles.css"
import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import supabase from '../config/SupabaseClient';

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [messageText, setMessageText] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [reCAPTCHAValue, setReCAPTCHAValue] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const name = formData.get('name');
    const subject = formData.get('subject');
    const message = formData.get('message');

    if (reCAPTCHAValue) {
      try {
        setSubmitting(true);
        setSubmitError(null);

        const { data, error } = await supabase
        .from('ContactForm')
        .insert([
          { name, email, subject, message },
        ]);

        if (error) {
          setSubmitError('Error submitting form. Please try again later.');
          console.error('Error submitting form:', error);
        } else {
          console.log('Form submitted successfully:', data);
          setMessageText('');
          setShowConfirmation(true);
          setTimeout(() => {
          setShowConfirmation(false);
          }, 19000);

        // Reset form fields
        e.target.reset();
      }
        if (!error) {
          setShowConfirmation(true); 
          setTimeout(() => {
            setShowConfirmation(false); 
          }, 19000); 
        }
      } catch (error) {
        setSubmitError('An unexpected error occurred. Please try again later.');
        //console.error('Error submitting form:', error);

      } finally {
        setSubmitting(false);
      }
    }

    console.log(process.env.REACT_APP_RECAPTCHA_SITE_KEY)
  };

  const characterLimit = 600;

  return (
    <div className="contact">
      <h2>Contact us!</h2>
      <h3>if you have a question or input, write us!</h3>

      <div className="contactForm">
        <form onSubmit={handleSubmit}>
          <div className="object">
            <label>name</label>
            <input type="text" name="name" required maxLength={80} />
          </div>
          <div className="object">
            <label>Mail</label>
            <input type="email" name="email" required maxLength={100} />
          </div>
          <div className="object">
            <label>subject</label>
            <input type="text" name="subject" required maxLength={120} />
          </div>

          <div className="object">
            <label>message</label>
            <textarea
              rows={8}
              name="message"
              required
              maxLength={characterLimit}
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />
            <span className="characterCount">
              {messageText.length} / {characterLimit} characters
              {messageText.length > characterLimit && (
                <span className="characterLimitExceeded"> - Limit Exceeded</span>
              )}
            </span>

          </div>

          {submitError && <div className="error">{submitError}</div>}
          {showConfirmation ? (
            <div className="confirmationMessage">
              'confirmation_Success_Message
            </div>
          ) : null}

          <div className='recaptcha'>
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              onChange={(value) => {
                // Store the reCAPTCHA value when it changes
                setReCAPTCHAValue(value);
              }}
            />
          </div>
          
          <button type="submit" disabled={submitting}>
            {submitting ? ('sending') : ('send')}
          </button>
        </form>
      </div>
    </div>
  );
}
