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
              <stop offset="0%" stopColor="#dc143c" />
              <stop offset="50%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#b71c1c" />
            </linearGradient>
            <linearGradient
              id="lightPinkGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ff5722" />
              <stop offset="50%" stopColor="#f44336" />
              <stop offset="100%" stopColor="#d32f2f" />
            </linearGradient>
          </defs>
          {/* Flowing curved shapes with enhanced rose opacity */}
          <path
            d="M0,100 Q100,50 200,100 T400,100 L400,200 Q300,150 200,200 T0,200 Z"
            fill="url(#pinkGradient)"
            opacity="0.95"
          />
          <path
            d="M0,250 Q150,200 300,250 T400,250 L400,350 Q250,300 100,350 T0,350 Z"
            fill="#c62828"
            opacity="0.9"
          />
          <path
            d="M100,0 Q200,50 300,0 T500,0 L500,100 Q400,150 300,100 T100,100 Z"
            fill="url(#lightPinkGradient)"
            opacity="0.9"
          />
          <path
            d="M0,400 Q100,350 200,400 T400,400 L400,500 Q300,450 200,500 T0,500 Z"
            fill="url(#pinkGradient)"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Black angular shapes */}
      {/* <div className="absolute top-8 right-4 w-32 h-24 bg-black transform rotate-12 rounded-lg"></div> */}
      {/* <div className="absolute bottom-32 left-8 w-24 h-16 bg-black transform -rotate-6 rounded-lg"></div> */}
    </div>
  );
}
