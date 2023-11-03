import { Link, NavLink } from 'react-router-dom'
import styles from './styles.module.css'
import {ReactComponent as Logo} from '../../assets/images/logo.svg'
 
function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <Logo />
            </Link>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/">Profil</NavLink>
                <NavLink to="/">Réglage</NavLink>
                <NavLink to="/">Communauté</NavLink>
            </nav>
        </header>
    )
}

export default Header