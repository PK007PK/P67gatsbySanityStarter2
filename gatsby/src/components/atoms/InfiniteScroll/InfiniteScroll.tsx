import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CommonProps } from 'types/commonProps';
import { BootsColumn, BootsRow } from '../BootsElements/BootsElements';
import { InfiniteScrollStyle } from './InfiniteScroll.style';

interface Props extends CommonProps {
    title: string,
}

interface ApiResp {
    valid: string;
    messages: string[];
    iban: string;
    bankData: {
        bankCode: string,
        name: string,
        zip: string,
        city: string,
        bic: string,
    }
}

interface ProductCardProps {
    name: string,
    image_url: string,
    ref?: any,
}

const ProductCard: React.FunctionComponent<ProductCardProps> = React.forwardRef((props, ref) => {
    const {name, image_url} = props;
    return (
        <BootsColumn 
            ref={ref}
            lg={2}
            className="column"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <img                     
                src={image_url}
                alt={name}
                className="image"
                style={{
                    maxHeight: "300px",
                }}
            />
            <h3 style={{
                textAlign: "center",
            }}>{name}</h3>
        </BootsColumn>
    )
})

export const InfiniteScroll: React.FunctionComponent<Props> = ({title}): JSX.Element => {
    const [page, setPage] = useState<number>(1);
    const [items, setItems] = useState<ApiResp[] | []>([]);
    const lastItemRef = useRef<any>(null);
    const observer = useRef<any>(null);
    
    useEffect(() => {
        (async (): Promise<void> => {
            const resp = await fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=6`);
            const data: ApiResp[] = await resp.json();
            console.log(data);
            setItems([...data]);
        })()
    },[])

    const getMoreBeers = useCallback(()=> {
        (async (): Promise<void> => {
            const resp = await fetch(`https://api.punkapi.com/v2/beers?page=${page+1}&per_page=6`);
            const data: ApiResp[] = await resp.json();
            
            if (data.length === 0) return;
            
            setItems(i => [...i, ...data]);
            setPage(page + 1);
        })()
    }, [page]) 

    useEffect(() => {
        //Create IO
        observer.current = new IntersectionObserver((entries) => {
        
        //Start observing
            if (entries[0].isIntersecting) {
                getMoreBeers();
            }
        },
        {
            root: document, //co jest rootem, możemy tu też wskazać konkretnego diva
            threshold: 1, //W jakim stopniu obserwowany ma pokrywać się z rootem
        });
        
        if (lastItemRef.current) {
            observer.current.observe(lastItemRef.current);
        }
        
        //Disconnect
        return () => {
            observer.current.disconnect();
        }
    }, [getMoreBeers]);

    return (
        <InfiniteScrollStyle>
            <h2>{title}</h2>
            <BootsRow>
            {items.map((item, i) => {
                if (i === items.length - 1) {
                    return <ProductCard
                        key={item.id}
                        name={item.name}
                        image_url={item.image_url}
                        ref={lastItemRef}
                    />}
                return <ProductCard
                    key={item.id}
                    name={item.name}
                    image_url={item.image_url}
                />})}
            </BootsRow>
        </InfiniteScrollStyle>
    )
};
