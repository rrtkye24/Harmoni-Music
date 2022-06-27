import React from "react"
import styles from "../styles/HomeAbout.module.css"
import Link from "next/link"
function Aboutimage() {
  return (
    <>
      <div className={styles.semua}>
        <div className={styles.body}>
          <h1 className={styles.nama}>Majelis Pusat</h1>
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <div className={styles.banner}></div>
              <div className={styles.center}>
                <img
                  src="img/1.jpeg "
                  alt="profile image"
                  className={styles.profile}
                />
              </div>
              <p className={styles.name}>Pdt. Paul Daniel Massie</p>
              <p className={styles.description}>Ketua Umum</p>
            </div>
            <div className={styles.container}>
              <div className={styles.banner}></div>
              <div className={styles.center}>
                <img
                  src="img/3.jpeg "
                  alt="profile image"
                  className={styles.profile}
                />
              </div>
              <p className={styles.name}>Pdt. Merryam Jone Onibala</p>
              <p className={styles.description}>Bendahara Umum</p>
            </div>
            <div className={styles.container}>
              <div className={styles.banner}></div>
              <div className={styles.center}>
                <img
                  src="img/2.jpeg "
                  alt="profile image"
                  className={styles.profile}
                />
              </div>
              <p className={styles.name}>Pdt. Giarto</p>
              <p className={styles.description}>Sekretaris Umumm</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Aboutimage
