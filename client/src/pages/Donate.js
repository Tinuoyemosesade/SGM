import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHeart, FaCreditCard, FaMobile, FaHandHoldingUsd, FaPray, FaChurch, FaUsers, FaBookOpen } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

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

const AmountSection = styled.div`
  margin-bottom: 30px;

  h4 {
    font-size: 1.2rem;
    color: #2c3e50;
    margin-bottom: 20px;
  }

  .amount-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-bottom: 20px;
  }

  .amount-button {
    padding: 15px;
    border: 2px solid #e1e5e9;
    background: white;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    text-align: center;

    &:hover {
      border-color: #667eea;
      color: #667eea;
    }

    &.active {
      border-color: #667eea;
      background: #667eea;
      color: white;
    }
  }

  .custom-amount {
    display: flex;
    align-items: center;
    gap: 10px;

    input {
      flex: 1;
      padding: 12px 15px;
      border: 2px solid #e1e5e9;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s ease;

      &:focus {
        outline: none;
        border-color: #667eea;
      }
    }

    span {
      color: #666;
      font-weight: 500;
    }
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

  input, select, textarea {
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
    min-height: 80px;
  }

  .error-message {
    color: #e74c3c;
    font-size: 0.9rem;
    margin-top: 5px;
  }
`;

const PaymentMethod = styled.div`
  margin-bottom: 30px;

  h4 {
    font-size: 1.2rem;
    color: #2c3e50;
    margin-bottom: 20px;
  }

  .payment-options {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .payment-option {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px;
    border: 2px solid #e1e5e9;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      border-color: #667eea;
    }

    &.active {
      border-color: #667eea;
      background: #f8f9ff;
    }

    input[type="radio"] {
      margin: 0;
    }

    svg {
      color: #667eea;
      font-size: 1.2rem;
    }

    span {
      font-weight: 500;
    }
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
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const amounts = [1000, 2500, 5000, 10000, 25000, 50000];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In real app, this would integrate with Stripe or other payment processor
      // await axios.post('/api/donations/create-payment-intent', data);
      
      toast.success('Thank you for your generous donation! God bless you.');
    } catch (error) {
      toast.error('Payment failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setValue('amount', amount);
  };

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

          <DonationForm onSubmit={handleSubmit(onSubmit)}>
            <h3>Make Your Donation</h3>
            
            <AmountSection>
              <h4>Select Amount (NGN)</h4>
              <div className="amount-grid">
                {amounts.map(amount => (
                  <button
                    key={amount}
                    type="button"
                    className={`amount-button ${selectedAmount === amount ? 'active' : ''}`}
                    onClick={() => handleAmountSelect(amount)}
                  >
                    ₦{amount.toLocaleString()}
                  </button>
                ))}
              </div>
              <div className="custom-amount">
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  {...register('customAmount')}
                  onChange={(e) => {
                    if (e.target.value) {
                      setSelectedAmount('custom');
                      setValue('amount', e.target.value);
                    }
                  }}
                />
                <span>NGN</span>
              </div>
            </AmountSection>

            <FormGroup>
              <label htmlFor="donationType">Donation Type</label>
              <select id="donationType" {...register('donationType')}>
                <option value="general">General Donation</option>
                <option value="tithe">Tithe</option>
                <option value="offering">Offering</option>
                <option value="building">Building Fund</option>
                <option value="mission">Mission Fund</option>
                <option value="youth">Youth Ministry</option>
              </select>
            </FormGroup>

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

            <PaymentMethod>
              <h4>Payment Method</h4>
              <div className="payment-options">
                <label className={`payment-option ${paymentMethod === 'card' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <FaCreditCard />
                  <span>Card Payment</span>
                </label>
                <label className={`payment-option ${paymentMethod === 'bank' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={paymentMethod === 'bank'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <FaMobile />
                  <span>Bank Transfer</span>
                </label>
              </div>
            </PaymentMethod>

            <FormGroup>
              <label htmlFor="message">Message (Optional)</label>
              <textarea
                id="message"
                {...register('message')}
                placeholder="Add a message with your donation..."
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                'Processing...'
              ) : (
                <>
                  <FaHeart />
                  Donate Now
                </>
              )}
            </SubmitButton>
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
