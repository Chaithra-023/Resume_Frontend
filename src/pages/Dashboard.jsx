import React from 'react'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'

export default function Dashboard(){
  // demo stats
  const total = 1240
  const fraud = 142
  const safe = total - fraud

  return (
    <div className="min-h-screen p-6 md:flex md:space-x-6">
      <Sidebar />
      <main className="flex-1">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-gray-500">Overview of resume analysis</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <Card>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3"/></svg>
              </div>
              <div>
                <div className="text-sm text-gray-500">Total Analyzed</div>
                <div className="text-xl font-semibold">{total}</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01"/></svg>
              </div>
              <div>
                <div className="text-sm text-gray-500">Fraud Detected</div>
                <div className="text-xl font-semibold">{fraud}</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              </div>
              <div>
                <div className="text-sm text-gray-500">Safe Resumes</div>
                <div className="text-xl font-semibold">{safe}</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card>
            <h3 className="text-lg font-medium mb-2">Recent Analyses</h3>
            <p className="text-sm text-gray-500">No recent uploads in demo mode.</p>
          </Card>
          <Card>
            <h3 className="text-lg font-medium mb-2">Insights</h3>
            <p className="text-sm text-gray-500">Top flagged keywords: fake, misrepresent, altered.</p>
          </Card>
        </div>
      </main>
    </div>
  )
}
