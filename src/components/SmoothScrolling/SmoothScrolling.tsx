import * as React from "react";
import "./SmoothScrolling.scss";
import UseWindowSize from "../UseWindowSize/UseWindowSize";

type Props = {
    children: React.ReactNode
}

const SmoothScroll: React.FC<Props> = (props) => {
  
    const windowSize = UseWindowSize();
    const scrollingContainerRef = React.useRef<any>();
    const data = {
        ease: 0.03,
        current: 0,
        previous: 0,
        rounded: 0,
    };

    React.useEffect(() => {
        requestAnimationFrame(() => smoothScrollingHandler());
    }, []);

    const smoothScrollingHandler = () => {
        data.current = window.scrollY;
        data.previous += (data.current - data.previous) * data.ease;
        data.rounded = Math.round(data.previous * 100) / 100;

        scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

        requestAnimationFrame(() => smoothScrollingHandler());
    };

    return (
        <div className="parent">
            <div ref={scrollingContainerRef}>{props.children}</div>
        </div>
    );
};

export default SmoothScroll;