const fetchData = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("HTTP ERROR");
  }
};

export default fetchData;
