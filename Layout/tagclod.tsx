'use client'
import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';

function TagCloudComponent() {
  const cloudRef = useRef(null);

  useEffect(() => {
    if (cloudRef.current) {
      const container = cloudRef.current;

      const tags = [
        'React.js','Next.js','Redux', 'JavaScript', 'CSS', 'HTML', 'Node.js','Git & GitHub',
         'Babel', 'Tailwind', 'TypeScript','MongoDb','MySql','Express.js'
      ];

      const cloud = TagCloud(container, tags, {
        radius: 150, // Adjust the size of the sphere
        maxSpeed: 'fast', // Maximum speed of rotation
        initSpeed: 'normal', // Initial speed of rotation
        // direction: 135, // Initial direction of rotation
        keep: true, // Whether to keep rotating on mouse out
      });

      return () => {
        cloud.destroy();
      };
    }
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div ref={cloudRef} className=""></div>
    </div>
  );
}

export default TagCloudComponent;
