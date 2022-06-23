import Card from '../card/card'
import styles from '../cards/cards.module.css'

const Cards = ({cards, setSelectedCategory, setCardIDToDel, selectedCard}) => {
    return (
        <div className={styles.cards}>
            { cards.map(card => <Card cardData={card} key={card._id} setSelectedCategory={setSelectedCategory} setCardIDToDel={setCardIDToDel} selectedCard={selectedCard}/>) }
        </div>
    )
}

export default Cards;