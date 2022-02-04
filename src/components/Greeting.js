import React from 'react';
import { useSelector } from 'react-redux';
import getGreetingData from '../redux/api';
import store from '../redux/configureStore';

store.dispatch(getGreetingData);

const Greeting = () => {
  const randomGreeting = useSelector((state) => state.greetingData);

  return <p>{randomGreeting}</p>;
};

export default Greeting;
