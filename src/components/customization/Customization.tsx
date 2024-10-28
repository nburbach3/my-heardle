"use client";
import styles from "@/components/customization/Customization.module.css";
import { themes } from "@/constants/Themes";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

const Customization = () => {
  const [selectedGenre, setSelectedGenre] = useState("Pop");
  const genres = ["Pop", "Rock", "Hip-Hop", "Jazz", "Classical", "Electronic"];

  const [selectedDifficulty, setSelectedDifficulty] = useState("Easy");
  const difficulties = ["Easy", "Medium", "Hard"];

  const [isExplicit, setIsExplicit] = useState<boolean>(false);

  const [selectedTheme, setSelectedTheme] = useState("Default");

  const { changeTheme } = useTheme();

  const selectTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTheme(event.target.value);
    changeTheme(event.target.value);
  };

  return (
    <div className={styles.customizationContainer}>
      <div className={styles.titleContainer}>
        <h1 className={`foreground ${styles.titleText}`}>
          Welcome to My Heardle!
        </h1>
        <h3 className="foreground">
          Please select any customizations you would like before beginning the
          game.
        </h3>
      </div>
      <div className={styles.optionContainer}>
        <div className={styles.customOption}>
          <h4 className="foreground">Genre</h4>
          <select
            value={selectedGenre}
            onChange={(event) => setSelectedGenre(event.target.value)}
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.customOption}>
          <h4 className="foreground">Difficulty</h4>
          <select
            value={selectedDifficulty}
            onChange={(event) => setSelectedDifficulty(event.target.value)}
          >
            {difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.customOption}>
          <h4 className="foreground">Explicit</h4>
          <input
            type="checkbox"
            checked={isExplicit}
            onChange={() => setIsExplicit((explicit) => !explicit)}
          ></input>
        </div>
        <div className={styles.customOption}>
          <h4 className="foreground">Color Theme</h4>
          <select value={selectedTheme} onChange={selectTheme}>
            {themes.map((theme) => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Customization;
