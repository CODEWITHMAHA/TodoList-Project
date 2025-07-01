import { useEffect , useState } from "react";
const TodoDateTime = () => {
  const [dateTime, setDateTime] = useState("");
  //   Todo date and time
  useEffect(() => {
    const getDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    };

    const interval = setInterval(() => {
      getDateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h2 className="text-xl font-bold my-2">{dateTime}</h2>;
};

export default TodoDateTime;
