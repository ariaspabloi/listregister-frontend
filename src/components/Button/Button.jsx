import './Button.scss'

export default function Button({ children, customClass, submit, onClick }) {
  const handleClick = () => {
    onClick && onClick()
  }

  return (
    <button className={customClass} type={submit ? 'submit' : 'button'} onClick={handleClick}>
      {children}
    </button>
  )
}
