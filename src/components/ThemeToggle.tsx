// src/components/ThemeToggle.tsx
import { useTheme } from './context/ThemeContext';
import { BsSun } from 'react-icons/bs';
import { BsMoon } from 'react-icons/bs';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="d-flex align-items-center justify-content-end p-2">
      <BsSun />
      <div className="form-check form-switch m-0 mx-2">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="switchCheckChecked"
          checked={isDark}
          onChange={toggleTheme} // <-- Trigger toggle on change
        />
      </div>
      <BsMoon />
    </div>
  );
};

export default ThemeToggle;
