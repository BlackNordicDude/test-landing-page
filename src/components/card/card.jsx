import styles from '../card/card.module.css'

const Card = ({cardData, setSelectedCategory, setCardIDToDel, selectedCard}) => {
    const {category, title, src, _id } = cardData;
    const selectStyle = {
        outline : '7px solid #90E149',
        borderRadius: '6px',

    }
    

    return (
        <article 
            className={styles.card}  
            onClick={e => {
            setCardIDToDel(_id)}}
            >
            <div className={styles.card_wrapper} style={_id === selectedCard ? selectStyle : null}>
                <img src={src} alt="cardImg" />
                <div className={styles.card_category} onClick={e => setSelectedCategory(category)}>
                    {category}
                </div>
                <div className={styles.card_title}>
                    {title}
                </div>
            </div>
        </article>
    )
}

export default Card 