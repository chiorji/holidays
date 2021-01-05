import React, { useState, useEffect, Suspense } from 'react'
import Utils from './utils'
import HolidayData from './components/Holidays'
import Footer from './components/Footer'

const Hero = React.lazy(() => import('./components/Hero'))
const Form = React.lazy(() => import('./components/Form'))

const App = () => {
	const [countries, setCountries] = useState([])
	const [country, setCountry] = useState('')
	const [year, setYear] = useState('')
	const [holidays, setHolidays] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [listFetchError, setListFetchError] = useState('')
	const [getError, setGetError] = useState('')

	const handleGetHolidays = e => {
		e.preventDefault()
		setIsLoading(true)
		setGetError('')
		Utils.getHolidays(country, year).then(result => {
			setGetError('')
			setIsLoading(false)
			setHolidays(result.holidays)
		}).catch(err => {
			setIsLoading(false)
			setGetError(err.message)
		})
	}

	const fetchCountries = () => {
		return Utils.getCountries().then(result => {
			setListFetchError('')
			setCountries(result.countries)
			setCountry("AD")
		}).catch(err => {
			setListFetchError(err.message)
		})
	}

	const refreshFetch = (e) => {
		e.preventDefault()
		setListFetchError('')
		fetchCountries()
	}

	useEffect(() => {
		fetchCountries()
		setYear(new Date().getFullYear() - 1)
	}, [year])

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
					getHolidaysInfo={handleGetHolidays}
					countryListError={listFetchError}
					refreshFetch={refreshFetch}
				/>
			</Suspense>
			{isLoading && (
				<div className='text-center text-danger col-12 col-sm-8 offset-sm-2'>
					Loading holidays data, please wait...
				</div>
			)}
			{getError && <p className='lead text-center text-danger mt-3 p-3'>{getError}</p>}
			{holidays.length >= 1 ?  <HolidayData holidays={holidays}/> : <div/>}
			<Footer />
		</>
	)
}

export default App
