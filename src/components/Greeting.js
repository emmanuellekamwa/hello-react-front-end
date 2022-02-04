import React from 'react';
import { useSelector } from 'react-redux';
import { getGreetingData } from '../redux/api';
import store from '../redux/configureStore';

store.dispatch(getGreetingData);

const Greeting = () => {
  const greetings = useSelector((state) => state.greetingData);

  return <p>{greetings}</p>
};

export default Greeting;
