import React from 'react';
import styled, { css } from 'styled-components/macro';

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWhrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const Hero = () => {
    return (
        <HeroSection>
            <HeroWhrapper>
            <h1>Heroo</h1>
            </HeroWhrapper>
        </HeroSection>
    )
}

export default Hero
