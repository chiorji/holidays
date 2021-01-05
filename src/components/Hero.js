import React from 'react'

const Hero = () => {
	return (
		<section className='container-fluid banner py-4 text-light'>
			<div className='row no-gutters'>
				<div className='col-12 app-name d-flex flex-column justify-content-center align-items-center flex-divumn text-center'>
					<h1
						className='display-4 font-weight-bold text-warning'
						style={{
							fontFamily: 'cursive,serif',
							textShadow: '0px 0px 4px #000',
						}}>
						Holidays
					</h1>
					<p className='font-weight-bold mt-2 mb-0'>
						Get past years' holidays with dates in countries of the world!!!
					</p>
					<span>
						<em>
							Due to API limitations - you can only search for the past year
						</em>
					</span>
				</div>
			</div>
		</section>
	)
}

export default Hero
