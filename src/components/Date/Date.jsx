import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';

function Data() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DatePicker
        className='calendar'
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Data