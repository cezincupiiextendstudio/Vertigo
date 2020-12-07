import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from "../Card";

const CardLayout = (props) => {
    const [cardsData, setCardsData] = useState({});
    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
            .then((response) => {
                const {data} = response;
                const {results} = data;
                setCardsData(data);
            })
            .catch((error) => {
                console.log('Error:', error);
            })
    }, [])

    const getCard = (id) => {
        const {date, title, content, thumbnail, author} = cardsData[id];
        return (
            <>
                <p>{date}</p>
                <p>{title}</p>
                <p>{content}</p>
                <p>{thumbnail}</p>
                <p>{author}</p>
            </>
        )
    }

    console.log('Cards data:', cardsData);
    return (
        <>
            {cardsData ? (
                // Object.values(cardsData).map((card, index) => {
                //     console.log('Mapped card:', card);
                // })

                Object.values(cardsData).map((card) => {
                    return (
                        <Card {...card} />
                    )

                })
            ) : (<p>Content rendering...</p>)}

        </>
    )
}

export default CardLayout;