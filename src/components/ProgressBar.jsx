import React from 'react'

export default function ProgressBar({value=0}){
  const pct = Math.max(0, Math.min(100, Math.round(value)))
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div className="h-4 rounded-full bg-gradient-to-r from-primary to-accent" style={{width: `${pct}%`}} />
    </div>
  )
}
