import olympicslogo from '../../images/logo.png';

export const Title = () => {
    return (
        <div className="title">
            <img src={olympicslogo} className="title-logo" alt="logo"></img>
            <h1 className="title-header">Olympic Winter Games - Sochi 2014</h1>
        </div>
    )
}