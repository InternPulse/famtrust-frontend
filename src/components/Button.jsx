
const BUTTON_TYPE_CLASSES = {
    main: 'main',
    inverted: 'inverted',
}
const Button = ({children, buttonType, ...otherProps}) => {
 
    return(
       
        <button className={`bg-black min-w-[200px] text-white font-bold py-4 px-8 
            ${BUTTON_TYPE_CLASSES[buttonType]==='main'? 
            'bg-[#4285f4]': 'bg-black'}`}
        {...otherProps}>
            {children}
        </button>
    )
}
export default Button;