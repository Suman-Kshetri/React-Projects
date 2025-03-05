import React, {useId} from 'react'

const Input = React.forwardRef( function Input ({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'
            htmlFor={id}>{label}
            </label>
            }
        <input 
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        id={id}
        {...props}

          />
        </div>
    )
})

export default Input

// forwardRef is a function in React that allows a parent component to pass a ref to a child component. 
// This is useful when you need direct access to a DOM element inside a child component, 
// such as focusing an input field or triggering a button click from a parent.
//it gives reference to the input field so that we can use it in different places [ie parent  component]