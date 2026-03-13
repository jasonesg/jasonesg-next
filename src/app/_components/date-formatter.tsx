import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
  views?: string;
};

const DateFormatter = ({ dateString, views }: Props) => {
  const date = parseISO(dateString);
  return (
    <div className="flex justify-between items-center w-full">
      <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>
      {views && <span>{views} views</span>}
    </div>
  );
};

export default DateFormatter;
