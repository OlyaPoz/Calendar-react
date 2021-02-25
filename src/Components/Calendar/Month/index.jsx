import React from 'react';
import { parse, addWeeks, getWeek, getYear, getWeeksInMonth } from 'date-fns';
import Week from '../Weeks';
import PropTypes from 'prop-types';

const Month = props => {
  const { year, month, currentDay } = props;

  const startOfMonth = parse(`${year} ${month}`, 'y M', new Date());

  const weekArray = new Array(getWeeksInMonth(startOfMonth))
    .fill(null)
    .map((_, i) => {
      const startOfWeek = addWeeks(startOfMonth, i);
      return (
        <Week
          key={`${year}-${month}-${i}`}
          currentDay={currentDay}
          year={getYear(startOfWeek)}
          week={getWeek(startOfWeek)}
        />
      );
    });
  return <>{weekArray}</>;
};

Month.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
};

export default Month;
