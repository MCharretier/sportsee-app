import PropTypes from 'prop-types'
import styles from './styles.module.css'

function Nutrition({ icon, number, unit, name }) {
    const formatNumber = (number) =>
        number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    return (
        <div className={styles.nutrition}>
            <div className={styles.inner}>
                <img src={icon} alt={name} className={styles.icon} />
                <div className={styles.content}>
                    <span className={styles.number}>
                        {formatNumber(number)}
                        {unit}
                    </span>
                    <span className={styles.unit}>{name}</span>
                </div>
            </div>
        </div>
    )
}

Nutrition.propTypes = {
    icon: PropTypes.any.isRequired,
    number: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default Nutrition
