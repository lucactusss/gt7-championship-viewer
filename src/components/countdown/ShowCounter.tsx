import DateTimeDisplay from './DateTimeDisplay'

interface ShowCounterProps {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const ShowCounter = ({ days, hours, minutes, seconds }: ShowCounterProps) => {
  return (
    <div className="p-2 flex items-center flex-row text-lg justify-center leading-7">
      <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
      <p>:</p>
      <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
    </div>
  )
}

export default ShowCounter
