import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'
import {ReactComponent as IconZen} from '../../assets/images/icon-zen.svg'
import {ReactComponent as IconSwim} from '../../assets/images/icon-swim.svg'
import {ReactComponent as IconBike} from '../../assets/images/icon-bike.svg'
import {ReactComponent as IconFitness} from '../../assets/images/icon-fitness.svg'
 
function SideBar() {
    return (
        <div className={styles.sidebar}>
            <nav>
                <NavLink to="/"><IconZen /></NavLink>
                <NavLink to="/"><IconSwim /></NavLink>
                <NavLink to="/"><IconBike /></NavLink>
                <NavLink to="/"><IconFitness /></NavLink>
            </nav>
            <span className={styles.copyright}>Copyright, SportSee 2020</span>
        </div>
    )
}

export default SideBar