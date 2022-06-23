import { cardsData } from '../../data/cards-data';
import styles from '../app-main/app-main.module.css'
import Dropdown from '../dropdown/dropdown';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import Cards from '../cards/cards';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AppMain = () => {

    const categores = ['Show All',];
    cardsData.map(card => {
        if (categores.indexOf(card.category) === -1) {
            categores.push(card.category) 
        }
        return false
    })
    const isDesktop = useMediaQuery({ query: '(min-width: 1041px)' });

    const [selectedCategory, setSelectedCategory] = useState(categores[0]);
    const [cards, setCards] = useState(cardsData);
    const [cardsForRender, setCardsForRender] = useState(cards);
    const [cardIDToDel, setCardIDToDel] = useState(null);

    useEffect(() => {
        const delCard = e => {
            e.key === 'Delete' && setCards(cards.filter(card => card._id !== cardIDToDel))
        }
        
        document.addEventListener('keydown', delCard)

        return () => document.removeEventListener('keydown', delCard)
    },[cards, cardIDToDel])

    useEffect(() => {
            selectedCategory === 'Motion' ? setCardsForRender(cards.filter(card => card.category === 'Motion')) : 
            selectedCategory === 'Design' ? setCardsForRender(cards.filter(card => card.category === 'Design')) :
            selectedCategory === 'Branding' ? setCardsForRender(cards.filter(card => card.category === 'Branding')) :
            selectedCategory === 'Illustration' ? setCardsForRender(cards.filter(card => card.category === 'Illustration')) :
            setCardsForRender(cards)
        
    }, [selectedCategory, cards])


    const loadMore = () => {
        const cloneCards = JSON.parse(JSON.stringify(cardsData));
        setCards([...cards, ...cloneCards.map(card =>{ 
            return {...card,
                    title: card.title += ` 2`,
                    _id: uuidv4()
                    }
        })
        ])
    }

    return (
        <main className={styles.main}>
            <div className={styles.main_wrapper}>
                {
                    isDesktop && 
                    <div className={styles.category}>
                        {categores.map((category, index) => 
                            <div 
                            className={styles.category_item} 
                            key={index} 
                            onClick={e => setSelectedCategory(category)}>
                                {category}
                            </div>)
                        }
                    </div>
                }
                {
                    !isDesktop && 
                    <Dropdown 
                        selectedCategory={selectedCategory} 
                        setSelectedCategory={setSelectedCategory}
                        categores={categores}
                    />
                }
                <Cards cards={cardsForRender} setSelectedCategory={setSelectedCategory} setCardIDToDel={setCardIDToDel} selectedCard={cardIDToDel}/>
                <button className={styles.button} onClick={loadMore}>Load more</button>
            </div>
        </main>
    )
}

export default AppMain