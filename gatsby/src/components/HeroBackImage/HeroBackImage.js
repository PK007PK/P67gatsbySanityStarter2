import React, { useEffect, useRef, useState } from 'react';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import { GatsbyImage } from 'gatsby-plugin-image';
import { HeroBackImageStyle } from './HeroBackImage.style';

const HeroBackImage = ({ data }) => (
    <HeroBackImageStyle>
        <GatsbyImage
            imgClassName="pict"
            className="back"
            alt=""
            image={data}
            formats={['auto', 'webp']}
            quality={100}
            style={{ right: '0' }}
        />
    </HeroBackImageStyle>
);

export default HeroBackImage;
