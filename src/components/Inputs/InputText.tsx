interface CustomComponentProps {
    field: any
    className?: string
    deshability: string
}

const InputText = ({
    field,
    className,
    deshability,
}: CustomComponentProps): JSX.Element => {
    return (
        <>
            <div className="input-wrapper">
                <input
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    className={`input-not-space w-100 ${className}`}
                    type="text"
                    {...field}
                    disabled={deshability}
                />
            </div>
        </>
    )
}

export default InputText
