import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function BackgroundParticles() {
  const particlesInit = async (main) => {
    console.log("Particles Initialized"); // Debugging
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: '#000000' },
        },
        particles: {
          number: {
            value: 100,
          },
          color: {
            value: ['#ff005d', '#ff74a4'],
          },
          shape: {
            type: 'heart',
          },
          opacity: {
            value: 0.8,
          },
          size: {
            value: 10,
            random: true,
          },
          move: {
            enable: true,
            speed: 2,
            outModes: {
              default: 'out',
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            repulse: {
              distance: 100,
            },
            push: {
              quantity: 4,
            },
          },
        },
      }}
      className="tsparticles"
    />
  );
}

export default BackgroundParticles;
