import { loadGreetingData } from "./greeting";

const URL = 'http://127.0.0.1:3000/greetings';

const getGreetingData = async (dispatch) => {
    const response = await fetch (URL);
    const data = await response.json();
    dispatch(loadGreetingData(data));
};

export default getGreetingData;