interface DateTimeDisplayProps {
  value: number
  type: string
  isDanger: boolean
}

const DateTimeDisplay = ({ value, type, isDanger }: DateTimeDisplayProps) => {
  return (
    <div className={isDanger ? 'text-red-600' : 'px-2 leading-5 flex items-center flex-col'}>
      <p className="m-0">{value}</p>
      <span className="uppercase text-xs">{type}</span>
    </div>
  );
};

export default DateTimeDisplay;