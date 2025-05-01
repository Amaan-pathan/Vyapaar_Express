import React, { useState, useRef } from 'react';
import styles from './VendorDashboard.module.css';
import { FaRocket, FaPiggyBank, FaStar, FaShippingFast, FaClock, FaShieldAlt } from 'react-icons/fa';

const VendorDashboard = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    weight: '',
    date: ''
  });

  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const handleOptionSelect = (option) => {
    console.log(`Selected ${option} option`);
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.formCard}>
        <h1 className={styles.title}>
          <span className={styles.titleHighlight}>Discover</span> Your Perfect
          <br />
          Shipping Solution
        </h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="pickupLocation">
              📍 Pick-up Location
            </label>
            <input
              type="text"
              id="pickupLocation"
              name="pickupLocation"
              className={styles.input}
              value={formData.pickupLocation}
              onChange={handleChange}
              placeholder="Enter pick-up address"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="dropoffLocation">
              🎯 Drop-off Location
            </label>
            <input
              type="text"
              id="dropoffLocation"
              name="dropoffLocation"
              className={styles.input}
              value={formData.dropoffLocation}
              onChange={handleChange}
              placeholder="Enter delivery address"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="weight">
              ⚖️ Package Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              className={styles.input}
              value={formData.weight}
              onChange={handleChange}
              placeholder="Enter package weight"
              min="0"
              step="0.1"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="date">
              📅 Pickup Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className={styles.input}
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            <span>Find Transport Options</span>
            <FaShippingFast className={styles.submitIcon} />
          </button>
        </form>
      </div>

      {showResults && (
        <div className={styles.resultsContainer} ref={resultsRef}>
          <div 
            className={`${styles.optionCard} ${styles.fastest}`}
            onClick={() => handleOptionSelect('fastest')}
            role="button"
            tabIndex={0}
          >
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>
                <FaRocket className={styles.optionIcon} />
                <FaShippingFast className={styles.secondaryIcon} />
              </div>
              <h3 className={styles.optionTitle}>
                <span className={styles.optionHighlight}>Express</span> Delivery
              </h3>
              <p className={styles.optionDetails}>
                ⚡️ Lightning-fast delivery within 24h
                <br />
                🔝 Premium priority handling
                <br />
                📱 Real-time GPS tracking
              </p>
              <div className={styles.price}>
                <span className={styles.currency}>₹</span>
                <span className={styles.amount}>2,499</span>
              </div>
              <button className={styles.selectButton}>
                Choose Express
              </button>
            </div>
            <div className={styles.cardOverlay}>
              <div className={styles.overlayContent}>
                <span className={styles.overlayText}>Premium Express</span>
                <span className={styles.overlaySubtext}>Fastest in the Market</span>
              </div>
            </div>
          </div>

          <div 
            className={`${styles.optionCard} ${styles.cheapest}`}
            onClick={() => handleOptionSelect('cheapest')}
            role="button"
            tabIndex={0}
          >
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>
                <FaPiggyBank className={styles.optionIcon} />
                <FaClock className={styles.secondaryIcon} />
              </div>
              <h3 className={styles.optionTitle}>
                <span className={styles.optionHighlight}>Budget</span> Friendly
              </h3>
              <p className={styles.optionDetails}>
                💰 Most economical option
                <br />
                🚚 3-5 days delivery
                <br />
                📊 Regular status updates
              </p>
              <div className={styles.price}>
                <span className={styles.currency}>₹</span>
                <span className={styles.amount}>999</span>
              </div>
              <button className={styles.selectButton}>
                Choose Budget
              </button>
            </div>
            <div className={styles.cardOverlay}>
              <div className={styles.overlayContent}>
                <span className={styles.overlayText}>Best Deal</span>
                <span className={styles.overlaySubtext}>Save Big on Shipping</span>
              </div>
            </div>
          </div>

          <div 
            className={`${styles.optionCard} ${styles.best}`}
            onClick={() => handleOptionSelect('best')}
            role="button"
            tabIndex={0}
          >
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>
                <FaStar className={styles.optionIcon} />
                <FaShieldAlt className={styles.secondaryIcon} />
              </div>
              <h3 className={styles.optionTitle}>
                <span className={styles.optionHighlight}>Premium</span> Value
              </h3>
              <p className={styles.optionDetails}>
                ⭐️ 48-hour delivery
                <br />
                🛡️ Full insurance coverage
                <br />
                📲 Premium tracking service
              </p>
              <div className={styles.price}>
                <span className={styles.currency}>₹</span>
                <span className={styles.amount}>1,799</span>
              </div>
              <button className={styles.selectButton}>
                Choose Premium
              </button>
            </div>
            <div className={styles.cardOverlay}>
              <div className={styles.overlayContent}>
                <span className={styles.overlayText}>Recommended</span>
                <span className={styles.overlaySubtext}>Perfect Balance</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorDashboard; 