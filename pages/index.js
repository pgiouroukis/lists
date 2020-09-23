import Navbar from '../components/Navbar'
import Button from '../components/Button'

export default function IndexPage() {
    return (
			<div className="min-h-screen overflow-x-hidden bg-gradient-to-tr from-purple-50 via-blue-100 to-blue-50" style={{backgroundColor:"#E8F5FE"}} >
                
				<Navbar />
				<div>
					<div className="mx-auto px-4 pt-3 md:pt-10 max-w-7xl">
						<header className="max-w-6xl mx-auto mb-12 md:mb-0">
							<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-gray-800 font-semibold leading-tight z-40">
								Η δημιουργία lead για την επιχείριση σου, εύκολα και γρήγορα
							</h1>
						</header>
					</div>
					<div className="mt-8 flex lg:flex-shrink-0 justify-center">
						<div className="inline-flex rounded-md shadow">
							<a
								href="/signin"
								className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-small rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
							>
								Ξεκίνα Δωρεάν
							</a>
						</div>
						<div className="ml-3 inline-flex rounded-md shadow">
							<a
								href="/features"
								className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-small rounded-md text-blue-600 bg-white hover:text-blue-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
							>
								Μάθε πως λειτουργεί
							</a>
						</div>
					</div>
				</div>
			</div>
		);
}
