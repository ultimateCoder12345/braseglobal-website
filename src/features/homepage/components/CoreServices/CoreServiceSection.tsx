import React from "react";
import styles from "./CoreServices.module.scss"; 
const CoreServicesSection: React.FC = () => {
  return (
    <section className={styles.coreServices}>
      <h2>Our Core Services</h2>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <span className={styles.icon}>📈</span>
          <h3>IT Consulting</h3>
          <p>
            Strategic IT guidance to optimize your business operations and
            achieve digital excellence.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <span className={styles.icon}>☁️</span>
          <h3>Cloud Solutions</h3>
          <p>
            Scalable and secure cloud infrastructure, migration, and management
            for enhanced agility.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <span className={styles.icon}>🔄</span>
          <h3>Digital Transformation</h3>
          <p>
            Revolutionize your business with innovative technologies and
            processes for competitive advantage.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <span className={styles.icon}>🔒</span>
          <h3>Cybersecurity</h3>
          <p>
            Robust protection against cyber threats, ensuring data integrity and
            business continuity.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <span className={styles.icon}>📊</span>
          <h3>Data Analytics</h3>
          <p>
            Unlock insights from your data with advanced analytics and business
            intelligence solutions.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <span className={styles.icon}>💻</span>
          <h3>Custom Software Development</h3>
          <p>
            Tailored software solutions built to spec, enhancing efficiency and
            meeting unique business needs.
          </p>
        </div>
      </div>
      <button className={styles.viewAllBtn}>View All Services</button>
    </section>
  );
};

export default CoreServicesSection;
