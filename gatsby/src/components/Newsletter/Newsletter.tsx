import React, { useState } from 'react';

import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { CardButton } from 'components/atoms/CardButton/CardButton';

import { GiLetterBomb } from '@react-icons/all-files/gi/GiLetterBomb';
import { NewsletterStyle } from './NewsletterStyle';
import { CommonProps } from 'types/commonProps';
import { FormNewsletter } from 'components/FormNewsletter/FormNewsletter';
import { useNewsletterGraphQLData } from './useNewsletterGraphQLData';

interface NewsletterProps extends CommonProps {}

export const Newsletter: React.FunctionComponent<NewsletterProps> = ({ className, style }) => {
    const [open, setOpen] = useState(false);
    const url = useNewsletterGraphQLData();

    return (
        <div style={style} className={className}>
            {!open && (
                <CardButton
                    title="Newsletter"
                    iconComponent={() => <GiLetterBomb className="icon" />}
                    onClick={() => setOpen(!open)}
                />
            )}
            {open && (
                <NewsletterStyle>
                    <button className="closeBtn" type="button" onClick={() => setOpen(!open)}>
                        X
                    </button>

                    <MailchimpSubscribe
                        url={url}
                        render={({ subscribe, status, message }) => (
                            <FormNewsletter
                                status={status}
                                message={message}
                                onValidated={(formData) => subscribe(formData)}
                            />
                        )}
                    />
                </NewsletterStyle>
            )}
        </div>
    );
};
