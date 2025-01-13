import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/ui/Border'
import { ContactSection } from '@/components/sections/ContactSection'
import { Container } from '@/components/layout/Container'
import { FadeIn, FadeInStagger } from '@/components/animations/FadeIn'
import { GridList, GridListItem } from '@/components/ui/GridList'
import { PageIntro } from '@/components/sections/PageIntro'
import { PageLinks } from '@/components/sections/PageLinks'
import { SectionIntro } from '@/components/sections/SectionIntro'
import { StatList, StatListItem } from '@/components/sections/StatList'
import imageCocoXia from '@/images/team/coco-xia.webp'
import imageDieboldDai from '@/images/team/diebold-dai.webp'
import imageSkylerZhao from '@/images/team/skyler-zhao.webp'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Why choose COBO TRADING?"
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Global Network" invert>
            We leverage a vast network of trusted suppliers and logistics partners, allowing us to source and deliver a wide range of products efficiently and reliably.
          </GridListItem>
          <GridListItem title="Tailored Solutions" invert>
             We understand that every business is unique, and we work closely with each client to craft solutions that meet their specific needs and objectives.
          </GridListItem>
          <GridListItem title="Commitment to Excellence" invert>
            From sourcing to delivery, we uphold the highest standards of quality, transparency, and customer satisfaction.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Skyler Zhao',
        role: 'Co-Founder / CEO',
        image: { src: imageSkylerZhao },
      },
      {
        name: 'Diebold Dai',
        role: 'Co-Founder / CTO',
        image: { src: imageDieboldDai },
      },
      {
        name: 'Sophia Xia',
        role: 'Co-Founder / CFO',
        image: { src: imageCocoXia },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'At COBO TRADING, we are more than a trading company - we are a global partner dedicated to unlocking new business opportunities for our clients.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Your global partner in excellence and innovation.">    
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            At COBO TRADING, we are more than a trading company—we are a global partner dedicated to unlocking new business opportunities for our clients.
          </p>
          <p>
            Born from a shared passion for international trade and innovation, COBO TRADING was established to bridge the gap between businesses and the world’s best suppliers. Today, COBO TRADING stands as a testament to that vision, delivering customized solutions that meet the diverse needs of our global clientele.
          </p>
          <p>
            Founded by a visionary team of three co-founders, our mission is to provide seamless, high-quality B2B trade solutions that empower businesses to thrive in an ever-evolving global market.
          </p>
        </div>
      </PageIntro>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Stay informed and inspired with the latest insights from the world of global trade. Our blog covers industry trends, expert tips, and innovative strategies to help businesses thrive in the competitive B2B landscape. Whether you’re looking for market updates, supply chain solutions, or trade best practices, we’ve got you covered."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
