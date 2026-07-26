import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { reviews } from './CustomerReviewsData';
import './CustomerReviews.css';

const videoBg ="https://res.cloudinary.com/dqktuc5ej/video/upload/v1745161991/vi_bfhz8l.mp4"; 

const CustomerReviews = () => {
  return (
    <>
      <div className="title">Customer Reviews</div>
      <hr />

      <div className="customer-reviews" style={{position: 'relative', zIndex: 1}}>
        <video autoPlay loop muted className="video-bg" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0}}>
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className='swiper-container'>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            style={{zIndex:200}}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="review-card">
                  <div className="review-avatar-section">
                    <div className="review-avatar-ring">
                      <img src={review.avatar} alt={review.name} className="review-avatar" />
                      <div className="review-avatar-glow"></div>
                      <div className="review-avatar-spin"></div>
                    </div>
                  </div>
                  <div className="review-content">
                    <div className="review-scan-lines"></div>
                    <div className="review-particles"></div>
                    <div className="review-header">
                      <span className="review-name">{review.name}</span>
                      <span className="review-company">{review.company}</span>
                      <span className="review-service">{review.service}</span>
                      <span className="review-stars">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="review-star" />
                        ))}
                      </span>
                    </div>
                    <div className="review-text">{review.review}</div>
                    <div className="review-actions">
                      <a href={review.website} target="_blank" rel="noopener noreferrer" className="review-btn">Visit Website</a>
                      <a href={review.reviewLink} target="_blank" rel="noopener noreferrer" className="review-btn">View Review</a>
                    </div>
                  </div>
                  <div className="holo-border-anim"></div>
                </div>
              </SwiperSlide>
              ))}
              {/* Last card: Working on projects & open for more */}
            <SwiperSlide key="open-for-more">
              <div className="review-card" style={{justifyContent: 'center', alignItems: 'center', minHeight: 320, display: 'flex'}}>
                <div className="review-content" style={{width: '100%', textAlign: 'center', padding: '2rem 1rem'}}>
                  <div className="scan-lines"></div>
                  <div className="particles"></div>
                  <div style={{fontSize: '1.5rem', fontWeight: 700, color: '#3498db', marginBottom: '0.7rem', fontFamily: 'Share Tech Mono, Courier New, monospace', letterSpacing: '1.5px'}}>🚀 Open for New Projects!</div>
                  <div style={{fontSize: '1.13rem', color: '#fff', marginBottom: '1.2rem', fontFamily: 'Share Tech Mono, Courier New, monospace', opacity: 0.92}}>
                    Currently collaborating with clients and teams on exciting new projects.<br/>Open for more opportunities and partnerships!<br/><br/>
                    <span style={{color:'#3498db', fontWeight:700}}>Let&apos;s build something amazing together.</span>
                  </div>
                  <a href="#contact" className="review-btn" style={{marginTop: '0.5rem'}}>Contact Me</a>
                </div>
                <div className="border-anim"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CustomerReviews;
