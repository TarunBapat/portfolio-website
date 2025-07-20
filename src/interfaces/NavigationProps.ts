export interface NavigationProps {
  activeSection: string; // Assuming activeSection is a string (e.g., "home", "about")
  setActiveSection: React.Dispatch<React.SetStateAction<string>>; // Type for the
}
