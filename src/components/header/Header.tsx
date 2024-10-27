"use client";

import styles from "@/components/header/Header.module.css";
import { useCallback, useEffect, useState } from "react";

const Header = () => {
  const [showInformationModalContainer, setShowInformationModalContainer] =
    useState(false);

  const [showSupportModalContainer, setShowSupportModalContainer] =
    useState(false);

  const [showStatsModalContainer, setShowStatsModalContainer] = useState(false);

  const [showHowToPlayModalContainer, setShowHowToPlayModalContainer] =
    useState(false);

  const closeModals = useCallback(() => {
    if (showInformationModalContainer) {
      setShowInformationModalContainer(false);
    }
    if (showSupportModalContainer) {
      setShowSupportModalContainer(false);
    }
    if (showStatsModalContainer) {
      setShowStatsModalContainer(false);
    }
    if (showHowToPlayModalContainer) {
      setShowHowToPlayModalContainer(false);
    }
  }, [
    showHowToPlayModalContainer,
    showInformationModalContainer,
    showStatsModalContainer,
    showSupportModalContainer,
  ]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModals();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    showInformationModalContainer,
    showSupportModalContainer,
    showStatsModalContainer,
    showHowToPlayModalContainer,
    closeModals,
  ]);

  return (
    <div className={styles.header}>
      <div
        className={`${styles.modalContainer} ${
          showInformationModalContainer ? styles.showModal : ""
        }`}
      >
        <div className={styles.modal}>
          <div className={styles.modalTitle}>
            <h3 className={`${styles.modalTitleText} foreground`}>About</h3>
            <button
              className={styles.modalCloseButton}
              onClick={() => setShowInformationModalContainer(false)}
            >
              <svg
                className="w-7 h-7 foreground"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className={styles.modalText}>
            <p className="foreground">
              Listen to up to 16 seconds of a song, attempting to guess the name
              within 6 tries.
            </p>
            <p className="foreground">
              Unlike the original Heardle, you may play with a new song as many
              times as you like! Just hit the reset button or refresh the page.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.modalContainer} ${
          showSupportModalContainer ? styles.showModal : ""
        }`}
      >
        <div className={styles.modal}>
          <div className={styles.modalTitle}>
            <h3 className={`${styles.modalTitleText} foreground`}>Support</h3>
            <button
              className={styles.modalCloseButton}
              onClick={() => setShowSupportModalContainer(false)}
            >
              <svg
                className="w-7 h-7 foreground"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className={styles.modalText}>
            <p className="foreground">
              My friends and I played Heardle daily for months until Spotify
              discontinued it. This project was intended to revive the fun we
              had and allow others to do the same.
            </p>
            <p className="foreground">
              If you want to show some love, feel free to star the{" "}
              <a
                className={styles.githubLink}
                href="https://github.com/nburbach3/MyHeardle"
                target="_blank"
              >
                Github Repo
              </a>{" "}
              or send me an email at nickb2000@live.com to share feedback.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.modalContainer} ${
          showStatsModalContainer ? styles.showModal : ""
        }`}
      >
        <div className={styles.modal}>
          <div className={styles.modalTitle}>
            <h3 className={`${styles.modalTitleText} foreground`}>Stats</h3>
            <button
              className={styles.modalCloseButton}
              onClick={() => setShowStatsModalContainer(false)}
            >
              <svg
                className="w-7 h-7 foreground"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div
            className={`${styles.modalText} foreground ${styles.statsModalText}`}
          >
            <div className={styles.statColumn}>
              <h1 className={styles.statsTextTitle}>Won:</h1>
              <h1>0</h1>
            </div>
            <div className={styles.statColumn}>
              <h1 className={styles.statsTextTitle}>Played:</h1>
              <h1>0</h1>
            </div>
            <div className={styles.statColumn}>
              <h1 className={styles.statsTextTitle}>Win %:</h1>
              <h1>
                <span>0.00</span>
                <span>%</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.modalContainer} ${
          showHowToPlayModalContainer ? styles.showModal : ""
        }`}
      >
        <div className={styles.modal}>
          <div className={styles.modalTitle}>
            <h3 className={`${styles.modalTitleText} foreground`}>
              How To Play
            </h3>
            <button
              className={styles.modalCloseButton}
              onClick={() => setShowHowToPlayModalContainer(false)}
            >
              <svg
                className="w-7 h-7 foreground"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className={`${styles.modalText} ${styles.howToPlayModalText}`}>
            <div className={styles.howToPlayText}>
              <p className="foreground">
                When you make a guess, the following corresponds to the result:
              </p>
            </div>
            <div className={styles.howToPlayIcon}>
              <div className={`${styles.skipped} ${styles.skipIcon}`}></div>
              <div className={styles.howToPlayIconText}>
                <p className="foreground">You skipped your guess</p>
              </div>
            </div>
            <div className={styles.howToPlayIcon}>
              <div className={styles.outerIconDiv}>
                <div className={styles.wrongX1}></div>
                <div className={styles.wrongX2}></div>
              </div>
              <div className={styles.howToPlayIconText}>
                <p className="foreground">
                  The song and all artists are incorrect
                </p>
              </div>
            </div>
            <div className={styles.howToPlayIcon}>
              <div className={styles.outerIconDiv}>
                <div className={styles.partiallyCorrectX1}></div>
                <div className={styles.partiallyCorrectX2}></div>
              </div>
              <div className={styles.howToPlayIconText}>
                <p className="foreground">
                  The song is incorrect but there is at least 1 correct artist
                </p>
              </div>
            </div>
            <div className={styles.howToPlayIcon}>
              <div className={styles.outerIconDiv}>
                <div className={styles.correctX1}></div>
                <div className={styles.correctX2}></div>
              </div>
              <div className={styles.howToPlayIconText}>
                <p className="foreground">You got the correct song!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerContents}>
        <button
          className={styles.headerButton}
          onClick={() => setShowInformationModalContainer(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="foreground"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </button>
        <button
          className={styles.headerButton}
          onClick={() => setShowSupportModalContainer(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="foreground"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <h1 className={`foreground ${styles.headerTitle}`}>My Heardle</h1>
        <button
          className={styles.headerButton}
          onClick={() => setShowStatsModalContainer(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="foreground"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        </button>
        <button
          className={styles.headerButton}
          onClick={() => setShowHowToPlayModalContainer(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="foreground"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
