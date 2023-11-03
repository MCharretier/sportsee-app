import PropTypes from 'prop-types'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import styles from './styles.module.css'

function ActivityChart({ data }) {

    const LegendContent = ({ payload }) => {
        if ( payload && payload.length ) {
            return  (
                <ul className={styles.legend}>
                    { payload.map((entry, index) => {
                        if ( !entry.inactive ) {
                            return (
                                <li key={`item-${index}`}>
                                    <span className={styles.circle} style={{backgroundColor: entry.color}}></span>
                                    {entry.value} ({entry.payload.unit})
                                </li>
                            )
                        }
                        return null
                    }) }
                </ul>
            )
        }
        return null
    }

    const TooltipContent = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className={styles.tooltipContent}>
                    { payload.map((entry, index) => {
                        if ( !entry.inactive ) {
                            return (
                                <p key={`item-${index}`}>{entry.value}{entry.unit}</p>
                            )
                        }
                        return null
                    }) }
                </div>
            )
        }
        return null
    }

    const stats = data.sessions

    return (
        <div className={styles.activityChart}>
            <h2 className={styles.title}>Activité quotidienne</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart margin={{top: 25, right: 45, bottom: 25, left: 45}} barGap={8} data={stats}>
                    <CartesianGrid vertical={false} strokeDasharray="4" />
                    <YAxis yAxisId="kilogram" type="number" dataKey="kilogram" domain={['dataMin - 2', 'dataMax + 1']} axisLine={false} orientation="right" tickCount="3" tickLine={false} tick={{fontSize: 14, stroke: '#9b9eac'}} dx={20} />
                    <YAxis yAxisId="calories" type="number" dataKey="calories" domain={['dataMin - 100', 'dataMax + 100']}  hide={true}/>
                    <XAxis tickLine={false} stroke="#dedede" tick={{fontSize: 14, stroke: '#9b9eac'}} dy={16} />
                    <Tooltip content={<TooltipContent />} />
                    <Legend content={<LegendContent />} verticalAlign="top" align="right" wrapperStyle={{paddingBottom: '47px'}} />
                    <Bar yAxisId="kilogram" name="Poids" unit="kg" dataKey="kilogram" fill="#282d30" barSize={8} radius={[4, 4, 0, 0]} />
                    <Bar yAxisId="calories" name="Calories brûlées" unit="kCal" dataKey="calories" fill="#e60000" barSize={8} radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

ActivityChart.propTypes = {
    data: PropTypes.object
}

export default ActivityChart