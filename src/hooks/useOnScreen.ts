import { useEffect, useState } from 'react'

export default function useOnScreen(ref, rootMargin = "0px") {

    const [isIntersecting, setIntersecting] = useState(false);
    const current = ref.current;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { setIntersecting(entry.isIntersecting) }, { rootMargin }
        );
        if (current) {
            observer.observe(current);
        }
        return () => { observer.disconnect() };
    }, [current, rootMargin]);
    return isIntersecting;
}
