import React, { useReducer } from 'react';
import BookingPage from './BookingPage';
import { fetchAPI } from './api';

const updateTimes = (state, action) => {
  try {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return fetchAPI(new Date(action.date));
      default:
        return state;
    }
  } catch (error) {
    console.error('Error in updateTimes:', error);
    return ['17:00', '18:00', '19:00', '20:00', '21:00'];
  }
};

const initializeTimes = () => {
  try {
    return fetchAPI(new Date());
  } catch (error) {
    console.error('Error in initializeTimes:', error);
    return ['17:00', '18:00', '19:00', '20:00', '21:00'];
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
  );
};

export default Main;
