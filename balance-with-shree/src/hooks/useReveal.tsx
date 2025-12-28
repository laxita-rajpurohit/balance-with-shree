import { useInView } from "react-intersection-observer";

export const useReveal = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return { ref, inView };
};
