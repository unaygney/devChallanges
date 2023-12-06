const API_URL =
  "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

export async function getCoffees() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error("Fetching Error!");
  }
}
