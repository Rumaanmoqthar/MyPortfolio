import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, threshold = 0.1 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // If we want it to hide again when scrolling up, we can use entry.isIntersecting directly
                // usually for "reveal once" we check if it is true and then unobserve
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // observer.unobserve(domRef.current); // Optional: if we only want it to animate once
                } else {
                    // Optional: set false if we want it to animate out/in every time
                    // setIsVisible(false); 
                }
            });
        }, { threshold });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [threshold]);

    return (
        <div
            ref={domRef}
            className={`reveal-section ${isVisible ? 'is-visible' : ''}`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
