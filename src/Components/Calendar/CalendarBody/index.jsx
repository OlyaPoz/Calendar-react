import React from 'react';
import { format } from 'date-fns';
import Month from '../Month';


const WeekDays = () => {
  return (
    <tr>
      <td>s</td>
      <td>m</td>
      <td>t</td>
      <td>w</td>
      <td>t</td>
      <td>f</td>
      <td>s</td>
    </tr>
  );
};

const CalendarBody = props => {
  const { currentDay } = props;
  return (
    <div>
      <table>
        <caption>{format(currentDay, 'MMMM', 'yyyy')}</caption>

        <thead>
          <WeekDays />
        </thead>

        <tbody>
          <Month year={2021} month={2} currentDay={currentDay} />
        </tbody>
      </table>
    </div>
  );
};

export default CalendarBody;
