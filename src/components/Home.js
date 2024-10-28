import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import standard from '../components/standard.jpeg';
import deluxe from '../components/delexue.jpeg';
import suite from '../components/suite.jpeg';
import accessible from '../components/Acc.jpeg';
import family from '../components/family.jpeg';
import oceanview from '../components/oceanview.jpg';
import connecting from '../components/connecting.jpg';
import villa from '../components/villa.jpg';
import spain from '../components/spain.jpg'; 
import london from '../components/london.jpg';
import croatia from '../components/croatia.jpg'; 
import germany from '../components/germany.jpeg';
import france from '../components/france.jpeg'; 
import italy from '../components/italy.jpeg';
import swiss from '../components/swiss.jpeg';
import india from '../components/india.jpeg';
import japan from '../components/japan.jpeg'; 
import china from '../components/china.jpeg';
import singapore from '../components/singapore.jpeg';
import southafr from '../components/southafr.jpeg';

// Sample data for rooms
const rooms = [
  {
    id: 1,
    name: 'Standard Room',
    description: 'A cozy room with essential amenities.',
    price: '$100/night',
    image: standard
  },
  {
    id: 2,
    name: 'Deluxe Room',
    description: 'A spacious room with premium amenities.',
    price: '$150/night',
    image: deluxe
  },
  {
    id: 3,
    name: 'Suite',
    description: 'Luxurious suite with extra space and high-end amenities.',
    price: '$250/night',
    image: suite
  },
  {
    id: 4,
    name: 'Accessible Room',
    description: 'Designed for disabled guests with larger bathrooms, lower beds, and handrails.',
    price: '$69/night',
    image: accessible
  },
  {
    id: 5,
    name: 'Family Suite',
    description: 'Perfect choice for a family with up to 3 children.',
    price: '$100/night',
    image: family
  },
  {
    id: 6,
    name: 'Ocean View Room',
    description: 'Enjoy a full view of the ocean from our Ocean View Suite.',
    price: '$169/night',
    image: oceanview
  },
  {
    id: 7,
    name: 'Connecting Family Room',
    description: 'Families, friends, and other travelling parties may request connecting rooms – separate rooms that are joined by a door..',
    price: '$100/night',
    image: connecting
  },
  {
    id: 8,
    name: 'Villas',
    description: 'A villa is a type of house that was originally an ancient Roman upper class country house',
    price: '$200/night',
    image: villa
  },
];


// Sample data for popular destinations
const destinations = [
  {
    id: 1,
    name: 'Spain',
    image: spain,
  },
  {
    id: 2,
    name: 'London',
    image: london,
  },
  {
    id: 3,
    name: 'Croatia',
    image: croatia,
  },
  {
    id: 4,
    name: 'Germany',
    image: germany,
  },
  {
    id: 5,
    name: 'France',
    image: france,
  },
  {
    id: 6,
    name: 'Italy',
    image: italy,
  },
  {
    id: 7,
    name: 'Switzerland',
    image: swiss,
  },
  {
    id: 8,
    name: 'India',
    image: india,
  },
  {
    id: 9,
    name: 'Japan',
    image: japan,
  },
  {
    id: 10,
    name: 'China',
    image: china,
  },
  {
    id: 11,
    name: 'Singapore',
    image: singapore,
  },
  {
    id: 12,
    name: 'South Africa',
    image: southafr,
  },
  
  
];

const Home = () => {
  const navigate = useNavigate();

  const handleBookRoom = (roomId) => {
    navigate(`/payment/${roomId}`);
  };

  return (
    <div className="home-container">
      <header className="home-header">
      
        <h1 >Welcome to Our Luxurious Stay</h1>
        <p>Discover comfort and elegance in every room.</p>
        <div className="booking-options">
          <input type="text" placeholder="Destination" />
          <input type="date" placeholder="Check-in" />
          <input type="date" placeholder="Check-out" />
          <input type="number" placeholder="Guests" min="1" />
          <button className="search-button">Find Rooms</button>
        </div>
      </header>

      <section className="popular-destinations">
        <h2>Explore Popular Destinations</h2>
        
        <div className="destination-list">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <img src={destination.image} alt={destination.name} className="destination-image" />
              <h3>{destination.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="room-options">
        <h2>CHOOSE YOUR ROOMS</h2>
        <div className="room-list">
          {rooms.map((room) => (
            <div key={room.id} className="room-card">
              <img src={room.image} alt={room.name} className="room-image" />
              <h3>{room.name}</h3>
              <p>{room.description}</p>
              <p className="room-price">{room.price}</p>
              <button className="book-room-button" onClick={() => handleBookRoom(room.id)}>Book Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h2>Guest Reviews</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>"An unforgettable stay! The rooms were exquisite, and the view was magnificent."</p>
            <p>- Suriya</p>
          </div>
          <div className="testimonial">
            <p>"The staff went above and beyond to ensure our comfort. Truly a 5-star experience."</p>
            <p>- Shrihari</p>
          </div>
          <div className="testimonial">
            <p>"We had a fantastic time in the family suite. My little dear Vansh loved it!!"</p>
            <p>- Shashank</p>
          </div>
        </div>
      </section>

      <section className="contact-us">
        <h2>Contact Us Anytime</h2>
        <p>Our team is available 24/7 to assist you with any inquiries.</p>
      </section>

      <footer className="site-footer">
        <p>&copy; 2024 LuxStay. All Rights Reserved.</p>
        <p>Connect with us:</p>
        <div className="social-media-icons">
          <a href="https://facebook.com">Facebook</a> | 
          <a href="https://twitter.com">Twitter</a> | 
          <a href="https://instagram.com">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
