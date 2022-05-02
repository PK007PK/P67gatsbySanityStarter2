import React, { useEffect, useRef } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Logo } from 'src/components/atoms/Logo/Logo';
import { CardBlogEntryStyle } from './CardBlogEntry.style';

gsap.registerPlugin(ScrollTrigger);

interface Props {
    data: {
        date: string,
        name: string,
        image: {
            asset: {
                gatsbyImageData: IGatsbyImageData,
            }
        }
    },
    small: boolean,
}

export const CardBlogEntry = React.forwardRef(({ data, small }: Props) => {
    const { name, date } = data;

    const gatsbyImageData = data?.image?.asset?.gatsbyImageData;

    let wrapper: gsap.DOMTarget = useRef(null);
    useEffect(() => {
        gsap.set(wrapper, { autoAlpha: 0 });

        const cardAnimation = gsap.timeline({ defaults: { ease: 'power3.inOut' } }).fromTo(
            wrapper,
            { autoAlpha: 0 },
            {
                duration: 0.7,
                autoAlpha: 1,
            }
        );


        ScrollTrigger.create({
            trigger: wrapper,
            animation: cardAnimation,
            start: 'center bottom',
        });
    }, []);

    return (
        <CardBlogEntryStyle small={small} ref={(el) => (wrapper = el)}>
            <div className="imgWrapper">
                {gatsbyImageData ? (
                    <GatsbyImage
                        className="picture"
                        image={gatsbyImageData}
                        placeholder="blurred"
                        alt={name}
                        formats={['auto', 'webp']}
                        quality={50}
                    />
                ) : (
                    <Logo />
                )}
            </div>
            <div className="textWrapper">
                <h3 className="title">{name}</h3>
                <time className="time" dateTime={date}>
                    {date}
                </time>
            </div>
        </CardBlogEntryStyle>
    );
});
