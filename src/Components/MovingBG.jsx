import React from 'react'

export default function MovingBackground({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-custom-linear-gradient">
      <div className="absolute inset-0">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <circle className="animate-float1 fill-[#f4f1bb]/20" cx="10%" cy="10%" r="5%" />
          <circle className="animate-float2 fill-[#9bc1bc]/20" cx="90%" cy="50%" r="7%" />
          <rect className="animate-float3 fill-[#f4f1bb]/20" x="30%" y="40%" width="10%" height="10%" />
          <rect className="animate-float4 fill-[#9bc1bc]/20" x="60%" y="70%" width="8%" height="8%" />
        </svg>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

