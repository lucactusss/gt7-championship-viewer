import CountdownTimer from './CountDownTimer'

function CountDown() {
  const targetDate = new Date('2023/03/08 21:00:00').toString()

  return <CountdownTimer targetDate={targetDate} />
}

export default CountDown
