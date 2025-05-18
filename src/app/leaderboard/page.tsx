'use client'

import { useState } from 'react'
import Link from 'next/link'

// Mock data for demonstration
const mockLeaderboardData = [
  { rank: 1, player: 'SpeedRunner', time: '1:23.45', level: 1, date: '2024-02-18' },
  { rank: 2, player: 'NinjaGamer', time: '1:24.12', level: 1, date: '2024-02-18' },
  { rank: 3, player: 'ProGamer123', time: '1:25.67', level: 1, date: '2024-02-18' },
  { rank: 4, player: 'GameMaster', time: '1:26.89', level: 1, date: '2024-02-18' },
  { rank: 5, player: 'LevelKing', time: '1:27.34', level: 1, date: '2024-02-18' },
  { rank: 1, player: 'Level2Champ', time: '2:10.00', level: 2, date: '2024-02-18' },
  { rank: 2, player: 'Level2Pro', time: '2:15.00', level: 2, date: '2024-02-18' },
  { rank: 2, player: 'Level2ProMaxx', time: '2:16.00', level: 2, date: '2024-02-18' },
  { rank: 1, player: 'Level3Master', time: '3:00.00', level: 3, date: '2024-02-18' },
  { rank: 2, player: 'Level3Ninja', time: '3:05.00', level: 3, date: '2024-02-18' },
  { rank: 1, player: 'Level4King', time: '4:00.00', level: 4, date: '2024-02-18' },
  { rank: 2, player: 'Level4Queen', time: '4:10.00', level: 4, date: '2024-02-18' },
]

export default function LeaderboardPage() {
  const [selectedLevel, setSelectedLevel] = useState(1)
  const [leaderboardData] = useState(mockLeaderboardData)

  // Filter leaderboard data by selected level
  const filteredData = leaderboardData.filter(entry => entry.level === selectedLevel)

  return (
    <div className="container py-20 pt-32">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Global Leaderboard
      </h1>
      
      <div className="flex justify-center mb-12">
        <Link 
          href="/leaderboard/apply"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          Apply for Leaderboard
        </Link>
      </div>

      {/* Level Selector */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {[1, 2, 3, 4].map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                selectedLevel === level
                  ? 'bg-primary text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Level {level}
            </button>
          ))}
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-900">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Player
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredData.map((entry) => (
                <tr key={entry.rank} className="hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {entry.rank <= 3 ? (
                        <span className={`text-${entry.rank === 1 ? 'yellow' : entry.rank === 2 ? 'gray' : 'amber'}-500 font-bold`}>
                          #{entry.rank}
                        </span>
                      ) : (
                        <span className="text-gray-400">#{entry.rank}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-white">{entry.player}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{entry.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{entry.date}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 