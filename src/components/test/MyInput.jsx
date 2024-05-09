// eslint-disable-next-line no-undef
import { forwardRef, useImperativeHandle, useState } from "react"

export const MyInput = forwardRef(function MyInput(props, ref) {
    const [on, setOn] = useState(false)
    const [inputData, setInputData] = useState("")
    useImperativeHandle(ref, () => ({
        toggleModal: toggleModal,
        inputData: inputData,
    }))

    const toggleModal = () => setOn(!on)

    return (
        <label>
            {props.label}
            <input ref={ref} onChange={e => setInputData(e.target.value)} />
        </label>
    )
})
