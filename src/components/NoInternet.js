const NoInternet = ()=>{
    return (
        // <div className="alert" ref={(element) => (this.alertBox = element)}>
        //     <span className="closebtn" onClick={this.handleCloseClick}>&times;</span>
        //     Looks like you are offline, check your internet connection.
        // </div>
        <div className="no-int">
            <h3>Check your internet connection.</h3>
        </div>
    )
}
export default NoInternet;