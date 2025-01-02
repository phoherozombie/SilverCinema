'use client';
import React, { useEffect, useState } from 'react';
import Feature from './Feature';

const Features = () => {
  const [featuresData, setFeaturesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/features');
        const data = await response.json();
        setFeaturesData(data);
      } catch (error) {
        console.error('Error fetching features data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h4 className="text-red-500 text-lg font-bold mb-2">What you'll get?</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-10">
          Unleash the Movie Magic and Discover Our Spectacular Features
        </h2>
        {loading ? (
          <div className="text-center py-10">
            <div className="spinner-border text-red-500" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            {featuresData.length > 0 ? (
              featuresData.map((feature, idx) => (
                <Feature
                  key={idx}
                  title={feature.title}
                  description={feature.description}
                  image_path={feature.image}
                  icon={feature.icon}
                />
              ))
            ) : (
              <p className="text-center text-gray-400">No features available.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
