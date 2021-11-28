import styled from 'styled-components';

export const GalleryItemStyle = styled.div`
    display: flex;

    .imageThumb {
        background-size: ${({ testimonials }) => (testimonials ? 'cover' : 'cover')};
        height: ${({ testimonials }) => (testimonials ? '100vh' : '350px')};

        ${({ theme }) => theme.media.smAbove} {
            width: ${({ testimonials }) => (testimonials ? '80vw' : null)};
            margin: 0 auto;
        }

        ${({ theme }) => theme.media.mdAbove} {
            height: ${({ testimonials }) => (testimonials ? '120vh' : '350px')};
            width: ${({ testimonials }) => (testimonials ? '80vw' : null)};
            margin: 0 auto;
        }

        ${({ theme }) => theme.media.lgAbove} {
            height: ${({ testimonials }) => (testimonials ? '100vh' : '350px')};
            width: ${({ testimonials }) => (testimonials ? '40vw' : null)};
            margin: 0 auto;
        }
    }
`;
