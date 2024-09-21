// import React, { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim"; // Make sure tsparticles-slim is installed

// const Particle = () => {
//   // Initialize particles
//   const particlesInit = useCallback(async (engine) => {
//     console.log(engine);
//     // Load the slim version of tsparticles
//     await loadSlim(engine);
//   }, []);

//   // Callback when particles are loaded
//   const particlesLoaded = useCallback(async (container) => {
//     await console.log(container);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={{
//         background: {
//           color: {
//             value: "#0d47a1", // Change the background color if needed
//           },
//         },
//         fpsLimit: 120, // Limit frames per second
//         interactivity: {
//           events: {
//             onClick: {
//               enable: true,
//               mode: "push", // Add particles when clicked
//             },
//             onHover: {
//               enable: true,
//               mode: "repulse", // Repulse particles when hovered
//             },
//             resize: true, // Adjust on window resize
//           },
//           modes: {
//             push: {
//               quantity: 4, // Number of particles pushed on click
//             },
//             repulse: {
//               distance: 200, // Repulse distance on hover
//               duration: 0.4,
//             },
//           },
//         },
//         particles: {
//           color: {
//             value: "#ffffff", // Particle color
//           },
//           links: {
//             color: "#ffffff", // Color of the links between particles
//             distance: 150,
//             enable: true,
//             opacity: 0.5,
//             width: 1,
//           },
//           move: {
//             direction: "none",
//             enable: true,
//             outModes: {
//               default: "bounce", // Bounce particles off the canvas borders
//             },
//             random: false,
//             speed: 6, // Particle movement speed
//             straight: false,
//           },
//           number: {
//             density: {
//               enable: true,
//               area: 800, // Density area of the particles
//             },
//             value: 80, // Total number of particles
//           },
//           opacity: {
//             value: 0.5, // Particle opacity
//           },
//           shape: {
//             type: "circle", // Shape of the particles
//           },
//           size: {
//             value: { min: 1, max: 5 }, // Min and max size of particles
//           },
//         },
//         detectRetina: true, // High DPI support
//       }}
//     />
//   );
// };

// export default Particle;

import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;