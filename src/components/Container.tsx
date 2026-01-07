// src/components/ProductsBackground.jsx
const ProductsBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
      
      {/* Top decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-cyan-300/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
      
      {/* Center geometric shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Large circles */}
        <div className="relative">
          <div className="absolute w-[600px] h-[600px] border-2 border-slate-200/30 rounded-full" />
          <div className="absolute w-[500px] h-[500px] border border-slate-200/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute w-[400px] h-[400px] border border-slate-200/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        {/* Diagonal lines pattern */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, transparent 45%, rgba(99, 102, 241, 0.03) 45%, rgba(99, 102, 241, 0.03) 55%, transparent 55%)`,
            backgroundSize: '40px 40px'
          }} />
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(-45deg, transparent 45%, rgba(59, 130, 246, 0.03) 45%, rgba(59, 130, 246, 0.03) 55%, transparent 55%)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Floating dots */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              top: `${50 + 40 * Math.cos(i * (Math.PI / 6))}%`,
              left: `${50 + 40 * Math.sin(i * (Math.PI / 6))}%`,
            }}
          />
        ))}
      </div>
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-50/20 to-transparent" />
      
      {/* Floating elements */}
      <div className="absolute top-40 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-3xl rotate-12 blur-xl" />
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-2xl -rotate-12 blur-xl" />
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-sky-400/5 to-blue-400/5 rounded-full blur-xl" />
      
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 99%, #94a3b8 99%),
            linear-gradient(0deg, transparent 99%, #94a3b8 99%)
          `,
          backgroundSize: '50px 50px',
          backgroundPosition: 'center center'
        }} />
      </div>
    </div>
  );
};

export default ProductsBackground;