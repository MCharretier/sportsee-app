import PropTypes from 'prop-types'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import styles from './styles.module.css'

function ScoreChart({ data }) {
    
    const score = [
        { 
            value: data.score,
            color: '#ff0000'
        },
        { 
            value: 1 - data.score,
            color: '#fbfbfb'
        },
    ]

    return (
        <div className={styles.scoreChart}>
            <h2 className={styles.title}>Score</h2>
            <ResponsiveContainer>
                <PieChart>
                    <Pie 
                        data={score}
                        dataKey="value"
                        outerRadius="60%"
                        stroke={0}
                        fill="#ffffff"
                        isAnimationActive={false}
                    />  
                    <Pie 
                        data={score}
                        dataKey="value"
                        innerRadius="60%"
                        outerRadius="70%"
                        cornerRadius={10}
                        stroke={0}
                    >
                        { score.map((data, index) => 
                            <Cell 
                                key={index} 
                                cornerRadius={10} 
                                fill={data.color} 
                            />
                        ) }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <p className={styles.text}>
                <strong>{data.score * 100}%</strong>
                <br/>
                de votre objectif
            </p>
        </div>
    )
}

ScoreChart.propTypes = {
    data: PropTypes.object
}

export default ScoreChart