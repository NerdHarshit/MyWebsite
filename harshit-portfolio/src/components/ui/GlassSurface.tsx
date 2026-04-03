export default function GlassSurface({ children, className = "" }: any) {
  return (

    <div
      className={`relative rounded-2xl border border-white/30 backdrop-blur-2xl bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)]
      before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/40 before:to-transparent before:opacity-30 before:pointer-events-none
      ${className}`}
    >

      {children}

    </div>

  )
}