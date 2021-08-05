import { useState } from 'react';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const [data, setData] = useState({});
  const fetchCharityData = async () => {
    try {
      const response = await fetch('https://api.data.charitynavigator.org/v2/Organizations?app_id=a33f8a72&app_key=e22fb87c0c727a53d034f33b53bc53d9');
      const charityData = await response.json();
      return charityData
    } catch (err) {
      throw err
    }
  };
  console.log(fetchCharityData());
  return (
    <div className={styles.home}>
      <h1>Welcome to project-give!</h1>
    </div>
  )
}
