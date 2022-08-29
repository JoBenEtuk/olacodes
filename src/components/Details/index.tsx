/* eslint-disable @typescript-eslint/no-explicit-any */
import Footer from '@/layouts/Footer'
import { works, IWork } from '@/mocks'
import { slugify } from '@/utils/slug.utils'
import { Link } from 'gatsby'
import * as React from 'react'
import { useEffect, useState } from 'react'
import * as S from './Details.module.scss'

const Details = ({ slug }: { slug: string }) => {
  const [work, setWork] = useState<IWork>(null)
  const [pageIndex, setPageIndex] = useState<number>(null)

  useEffect(() => {
    setWork(works.filter(work => slugify(work.name) === slug)[0])
  }, [works])

  useEffect(() => {
    setPageIndex(works.indexOf(work))
  }, [work])

  if (!work) return null

  return (
    <>
      <section className={S.details}>
        <div className={S.details__wrapper}>
          <div className={S.details__top}>
            <div>
              <dl>
                <dt>Role</dt>
                {work.role.map((role, i) => (
                  <dd key={i}>{role}</dd>
                ))}
              </dl>
              <dl>
                <dt>Type</dt>
                {work.type.map((type, i) => (
                  <dd key={i}>{type}</dd>
                ))}
              </dl>
              <dl>
                <dt>Link</dt>
                <dd>
                  <a href={work.link}>Visit Website</a>
                </dd>
              </dl>
            </div>
          </div>

          <div className={S.details__section1}>
            <small>{work.date}</small>
            <h1>{work.name}</h1>
            <p>{work.description}</p>
            <img src={work.identityImages[0]} alt={work.name} />

            <div className={S.details__section2}>
              <div className={S.section}>
                <h4>Challenge.</h4>
                <p>{work.challenge}</p>
              </div>
              <div className={S.section}>
                <h4>Solution.</h4>
                <p>{work.solution}</p>
              </div>
              <div className={S.section}>
                <h4>Collaborators.</h4>
                {work.collaborators.map((collaborator, index) => (
                  <p key={index}>{collaborator}</p>
                ))}
              </div>
            </div>
          </div>

          <div className={S.details__section2}>
            <div className={S.section}>
              <h4>Brand identity.</h4>
              <p>{work.identity}</p>
            </div>

            <div className={S.details__section2__images}>
              {work.identityImages
                .filter((image, index) => index !== 3)
                .map((image, index) => (
                  <img src={image} alt='' key={index} />
                ))}
            </div>

            <h2>{work.identityText}</h2>

            {work.identityImages
              .filter((image, index) => index === 3)
              .map((image, index) => (
                <img src={image} alt='' key={index} />
              ))}
          </div>

          <div className={S.details__section3}>
            <div className={S.section}>
              <h4>Typography.</h4>
              <p>{work.typography}</p>
            </div>
            <div className={S.section}>
              <h4>Color.</h4>
              <p>{work.color}</p>
            </div>

            <img src={work.styleGuide} alt='styleguide' />
          </div>

          <div className={S.details__section4}>
            <div className={S.section}>
              <h4>Web Design.</h4>
              <p>{work.webDesign}</p>
            </div>

            <div className={S.details__section4__gallery}>
              {work.websiteImages.map((image, index) => (
                <img src={image} alt='' key={index} />
              ))}
            </div>
          </div>

          <div className={S.details__section5}>
            <div className={S.section}>
              <h4>Conclusion.</h4>
              <p>{work.conclusion}</p>
            </div>
          </div>

          {pageIndex >= 0 && works[pageIndex + 1] && (
            <div className={S.details__section6}>
              <h3>Other Projects</h3>

              <div className={S.details__section6__works}>
                {works[pageIndex + 1] && (
                  <Link to={`/works/${slugify(works[pageIndex + 1].name)}`}>
                    <img src={works[pageIndex + 1].showImage} alt='' />
                    <div>
                      <p>Branding - Design</p>
                      <p>&copy;{works[pageIndex + 1].copyright}</p>
                    </div>
                    <h2>{works[pageIndex + 1].name}</h2>
                  </Link>
                )}
                {works[pageIndex + 2] && (
                  <Link to={`/works/${slugify(works[pageIndex + 2].name)}`}>
                    <img src={works[pageIndex + 2].showImage} alt='' />
                    <div>
                      <p>Branding - Design</p>
                      <p>&copy;{works[pageIndex + 2].copyright}</p>
                    </div>
                    <h2>{works[pageIndex + 2].name}</h2>
                  </Link>
                )}
                {works[pageIndex + 3] && (
                  <Link to={`/works/${slugify(works[pageIndex + 3].name)}`}>
                    <img src={works[pageIndex + 3].showImage} alt='' />
                    <div>
                      <p>Branding - Design</p>
                      <p>&copy;{works[pageIndex + 3].copyright}</p>
                    </div>
                    <h2>{works[pageIndex + 3].name}</h2>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Details
