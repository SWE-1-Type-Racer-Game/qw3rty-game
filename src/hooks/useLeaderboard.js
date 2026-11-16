
import { useState } from 'react'

function useLeaderboard() {
    // Store leaderboard entries in React state
    const [bestTimes, setBestTimes] = useState([
        { time: 10.00, date: '2/28/2026' },
        { time: 20.00, date: '9/15/2026' },
        { time: 85.00, date: '11/9/2026' },
        { time: 97.69, date: '11/8/2026' },
        { time: 104.44, date: '1/1/2027' }
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