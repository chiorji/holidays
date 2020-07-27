const getHolidays = async ({ apikey, country,year}) => {
  const endpoint = `https://holidayapi.com/v1/holidays?pretty&key=${apikey}&country=${country}&year=${year}`
  const response = await fetch(endpoint)
  if (response.ok) {
    return await response.json()
  }
  return Promise.reject(
    Object.assign({}, response, {
      status: response.status,
      message: response.statusText,
    })
  )
}

export default getHolidays
