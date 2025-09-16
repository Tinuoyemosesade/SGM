import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHandHoldingUsd, FaPray, FaChurch, FaUsers, FaBookOpen } from 'react-icons/fa';

const DonateContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9)), 
              url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  text-align: center;
  color: white;
`;

const DonateSection = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
`;

const DonateContent = styled.div`
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

const DonateInfo = styled.div`
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

const PurposeCard = styled.div`
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
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      color: #667eea;
    }
  }

  p {
    color: #666;
    line-height: 1.6;
    margin: 0;
  }
`;

const DonationForm = styled.form`
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


const ImpactSection = styled.section`
  padding: 100px 0;
  background: white;
`;

const ImpactGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

const ImpactCard = styled(motion.div)`
  text-align: center;
  padding: 40px 20px;
  background: #f8f9fa;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  svg {
    font-size: 3rem;
    color: #667eea;
    margin-bottom: 20px;
  }

  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    color: #2c3e50;
    margin-bottom: 15px;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const Donate = () => {

  return (
    <DonateContainer>
      <HeroSection>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-title"
            style={{ color: 'white', fontSize: '3rem' }}
          >
            Support Our Ministry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-subtitle"
            style={{ color: 'white', opacity: 0.9 }}
          >
            Your generous giving helps us spread God's love and serve our community
          </motion.p>
        </div>
      </HeroSection>

      <DonateSection>
        <DonateContent>
          <DonateInfo>
            <h2>Make a Difference</h2>
            <p>
              Your donations help us continue our mission of spreading God's love, 
              supporting our community, and making a positive impact in the lives of many 
              at the Seat of God Ministry.
            </p>

            <PurposeCard>
              <h3>
                <FaChurch />
                Church Operations
              </h3>
              <p>
                Support our daily operations, maintenance, and utilities to keep 
                our church running smoothly.
              </p>
            </PurposeCard>

            <PurposeCard>
              <h3>
                <FaUsers />
                Community Outreach
              </h3>
              <p>
                Help us reach out to those in need through food drives, clothing 
                distribution, and other community services.
              </p>
            </PurposeCard>

            <PurposeCard>
              <h3>
                <FaBookOpen />
                Ministry Programs
              </h3>
              <p>
                Fund our various ministry programs including youth groups, Bible 
                studies, and educational initiatives.
              </p>
            </PurposeCard>

            <PurposeCard>
              <h3>
                <FaHandHoldingUsd />
                Mission Work
              </h3>
              <p>
                Support our mission work both locally and internationally, 
                spreading the Gospel to all corners of the world.
              </p>
            </PurposeCard>
          </DonateInfo>

          <DonationForm>
            <h3>Bank Transfer Details</h3>
            
            <div style={{ 
              background: '#f8f9ff', 
              padding: '30px', 
              borderRadius: '10px', 
              marginBottom: '30px',
              border: '2px solid #667eea'
            }}>
              <h4 style={{ 
                color: '#2c3e50', 
                marginBottom: '20px', 
                textAlign: 'center',
                fontSize: '1.3rem'
              }}>
                <FaHandHoldingUsd style={{ marginRight: '10px' }} />
                Donation Account Details
              </h4>
              
              <div style={{ 
                display: 'grid', 
                gap: '15px',
                textAlign: 'left'
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  padding: '10px 0',
                  borderBottom: '1px solid #e1e5e9'
                }}>
                  <strong style={{ color: '#2c3e50' }}>Account Name:</strong>
                  <span style={{ color: '#667eea', fontWeight: '500' }}>Seat of God Sch</span>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  padding: '10px 0',
                  borderBottom: '1px solid #e1e5e9'
                }}>
                  <strong style={{ color: '#2c3e50' }}>Bank:</strong>
                  <span style={{ color: '#667eea', fontWeight: '500' }}>Union Bank of Nigeria</span>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  padding: '10px 0',
                  borderBottom: '1px solid #e1e5e9'
                }}>
                  <strong style={{ color: '#2c3e50' }}>Account Number:</strong>
                  <span style={{ 
                    color: '#667eea', 
                    fontWeight: '500',
                    fontSize: '1.1rem',
                    letterSpacing: '1px'
                  }}>0010692249</span>
                </div>
              </div>
              
              <div style={{ 
                marginTop: '20px',
                padding: '15px',
                background: '#e8f4fd',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <p style={{ 
                  margin: '0',
                  color: '#2c3e50',
                  fontSize: '0.95rem'
                }}>
                  <strong>After making your transfer, please contact us to confirm your donation.</strong>
                </p>
              </div>
            </div>

            <div style={{ 
              textAlign: 'center',
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '10px',
              marginBottom: '20px'
            }}>
              <h4 style={{ 
                color: '#2c3e50', 
                marginBottom: '15px',
                fontSize: '1.2rem'
              }}>
                Other Payment Methods
              </h4>
              <p style={{ 
                color: '#666',
                marginBottom: '20px',
                lineHeight: '1.6'
              }}>
                If you would like to donate via other means, please contact us using the form below.
              </p>
              <a 
                href="/contact" 
                style={{
                  display: 'inline-block',
                  padding: '12px 30px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Contact Us
              </a>
            </div>
          </DonationForm>
        </DonateContent>
      </DonateSection>

      <ImpactSection>
        <div className="container">
          <h2 className="section-title">Your Impact</h2>
          <p className="section-subtitle">
            See how your donations are making a difference in our community
          </p>
          <ImpactGrid>
            <ImpactCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaUsers />
              <h3>500+ Families</h3>
              <p>Supported through our community outreach programs</p>
            </ImpactCard>

            <ImpactCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FaBookOpen />
              <h3>50+ Bible Studies</h3>
              <p>Conducted monthly to strengthen our community's faith</p>
            </ImpactCard>

            <ImpactCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaPray />
              <h3>1000+ Prayers</h3>
              <p>Answered through our prayer ministry and intercession</p>
            </ImpactCard>

            <ImpactCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FaHandHoldingUsd />
              <h3>₦2M+ Raised</h3>
              <p>For mission work and community development projects</p>
            </ImpactCard>
          </ImpactGrid>
        </div>
      </ImpactSection>
    </DonateContainer>
  );
};

export default Donate;
