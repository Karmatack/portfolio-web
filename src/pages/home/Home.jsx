import React from 'react';
import Hero from './Hero';
import FeaturedProjects from './FeaturedProjects';
import './Home.css';

function Home() {
  return (
    <div mt-8>
      <Hero /> {/* Hero Section */}
      <FeaturedProjects /> {/* Featured Projects Section */}
    </div>
  );
}

export default Home;
