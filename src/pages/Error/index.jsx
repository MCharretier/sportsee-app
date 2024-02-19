import styles from './styles.module.css'

function Error() {
    return (
        <div className={styles.error}>
            <h1>Erreur</h1>
            <p>Aucun utilisateur n'a été trouvé</p>
        </div>
    )
}

export default Error
