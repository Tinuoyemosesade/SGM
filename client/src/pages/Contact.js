import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ContactContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9)), 
              url('https://images.unsplash.com/photo-1515378791036-0648a814c963?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  text-align: center;
  color: white;
`;

const ContactSection = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.8;
    margin-bottom: 40px;
  }
`;

const InfoCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    color: #2c3e50;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      color: #667eea;
    }
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
    color: #666;

    svg {
      color: #667eea;
      font-size: 1.1rem;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: #667eea;
    color: white;
    border-radius: 50%;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1.2rem;

    &:hover {
      background: #5a6fd8;
      transform: translateY(-3px);
    }
  }
`;

const ContactForm = styled.form`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    color: #2c3e50;
    margin-bottom: 30px;
    text-align: center;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;

  label {
    display: block;
    margin-bottom: 8px;
    color: #2c3e50;
    font-weight: 500;
  }

  input, textarea {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e1e5e9;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    font-family: inherit;

    &:focus {
      outline: none;
      border-color: #667eea;
    }

    &.error {
      border-color: #e74c3c;
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  .error-message {
    color: #e74c3c;
    font-size: 0.9rem;
    margin-top: 5px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const MapSection = styled.section`
  padding: 100px 0;
  background: white;
`;

const MapContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 50px;
  }

  .map-placeholder {
    height: 400px;
    background: #f0f0f0;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-size: 1.2rem;
    border: 2px dashed #ddd;
  }
`;

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Submit to Netlify Forms
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });
      formData.append('form-name', 'contact');
      
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactContainer>
      <HeroSection>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-title"
            style={{ color: 'white', fontSize: '3rem' }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-subtitle"
            style={{ color: 'white', opacity: 0.9 }}
          >
            We'd love to hear from you. Get in touch with us today!
          </motion.p>
        </div>
      </HeroSection>

      <ContactSection>
        <ContactContent>
          <ContactInfo>
            <h2>Get in Touch</h2>
            <p>
              We're here to help and answer any questions you might have. 
              We look forward to hearing from you and welcoming you to our church family.
            </p>

            <InfoCard>
              <h3>
                <FaMapMarkerAlt />
                Visit Us
              </h3>
              <div className="info-item">
                <FaMapMarkerAlt />
                <span>Abuja-Kaduna Expressway</span>
              </div>
              <div className="info-item">
                <FaClock />
                <span>Monday - Friday: 9:00 AM - 5:00 PM</span>
              </div>
            </InfoCard>

            <InfoCard>
              <h3>
                <FaPhone />
                Call Us
              </h3>
            <div className="info-item">
              <FaPhone />
              <span>+234 816 745 1984</span>
            </div>
            </InfoCard>

            <InfoCard>
              <h3>
                <FaEnvelope />
                Email Us
              </h3>
              <div className="info-item">
                <FaEnvelope />
                <span>info@seatofgodministry.ng</span>
              </div>
            </InfoCard>

            <div>
              <h3 style={{ marginBottom: '20px', color: '#2c3e50' }}>Follow Us</h3>
              <SocialLinks>
                <a href="https://www.facebook.com/SEATOFGODMINISTRY" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com/seatofgod" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </SocialLinks>
            </div>
          </ContactInfo>

          <ContactForm name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="form-name" value="contact" />
            <h3>Send us a Message</h3>
            <FormGroup>
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className={errors.name ? 'error' : ''}
                placeholder="Your full name"
              />
              {errors.name && (
                <div className="error-message">{errors.name.message}</div>
              )}
            </FormGroup>

            <FormGroup>
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className={errors.email ? 'error' : ''}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <div className="error-message">{errors.email.message}</div>
              )}
            </FormGroup>

            <FormGroup>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                {...register('phone')}
                placeholder="+234 123 456 7890"
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                {...register('subject', { required: 'Subject is required' })}
                className={errors.subject ? 'error' : ''}
                placeholder="What's this about?"
              />
              {errors.subject && (
                <div className="error-message">{errors.subject.message}</div>
              )}
            </FormGroup>

            <FormGroup>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
                className={errors.message ? 'error' : ''}
                placeholder="Tell us how we can help you..."
              />
              {errors.message && (
                <div className="error-message">{errors.message.message}</div>
              )}
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </ContactSection>

      <MapSection>
        <MapContainer>
          <h2>Find Us</h2>
          <div className="map-placeholder">
            <div style={{ textAlign: 'center' }}>
              <FaMapMarkerAlt style={{ fontSize: '3rem', color: '#667eea', marginBottom: '20px' }} />
              <div>Interactive Map Would Be Here</div>
              <div style={{ fontSize: '1rem', marginTop: '10px', opacity: 0.7 }}>
                Abuja, Zaria Express Way, Goni Gora, Pa 800104, Kaduna, Nigeria
              </div>
            </div>
          </div>
        </MapContainer>
      </MapSection>
    </ContactContainer>
  );
};

export default Contact;
