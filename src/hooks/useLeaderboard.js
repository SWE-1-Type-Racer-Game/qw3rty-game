import { useState } from 'react'

function useLeaderboard() {
    // Store leaderboard entries in React state
    const [bestTimes, setBestTimes] = useState([
        { time: 10.00, date: '11/9/2026' },
        { time: 20.00, date: '11/8/2026' },
        { time: 30.00, date: '11/7/2026' },
        { time: 40.00, date: '11/6/2026' },
        { time: 50.00, date: '11/5/2026' }
    ])

    // Add a completed race and its date

    // Sort by fastest completion time

    // Keep only the top five

    // Clear leaderboard entries

    // Return the data and functions
    return { bestTimes }
}

export default useLeaderboard