import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
    getUserInformations,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
} from '../../services/User'
import styles from './styles.module.css'
import Nutrition from '../../components/Nutrition'
import ActivityChart from '../../components/ActivityChart'
import AverageSessionsChart from '../../components/AverageSessionsChart'
import PerformanceChart from '../../components/PerformanceChart'
import ScoreChart from '../../components/ScoreChart'
import CaloriesIcon from '../../assets/images/calories-icon.svg'
import ProteinIcon from '../../assets/images/protein-icon.svg'
import CarbsIcon from '../../assets/images/carbs-icon.svg'
import FatIcon from '../../assets/images/fat-icon.svg'

function Dashboard() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [userInformations, setUserInformations] = useState()
    const [userActivity, setUserActivity] = useState()
    const [userAverageSessions, setUserAverageSessions] = useState()
    const [userPerformance, setUserPerformance] = useState()

    useEffect(() => {
        const getData = async () => {
            try {
                const informations = await getUserInformations(id)
                const activity = await getUserActivity(id)
                const averageSessions = await getUserAverageSessions(id)
                const performance = await getUserPerformance(id)
                setUserInformations(informations)
                setUserActivity(activity)
                setUserAverageSessions(averageSessions)
                setUserPerformance(performance)
            } catch {
                navigate('/')
            }
        }
        getData()
    }, [id, navigate])

    return (
        <div className={styles.dashboard}>
            {userInformations && (
                <div className={styles.header}>
                    <h1>
                        Bonjour <strong>{userInformations.firstName}</strong>
                    </h1>
                    <p>
                        Félicitation ! Vous avez explosé vos objectifs hier 👏
                    </p>
                </div>
            )}
            {userInformations && (
                <div className={styles.statistics}>
                    <ActivityChart data={userActivity} />
                    <AverageSessionsChart data={userAverageSessions} />
                    <PerformanceChart data={userPerformance} />
                    <ScoreChart data={userInformations} />
                    <div className={styles.nutritions}>
                        <Nutrition
                            icon={CaloriesIcon}
                            number={userInformations.calorieCount}
                            unit="kCal"
                            name="Calories"
                        />
                        <Nutrition
                            icon={ProteinIcon}
                            number={userInformations.proteinCount}
                            unit="g"
                            name="Proteines"
                        />
                        <Nutrition
                            icon={CarbsIcon}
                            number={userInformations.carbohydrateCount}
                            unit="g"
                            name="Glucides"
                        />
                        <Nutrition
                            icon={FatIcon}
                            number={userInformations.lipidCount}
                            unit="g"
                            name="Lipides"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dashboard
