import React from 'react'
import Layout from '../../components/GuidelinesLayout'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import * as Styles from './styles.module.scss'

const IndexPage = (props) => (
  <Layout>
    <div className={Styles.page}>
      <div className="container">
        <section className={Styles.section}>
          <div className={Styles.texts}>
            <GatsbyImage
              image={props.data.imageFirst.childImageSharp.gatsbyImageData}
              className={Styles.logo}
              alt="sosc logo"
            />
            <p className={Styles.mainHeader}>Community Guidelines</p>
            <p>
              Welcome to Sahyadri Open-Source Community, We are a community of
              tech enthusiasts working hard to spread knowledge and strengthen
              the collaborative culture among the young minds. SOSC was born
              through the convergence of Technical clubs at Sahyadri, namely,
              Mozilla Campus Club, Developer Students Club and some aspiring
              individuals who are keen to share their knowledge for the
              community.
            </p>
            <p>
              As the name suggests, SOSC is a community. Whenever you talk, post
              or reply, there are other people hearing you or sitting behind the
              screen reading what you say. These other people have thoughts,
              ideas, dreams, aspirations, troubles, advice, perspectives,
              feelings, and experiences, just like you. You'll probably end up
              meeting a lot of them if you volunteer or participate in events
              like Hackathons or conferences. Everyone in this group and people
              you meet through the community events are a potential new friend
              -treat them that way.
            </p>
            <p>
              This document aims to make SOSC a place for everyone to feel
              welcome. The rules, guidelines, and code of conduct that follow
              apply to all the Core Members, volunteers and participants,
              although subgroups may also extend these to better serve their own
              community. This isn't an exhaustive list of things that you can't
              do. Rather, take it in the spirit in which it's intended — a guide
              to make it easier to be excellent to each other. We expect it to
              be followed in spirit as much as in the letter.
            </p>
            <div className={Styles.texts}>
              <p className={Styles.header}>Be considerate</p>
              <div className="dash" />
              <p>
                SOSC is a conglomeration of clubs and individuals who contribute
                to the community by helping us conduct events and activities.
                there are numerous clubs and experts who help shape the
                community to be pro-active. Mozilla Campus Clubs, Developer
                Students clubs, and the GitHub Campus Expert are to name a few.
              </p>
            </div>
            <div className={Styles.texts}>
              <p className={Styles.header}>Be respectful</p>
              <div className="dash" />
              <p>
                Not all of us will agree all the time, but disagreement is no
                excuse for poor behavior and poor manners. We might all
                experience some frustration now and then, but we cannot allow
                that frustration to turn into a personal attack. It's important
                to remember that a community where people feel uncomfortable or
                threatened is not a productive one. We expect members of the
                Sahyadri Open-Source Community to be respectful when
                communicating with other community members, as well as with
                people outside SOSC.
              </p>
            </div>
            <div className={Styles.texts}>
              <p className={Styles.header}>Be Collaborative</p>
              <div className="dash" />
              <p>
                What we produce is a complex whole made of many parts, it is the
                sum of many dreams. Collaboration between teams that each have
                their own goal and vision is essential; for the whole to be more
                than the sum of its parts, each part must make an effort to
                understand the whole.
              </p>
              <div>
                Collaboration reduces redundancy and improves the quality of our
                work. Internally and externally, we celebrate good
                collaboration. Wherever possible, we work closely with{' '}
                <a
                  className={Styles.link}
                  target="_blank"
                  href="https://sahyadri.edu.in/"
                >
                  Sahyadri College of Engineering
                </a>{' '}
                and other startups and communities with the open-source and
                non-profit motto to coordinate our efforts. We prefer to work
                transparently and involve interested parties as early as
                possible.
              </div>
            </div>
            <div className={Styles.texts}>
              <p className={Styles.header}>Be nice and Do not harass others</p>
              <div className="dash" />
              <p>
                Everyone in this community should feel welcome, regardless of
                their background. Please be courteous, respectful and polite to
                fellow community members. Any complaints regrading any of the
                following will be taken seriously and may result in removing
                from the community/Event. <br />
                Harassment includes:
              </p>
              <ul className={Styles.list}>
                <li>
                  Offensive comments related to gender, gender identity and
                  expression, sexual orientation, disability, mental illness,
                  physical appearance, body size, race, or religion.
                </li>
                <li>
                  Gratuitous or off-topic sexual images or behaviour in spaces
                  where they&apos;re not appropriate.
                </li>
                <li>
                  Physical contact and simulated physical contact through texts
                  without consent or after a request to stop.
                </li>
                <li>Threats of violence.</li>
                <li>
                  Incitement of violence towards any individual, including
                  encouraging a person to commit suicide or to engage in
                  self-harm.
                </li>
                <li>Deliberate intimidation.</li>
                <li>Stalking or Following.</li>
                <li>
                  Harassing photography or recording, including logging online
                  activity for harassment purposes.
                </li>
                <li>Sustained disruption of discussion.</li>
                <li>
                  Unwelcome sexual attention. <br /> ie. Meetup organizing
                  members and other volunteer members should not use sexualized
                  clothing/uniforms/costumes, or otherwise create a sexualized
                  environment.
                </li>
                <li>
                  Pattern of inappropriate social contact, such as
                  requesting/assuming inappropriate levels of intimacy with
                  others.
                </li>
              </ul>
              <div>
                <p>
                  If asked to stop any harassing behavior, you are expected to
                  comply immediately. If a participant/member engages in
                  harassing behavior, the meetup organizers may take any action
                  they deem appropriate, including warning the offender or
                  expulsion from the event.
                </p>
                <p>
                  If you are being harassed, notice that someone else is being
                  harassed, or have any other concerns, please follow the
                  directions in the "Contact us" section, at the end of this
                  document.
                </p>
                <p>
                  Organizers will be happy to help participants/members contact
                  security or local law enforcement, provide escorts to an
                  alternate location, or otherwise assist those experiencing
                  harassment to feel safe for the duration of the meetup. We
                  value your attendance.
                </p>
              </div>
              <p>
                We expect participants to follow these rules at our all of our
                event venues and event-related social events.
              </p>
            </div>
            <div className={Styles.texts}>
              <p className={Styles.header}>Communicate effectively</p>
              <div className="dash" />
              <p>
                We don't all speak the same language at the same skill level.
                Clear communication can help to avoid misunderstandings, as can
                remembering that our interpretations of words can be different
                depending on our backgrounds. Having context is important. It's
                better to ask for clarification than to make assumptions.
                Disagreements, social and technical, are normal, but we expect
                members in the community to resolve disagreements constructively
                — so please avoid flamewars, trolling, personal attacks, and
                repetitive arguments.
              </p>
            </div>
            <div className={Styles.texts}>
              <p className={Styles.header}>Unaffilated Promotions</p>
              <div className="dash" />
              <p>
                Any promotions which are not directly affiliated to the
                community should be completely avoided, if found continuing even
                after asked to stop may result in removal from the
                event/community. All the
                members/organizers/sponsors/participants shall ask permission
                with concerned people mentioned at the end of the document to
                carry-out any promotions within the community discussion rooms
                or events.
              </p>
            </div>
            <div className={Styles.texts}>
              <p className={Styles.header}>Violating the code of conduct</p>
              <div className="dash" />
              <p>
                If any member breaks the code of conduct of SOSC, Community
                leads will take the decision and they will be out of community
                activities For 6 months But if community leads decide the
                situation mistake made by someone is bad He will be removed from
                the community.{' '}
              </p>
            </div>
            <a className={Styles.license}>
              The Sahyadri Open-Source Community Code of Conduct is licensed
              under the{' '}
              <a
                className={Styles.link}
                href="https://creativecommons.org/licenses/by-sa/3.0/"
                target="_blank"
              >
                Creative Commons Attribution-Share Alike 3.0 license
              </a>
              . Our Code of Conduct was inspired by and borrows content from
              Codes of Conduct of other open source projects including{' '}
              <a
                className={Styles.link}
                href="https://github.com/zatech/code-of-conduct"
                target="_blank"
              >
                zatech
              </a>
              ,{' '}
              <a
                className={Styles.link}
                href="https://ubuntu.com/community/ethos/code-of-conduct"
                target="_blank"
              >
                Ubuntu
              </a>{' '}
              and the{' '}
              <a
                className={Styles.link}
                href="https://www.elastic.co/community/codeofconduct"
                target="_blank"
              >
                elastic community
              </a>
              .
            </a>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export const firstSiteImages = graphql`
  fragment firstSiteImages on File {
    childImageSharp {
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
  }
`

export const pageQuery = graphql`
  query {
    imageFirst: file(relativePath: { eq: "images/logo_grad.png" }) {
      ...firstSiteImages
    }
  }
`

export default IndexPage
