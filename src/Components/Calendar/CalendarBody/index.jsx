import React from 'react';
import { format, getYear, getMonth, addMonths } from 'date-fns';
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

  const nowYear = getYear(currentDay);
  const nowMonth = getMonth(currentDay) + 1;

  const monthPrev = addMonths(nowMonth, -1);
  console.log(monthPrev);

  const monthNext = addMonths(nowMonth, +1);
  console.log(monthPrev);

  return (
    <div className={styles.monthWrapper}>
      <table>

        <caption className={styles.monthAndYear}>
          <button onClick={monthPrev}>{'<'}</button>
          {format(currentDay, 'MMMM y')}
          <button onClick={monthNext}>{'>'}</button>
        </caption>

        <thead className={styles.daysOfWeek}>
          <WeekDays />
        </thead>

        <tbody>
          <Month year={nowYear} month={nowMonth} currentDay={currentDay} />
        </tbody>
      </table>
    </div>
  );
};

export default CalendarBody;
