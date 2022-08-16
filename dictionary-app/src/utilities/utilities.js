import axios from "axios";

export const dictionaryAPi = async (lang, word) => {
  try {
    const { data } = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// This function takes in a function and a timer.
// The function is called after a specific time.
// N.B - This function is called when a user stops typing on the keyboard after a specific time.
export const debounceSearch = (callback, delay) => {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      callback.apply(context, args);
    }, delay);
  };
};
