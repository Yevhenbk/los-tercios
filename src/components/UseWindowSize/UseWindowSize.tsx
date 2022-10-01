import * as React from 'react'

export default function UseWindowSize() {
    const getSize = () => {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    };

    const [windowSize, setWindowSize] = React.useState(getSize);

    React.useEffect(() => {
        const handleResize = () => {
            setWindowSize(getSize());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}