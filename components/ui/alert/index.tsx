type AlertProps = {
  children: React.ReactNode
}

export default function Alert({children}: AlertProps) {
  return (
    <div className="text-red-600">
      {children}
    </div>
  )
}