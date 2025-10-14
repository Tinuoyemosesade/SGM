import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaArrowRight, FaTimes, FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';

const EventsContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9)), 
              url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  text-align: center;
  color: white;
`;




// const EventsList = styled.div`
//   .filter-section {
//     display: flex;
//     gap: 15px;
//     margin-bottom: 30px;
//     flex-wrap: wrap;
//     align-items: center;
//   }

//   .filter-button {
//     padding: 8px 16px;
//     border: 2px solid ${props => props.active ? '#667eea' : '#ddd'};
//     background: ${props => props.active ? '#667eea' : 'white'};
//     color: ${props => props.active ? 'white' : '#666'};
//     border-radius: 20px;
//     cursor: pointer;
//     transition: all 0.3s ease;
//     font-size: 0.9rem;
//     font-weight: 500;

//     &:hover {
//       border-color: #667eea;
//       color: #667eea;
//     }
//   }
// `;

const EventCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
  }

  .event-image {
    height: 200px;
    background: url('${props => props.image || 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'}');
    background-size: cover;
    background-position: center;
    position: relative;

    .event-date {
      position: absolute;
      top: 20px;
      left: 20px;
      background: rgba(102, 126, 234, 0.9);
      color: white;
      padding: 10px 15px;
      border-radius: 10px;
      font-weight: 600;
      text-align: center;

      .day {
        font-size: 1.5rem;
        line-height: 1;
      }

      .month {
        font-size: 0.9rem;
        text-transform: uppercase;
      }
    }

    .category {
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(255, 255, 255, 0.9);
      color: #667eea;
      padding: 5px 12px;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 500;
    }
  }

  .event-content {
    padding: 25px;
    display: flex;
    flex-direction: column;
    height: 100%;

    h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.4rem;
      color: #2c3e50;
      margin-bottom: 15px;
      line-height: 1.3;
    }

    .event-meta {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 15px;

      .meta-item {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #666;
        font-size: 0.9rem;

        svg {
          color: #667eea;
        }
      }
    }

    p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 20px;
      flex-grow: 1;
    }

    .event-actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: auto;
    }
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: 1px solid #ddd;
  background: white;
  color: #666;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover {
    border-color: #667eea;
    color: #667eea;
  }

  &.primary {
    background: #667eea;
    color: white;
    border-color: #667eea;

    &:hover {
      background: #5a6fd8;
    }
  }
`;

// Contact Form Popup Styles
const PopupOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const PopupContent = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 40px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #f0f0f0;
    color: #333;
  }
`;

const FormTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 10px;
  text-align: center;
`;

const FormSubtitle = styled.p`
  color: #666;
  text-align: center;
  margin-bottom: 30px;
  font-size: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: 600;
  color: #2c3e50;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  padding: 12px 15px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const TextArea = styled.textarea`
  padding: 12px 15px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const UpcomingEvents = styled.section`
  padding: 100px 0;
  background: white;
`;

const Events = () => {
  const navigate = useNavigate();
  const [showJoinTeamPopup, setShowJoinTeamPopup] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactAdmin = () => {
    navigate('/contact');
  };

  const handleJoinTeam = (teamName) => {
    setSelectedTeam(teamName);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setShowJoinTeamPopup(true);
  };

  const handleClosePopup = () => {
    setShowJoinTeamPopup(false);
    setSelectedTeam('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert(`Thank you for your interest in joining the ${selectedTeam}! We'll contact you soon.`);
      handleClosePopup();
      setIsSubmitting(false);
    }, 1000);
  };

  // Regular services - no need for specific dates
  const regularServices = [
    {
      id: 1,
      title: "Sunday Service",
      description: "Join us for our weekly Sunday worship service. We'll have inspiring music, prayer, and a powerful message from God's word.",
      time: "8:00 AM - 11:00 AM",
      day: "Every Sunday",
      location: "Main Sanctuary",
      category: "Service",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      isRegular: true
    },
    {
      id: 2,
      title: "Mid Week Miracle Hour",
      description: "A powerful mid-week service designed to strengthen your faith and receive God's miracles in your life.",
      time: "5:30 PM - 7:30 PM",
      day: "Every Wednesday",
      location: "Main Sanctuary",
      category: "Service",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      isRegular: true
    }
  ];


  const serviceTeams = [
    {
      id: 6,
      title: "Worship Team",
      description: "Join our worship team and help lead the congregation in praise and worship through music and song.",
      category: "Service Team",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      isRegular: true
    },
    {
      id: 7,
      title: "Hospitality Team",
      description: "Help welcome and assist visitors and members during our services, ensuring everyone feels at home.",
      category: "Service Team",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      isRegular: true
    },
    {
      id: 8,
      title: "Sanctuary Keepers",
      description: "Help maintain the cleanliness and order of our worship space, ensuring a beautiful environment for worship.",
      category: "Service Team",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      isRegular: true
    },
    {
      id: 9,
      title: "Media Team",
      description: "Support our services through sound, lighting, and visual media to enhance the worship experience.",
      category: "Service Team",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      isRegular: true
    }
  ];


  const formatEventInfo = (event) => {
    return {
      day: event.day,
      month: event.time,
      full: `${event.day} at ${event.time}`
    };
  };

  return (
    <EventsContainer>
      <HeroSection>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-title"
            style={{ color: 'white', fontSize: '3rem' }}
          >
            Events & Activities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-subtitle"
            style={{ color: 'white', opacity: 0.9 }}
          >
            Join us for worship and serve in our ministry
          </motion.p>
        </div>
      </HeroSection>


      <UpcomingEvents id="regular-services">
        <div className="container">
          <h2 className="section-title">Regular Services</h2>
          <p className="section-subtitle">
            Join us for our weekly services
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {regularServices.map((event, index) => {
              const eventInfo = formatEventInfo(event);
              return (
                <EventCard
                  key={event.id}
                  image={event.image}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="event-image">
                    <div className="event-date">
                      <div className="day">{eventInfo.day}</div>
                      <div className="month">{eventInfo.month}</div>
                    </div>
                    <div className="category">{event.category}</div>
                  </div>
                  <div className="event-content">
                    <h3>{event.title}</h3>
                    <div className="event-meta">
                      <div className="meta-item">
                        <FaClock />
                        {event.time}
                      </div>
                      <div className="meta-item">
                        <FaMapMarkerAlt />
                        {event.location}
                      </div>
                    </div>
                    <p>{event.description}</p>
                    <div className="event-actions">
                      <ActionButton className="primary">
                        Join Us
                        <FaArrowRight />
                      </ActionButton>
                    </div>
                  </div>
                </EventCard>
              );
            })}
          </div>
        </div>
      </UpcomingEvents>

      <section style={{ padding: '100px 0', background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Want to Serve?</h2>
          <p className="section-subtitle">
            Join one of our service teams and make a difference in our ministry
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', alignItems: 'stretch' }}>
            {serviceTeams.map((team, index) => (
              <EventCard
                key={team.id}
                image={team.image}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="event-image">
                  <div className="category">{team.category}</div>
                </div>
                <div className="event-content">
                  <h3>{team.title}</h3>
                  <p>{team.description}</p>
                  <div className="event-actions">
                    <ActionButton 
                      className="primary" 
                      onClick={() => handleJoinTeam(team.title)}
                    >
                      Join Team
                      <FaArrowRight />
                    </ActionButton>
                  </div>
                </div>
              </EventCard>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '20px' }}>
              Don't see a team that fits your calling? We'd love to hear from you!
            </p>
            <ActionButton 
              className="primary" 
              style={{ padding: '15px 30px', fontSize: '1.1rem' }}
              onClick={handleContactAdmin}
            >
              Contact Church Admin
              <FaArrowRight />
            </ActionButton>
          </div>
        </div>
      </section>

      {/* Join Team Popup */}
      {showJoinTeamPopup && (
        <PopupOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClosePopup}
        >
          <PopupContent
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={handleClosePopup}>
              <FaTimes />
            </CloseButton>
            
            <FormTitle>Join {selectedTeam}</FormTitle>
            <FormSubtitle>
              We'd love to have you join our {selectedTeam.toLowerCase()}! 
              Please fill out the form below and we'll get back to you soon.
            </FormSubtitle>

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>
                  <FaUser />
                  Full Name *
                </Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </FormGroup>

              <FormGroup>
                <Label>
                  <FaEnvelope />
                  Email Address *
                </Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </FormGroup>

              <FormGroup>
                <Label>
                  <FaPhone />
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </FormGroup>

              <FormGroup>
                <Label>
                  <FaComment />
                  Tell us about yourself
                </Label>
                <TextArea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share your experience, skills, or why you'd like to join this team..."
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </SubmitButton>
            </Form>
          </PopupContent>
        </PopupOverlay>
      )}
    </EventsContainer>
  );
};

export default Events;
