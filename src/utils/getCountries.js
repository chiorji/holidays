const getCountries = async apikey => {
	const endpoint = `https://holidayapi.com/v1/countries?pretty&key=${apikey}`
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

export default getCountries
