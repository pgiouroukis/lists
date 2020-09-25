export default (props) =>
    <a  href={props.href || "/"}
        className= {`
                text-gray-800 hover:opacity-75  focus:opacity-75
                px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out 
                ${props.className}
        `}
    >
        {props.children}
    </a>