import React, { useContext, useEffect, useState } from 'react';
import Clock from '@/components/Clock';
import ThemeSwitch from '@/components/ThemeSwitch';
import styles from '@/styles/Home.module.css';
import Context from '@/Context/Context';
import { HomeContainer } from '@/components/Styles/HomeStyles'; 

export default function Home() {
  const { theme } = useContext(Context);

  return (
    <>
    <HomeContainer theme={theme}>
      <div className={styles.home}>
        <div className={styles.theme}>
          <ThemeSwitch />
        </div>
        <div className={styles.clock}>
          <Clock />
        </div>
      </div>
      </HomeContainer>
    </>
  )
}
