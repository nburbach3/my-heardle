"use client";
import styles from "@/app/page.module.css";
import Customization from "@/components/customization/Customization";
import Header from "@/components/header/Header";
import { useTheme } from "@/context/ThemeContext";
import { useEffect } from "react";

export default function Home() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color", theme.color);
    document.documentElement.style.setProperty(
      "--theme-backgroundColor",
      theme.backgroundColor
    );
    document.documentElement.style.setProperty(
      "--theme-modalBackgroundColor",
      theme.modalBackgroundColor
    );
    document.documentElement.style.setProperty(
      "--theme-modalButtonColor",
      theme.modalButtonColor
    );
    document.documentElement.style.setProperty(
      "--theme-modalButtonBackgroundColor",
      theme.modalButtonBackgroundColor
    );
  }, [
    theme.color,
    theme.backgroundColor,
    theme.modalBackgroundColor,
    theme.modalButtonColor,
    theme.modalButtonBackgroundColor,
  ]);

  return (
    <div
      className={`${styles.pageContainer} themedColor themedBackgroundColor`}
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <Header />
      <Customization />
    </div>
  );
}
