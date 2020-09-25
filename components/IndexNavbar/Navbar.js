import { useState, useRef, useEffect } from "react";
import Link from "../usual/Link"
import MobileDropdown from "./MobileDropdown";
import MobileDropdownButton from "./MobileDropdownButton"

const Navbar = () => {
	var [dropdown, setDropdown] = useState(false);

    const wrapperRef = useRef(null)
    const buttonRef = useRef(null)
    useOutsideAlerter(wrapperRef)

	const handleDropdown = () => {
		setDropdown(!dropdown);
	};

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target))
                    if (event.target.tagName !== "svg" && event.target.tagName !== "path" && event.target !== buttonRef.current)
                        setDropdown(false)
            }    
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

	return (
		<>
			<div className="z-50">
				<div>
					<div className="fixed bottom-0 inset-x-0 px-2 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center modalOverlay pointer-events-none"></div>
					<nav className="flex-shrink-0 w-full navbar null">
						<div className="mx-auto px-2 sm:px-4 lg:px-8">
							<div className="relative flex items-center justify-between h-14">
								<div className="flex items-center justify-start w-full">
									<div className="flex items-center justify-start px-2 lg:px-0 w-full h-full">
										<a
											href="/"
											className="flex-shrink-0 px-2 h-full h-full focus:outline-none focus:opacity-75 active:shadow-outline"
										>
											{/* <img className="w-auto hidden md:block h-6" src="/sheetroom_logo.svg" alt="Sheetroom logo"/> */}
											🚧 Lists
											{/* <img className="w-auto block md:hidden h-6" src="/sheetroom_logo.svg" alt="Sheetroom logo"/> */}
										</a>
										<div className="flex hidden lg:block">
											<Link href="/features">
												How it works
											</Link>
											<Link href="/pricing" >
												Pricing
											</Link>
										</div>
									</div>
								</div>
								<div className="flex lg:hidden">
                                    <MobileDropdownButton
                                        ref={buttonRef}
                                        onClick={()=>{ setDropdown(!dropdown)}}
                                    />
								</div>
								<div className="hidden lg:block lg:w-80 ml-4">
									<div className="flex items-center justify-end text-white">
										<div className="flex justify-between">
											<Link href="/signin" className="border border-gray-800 focus:border-gray-700">
												Είσοδος
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						{dropdown && 
                            <div ref={wrapperRef} class="absolute lg:hidden inset-x-0 transform shadow-lg navbar enter-done">
                                <MobileDropdown/>
                            </div> 
                        }
					</nav>
				</div>
			</div>
		</>
	);
};

export default Navbar;
