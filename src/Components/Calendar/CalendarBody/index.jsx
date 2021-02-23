import React from 'react';
import { format } from 'date-fns';
import Month from '../Month';
import styles from './CalendarBody.module.scss';

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
    <div className = {styles.monthWrapper}>
      <table>
        <caption className={styles.monthAndYear}>
          {format(currentDay, 'MMMM ')}
          {format(currentDay, 'yyyy')}
        </caption>
        <thead className={styles.daysOfWeek}>
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
