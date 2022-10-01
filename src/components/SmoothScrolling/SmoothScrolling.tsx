import * as React from "react";
import "./SmoothScrolling.scss";
import UseWindowSize from "../UseWindowSize/UseWindowSize";

type Props = {
    children: React.ReactNode
}

const SmoothScroll: React.FC<Props> = (props) => {
    // 1.
    const windowSize = UseWindowSize();

    //2.
    const scrollingContainerRef = React.useRef<any>();

    // 3.
    const data = {
        ease: 0.03,
        current: 0,
        previous: 0,
        rounded: 0,
    };

    // 4.
    React.useEffect(() => {
        requestAnimationFrame(() => smoothScrollingHandler());
    }, []);

    const smoothScrollingHandler = () => {
        data.current = window.scrollY;
        data.previous += (data.current - data.previous) * data.ease;
        data.rounded = Math.round(data.previous * 100) / 100;

        scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

        // Recursive call
        requestAnimationFrame(() => smoothScrollingHandler());
    };

    return (
        <div className="parent">
            <div ref={scrollingContainerRef}>{props.children}</div>
        </div>
    );
};

export default SmoothScroll;