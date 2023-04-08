type AlertProps = {
  children: React.ReactNode
}

export default function Alert({children}: AlertProps) {
  return (
    <div className="p-2 border-slate-100 rounded bg-red-200">
      {children}
    </div>
  )
}