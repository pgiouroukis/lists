const Button = (props) => {
    const themes = ["primary", "secondary"] //theme
    const types = ["button", "link"] //type
    const sizes = ["sm", "md", "lg"] //size
    const thickness = [true, false] //thin
    const fonts = ["sm", "base", "lg", "xl"] //font
    const fluids = [true, false] //fluid
    
    var theme, size, thin, font, fluid, type, style='';

    if ( !themes.includes(props.theme) ) theme = "primary"; else theme = props.theme;
    if ( !types.includes(props.type) ) type = "button"; else type = props.type
    if ( !sizes.includes(props.size) ) size = "md"; else size = props.size
    if ( !thickness.includes(props.thin) ) thin = false; else thin = props.thin
    if ( !fonts.includes(props.font) ) font = "base"; else font = props.font
    if ( !fluids.includes(props.fluid) ) fluid = false; else fluid = props.fluid

    //the general theme of the button
    if (theme === "primary") {
        style += ` inline-flex items-center justify-center border border-transparent
        leading-6 rounded-md text-white bg-blue-600 hover:bg-blue-500 
        focus:outline-none focus:shadow-outline transition duration-150 ease-in-out shadow`
    } else if (theme === "secondary") {
        style += `inline-flex items-center justify-center border border-transparent
        leading-6 rounded-md text-blue-600 bg-white hover:text-blue-500 focus:outline-none 
        focus:shadow-outline transition duration-150 ease-in-out shadow `
    }

    //size of margins
    if (size === "lg") style += ` px-5 py-3  `; 
    else if (size === "md") style += ` px-3 py-1 `

    //font-weight
    if (thin) style += ` font-normal `; 
    else style += ` font-medium `

    //font-size
    style += " text-"+font+" "

    //button width
    if (fluid) style += ` w-full `

    return (
        <>
            { type === "button" &&
                <button
                    className={style}
                    onClick={typeof props.onClick === "function" ? props.onClick : false}
                >
                    {props.children}
                </button>
            }
            {  type==="link" &&
                <a
                    className={style + " cursor-pointer"}
                    onClick={typeof props.onClick === "function" ? props.onClick : false}
                >
                    {props.children}
                </a>
            }

        </>
    )
}
export default Button