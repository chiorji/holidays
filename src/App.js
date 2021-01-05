import React, { useState, useEffect, Suspense } from 'react'
import getCountries from './utils/getCountries'
import getHolidays from './utils/getHolidays'
import HolidayData from './components/HolidayData'
import Footer from './components/Footer'

const Hero = React.lazy(() => import('./components/Hero'))
const Form = React.lazy(() => import('./components/Form'))

const App = () => {
	const [countries, setCountries] = useState([])
	const [country, setCountry] = useState('')
	const [year, setYear] = useState('2020')
	const [holidays, setHolidays] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const apikey = process.env.REACT_APP_API_KEY

	const handleGetRequest = e => {
		e.preventDefault()
		setIsLoading(true)
		getHolidays({ apikey, country, year })
			.then(holiday => {
				// console.log(holiday.holidays)
				setHolidays(holiday.holidays)
				setIsLoading(false)
			})
			.catch(err => {
				setIsLoading(false)
				console.log(err)
			})
		// console.log('Holidays :::', holidays)
	}

	useEffect(() => {
		// fetch and populate countries
		getCountries(apikey)
			.then(result => {
				setCountries(result.countries)
			})
			.catch(err => console.log(err))
			// set the first country
			setCountry("AD")
	}, [apikey])

	return (
		<>
			<Suspense fallback={'Loading...'}>
				<Hero />
				<Form
					countries={countries}
					country={country}
					countryChange={e => setCountry(e.target.value)}
					year={year}
					yearChange={e => setYear('2019')}
					getHolidaysInfo={handleGetRequest}
				/>
			</Suspense>
			{isLoading && (
				<div className='text-center text-danger col-12 col-sm-8 offset-sm-2'>
					Loading holidays data, please wait...
				</div>
			)}
			{holidays.length >= 1 ?  <HolidayData holidays={holidays}/> : <div/>}
			<Footer />
		</>
	)
}

export default App
