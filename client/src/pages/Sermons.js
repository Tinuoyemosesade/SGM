import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlay, FaDownload, FaShare, FaCalendarAlt, FaUser, FaEye, FaFilter } from 'react-icons/fa';
import ReactPlayer from 'react-player';

const SermonsContainer = styled.div`
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

const SermonsSection = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
`;

const FilterSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 40px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  border: 2px solid ${props => props.active ? '#667eea' : '#ddd'};
  background: ${props => props.active ? '#667eea' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    border-color: #667eea;
    color: #667eea;
  }
`;

const SermonsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
`;

const SermonCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const SermonThumbnail = styled.div`
  position: relative;
  height: 200px;
  background: url('${props => props.thumbnail || 'https://images.unsplash.com/photo-1515378791036-0648a814c963?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'}');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  .play-button {
    width: 60px;
    height: 60px;
    background: rgba(102, 126, 234, 0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #667eea;
      transform: scale(1.1);
    }
  }
`;

const SermonInfo = styled.div`
  padding: 25px;

  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    color: #2c3e50;
    margin-bottom: 10px;
    line-height: 1.4;
  }

  .meta {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
    font-size: 0.9rem;
    color: #666;

    span {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #ddd;
  background: white;
  color: #666;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

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

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #666;
  cursor: pointer;
`;

const Sermons = () => {
  const [sermons, setSermons] = useState([]);
  const [filteredSermons, setFilteredSermons] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedSermon, setSelectedSermon] = useState(null);
  const [loading, setLoading] = useState(true);

  const filters = ['All', 'Sunday Service', 'Bible Study', 'Prayer Meeting', 'Special Event'];

  // Placeholder - sermons will be uploaded soon
  const mockSermons = [];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setSermons(mockSermons);
      setFilteredSermons(mockSermons);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredSermons(sermons);
    } else {
      setFilteredSermons(sermons.filter(sermon => sermon.category === activeFilter));
    }
  }, [activeFilter, sermons]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const openSermon = (sermon) => {
    setSelectedSermon(sermon);
  };

  const closeSermon = () => {
    setSelectedSermon(null);
  };

  return (
    <SermonsContainer>
      <HeroSection>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-title"
            style={{ color: 'white', fontSize: '3rem' }}
          >
            Sermons & Messages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-subtitle"
            style={{ color: 'white', opacity: 0.9 }}
          >
            Watch and listen to inspiring messages that will strengthen your faith
          </motion.p>
        </div>
      </HeroSection>

      <SermonsSection>
        <div className="container">
          <FilterSection>
            <FaFilter style={{ color: '#667eea', fontSize: '1.2rem' }} />
            {filters.map(filter => (
              <FilterButton
                key={filter}
                active={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </FilterButton>
            ))}
          </FilterSection>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <div style={{ fontSize: '1.2rem', color: '#666' }}>Loading sermons...</div>
            </div>
          ) : filteredSermons.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '60px 40px', 
                borderRadius: '15px',
                maxWidth: '600px',
                margin: '0 auto',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <div style={{ 
                  fontSize: '4rem', 
                  color: '#667eea', 
                  marginBottom: '20px' 
                }}>
                  🎥
                </div>
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  color: '#2c3e50', 
                  marginBottom: '15px',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  Sermons Coming Soon!
                </h3>
                <p style={{ 
                  fontSize: '1.1rem', 
                  color: '#666', 
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  Our media team is working hard to bring you inspiring sermons and messages. 
                  Check back soon for powerful teachings that will strengthen your faith.
                </p>
                <div style={{ 
                  background: '#e3f2fd', 
                  padding: '15px 20px', 
                  borderRadius: '8px',
                  color: '#1976d2',
                  fontSize: '0.95rem'
                }}>
                  <strong>📢 Stay Updated:</strong> Follow us on social media for announcements when new sermons are available!
                </div>
              </div>
            </div>
          ) : (
            <SermonsGrid>
              {filteredSermons.map((sermon, index) => (
                <SermonCard
                  key={sermon.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <SermonThumbnail thumbnail={sermon.thumbnail}>
                    <div className="play-button" onClick={() => openSermon(sermon)}>
                      <FaPlay />
                    </div>
                  </SermonThumbnail>
                  <SermonInfo>
                    <h3>{sermon.title}</h3>
                    <div className="meta">
                      <span>
                        <FaUser />
                        {sermon.speaker}
                      </span>
                      <span>
                        <FaCalendarAlt />
                        {formatDate(sermon.date)}
                      </span>
                      <span>
                        <FaEye />
                        {sermon.views} views
                      </span>
                    </div>
                    <p>{sermon.description}</p>
                    <div className="actions">
                      <ActionButton className="primary" onClick={() => openSermon(sermon)}>
                        <FaPlay />
                        Watch Now
                      </ActionButton>
                      <ActionButton>
                        <FaDownload />
                        Download
                      </ActionButton>
                      <ActionButton>
                        <FaShare />
                        Share
                      </ActionButton>
                    </div>
                  </SermonInfo>
                </SermonCard>
              ))}
            </SermonsGrid>
          )}
        </div>
      </SermonsSection>

      {selectedSermon && (
        <Modal onClick={closeSermon}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={closeSermon}>×</CloseButton>
            <h2 style={{ marginBottom: '20px', fontFamily: "'Playfair Display', serif" }}>
              {selectedSermon.title}
            </h2>
            <p style={{ marginBottom: '20px', color: '#666' }}>
              by {selectedSermon.speaker} • {formatDate(selectedSermon.date)}
            </p>
            <div style={{ marginBottom: '20px' }}>
              <ReactPlayer
                url={selectedSermon.videoUrl}
                width="100%"
                height="400px"
                controls
              />
            </div>
            <p style={{ lineHeight: '1.6' }}>{selectedSermon.description}</p>
          </ModalContent>
        </Modal>
      )}
    </SermonsContainer>
  );
};

export default Sermons;
