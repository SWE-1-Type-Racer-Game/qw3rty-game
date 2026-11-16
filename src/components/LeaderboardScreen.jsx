
import '../styling/LeaderboardScreen.css'

function LeaderboardScreen({ bestTimes }) {
    return (
        <div className="leaderboard-screen">
            <h1>Leaderboard</h1>
            <h2>Your Top 5 Fastest Times!</h2>

            <table className="leaderboard-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Date</th>
                        <th>Time (mm:ss.ms)</th>
                    </tr>
                </thead>

                <tbody>
                    {bestTimes.map((entry, index) => (
                        <tr key={index}>
                            <td><b>{index + 1}</b></td>
                            <td>{entry.date}</td>
                            <td>
                                {Math.floor(entry.time / 60)}:{(entry.time % 60).toFixed(2).padStart(5, '0')}
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default LeaderboardScreen
