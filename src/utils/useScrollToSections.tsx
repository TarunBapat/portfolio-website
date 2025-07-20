import { useCallback } from "react";

const useScrollToSections = (
  setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const scrollToSection = useCallback(
    (sectionId: string) => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    },
    [setIsMenuOpen]
  );
  return scrollToSection;
};
export default useScrollToSections;
