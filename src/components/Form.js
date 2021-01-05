import React from 'react'

const HolidayForm = ({
	countryChange,
	countries,
	year,
	yearChange,
	getHolidaysInfo,
	countryListError,
	refreshFetch
}) => (
	<section className='card col-11 col-sm-6 p-0 offset-sm-3 mt-lg-n5 mx-auto'>
		<div className='card-body p-sm-5'>
			<form onSubmit={getHolidaysInfo}>
				<div className='form-group'>
					<label htmlFor='country' className='form-label font-weight-bold'>
						Select Country
					</label>
					<select
						id='country'
						onChange={countryChange}
						className='form-control'>
						{countries &&
							countries.map(country => (
								<option key={country.code.toString()} value={country.code}>
									{country.name}
								</option>
							))}
					</select>
					{countryListError && <small className='text-danger'>{countryListError} <button className='btn btn-sm p-0 text-primary' onClick={ refreshFetch }> click here to refresh</button></small>}
				</div>
				<div className='form-group'>
					<label htmlFor='year' className='form-label font-weight-bold'>
						Year
					</label>
					<input
						type='text'
						id='year'
						value={year}
						onChange={yearChange}
						className='disabled form-control'
					/>
				</div>
				<button type='submit' disabled={ countryListError } className='btn btn-outline-dark btn-block'>
					Get Holidays
				</button>
			</form>
		</div>
	</section>
)

export default HolidayForm
