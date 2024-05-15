import GrayScale from '../../assets/gray-img.png'

const Card = ({height, width, style, image = GrayScale, cardTitle, children, logoStyle, imgStyle, titleStyle, footerStyle, cardClass = ""}) => {
    return (
        <>
            <div className={`card ${cardClass}`} style={{height: height, width: width, ...style}}>
                <div className="card-logo" style={logoStyle}>
                    <img src={image} alt="" style={imgStyle} />
                </div>
                <div className="card-title" style={titleStyle}>{cardTitle}</div>
                <div className="card-footer" style={footerStyle}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Card;