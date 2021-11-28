import React from 'react';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import CooperatingCitiesCarousel from '../CooperatingCitiesCarousel/CooperatingCitiesCarousel';
import { SectionHeroStyle } from './SectionHero.styles';

const SectionHero = ({ leftComponent, homePage }) => {
    const LeftComponent = leftComponent;
    return (
        <BootsContainer style={{ position: 'relative' }}>
            <SectionHeroStyle>
                <BootsRow className="firstRow">
                    <BootsColumn xs={9} sm={9} md={8}>
                        <LeftComponent />
                    </BootsColumn>
                </BootsRow>
            </SectionHeroStyle>
            {homePage && <CooperatingCitiesCarousel />}
        </BootsContainer>
    );
};

export default SectionHero;
