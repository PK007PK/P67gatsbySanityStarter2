import React, { useState } from 'react';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import { HeroBreakingNewsStyle } from './HeroBreakingNews.style';

const HeroBreakingNews = () => {
    const [isClose, setIsClose] = useState(false);
    return (
        <>
            {!isClose && (
                <HeroBreakingNewsStyle>
                    <BootsContainer>
                        <BootsRow>
                            <div className="title">Uwaga!</div>
                            <BootsColumn>
                                <div className="card">
                                    <p>
                                        Dotacje na: wymianę pieców, pompy ciepła, panele fotowoltaiczne. Zadzwoń,
                                        pomożemy:
                                        <span className="phone">737-179-717</span>
                                    </p>
                                    <button onClick={() => setIsClose(true)} type="button" className="close">
                                        X
                                    </button>
                                </div>
                            </BootsColumn>
                        </BootsRow>
                    </BootsContainer>
                </HeroBreakingNewsStyle>
            )}
        </>
    );
};

export default HeroBreakingNews;
