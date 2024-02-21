import { ReactNode, useEffect, useRef } from "react";

export default function LoadMore({
  loadMore,
  children,
}: {
  children: ReactNode;
  loadMore: () => void;
}) {
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  return <div ref={observerTarget}>{children}</div>;
}
