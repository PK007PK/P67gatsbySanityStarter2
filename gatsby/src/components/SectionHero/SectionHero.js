import React from 'react';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/atoms/BootsElements/BootsElements.ts';
import { SectionHeroStyle } from './SectionHero.styles';

const SectionHero = ({ leftComponent, rightComponent }) => {
    const LeftComponent = leftComponent;
    const RightComponent = rightComponent;
    return (
        <BootsContainer>
            <SectionHeroStyle>
                <BootsRow>
                    <BootsColumn xs={12} sm={9} md={6}>
                        {leftComponent && <LeftComponent />}
                    </BootsColumn>
                    <BootsColumn xs={12} sm={3} md={6}>
                        {rightComponent && <RightComponent />}
                    </BootsColumn>
                </BootsRow>
            </SectionHeroStyle>
        </BootsContainer>
    );
};

export default SectionHero;
