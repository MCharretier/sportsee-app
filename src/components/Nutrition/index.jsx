import PropTypes from 'prop-types'
import {ReactComponent as CaloriesIcon} from '../../assets/images/calories-icon.svg'
import {ReactComponent as ProteinIcon} from '../../assets/images/protein-icon.svg'
import {ReactComponent as CarbsIcon} from '../../assets/images/carbs-icon.svg'
import {ReactComponent as FatIcon} from '../../assets/images/fat-icon.svg'
import styles from './styles.module.css'

function Nutrition({type, number}) {

    const formatCaloriesNumber = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    return (
        <div className={styles.nutrition}>
            { type === 'calories' && (
                <div className={styles.inner}>
                    <CaloriesIcon className={styles.icon} />
                    <div className={styles.content}>
                        <span className={styles.number}>{formatCaloriesNumber(number)}kCal</span>
                        <span className={styles.unit}>Calories</span>
                    </div>
                </div>
            ) }
            { type === 'protein' && (
                <div className={styles.inner}>
                    <ProteinIcon className={styles.icon} />
                    <div className={styles.content}>
                        <span className={styles.number}>{number}g</span>
                        <span className={styles.unit}>Proteines</span>
                    </div>
                </div>
            ) }
            { type === 'carbs' && (
                <div className={styles.inner}>
                    <CarbsIcon className={styles.icon} />
                    <div className={styles.content}>
                        <span className={styles.number}>{number}g</span>
                        <span className={styles.unit}>Glucides</span>
                    </div>
                </div>
            ) }
            { type === 'fat' && (
                <div className={styles.inner}>
                    <FatIcon className={styles.icon} />
                    <div className={styles.content}>
                        <span className={styles.number}>{number}g</span>
                        <span className={styles.unit}>Lipides</span>
                    </div>
                </div>
            ) }
        </div>
    )
}

Nutrition.propTypes = {
    type: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired
}

export default Nutrition