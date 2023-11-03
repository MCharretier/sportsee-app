import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import styles from './styles.module.css'

function AverageSessionsChart({ data }) {

    const onMouseMove = (e) => {
        if (e.isTooltipActive === true) {
            const chart = document.querySelector('#averageSessionsChart')
            if (chart) {
                const cursorX = Math.round( (e.activeCoordinate.x / chart.clientWidth) * 100 )
                chart.style.background = `linear-gradient(90deg, rgba(255, 0, 0, 1) ${cursorX}%, rgba(0, 0, 0, 0.0975) ${cursorX}%, rgba(0, 0, 0, 0.0975) 100%)`
            }
        }
    }

    const onMouseLeave = (e) => {
        const chart = document.querySelector('#averageSessionsChart')
        chart.style.background = '#ff0000'
    }

    const TooltipContent = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className={styles.tooltipContent}>
                    <p>{`${payload[0].value} min`}</p>
                </div>
            )
        }
        return null
    }

    const stats = [
        {
            name: '',
            duration: data.day1
        },
        {
            name: 'L',
            duration: data.day1
        },
        {
            name: 'M',
            duration: data.day2
        },
        {
            name: 'M',
            duration: data.day3
        },
        {
            name: 'J',
            duration: data.day4
        },
        {
            name: 'V',
            duration: data.day5
        },
        {
            name: 'S',
            duration: data.day6
        },
        {
            name: 'D',
            duration: data.day7
        },
        {
            name: '',
            duration: data.day7
        }
    ]

    return (
        <div id="averageSessionsChart" className={styles.averageSessionsChart}>
            <h2 className={styles.title}>Durée moyenne des<br/> sessions</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={stats} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
                    <defs>
                        <linearGradient id="lineGradient" x1="309.906" y1="-1.97779" x2="-47.7754" y2="-1.97779" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#ffffff"/>
                            <stop offset="0.810441" stopColor="#ffffff" stopOpacity="0.403191"/>
                        </linearGradient>
                    </defs>
                    <Tooltip content={<TooltipContent />} cursor={{strokeWidth: 0}} />
                    <XAxis dataKey="name" interval="preserveStartEnd" stroke="#ffffff" opacity={0.5} axisLine={false} tickLine={false} padding={{left: -20, right: -20}} tick={{fontSize: 12}} />
                    <YAxis dataKey="duration" hide={true} domain={[-20, 'dataMax + 60']} />
                    <Line type="natural" dataKey="duration" stroke="url(#lineGradient)" strokeWidth={2} dot={{r: 0}} activeDot={{fill: '#ffffff', r: 3}} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

AverageSessionsChart.propTypes = {
    data: PropTypes.object
}

export default AverageSessionsChart