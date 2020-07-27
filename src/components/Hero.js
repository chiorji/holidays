import React from 'react'

const Hero = () => {
	return (
		<section className='container-fluid banner py-5 text-light'>
			<div className='row no-gutters'>
				<div className='col-12 app-name d-flex flex-column justify-content-center align-items-center flex-divumn text-center'>
					<h1
						className='display-4 font-weight-bold text-warning'
						style={{
							fontFamily: 'cursive,serif',
							textShadow: '1px 2px 8px #fff',
						}}>
						Holidays
					</h1>
					<p className='font-weight-bold mt-2 mb-0'>
						Get 2019 Holidays and Dates in various Countries Of The
						World!!!
					</p>
					<span>
						<em>
							Due to API limitations, we can only search for the year 2019
						</em>
					</span>
				</div>
			</div>
		</section>
	)
}

export default Hero
