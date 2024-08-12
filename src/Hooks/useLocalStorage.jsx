const useLocalStorage = () => {
  const setItem = (key, val) => {
    try {
      const data = localStorage.setItem(key, JSON.stringify(val));
      return data;
    } catch (error) {
      throw new Error("LocalStorage Is Full");
    }
  };
  const getItem = (key) => {
    if (localStorage.getItem(key)) {
      const data = JSON.parse(localStorage.getItem(key));
      return data;
    }
    return null;
  };
  // Return Values
  return { setItem, getItem };
};

export default useLocalStorage;
