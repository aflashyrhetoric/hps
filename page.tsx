import React, { useState, useEffect } from "react"
import Head from "next/head"
import styles from "../styles/Home.module.scss"

import { CopyToClipboard } from "react-copy-to-clipboard"

export default function Home() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 1000)
    }
  }, [copied])

  const currentYear = new Date().getFullYear()

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
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@300;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      <main className={`${styles.main} main`}>
        <div className={styles.left}>
          <div className={styles.color}>
            <p className="animate__animated animate__fadeInLeft">
              speech language pathologist{" "}
            </p>
          </div>
          {/* <div className={styles.portrait}></div> */}
        </div>
        <div className={styles.right}>
          <div
            className={`${styles.rightInner} animate__animated animate__fadeIn`}
          >
            <h1 style={{ marginBottom: "5px", marginTop: "-3px" }}>
              Hello! I'm Heather Park.
            </h1>
            <p>
              I am a Korean-English Bilingual Speech Language Pathologist,
              licensed in New York since 2019. I'm currently working at the DoE
              to provide bilingual speech-language services. I also consult as a
              Product Advisor for{" "}
              <a
                className={styles.plosiveLink}
                href="https://plosive.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plosive
              </a>
              , an online productivity platform for SLPs.
            </p>
            {/* <p>
              I provide bilingual speech-language services with the
              NYC Department of Education. My passion lies in helping my
              students to realize their potential. I am learning every day, in
              ways I can fine tune my clinical skills, Korean speaking
              abilities, and more.  
            </p> */}
            <p>
              Previously, I’ve worked at public charter schools in Harlem,
              adapting quickly to manage caseloads of upwards to 65+ students
              and strategically leveraging available resources. I’ve also worked
              with patients at various skilled nursing facilities, who presented
              with dysphagia, dysarthria, aphasia, dysphonia, dementia, etc.
            </p>

            <p>
              <span className={styles.italicAndBold}>
                I am not taking private clients at this time.
              </span>{" "}
              <span className={`italic bold underline font-size-large`}>
                I am not taking private clients at this time.
              </span>{" "}
              If you&apos;re looking to connect with a bilingual Korean-English
              SLP, please post an inquiry on{" "}
              <a
                href="https://www.facebook.com/groups/koreanslps"
                target="_blank"
                className={styles.plosiveLink}
              >
                the Korean Speech-Language Pathologists Facebook page
              </a>
              . For other career-related or personal inquiries, please feel free
              to contact me via email.
            </p>

            {/* <p>I run an online Facebook group </p> */}
            <div style={{ marginBottom: "20px" }} />
            <div className={styles.tryptech}>
              <div>
                <span>CONTACT</span>
                <ul>
                  {/* <li>Blog</li> */}
                  <li style={{ position: "relative" }}>
                    <CopyToClipboard
                      text="heatherpark.slp@gmail.com"
                      onCopy={() => setCopied(true)}
                    >
                      <span>heatherpark.slp@gmail.com</span>
                    </CopyToClipboard>

                    {copied && (
                      <span
                        className={`animate__animated animate__fadeOut ${styles.copied}`}
                      >
                        Copied!
                      </span>
                    )}
                  </li>
                  {/* <li>Newsletter</li> */}
                </ul>
              </div>
              <div>
                <span>SOCIALS</span>
                <ul>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.youtube.com/channel/UCGPR3_7W3ZEtf2SB_dZjRRg"
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.facebook.com/groups/koreanslps"
                    >
                      Korean SLPs @ Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.instagram.com/thekoreanslp/"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/in/heather-park-0696ab136/"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.tryptechElementFull}>
                <span>Resources</span>
                <ul>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.teacherspayteachers.com/Product/Tips-For-Tots-Encouraging-Your-Children-to-Talk-6526232"
                    >
                      <span className={styles.tag}>FREE</span>
                      Tips For Tots: Encouraging Your Children To Talk
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.teacherspayteachers.com/Product/FREEBIE-National-Literacy-Month-Calendar-2020-6133556"
                    >
                      <span className={styles.tag}>FREE</span>National Literacy
                      Month - November Activities Calendar 2020
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://plosive.app"
                    >
                      <span className={styles.tagPaid}>PAID</span>
                      Plosive - A Modern, AI-Assisted Productivity Platform for
                      School-Based SLPs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ marginBottom: "30px" }} />
            {/* <blockquote>
              Making effective communication, a human right, accessible and
              achievable for all.
              <span>- ASHA</span>
            </blockquote> */}
            <small>© {currentYear} Heather Park</small>
          </div>
        </div>
      </main>
    </>
  )
}
