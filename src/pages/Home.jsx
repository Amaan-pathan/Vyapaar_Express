import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styles from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();

  const stats = [
    { number: "10,000+", label: "Active Users" },
    { number: "50,000+", label: "Deliveries Completed" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "₹2Cr+", label: "Revenue Generated" }
  ];

  return (
    <>
      <Navbar />
      <div className={styles.homePage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleMain}>Revolutionize Your Logistics</span>
              <span className={styles.titleSub}>Vyapaar Express</span>
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

        {/* Stats Section */}
        <section className={styles.stats}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <h3 className={styles.statNumber}>{stat.number}</h3>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <h2 className={styles.sectionTitle}>Why Choose Vyapaar Express?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚚</div>
              <h3 className={styles.featureTitle}>Smart Route Optimization</h3>
              <p className={styles.featureDescription}>
                AI-powered route planning to minimize delivery time and maximize efficiency. Our algorithms consider traffic, weather, and historical data.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3 className={styles.featureTitle}>Real-time Tracking</h3>
              <p className={styles.featureDescription}>
                Track your shipments in real-time with our advanced GPS integration. Get instant notifications and live status updates.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💰</div>
              <h3 className={styles.featureTitle}>Competitive Pricing</h3>
              <p className={styles.featureDescription}>
                Get the best rates through our vast network of verified transporters. Transparent pricing with no hidden charges.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className={styles.howItWorks}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Register & List</h3>
              <p>Sign up as a vendor or transporter and list your requirements or services</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Match & Connect</h3>
              <p>Get matched with verified partners based on your specific needs</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Track & Deliver</h3>
              <p>Monitor shipments in real-time and ensure timely delivery</p>
            </div>
          </div>
        </section>

        {/* Join Section */}
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
                className={`${styles.button} ${styles.primaryCta}`}
              >
                Register as Transporter
              </button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className={styles.about} id="about">
          <div className={styles.aboutContainer}>
            <h2 className={styles.sectionTitle}>About Us</h2>
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <p>
                  Vyapaar Express is India's leading logistics platform, bridging the gap between vendors and transporters. 
                  Founded with a vision to revolutionize the logistics industry, we leverage cutting-edge technology to 
                  provide seamless, efficient, and reliable transportation solutions.
                </p>
                <p>
                  Our mission is to empower businesses of all sizes by providing them with access to a vast network of 
                  verified transporters, real-time tracking capabilities, and competitive pricing. We're committed to 
                  driving innovation in the logistics sector while ensuring customer satisfaction remains our top priority.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contact} id="contact">
          <div className={styles.contactContainer}>
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <div className={styles.contactContent}>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📍</span>
                  <div>
                    <h3>Address</h3>
                    <p>123 Logistics Hub, Tech Park<br />Bangalore, Karnataka 560001</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📧</span>
                  <div>
                    <h3>Email</h3>
                    <p>support@vyapaarexpress.com<br />business@vyapaarexpress.com</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📱</span>
                  <div>
                    <h3>Phone</h3>
                    <p>+91 1800-123-4567<br />+91 9876543210</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home; 
