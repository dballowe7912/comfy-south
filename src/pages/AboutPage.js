import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>Excepteur eu ullamco quis labore est laboris cupidatat ad non minim fugiat. Amet exercitation cupidatat culpa ad aliquip qui qui ut fugiat id. Nulla voluptate consectetur occaecat tempor irure. Reprehenderit mollit ipsum ullamco ullamco reprehenderit in nulla id dolor incididunt exercitation magna cillum. Id enim magna cupidatat ea voluptate pariatur eiusmod velit minim reprehenderit qui. Commodo laboris incididunt voluptate adipisicing irure. Do sint duis excepteur ex dolor elit fugiat pariatur eiusmod non quis quis minim.</p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
