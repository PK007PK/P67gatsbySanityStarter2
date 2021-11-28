import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import Slider from 'react-slick';
import ARROW_left from 'src/assets/images/arrLeft.svg';
import ARROW_right from 'src/assets/images/arrRight.svg';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { CooperatingCitiesCarouselStyle } from './CooperatingCitiesCarousel.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledArrowLeft = styled.div`
    display: none;

    ${({ theme }) => theme.media.smAbove} {
        display: block;
        position: absolute;
        z-index: 1;
        left: -25px;
        top: 50px;
        cursor: pointer;
        top: 50%;
        transform: translateY(-50%);
    }

    .arrowIco {
        width: 0px;
        height: 0px;

        ${({ theme }) => theme.media.smAbove} {
            width: 40px;
            height: 400px;
        }
    }
`;

const StyledArrowRight = styled.div`
    position: absolute;
    z-index: 1;
    right: -25px;
    top: 50px;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);

    .arrowIco {
        width: 0px;
        height: 0px;

        ${({ theme }) => theme.media.smAbove} {
            width: 40px;
            height: 400px;
        }
    }
`;

function LeftNavButton(props) {
    const { className, style, onClick } = props;
    return (
        <StyledArrowLeft className="slick-arrow1" style={{ ...style, display: 'block' }} onClick={onClick}>
            <img className="arrowIco" src={ARROW_left} alt="arrow_left" />
        </StyledArrowLeft>
    );
}

function RightNavButton(props) {
    const { className, style, onClick } = props;
    return (
        <StyledArrowRight className="slick-arrow" style={{ ...style, display: 'block' }} onClick={onClick}>
            <img className="arrowIco" src={ARROW_right} alt="arrow_right" />
        </StyledArrowRight>
    );
}

const CooperatingCitiesCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <RightNavButton />,
        prevArrow: <LeftNavButton />,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const data = useStaticQuery(graphql`
        {
            allSanityCooperatingCities {
                nodes {
                    galleryItems {
                        title
                        projectImage {
                            asset {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `);

    const { galleryItems } = data.allSanityCooperatingCities.nodes[0];

    return (
        <CooperatingCitiesCarouselStyle>
            {/* <BootsContainer> */}
            <BootsRow>
                <BootsColumn sm={6} md={5} style={{ position: 'relative' }}>
                    <h3 className="title">Nasi partnerzy:</h3>
                    <Slider {...settings} className="slider">
                        {galleryItems.map((item, i) => (
                            <div key={i} className="cardContainer">
                                <GatsbyImage
                                    className="image"
                                    image={item.projectImage.asset.gatsbyImageData}
                                    placeholder="tracedSVG"
                                    alt={item.title}
                                    formats={['auto', 'webp']}
                                    quality={30}
                                />
                                <h4 className="cityName">{item.title}</h4>
                            </div>
                        ))}
                    </Slider>
                </BootsColumn>
            </BootsRow>
            {/* </BootsContainer> */}
        </CooperatingCitiesCarouselStyle>
    );
};

export default CooperatingCitiesCarousel;
