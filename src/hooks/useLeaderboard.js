
import { useState } from 'react'

function useLeaderboard() {
    // Store leaderboard entries in React state
    const [bestTimes, setBestTimes] = useState([])

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