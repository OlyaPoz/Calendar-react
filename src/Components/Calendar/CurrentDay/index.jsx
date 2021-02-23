import React, { Component } from 'react';
import { format } from 'date-fns';
import styles from './CurrentDay.module.scss';

const CurrentDay = props => {
  const { currentDay } = props;
  return (
    <div className = {styles.nowDayWrapper}>
      <h1 className = {styles.nowDayName}>{format(currentDay, 'EEEE')}</h1>
      <h2 className = {styles.nowDay}>{format(currentDay, 'd')}</h2>
    </div>
  );
};

export default CurrentDay;
