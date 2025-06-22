
function Input({ value, type = 'text', onChange, placeholder, maxLength }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  )
}

export default Input
