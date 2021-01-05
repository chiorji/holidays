const Utils = (function () {
    const API_KEY = process.env.REACT_APP_API_KEY

    /**
     * 
     * @param {*} url 
     */
    async function fetchData(url) {  
        const response = await fetch(url)
	    if (response.ok) return await response.json()
	    return Promise.reject(Object.assign({}, response, {
			status: response.status,
			message: response.statusText,
		}))
    }

    /**
     * 
     * @param {*} country 
     * @param {*} year 
     */
    async function getHolidays(country, year) {
        const url = `https://holidayapi.com/v1/holidays?pretty&key=${API_KEY}&country=${country}&year=${year}`
        try {
            return await fetchData(url)
        } catch (error) {
            throw new Error('Oops! An error occured while trying to retrieve informations, please try again.')
        }
    }

    async function getCountries() {
        const url = `https://holidayapi.com/v1/countries?pretty&key=${API_KEY}`
        try {
            return await fetchData(url)
        } catch (error) {
            throw new Error('Failed to fetch country list, please check your network connection(s) and')
        }
    }

    return {
        getHolidays,
        getCountries
    }

}())

export default Utils