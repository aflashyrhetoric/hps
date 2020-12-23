import React, { useState, useEffect } from "react"
import Head from "next/head"
import styles from "../styles/Home.module.scss"

export default function Home() {
  return (
    <>
      <Head>
        <title>heather park: slp</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital@0;1&family=Montserrat:wght@300;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles.color}>
            <p className="animate__animated animate__fadeInLeft">speech language pathologist </p>
          </div>
          {/* <div className={styles.portrait}></div> */}
        </div>
        <div className={styles.right}>
          <div className={styles.rightInner}>
            <h1 style={{ marginBottom: "5px", marginTop: "-3px" }}>
              hello, i'm heather park
            </h1>

            <p>
              I'm a Speech Language Pathologist based in New York, NY. My
              hobbies are eating kimchi jigae and petting my mini moo! Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Fuga, nam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nam
              error impedit necessitatibus porro ex?
            </p>

            <div style={{ marginBottom: "30px" }} />
            <div className={styles.tryptech}>
              <div>
                <span>CONNECT</span>
                <ul>
                  <li>Blog</li>
                  <li>Email</li>
                  <li>Newsletter</li>
                </ul>
              </div>
              <div>
                <span>SOCIAL</span>
                <ul>
                  <li>Twitter</li>
                  <li>Instagram</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
              {/* <div>
                <span>NETWORK</span>
                <ul>
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </ul>
              </div> */}
            </div>
            <div style={{ marginBottom: "30px" }} />
            {/* <blockquote>
              Making effective communication, a human right, accessible and
              achievable for all.
              <span>- ASHA</span>
            </blockquote> */}
            <small>(c) 2020 Heather Park</small>
          </div>
        </div>
      </main>
    </>
  )
}
