import { useEffect, useState } from "react";
import { UseDocumentTitleChangeEffectParams } from "./types/UseDocumentTitleChangeEffectParams";
import { UseDocumentTitleChangeEffectReturn } from "./types/UseDocumentTitleChangeEffectReturn";

export const useDocumentTitleChangeEffect = ({
  firstTitle = "Hello",
  secondTitle = "World!",
  interval = 1000
}: UseDocumentTitleChangeEffectParams): UseDocumentTitleChangeEffectReturn => {
  const [title, setTitle] = useState(firstTitle);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitle((title) => {
        return title === firstTitle ? secondTitle : firstTitle;
      });
    }, interval);
    return () => {
      clearInterval(intervalId);
    };
  }, [firstTitle, secondTitle, interval]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return {
    loggingString: `useDocumentTitleChangeEffect: firstTitle: ${firstTitle}, secondTitle: ${secondTitle}, interval: ${interval}`,
    interval
  };
};
