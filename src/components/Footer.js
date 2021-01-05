import React from 'react'

const Footer =()=> {
	return (
		<section className="container-fluid bg-warning mt-5 border-top">
			<div className="row no-gutters">
				<div className='col p-2 text-center text-secondary'>
					<small>
						Made with &#10084; by &nbsp;
						<a
						className="text-decoration-none text-secondary"
							href='https://github.com/chiorji/holidays'
							target='_blank'
							rel='noopener noreferrer'>
							Chigbogu
						</a>
					</small>
				</div>
			</div>
		</section>
	)
}

 export default Footer
