const ExpiredNotice = () => {
  return (
    <div className="text-center border-2 border-cyan-600 border-r-2 m-1">
      <span className="text-red-600 bold text-4xl">Expired!!!</span>
      <p className="text-xl">Please select a future date and time.</p>
    </div>
  )
}

export default ExpiredNotice
