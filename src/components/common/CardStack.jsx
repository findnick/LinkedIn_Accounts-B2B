

const CardStack = ({children, ...style}) => {
    return (
        <div className="card-stack" style={{...style}}>
            {children}
        </div>
    )
}

export default CardStack;