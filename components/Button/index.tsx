type ButtonProps = {
    title: string
}

export const Button = (props: ButtonProps) => {
    return (
        <div>
            <p>{props.title}</p>
        </div>
    )
}