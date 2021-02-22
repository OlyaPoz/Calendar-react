import React from 'react';
import { format, isToday, isSameMonth } from 'date-fns';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './Day.module.scss';

const Day = props => {
  const { day, currentDay } = props;

  const classNames = cx(styles.day, {
    [styles.curentMonthDay]: isSameMonth(day, currentDay),
    [styles.currentDay]: isToday(day),
  });

  return (
    <td>
      <p className={classNames}>{format(day, 'd')}</p>
    </td>
  );
};

Day.propTypes = {
  day: PropTypes.instanceOf(Date).isRequired,
  currentDay: PropTypes.instanceOf(Date).isRequired,
};

export default Day;
