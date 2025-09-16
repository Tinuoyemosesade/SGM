import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlay, FaCalendarAlt, FaHeart, FaUsers, FaBookOpen, FaHandsHelping } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Import worship moment images
import worship1 from '../assets/images/472206969_3953122258309309_2593400498279944902_n.jpg';
import worship2 from '../assets/images/472595632_3953122234975978_8590698797386265196_n.jpg';
import worship3 from '../assets/images/474778351_930416755848653_7314933248473078721_n.jpg';
import worship4 from '../assets/images/474918379_930416745848654_7699728746369111773_n.jpg';
import worship5 from '../assets/images/475419068_930416792515316_2725686180057085042_n.jpg';
import worship6 from '../assets/images/481904534_3997409683880566_6011154507514534530_n.jpg';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8));
    z-index: 1;
  }
`;

const BackgroundSlideshow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;

  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 3s ease-in-out;
  }

  .slide.active {
    opacity: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 20px;
  z-index: 2;
  position: relative;
`;

const HeroTitle = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  margin-bottom: 40px;
  opacity: 0.9;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: white;
    color: #667eea;
    transform: translateY(-2px);
  }
`;

const FeaturesSection = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
`;

const FeaturesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 40px 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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
    margin-bottom: 15px;
    color: #2c3e50;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const WelcomeSection = styled.section`
  padding: 100px 0;
  background: white;
`;

const WelcomeContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const WelcomeText = styled.div`
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
    margin-bottom: 30px;
  }
`;

const WelcomeImage = styled.div`
  height: 400px;
  background: url('https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80');
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;


const CTA = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 0;
  text-align: center;

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 40px;
    opacity: 0.9;
  }

  button {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 2px solid white;
    padding: 15px 30px;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;

    &:hover {
      background: white;
      color: #667eea;
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  }
`;

const Home = () => {
  const navigate = useNavigate();
  
  const worshipImages = [
    worship1,
    worship2,
    worship3,
    worship4,
    worship5,
    worship6
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleViewServiceTimes = () => {
    navigate('/events');
    // Small delay to ensure page loads, then scroll to services
    setTimeout(() => {
      const servicesSection = document.getElementById('regular-services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % worshipImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [worshipImages.length]);

  return (
    <HomeContainer>
      <HeroSection>
        <BackgroundSlideshow>
          {worshipImages.map((image, index) => (
            <img
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              src={image}
              alt={`Worship moment ${index + 1}`}
            />
          ))}
        </BackgroundSlideshow>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Seat of God Ministry
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A place where faith, hope, and love come together. Join us in worship 
            and fellowship as we grow in our relationship with God and each other.
          </HeroSubtitle>
          <HeroButtons
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/sermons" className="btn btn-primary">
              Watch Sermons
            </Link>
            <PlayButton>
              <FaPlay />
              Watch Live Service
            </PlayButton>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">
            Discover the various ways we serve our community and grow together in faith
          </p>
          <FeaturesGrid>
            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaBookOpen />
              <h3>Bible Study</h3>
              <p>
                Join our weekly Bible study sessions where we dive deep into God's word 
                and discover its relevance to our daily lives.
              </p>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FaUsers />
              <h3>Fellowship</h3>
              <p>
                Connect with fellow believers in a warm, welcoming community where 
                everyone is valued and supported on their spiritual journey.
              </p>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaHandsHelping />
              <h3>Community Service</h3>
              <p>
                Make a difference in our community through various outreach programs 
                and service opportunities that reflect God's love.
              </p>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FaCalendarAlt />
              <h3>Special Events</h3>
              <p>
                Participate in meaningful events, conferences, and celebrations that 
                strengthen our faith and build lasting memories.
              </p>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FaHeart />
              <h3>Prayer Ministry</h3>
              <p>
                Experience the power of prayer through our dedicated prayer ministry 
                and intercessory prayer groups.
              </p>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <FaPlay />
              <h3>Online Services</h3>
              <p>
                Join us from anywhere in the world through our live streaming services 
                and online worship experiences.
              </p>
            </FeatureCard>
          </FeaturesGrid>
        </div>
      </FeaturesSection>

      <WelcomeSection>
        <WelcomeContent>
          <WelcomeText>
            <h2>Welcome to Our Ministry Family</h2>
            <p>
              At Seat of God Ministry, we believe that everyone has a place in God's family. 
              Whether you're new to faith or have been walking with Christ for years, 
              you'll find a warm welcome and a community that supports your spiritual growth.
            </p>
            <p>
              Our mission is to love God, love people, and make disciples who make disciples. 
              We're committed to creating an environment where you can explore your faith, 
              ask questions, and grow in your relationship with Jesus Christ at the Seat of God.
            </p>
            <Link to="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
          </WelcomeText>
          <WelcomeImage />
        </WelcomeContent>
      </WelcomeSection>


      <CTA>
        <div className="container">
          <h2>Join Us This Sunday</h2>
          <p>
            Experience the joy of worship and fellowship. We'd love to meet you and 
            welcome you into our church family.
          </p>
          <button onClick={handleViewServiceTimes} className="btn btn-secondary">
            View Service Times
          </button>
        </div>
      </CTA>
    </HomeContainer>
  );
};

export default Home;
