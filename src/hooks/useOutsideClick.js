import { useEffect, useRef } from "react";

function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      const handleClick = (e) => {
        if (
          (ref.current && !ref.current.contains(e.target)) ||
          (ref.current && e.key === "Escape")
        ) {
          handler();
          // console.log(e);
        }
      };

      ["click", "keydown"].forEach((ev) =>
        document.addEventListener(ev, handleClick, listenCapturing)
      );

      return () => {
        ["click", "keydown"].forEach((ev) =>
          document.removeEventListener(ev, handleClick, listenCapturing)
        );
      };
    },
    [handler, listenCapturing]
  );

  return ref;
}

export default useOutsideClick;
