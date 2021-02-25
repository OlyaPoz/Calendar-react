import React from 'react';
import { parse, addDays } from 'date-fns';
import Day from '../Days';

const Week = props => {
  const { year, week, currentDay } = props;

  const startOfWeek = parse(`${year} ${week}`, 'Y w', new Date());
  const dayArray = new Array(7)
  .fill(null)
  .map((_, i) => {
    return(
      <Day
        key={`${year}-${week}-${i}`}
        day={addDays(startOfWeek, i)}
        currentDay={currentDay}
      />
    );
  });
  return <tr>{dayArray}</tr>;
};

export default Week;
