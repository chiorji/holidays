import React from 'react'

const Holidays = ({ holidays }) => {
	return (
		<div className='table-responsive mt-5 border rounded col-11 mx-auto p-0 bg-light shadow-lg'>
			<table className='table table-striped table-hover table-lg w-100 bg-white'>
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

export default Holidays
