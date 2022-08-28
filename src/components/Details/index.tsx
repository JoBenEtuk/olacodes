import Footer from '@/layouts/Footer'
import { works } from '@/mocks'
import { slugify } from '@/utils/slug.utils'
import * as React from 'react'
import { useEffect, useState } from 'react'
import * as S from './Details.module.scss'

const Details = ({ slug }: { slug: string }) => {
  const [work, setWork] = useState<any>(null)

  useEffect(() => {
    setWork(works.filter(work => slugify(work.name) === slug)[0])
  }, [works])
  console.log(work)
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
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Details
