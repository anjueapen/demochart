import React, { useState } from "react";
import WeekdayButton from "./weekbotton";

const MyComponent = () => {
  const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const [selectedDays, setSelectedDays] = useState([]);

  const handleDayClick = (day, selected) => {
    if (selected) {
      setSelectedDays([...selectedDays, day]);
    } else {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    }
  };

  const handleDeSelectAllClick = () => {
    setSelectedDays([]);
  };

  return (
    <div>
      <button onClick={handleDeSelectAllClick}>DeSelect all</button>
      {weekdays.map((day) => (
        <WeekdayButton
          key={day}
          day={day}
          onClick={handleDayClick}
          selected={selectedDays.includes(day)}
        />
      ))}
      <div>Selected days: {selectedDays.join(", ")}</div>
    </div>
  );
};

export default MyComponent;
