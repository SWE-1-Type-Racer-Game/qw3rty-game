
import { useState } from 'react'

function useLeaderboard() {
    // Store leaderboard entries in React state
    const [bestTimes, setBestTimes] = useState([
        { time: 10.00, score: 1000, date: '2/28/2026' },
        { time: 20.00, score: 950, date: '9/15/2026' },
        { time: 85.00, score: 950, date: '11/9/2026' },
        { time: 97.69, score: 850, date: '11/8/2026' },
        { time: 77.77, score: 777, date: '7/7/2027' }
    ])

    // Add a completed race and its date
    const addResult = (time) => {
        const newEntry = {
            time: time,
            date: new Date().toLocaleDateString()
        }

        setBestTimes((prevBestTimes) => {
            const updatedTimes = [...prevBestTimes, newEntry]

            // Sort by fastest completion time
            updatedTimes.sort((a, b) => a.time - b.time)

            // Keep only the top five
            return updatedTimes.slice(0, 5)
        })
    }

    // Clear leaderboard entries
    const clearLeaderboard = () => {
        setBestTimes([])
    }

    // Return the data and functions
    return { bestTimes, addResult, clearLeaderboard }
}

export default useLeaderboard