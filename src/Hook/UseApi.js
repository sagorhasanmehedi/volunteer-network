const { useState, useEffect } = require("react");

const UseApi = () => {
  let [data, setdata] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/sagorhasanmehedi/assignment-10-api/gh-pages/Servicesdata.json"
    )
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);

  return data;
};

export default UseApi;
