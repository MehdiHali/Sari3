
export function Textarea({input,handleChange,handleFocus,placeholder,}){

    return (
        <textarea value={input}  placeholder={placeholder} className={"bg-transparent p-4 outline-none text-green-400 w-full px-20"}   onChange={handleChange} onBlur={handleFocus} autoFocus ></textarea>
    )
}