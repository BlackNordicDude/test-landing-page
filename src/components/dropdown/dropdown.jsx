import { useState } from 'react'
import styles from '../dropdown/dropdown.module.css'

const Dropdown = ({selectedCategory, setSelectedCategory, categores}) => {
    const [isActive, setActive] = useState(false)

    return (
        <div className={styles.dropdown}
            onMouseLeave={e => setActive(false)}>
            <div 
                className={styles.dropdown_btn}
                onClick={e => setActive(!isActive)}
                >
                {selectedCategory}
                {!isActive ? 
                    <span><ion-icon name="caret-down-outline"></ion-icon></span> :
                    <span><ion-icon name="caret-up-outline"></ion-icon></span>
                }
            </div>
            { isActive && 
                <div className={styles.dropdown_content}>
                    {categores.map((el, index) => 
                        <div 
                            className={styles.dropdown_item} 
                            key={index}
                            onClick={(e) => {
                                setSelectedCategory(el)
                                setActive(false)
                            }
                            }
                            >
                            {el} 
                        </div>)
                    } 
                </div>
            }
        </div>
    )
}

export default Dropdown;