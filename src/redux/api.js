import { loadGreetingData } from "./greeting";

const URL = 'localhost:3000/greetings';

export const getGreetingData = async (dispatch) => {
    const response = await fetch (URL);
    const data = await response.json();
    dispatch(loadGreetingData(data));
};