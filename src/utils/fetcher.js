export default async function fetcher({ apikey, country, year }) {
  const endpoint = `https://holidayapi.com/v1/holidays?pretty&key=${apikey}&country=${country}&year=${year}`;
  const response = await fetch(endpoint);
  if (response.ok) {
    console.log(response);
    return await response.json();
  }
  return Promise.reject(
    Object.assign({}, response, {
      status: response.status,
      message: response.statusText
    })
  );
}

export async function datalist({ apikey }) {
  const endpoint = `https://holidayapi.com/v1/countries?pretty&key=${apikey}`;
  const response = await fetch(endpoint);
  if (response.ok) {
    console.log(response);
    return await response.json();
  }
  return Promise.reject(
    Object.assign({}, response, {
      status: response.status,
      message: response.statusText
    })
  );
}
