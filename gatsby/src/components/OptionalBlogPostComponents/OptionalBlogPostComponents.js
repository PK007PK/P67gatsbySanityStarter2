import React from 'react';
import Newsletter from 'src/components/Newsletter/Newsletter';

import { CardSimple } from 'components/atoms/CardSimple/CardSimple';
import CardContactForm from 'components/molecules/CardContactForm/CardContactForm';
import SocialShare from '../SocialShare/SocialShare';

import { OptionalBlogPostComponentsStyle } from './OptionalBlogPostComponents.style';

const OptionalBlogPostComponents = ({ data, name, excerpt }) => (
    <OptionalBlogPostComponentsStyle>
        {data.map((item, i) => {
            switch (item) {
                case 0:
                    return <CardContactForm key={i} className="item" />;
                case 1:
                    return <SocialShare key={i} className="item" title={name} excerpt={excerpt} messengerID={1234} />;
                case 2:
                    return (
                        <a key={i} target="blank" href="/EkoMonterzy-Czyste-Powietrze.pdf">
                            <CardSimple
                                key={i}
                                className="item"
                                data={{
                                    projectName: 'Program "Czyste Powietrze". Najważniejsze informacje. Pobierz PDF',
                                    backgroundColor: 'var(--colorActiveSecondary)',
                                }}
                            />
                        </a>
                    );
                case 3:
                    return <Newsletter key={i} className="item" />;
                default:
                    break;
            }
        })}
    </OptionalBlogPostComponentsStyle>
);

export default OptionalBlogPostComponents;
