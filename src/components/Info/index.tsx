/* eslint-disable quotes */
import Footer from '@/layouts/Footer'
import * as React from 'react'
import * as S from './Info.module.scss'

const Info = () => {
  const list = [
    {
      title: 'Identify',
      description:
        "I start with identifying and specifying all components of the project. This process entails examining the client's purpose and requirements, developing user personas, researching competitors and the market, etc.",
    },
    {
      title: 'Design',
      description:
        "I begin to envision the project's visual story. I begin by planning, researching and designing concepts that will aid in the creation of a pleasurable and easy-to-use interface and experience that functions as a problem solver.",
    },
    {
      title: 'Deliver',
      description:
        'When the design is accepted and approved by the client at the conclusion of the project, I collaborate with developers to ensure that reality fits the concept/idea.',
    },
  ]
  return (
    <>
      <section className={S.info}>
        <div className={S.info__wrapper}>
          <header className={S.info__header}>
            <h1>
              <span>Olanrewaju</span>
              <span>
                <small>Info</small> Olaniyi
              </span>
            </h1>
          </header>

          <div className={S.info__description}>
            <p>
              I am is a user interface designer working with agencies and startups
              worldwide to tackle complex projects. Having collaborated with clients,
              Olacodes knows what it’s like to create, design and develop complex user
              interfaces.
              <br />
              <br />
              Combining aesthetics and usefulness, I create solid user interfaces in an
              artistic way. I love to spend time improving the aesthetics of digital
              products without forgetting about usability. I&apos;m currently working with
              the fine folks at <a>The Sole Company</a>.
            </p>
          </div>

          <div className={S.info__process}>
            <h2>My Process</h2>
            <p>Things I consider when I’m designing</p>

            <div className={S.info__process__items}>
              {list.map(({ title, description }, index) => (
                <div key={title} className={S.info__process__item}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Info
