import React from 'react'

const HolidayForm = ({
	countryChange,
	countries,
	year,
	yearChange,
	getHolidaysInfo,
}) => (
	<section className='card col-12 col-sm-6 p-0 offset-sm-3 mt-lg-n5'>
		<div className='card-header bg-warning text-dark'>
			<h3 className='text-center'>Get country holidays</h3>
		</div>
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
				<button type='submit' className='btn btn-danger btn-block'>
					Get Holidays
				</button>
			</form>
		</div>
	</section>
)

export default HolidayForm
