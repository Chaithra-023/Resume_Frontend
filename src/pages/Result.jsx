import React from 'react'
import Sidebar from '../components/Sidebar'
import ProgressBar from '../components/ProgressBar'

export default function Result(){
  const raw = localStorage.getItem('rfd_last_result')
  const data = raw ? JSON.parse(raw) : { candidateName: 'Demo User', fraudScore: 22, highlights: ['Inconsistent employment dates'] }
  const { candidateName, fraudScore, highlights } = data

  const risk = fraudScore >= 70 ? 'High' : fraudScore >= 40 ? 'Medium' : 'Low'

  return (
    <div className="min-h-screen p-6 md:flex md:space-x-6">
      <Sidebar />
      <main className="flex-1">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Analysis Result</h1>
          <p className="text-gray-500">Detailed result for the uploaded resume</p>
        </div>
        <div className="card max-w-3xl">
          <div className="mb-4">
            <div className="text-sm text-gray-500">Candidate</div>
            <div className="text-lg font-semibold">{candidateName}</div>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Fraud Score</div>
                <div className="text-xl font-semibold">{fraudScore}%</div>
              </div>
              <div className="text-sm">Risk Level: <span className="font-medium">{risk}</span></div>
            </div>
            <div className="mt-3"><ProgressBar value={fraudScore} /></div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Suspicious Points</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              {highlights && highlights.length ? highlights.map((h,i)=>(<li key={i}>{h}</li>)) : <li>No issues detected</li>}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
