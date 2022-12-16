import styles from './GoodsList.module.css'
import GoodsListItem from './GoodsListItem'

export default function GoodsList ({goods}) {
    return (
        <ul className={styles.list}>
            {goods.map(({name, description, id}) => (           
                 <GoodsListItem
                key={id}
                name={name}
                description={description}
            />
            ))}
        </ul>
    )
}