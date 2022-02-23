import React from 'react'

const Input = ({label, type, placeholder, onChange}) => {
    return (
        <>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type={type} placeholder={placeholder} onChange={e => onChange(e.target.value)} />
        </>
    )
}

export default Input