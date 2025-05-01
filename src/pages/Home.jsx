import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homePage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Revolutionize Your Logistics with Vyapaar Express
          </h1>
          <p className={styles.heroSubtitle}>
            India's most advanced platform connecting vendors with transporters for seamless logistics operations
          </p>
          <div className={styles.heroButtons}>
            <button
              onClick={() => navigate('/vendor')}
              className={`${styles.button} ${styles.primaryButton}`}
            >
              Continue as Vendor
            </button>
            <button
              onClick={() => navigate('/transporter')}
              className={`${styles.button} ${styles.secondaryButton}`}
            >
              Continue as Transporter
            </button>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🚚</div>
            <h3 className={styles.featureTitle}>Smart Route Optimization</h3>
            <p className={styles.featureDescription}>
              AI-powered route planning to minimize delivery time and maximize efficiency
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📱</div>
            <h3 className={styles.featureTitle}>Real-time Tracking</h3>
            <p className={styles.featureDescription}>
              Track your shipments in real-time with our advanced GPS integration
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>💰</div>
            <h3 className={styles.featureTitle}>Competitive Pricing</h3>
            <p className={styles.featureDescription}>
              Get the best rates through our vast network of verified transporters
            </p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Join the Future of Logistics</h2>
          <p className={styles.ctaText}>
            Whether you're a vendor looking to ship products or a transporter ready to grow your business,
            VyapaarExpress is your trusted partner.
          </p>
          <div className={styles.ctaButtons}>
            <button
              onClick={() => navigate('/vendor')}
              className={`${styles.button} ${styles.primaryButton}`}
            >
              Register as Vendor
            </button>
            <button
              onClick={() => navigate('/transporter')}
              className={`${styles.button} ${styles.secondaryButton}`}
            >
              Register as Transporter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 