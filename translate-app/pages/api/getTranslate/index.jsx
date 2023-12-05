const getData = async (query, param1, param2) => {
  let API_URL = `https://api.mymemory.translated.net/get?q=${query}&langpair=${param1}|${param2}`;

  try {
    const response = await fetch(API_URL);
    return response.json();
  } catch {
    throw new Error("Something went wrong!");
  }
};

export default async function handler(request, response) {
  const { value, filteredData, filteredData2 } = request.body;
  const { tag: tag1 } = filteredData;
  const { tag: tag2 } = filteredData2;

  if (!value) {
    response.status(400).json("No value provided");
  }
  const fetchingData = await getData(value, tag1, tag2);
  const translation = fetchingData.matches[0];
  response
    .status(200)
    .json(translation ? translation : "Failed to fetching data");
}
