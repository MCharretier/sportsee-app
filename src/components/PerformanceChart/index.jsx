import PropTypes from 'prop-types'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import styles from './styles.module.css'

function PerformanceChart({ data }) {

    const stats = [
        {
            kind: 'Intensité',
            value: data.intensity
        },
        {
            kind: 'Vitesse',
            value: data.speed
        },
        {
            kind: 'Force',
            value: data.strength
        },
        {
            kind: 'Endurance',
            value: data.endurance
        },
        {
            kind: 'Energie',
            value: data.energy
        },
        {
            kind: 'Cardio',
            value: data.cardio
        }
    ]

    return (
        <div className={styles.performanceChart}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart margin={{ top: 15, right: 15, bottom: 15, left: 15 }} outerRadius="60%" data={stats}>
                    <PolarGrid stroke="#ffffff" radialLines={false} />
                    <PolarAngleAxis dataKey="kind" stroke="#ffffff" tick={{fontSize: 12}} tickLine={false} />
                    <Radar dataKey="value" stroke="#ff0101" fill="#ff0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

PerformanceChart.propTypes = {
    data: PropTypes.object
}

export default PerformanceChart