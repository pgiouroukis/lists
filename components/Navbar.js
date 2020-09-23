import { useState } from "react";

const Navbar = () => {
	var [dropdown, setDropdown] = useState(false);

	const handleDropdown = () => {
		setDropdown(!dropdown);
	};

	return (
        <>
		<div className="z-50">
			<div>
				<div className="fixed bottom-0 inset-x-0 px-2 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center modalOverlay pointer-events-none"></div>
				<div className="fixed bottom-0 inset-x-0 px-2 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center modalOverlay pointer-events-none"></div>
				<div className="fixed bottom-0 inset-x-0 px-2 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center modalOverlay pointer-events-none"></div>
				<nav className="flex-shrink-0 w-full navbar null">
					<div className="mx-auto px-2 sm:px-4 lg:px-8">
						<div className="relative flex items-center justify-between h-14">
							<a
								href="#main"
								tabIndex="1"
								className="inline-flex sr-only items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
							>
								Skip to main content
							</a>
							<div className="flex items-center justify-start w-full">
								<div className="flex items-center justify-start px-2 lg:px-0 w-full h-full">
									<a
										href="/"
										className="flex-shrink-0 px-2 h-full -ml-2 h-full focus:outline-none focus:opacity-75 active:shadow-outline"
									>
										{/* <img className="w-auto hidden md:block h-6" src="/sheetroom_logo.svg" alt="Sheetroom logo"/> */}
										🚧 Lists
										{/* <img className="w-auto block md:hidden h-6" src="/sheetroom_logo.svg" alt="Sheetroom logo"/> */}
									</a>
									<div className="flex hidden lg:block">
										<a
											href="/features"
											className="text-gray-800 hover:opacity-75  focus:opacity-75 focus:shadow-outline px-3 py-2 rounded-md text-sm leading-5 font-medium focus:outline-none transition duration-150 ease-in-out"
										>
											How it works
										</a>
										<a
											href="/pricing"
											className="text-gray-800 hover:opacity-75  focus:opacity-75 focus:shadow-outline px-3 py-2 rounded-md text-sm leading-5 font-medium focus:outline-none transition duration-150 ease-in-out"
										>
											Pricing
										</a>
									</div>
								</div>
								<div className="related"></div>
								<div className="related-focus:bg-gray"></div>
							</div>
							<div className="flex lg:hidden">
								<button
									className="inline-flex items-center justify-center p-2 rounded-md hover:bg-frosted focus:outline-none focus:bg-light transition duration-150 ease-in-out text-gray-800 hover:text-gray-600 focus:text-gray-600"
									aria-label="Main menu"
									aria-expanded="false"
								>
									<svg
										className="h-6 w-6 block"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h8m-8 6h16"
										></path>
									</svg>
									<svg
										className="h-6 w-6 hidden"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										></path>
									</svg>
								</button>
							</div>
							<div className="hidden lg:block lg:w-80 ml-4">
								<div className="flex items-center justify-end text-white">
									<div className="flex justify-between">
										<a
											type="button"
											href="/signin"
											className="border-gray-800 text-gray-800 hover:opacity-75 focus:border-gray-700 focus:text-gray-700 active:text-gray-800 inline-flex items-center px-3 py-1 border text-base leading-6 font-medium rounded-md bg-transparent focus:outline-none focus:shadow-outline-blue active:text-gray-300 transition ease-in-out duration-150"
										>
											Είσοδος
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
        {/* <div class="absolute lg:hidden inset-x-0 transform shadow-lg navbar enter-done"><div class="absolute inset-0 flex"><div class="bg-white w-1/2"></div><div class="bg-gray-50 w-1/2"></div></div><div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2"><nav class="grid row-gap-10 px-4 py-8 bg-white sm:grid-cols-2 sm:col-gap-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"><div class="space-y-5"><ul class="space-y-6"><li class="flow-root"><a href="/" class="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"><svg class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg><span>Home</span></a></li><li class="flow-root"><a href="/features" class="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"><svg class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg><span>How it works</span></a></li><li class="flow-root"><a href="/pricing" class="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"><svg class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>Pricing</span></a></li><div class="w-full border-t border-gray-200 sm:hidden"></div><li class="flow-root"><a href="/signin" class="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"><svg class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg><span>Continue to Sheetroom</span></a></li></ul></div></nav></div></div>         */}
        </>
	);
};

export default Navbar;
