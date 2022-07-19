const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log("Something went wrong fetching the data ");
  }
};

export default fetchData;
