import "./errormessage.css"

export default function ErrorMessage({message}) {
  return (
    <div className="errorMsg">{message}</div>
  )
}
