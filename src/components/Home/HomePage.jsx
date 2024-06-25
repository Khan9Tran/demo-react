import videoHomePage from '../../assets/video-homepage.mp4'
const HomePage = () => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source
                    src={videoHomePage}
                    type="video/mp4"
                />
            </video>
            <div className="homepage-content">
                <div className='title-1'>
                    <pre>
                        {`Make forms
worth filling out`}
                    </pre>
                </div>
                <div className='title-2'>
                    <pre>
                        {
                    `Get more data—like signups, feedback, and anything
else—with forms designed to be refreshingly different.`}
                    </pre>
                </div>
                <div className='title-3'>
                    <button className='btn-getStarted'>
                        Get started-it's free
                    </button>
                </div>
            </div>
        </div>
    )
}
export default HomePage