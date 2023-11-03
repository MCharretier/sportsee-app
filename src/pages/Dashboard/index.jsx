import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserInformations, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../services/User'
import styles from './styles.module.css'
import Nutrition from '../../components/Nutrition'
import ActivityChart from '../../components/ActivityChart'
import AverageSessionsChart from '../../components/AverageSessionsChart'
import PerformanceChart from '../../components/PerformanceChart'
import ScoreChart from '../../components/ScoreChart'

function Dashboard() {

    const { id } = useParams();

    const [userInformations, setUserInformations] = useState()
    const [userActivity, setUserActivity] = useState()
    const [userAverageSessions, setUserAverageSessions] = useState()
    const [userPerformance, setUserPerformance] = useState()

    useEffect(() => {
        const getData = async () => {
            const informations = await getUserInformations(id)
            const activity = await getUserActivity(id)
            const averageSessions = await getUserAverageSessions(id)
            const performance = await getUserPerformance(id)
            setUserInformations(informations)
            setUserActivity(activity)
            setUserAverageSessions(averageSessions)
            setUserPerformance(performance)
        }
        getData()
    }, [id])

    return (
        <div className={styles.dashboard}>
            { userInformations && (
                <div className={styles.header}>
                    <h1>Bonjour <strong>{userInformations.firstName}</strong></h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
            ) }
            { userInformations && (
                <div className={styles.statistics}>
                    <ActivityChart data={userActivity} />
                    <AverageSessionsChart data={userAverageSessions} />
                    <PerformanceChart data={userPerformance} />
                    <ScoreChart data={userInformations} />
                    <div className={styles.nutritions}>
                        <Nutrition type="calories" number={userInformations.calorieCount} />
                        <Nutrition type="protein" number={userInformations.proteinCount} />
                        <Nutrition type="carbs" number={userInformations.carbohydrateCount} />
                        <Nutrition type="fat" number={userInformations.lipidCount} />
                    </div>
                </div>
            ) } 
        </div>
    )
}

export default Dashboard