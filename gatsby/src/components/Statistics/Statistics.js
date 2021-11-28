import { MdLocationCity } from '@react-icons/all-files/md/MdLocationCity';
import { BsFillPeopleFill } from '@react-icons/all-files/bs/BsFillPeopleFill';
import { GrDocumentStore } from '@react-icons/all-files/gr/GrDocumentStore';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import React from 'react';
import { StatisticsStyle } from './Statistics.style';

const Statistics = () => (
    <StatisticsStyle>
        <BootsContainer>
            <BootsRow>
                <BootsColumn sm={4}>
                    <div className="cardContainer">
                        <div className="iconContainer">
                            <MdLocationCity className="icon" />
                        </div>
                        <p className="lead">
                            <span className="number">20</span>
                            <br />
                            obsługiwanych
                            <br />
                            gmin
                        </p>
                    </div>
                </BootsColumn>
                <BootsColumn sm={4}>
                    <div className="cardContainer">
                        <div className="iconContainer">
                            <BsFillPeopleFill className="icon" />
                        </div>
                        <p className="lead">
                            <span className="number">960</span>
                            <br />
                            spotkań
                            <br />z mieszkańcami
                        </p>
                    </div>
                </BootsColumn>
                <BootsColumn sm={4}>
                    <div className="cardContainer">
                        <div className="iconContainer">
                            <GrDocumentStore className="icon" />
                        </div>
                        <p className="lead">
                            <span className="number">600</span>
                            <br />
                            wniosków
                            <br />o dotacje
                        </p>
                    </div>
                </BootsColumn>
            </BootsRow>
        </BootsContainer>
    </StatisticsStyle>
);

export default Statistics;
