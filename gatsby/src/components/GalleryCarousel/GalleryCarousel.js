import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { BootsContainer } from 'src/components/atoms/BootsElements/BootsElements.ts';
import Slider from 'react-slick';
import ARROW_left from 'src/assets/images/arrLeft.svg';
import ARROW_right from 'src/assets/images/arrRight.svg';
import styled from 'styled-components';
import { GalleryCarouselStyles } from './GalleryCarousel.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GalleryItem from '../GalleryItem/GalleryItem';

const StyledArrowLeft = styled.div`
    display: none;
    ${({ theme }) => theme.media.xsAbove} {
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
        display: none;
        ${({ theme }) => theme.media.xsAbove} {
            display: block;
            width: 40px;
            height: 400px;
        }
    }
`;

const StyledArrowRight = styled.div`
    display: none;
    ${({ theme }) => theme.media.xsAbove} {
        position: absolute;
        z-index: 1;
        right: -25px;
        top: 50px;
        cursor: pointer;
        top: 50%;
        transform: translateY(-50%);
    }
    .arrowIco {
        display: none;
        ${({ theme }) => theme.media.xsAbove} {
            display: block;
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

const GalleryCarousel = ({ testimonials, gallery }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: testimonials ? 1 : 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <RightNavButton />,
        prevArrow: <LeftNavButton />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: testimonials ? 1 : 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: testimonials ? 1 : 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: testimonials ? 1 : 2,
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
            sanityGallery {
                galleryItems {
                    title
                    projectImage {
                        asset {
                            gatsbyImageData
                        }
                    }
                }
            }
            sanityTestimonials {
                testimonialItems {
                    title
                    projectImage {
                        asset {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    `);

    const {
        sanityGallery: { galleryItems },
        sanityTestimonials: { testimonialItems },
    } = data;

    return (
        <GalleryCarouselStyles>
            <BootsContainer>
                <Slider {...settings}>
                    {gallery && galleryItems.map((item, i) => <GalleryItem data={item} key={i} />)}
                    {testimonials &&
                        testimonialItems.map((item, i) => <GalleryItem testimonials data={item} key={i} />)}
                </Slider>
            </BootsContainer>
        </GalleryCarouselStyles>
    );
};

export default GalleryCarousel;
