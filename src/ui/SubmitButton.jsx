import { useFormStatus } from "react-dom"
import Button from "./Button"
import SVGLoaderComponent from "./SVGLoaderComponent"

function SubmitButton({ children, className, ...rest }) {
    const { pending } = useFormStatus()

    return (
        <Button
            disabled={pending}
            {...rest} className={`flex items-center justify-center gap-x-4 py-4 w-full
            ${className}
            `}>
            {children}
            {pending && <SVGLoaderComponent />}
        </Button>
    )
}

export default SubmitButton