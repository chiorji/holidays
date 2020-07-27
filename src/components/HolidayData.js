import React from 'react'

const HolidayData = ({ holidays }) => {
	return (
		<div className='table-responsive mt-5'>
			<table className='table table-striped table-hover table-sm rounded col-12 col-sm-8 offset-sm-2 bg-white'>
				<thead className="table-head bg-warning text-dark">
					<tr>
						<th>Country Code</th>
						<th>Date Observed</th>
						<th>Holiday Name</th>
						<th>Week Day</th>
						<th>Public Holiday</th>
					</tr>
				</thead>
				<tbody>
					{holidays.map((holiday,index) => (
						<tr key={index}>
							<td>{holiday.country}</td>
							<td>{holiday.date}</td>
							<td>{holiday.name}</td>
							<td>{holiday.weekday.date.name}</td>
							<td>{holiday.public === true ? "Public holiday" : "Not a public holiday"}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default HolidayData
