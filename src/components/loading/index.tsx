import 'styling/loading.css';

const Loading: React.FC = () => {
    return (
        <>
            <div className="loader">
                <div className="track">
                    <div className="mouse" />
                </div>
                <div className="face">
                    <div className="ears-container" />
                    <div className="eyes-container">
                        <div className="eye" />
                        <div className="eye" />
                    </div>
                    <div className="phiz">
                        <div className="nose" />
                        <div className="lip" />
                        <div className="mouth" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loading;
