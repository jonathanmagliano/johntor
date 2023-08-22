import React from 'react';
import Particles from "react-tsparticles"
import particlesConfig from "./particles-config"
import './particles.css'

const ParticlesBackground = () => {
    return (
      <Particles id="tsparticles" params={particlesConfig}>
      </Particles>
    );
}

export default ParticlesBackground