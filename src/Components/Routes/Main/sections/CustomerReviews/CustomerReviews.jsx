import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { reviews } from './CustomerReviewsData';
import './CustomerReviews.css';

const CustomerReviews = () => {
  return (
    <section className="reviews-section">
      <motion.div
        className="title"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Customer Reviews
      </motion.div>
      <motion.hr
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <motion.div
        className="reviews-slider"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="reviews-swiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="review-card">
                <div className="review-card__accent" />
                <div className="review-card__glow" />

                {/* Quote icon */}
                <div className="review-card__quote">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/>
                  </svg>
                </div>

                {/* Top: Avatar + Info */}
                <div className="review-card__top">
                  <div className="review-card__avatar-wrap">
                    <img src={review.avatar} alt={review.name} className="review-card__avatar" />
                  </div>
                  <div className="review-card__meta">
                    <h4 className="review-card__name">{review.name}</h4>
                    <span className="review-card__company">{review.company}</span>
                    <span className="review-card__service">{review.service}</span>
                  </div>
                  <div className="review-card__stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="review-card__star" />
                    ))}
                  </div>
                </div>

                {/* Review text */}
                <p className="review-card__text">"{review.review}"</p>

                {/* Actions */}
                {(review.website || review.reviewLink) && (
                  <div className="review-card__actions">
                    {review.website && (
                      <a href={review.website} target="_blank" rel="noopener noreferrer" className="review-card__btn review-card__btn--primary">
                        <span>Visit Website</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                      </a>
                    )}
                    {review.reviewLink && (
                      <a href={review.reviewLink} target="_blank" rel="noopener noreferrer" className="review-card__btn review-card__btn--ghost">
                        <span>View Review</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}

          {/* CTA Slide */}
          <SwiperSlide key="open-for-more">
            <div className="review-card review-card--cta">
              <div className="review-card__accent" />
              <div className="review-card__glow" />

              <div className="review-cta__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </div>
              <h3 className="review-cta__title">Open for New Projects!</h3>
              <p className="review-cta__text">
                Currently collaborating with clients and teams on exciting new projects.
                <br />Open for more opportunities and partnerships.
              </p>
              <p className="review-cta__highlight">Let's build something amazing together.</p>
              <a href="#contact" className="review-card__btn review-card__btn--primary review-cta__btn">
                <span>Contact Me</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </section>
  );
};

export default CustomerReviews;
