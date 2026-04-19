export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full gap-6">
      {/* Premium Loader Container */}
      <div className="relative flex items-center justify-center">
        {/* Outer subtle ring */}
        <div className="absolute w-20 h-20 rounded-full border-4 border-primary/10"></div>
        
        {/* Spinning gradient ring */}
        <div className="absolute w-20 h-20 rounded-full border-4 border-transparent border-t-primary border-r-primary/50 animate-spin"></div>
        
        {/* Inner pulsing core */}
        <div className="z-10 w-8 h-8 rounded-full bg-primary/20 animate-pulse flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
        </div>
      </div>
      
      {/* Loading Text */}
      <div className="flex flex-col items-center gap-1">
        <h3 className="text-lg font-semibold text-primary tracking-wider animate-pulse">
          LOADING
        </h3>
        <p className="text-sm text-base-content/50">
          Please wait while we prepare the content...
        </p>
      </div>
    </div>
  );
}
