import './Input.css'

export default function Input(props) {
  const { id, label } = props
  return (
    <div className="input-group">
      <label htmlFor={id} className="label">{label}</label>
      <input className="input" {...props} />
    </div>
  )
}