export default function WrappedBackgroundDesign() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          viewBox="0 0 400 600"
          className="w-full h-full"
          aria-labelledby="wrappedBackgroundTitle"
        >
          <title id="wrappedBackgroundTitle">
            Decorative pink and rose flowing background
          </title>
          <defs>
            <linearGradient
              id="pinkGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#5a0a0a" />
              <stop offset="50%" stopColor="#6b1423" />
              <stop offset="100%" stopColor="#3d0a0a" />
            </linearGradient>
            <linearGradient
              id="lightPinkGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#6b2020" />
              <stop offset="50%" stopColor="#5a1515" />
              <stop offset="100%" stopColor="#4a0f0f" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q100,50 200,100 T400,100 L400,200 Q300,150 200,200 T0,200 Z"
            fill="url(#pinkGradient)"
            opacity="0.5"
          />
          <path
            d="M0,250 Q150,200 300,250 T400,250 L400,350 Q250,300 100,350 T0,350 Z"
            fill="#2a0a0a"
            opacity="0.4"
          />
          <path
            d="M100,0 Q200,50 300,0 T500,0 L500,100 Q400,150 300,100 T100,100 Z"
            fill="url(#lightPinkGradient)"
            opacity="0.45"
          />
          <path
            d="M0,400 Q100,350 200,400 T400,400 L400,500 Q300,450 200,500 T0,500 Z"
            fill="url(#pinkGradient)"
            opacity="0.4"
          />
        </svg>
      </div>
    </div>
  )
}
