import { MyInput } from "../components/test/MyInput.jsx"
import { useEffect, useRef } from "react"

export default function Test() {
    const ref = useRef(null)
    console.log("start", ref?.current?.inputData)
    function handleClick() {
        console.log("2", ref.current.inputData)
    }

    useEffect(() => {
        console.log(ref.current.inputData)
    }, [ref?.current?.inputData])

    return (
        <div>
            <h2>Test</h2>
            <form>
                <MyInput label="Enter your name:" ref={ref} />
                <button type="button" onClick={handleClick}>
                    Edit
                </button>
            </form>
        </div>
    )
}
