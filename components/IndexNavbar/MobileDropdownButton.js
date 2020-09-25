const MobileDropdownButton = (props) => {
    return (
        <button
            onClick={(typeof props.onClick === "function" ? props.onClick : false)}
            className={`inline-flex items-center justify-center p-2 rounded-md 
                        hover:bg-frosted focus:outline-none focus:bg-light transition duration-150 ease-in-out 
                        text-gray-800 hover:text-gray-600 focus:text-gray-600
            `}
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
                >
                    123
                </path>
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
    )
}

export default MobileDropdownButton