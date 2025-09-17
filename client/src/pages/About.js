import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHeart, FaHandsHelping, FaBookOpen, FaUsers, FaQuoteLeft } from 'react-icons/fa';

// Import leadership images
import bishopImage from '../assets/images/Bishop.jpg';
import revImage from '../assets/images/Rev.jpg';

// Import church logo
import churchLogo from '../assets/images/SGM.png';

const AboutContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9)), 
              url('https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  text-align: center;
  color: white;
`;

const HistorySection = styled.section`
  padding: 100px 0;
  background: white;
`;

const HistoryContent = styled.div`
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

const HistoryImage = styled.div`
  height: 400px;
  background: url(${churchLogo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HistoryText = styled.div`
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
    margin-bottom: 20px;
  }
`;

const BeliefsSection = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
`;

const BeliefsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

const BeliefCard = styled(motion.div)`
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

const LeadershipSection = styled.section`
  padding: 100px 0;
  background: white;
`;

const LeadershipGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

const LeaderCard = styled(motion.div)`
  text-align: center;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  .leader-image {
    height: 250px;
    background: url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80');
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
  }

  .bishop-image {
    background-position: center 20%;
    background-size: cover;
  }

  .rev-image {
    background-position: center 25%;
    background-size: cover;
  }

  .leader-info {
    padding: 30px 20px;

    h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.3rem;
      color: #2c3e50;
      margin-bottom: 5px;
    }

    .position {
      color: #667eea;
      font-weight: 500;
      margin-bottom: 15px;
    }

    p {
      color: #666;
      line-height: 1.6;
      font-size: 0.9rem;
    }
  }
`;

const QuoteSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 0;
  text-align: center;

  .quote {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-style: italic;
    margin-bottom: 30px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.4;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .author {
    font-size: 1.1rem;
    opacity: 0.9;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-title"
            style={{ color: 'white', fontSize: '3rem' }}
          >
            About Our Church
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-subtitle"
            style={{ color: 'white', opacity: 0.9 }}
          >
            Discover our story, beliefs, and the people who make our community special
          </motion.p>
        </div>
      </HeroSection>

      <HistorySection>
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <p className="section-subtitle">
            A journey of faith, growth, and community that spans decades
          </p>
          <HistoryContent>
            <HistoryText>
            <h2>Founded in Faith</h2>
            <p>
              Seat of God Ministry was established with a simple mission: 
              to create a place where people could encounter God's love and grow in 
              their faith journey. What started as a small gathering of believers 
              has grown into a vibrant community of over 1,500 members.
            </p>
            <p>
              Our ministry was founded on the principles of love, acceptance, and 
              spiritual growth. We believe that everyone has a place in God's family, 
              regardless of their background or past experiences.
            </p>
            <p>
              Over the years, we've seen countless lives transformed through the 
              power of God's love and the support of our ministry family. We continue 
              to grow and adapt while staying true to our core values and mission.
            </p>
            </HistoryText>
            <HistoryImage />
          </HistoryContent>
        </div>
      </HistorySection>

      <BeliefsSection>
        <div className="container">
          <h2 className="section-title">What We Believe</h2>
          <p className="section-subtitle">
            Our core beliefs that guide everything we do
          </p>
          <BeliefsGrid>
            <BeliefCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaBookOpen />
              <h3>The Bible</h3>
              <p>
                We believe the Bible is the inspired, infallible Word of God and 
                our ultimate authority for faith and practice.
              </p>
            </BeliefCard>

            <BeliefCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FaHeart />
              <h3>God's Love</h3>
              <p>
                We believe in God's unconditional love for all people and His desire 
                to have a personal relationship with each of us.
              </p>
            </BeliefCard>

            <BeliefCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaUsers />
              <h3>Community</h3>
              <p>
                We believe in the importance of Christian community and fellowship 
                in supporting one another's spiritual growth.
              </p>
            </BeliefCard>

            <BeliefCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FaHandsHelping />
              <h3>Service</h3>
              <p>
                We believe in serving others as Christ served us, both within our 
                church family and in our broader community.
              </p>
            </BeliefCard>
          </BeliefsGrid>
        </div>
      </BeliefsSection>

      <LeadershipSection>
        <div className="container">
          <h2 className="section-title">Our Leadership</h2>
          <p className="section-subtitle">
            Meet the people who guide and serve our church community
          </p>
          <LeadershipGrid>
            <LeaderCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="leader-image bishop-image" style={{ backgroundImage: `url(${bishopImage})` }}></div>
              <div className="leader-info">
                <h3>Bishop A.I Tinuoye</h3>
                <div className="position">President of the Ministry</div>
                <p>
                  Bishop A.I Tinuoye leads our ministry with wisdom and grace.
                  As the President, he provides spiritual direction and guidance
                  for the entire congregation at the Seat of God Ministry.
                </p>
              </div>
            </LeaderCard>

            <LeaderCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="leader-image rev-image" style={{ backgroundImage: `url(${revImage})` }}></div>
              <div className="leader-info">
                <h3>Rev. Olugbenga Odedire</h3>
                <div className="position">Director of Administration</div>
                <p>
                  Rev. Olugbenga Odedire serves as the second in command, overseeing
                  the administrative aspects of our ministry. He ensures smooth operations
                  and supports the spiritual growth of our congregation.
                </p>
              </div>
            </LeaderCard>

          </LeadershipGrid>
        </div>
      </LeadershipSection>

      <QuoteSection>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FaQuoteLeft style={{ fontSize: '3rem', marginBottom: '20px', opacity: 0.7 }} />
            <div className="quote">
              "For where two or three gather in my name, there am I with them."
            </div>
            <div className="author">- Matthew 18:20</div>
          </motion.div>
        </div>
      </QuoteSection>
    </AboutContainer>
  );
};

export default About;
