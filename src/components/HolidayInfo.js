import React from 'react'

const HolidayInfo = ({ holidays }) =>
	holidays.map((holiday, index) => (
		<tr key={index}>
			<td>{holiday.name}</td>
			<td>{holiday.date}</td>
			<td>{holiday.observed.toString()}</td>
			<td>{holiday.public.toString()}</td>
			<td>{holiday.weekday.date}</td>
			<td>{holiday.weekday.name}</td>
		</tr>
	))

export default HolidayInfo
