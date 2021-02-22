import React, { Component } from 'react';
import { format } from 'date-fns';
//import styles from './calendar.module.css';

const CurrentDay = props => {
  const { currentDay } = props;
  return (
    <div>
      <h1>{format(currentDay, 'EEEE')}</h1>
      <h2>{format(currentDay, 'd')}</h2>
    </div>
  );
};

export default CurrentDay;