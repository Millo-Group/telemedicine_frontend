import React from 'react';
import styles from './index.module.css';

export default function ChatLoader() {
  return (
    <div className={styles.typingIndicator}>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
    </div>
  );
}
