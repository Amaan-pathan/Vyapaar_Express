import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './TransporterDashboard.module.css';
import { 
  FaTruck, FaBox, FaClock, FaRupeeSign, FaSearch,
  FaRoute, FaGasPump, FaStopwatch, FaMoneyBillWave
} from 'react-icons/fa';

// Mock data for demonstration
const mockParcels = [
  {
    id: 1,
    pickup: { lat: 19.0760, lng: 72.8777, name: "Mumbai" },
    drop: { lat: 28.6139, lng: 77.2090, name: "Delhi" },
    weight: "500kg",
    deadline: "2024-03-25",
    status: "In Progress",
    progress: 65
  },
  {
    id: 2,
    pickup: { lat: 12.9716, lng: 77.5946, name: "Bangalore" },
    drop: { lat: 17.3850, lng: 78.4867, name: "Hyderabad" },
    weight: "300kg",
    deadline: "2024-03-24",
    status: "Pending",
    progress: 0
  },
  {
    id: 3,
    pickup: { lat: 22.5726, lng: 88.3639, name: "Kolkata" },
    drop: { lat: 13.0827, lng: 80.2707, name: "Chennai" },
    weight: "450kg",
    deadline: "2024-03-26",
    status: "Delivered",
    progress: 100
  }
];

const TransporterDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('deadline');
  const [parcels, setParcels] = useState(mockParcels);

  // Filter and sort parcels
  const filteredParcels = parcels.filter(parcel => 
    parcel.pickup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    parcel.drop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const summaryCards = [
    {
      title: "Parcels to Pick Up",
      value: parcels.filter(p => p.status === "Pending").length,
      icon: <FaTruck />,
      color: "blue"
    },
    {
      title: "Parcels to Drop",
      value: parcels.filter(p => p.status === "In Progress").length,
      icon: <FaBox />,
      color: "green"
    },
    {
      title: "Est. Completion",
      value: "4.5 Hours",
      icon: <FaClock />,
      color: "orange"
    },
    {
      title: "Expected Profit",
      value: "₹15,000",
      icon: <FaRupeeSign />,
      color: "purple"
    }
  ];

  const routeStats = [
    { icon: <FaRoute />, label: "Total Distance", value: "1,250 km" },
    { icon: <FaGasPump />, label: "Fuel Cost", value: "₹8,500" },
    { icon: <FaStopwatch />, label: "Est. Time", value: "16 hours" },
    { icon: <FaMoneyBillWave />, label: "Net Earnings", value: "₹15,000" }
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.leftPanel}>
        <header className={styles.header}>
          <h1 className={styles.title}>Welcome, Transporter 👋</h1>
          <p className={styles.subtitle}>Here's your delivery overview for today!</p>
        </header>

        <div className={styles.searchBar}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search by location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={styles.sortSelect}
          >
            <option value="deadline">Sort by Deadline</option>
            <option value="weight">Sort by Weight</option>
            <option value="status">Sort by Status</option>
          </select>
        </div>

        <div className={styles.summaryCards}>
          {summaryCards.map((card, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${styles[card.color]}`}
            >
              <div className={styles.cardIcon}>{card.icon}</div>
              <div className={styles.cardContent}>
                <h3>{card.title}</h3>
                <p>{card.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.routeOptimization}>
          <h2>Smart Route Suggestion</h2>
          <div className={styles.routeStats}>
            {routeStats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statInfo}>
                  <span className={styles.statLabel}>{stat.label}</span>
                  <span className={styles.statValue}>{stat.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.taskList}>
          <h2>Today's Tasks</h2>
          <div className={styles.tasks}>
            {filteredParcels.map(parcel => (
              <div key={parcel.id} className={styles.taskItem}>
                <div className={styles.taskHeader}>
                  <div className={styles.locations}>
                    <span>{parcel.pickup.name}</span>
                    <FaTruck className={styles.arrow} />
                    <span>{parcel.drop.name}</span>
                  </div>
                  <span className={`${styles.status} ${styles[parcel.status.toLowerCase()]}`}>
                    {parcel.status}
                  </span>
                </div>
                <div className={styles.taskDetails}>
                  <span>Weight: {parcel.weight}</span>
                  <span>Deadline: {parcel.deadline}</span>
                </div>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progress}
                    style={{ width: `${parcel.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.rightPanel}>
        <MapContainer
          center={[20.5937, 78.9629]}
          zoom={5}
          className={styles.map}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {parcels.map(parcel => (
            <React.Fragment key={parcel.id}>
              <Marker position={[parcel.pickup.lat, parcel.pickup.lng]} />
              <Marker position={[parcel.drop.lat, parcel.drop.lng]} />
              <Polyline 
                positions={[
                  [parcel.pickup.lat, parcel.pickup.lng],
                  [parcel.drop.lat, parcel.drop.lng]
                ]}
              />
            </React.Fragment>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default TransporterDashboard; 