
import '../styling/LeaderboardScreen.css'

function LeaderboardScreen({ bestTimes }) {
    return (
        <div className="leaderboard-screen">
            <h1>Leaderboard</h1>
            <h2>Top 5 Fastest Times</h2>

            <table className="leaderboard-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>

                <tbody>
                    {bestTimes.map((entry, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{entry.date}</td>
                            <td>{entry.time.toFixed(2)} sec.</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default LeaderboardScreen
