import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/sections/ContactSection'
import { Container } from '@/components/layout/Container'
import { FadeIn, FadeInStagger } from '@/components/animations/FadeIn'
import { List, ListItem } from '@/components/ui/List'
import { SectionIntro } from '@/components/sections/SectionIntro'
import { StylizedImage } from '@/components/common/StylizedImage'
import { Testimonial } from '@/components/sections/Testimonial'
import logoMordicInnovationsDark from '@/images/clients/mordic-innovations/logo-dark.svg'
import imageFeatures from '@/images/features.webp'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { clients } from '@/lib/clients'


function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.light.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Tailored trading solutions for every industry."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          At COBO TRADING, we pride ourselves on delivering exceptional B2B trade solutions that drive success for our clients across various industries.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Features() {
  return (
    <>
      <SectionIntro
        eyebrow="Features"
        title="We offer comprehensive support for your global trade ventures."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          With a global perspective, we understand market demands and industry trends, delivering tailored products and services that meet the needs of our clients.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageFeatures}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Full-Range Product Offering">
              COBO TRADING deals with a wide variety of product categories, including but not limited to intimate apparel, home goods, electronics, and more. Our broad supplier network allows us to provide a diverse range of products to meet the needs of different industries and markets.
            </ListItem>
            <ListItem title="Strong Supply Chain Management">
              We have established strong partnerships with international suppliers and manufacturers, ensuring high-quality and timely product delivery. With our experience in logistics and warehousing, we can guarantee that products reach global markets safely and on time.
            </ListItem>
            <ListItem title="Cross-Cultural Communication">
              Our team is culturally diverse and proficient in multiple languages, including English and Chinese. This enables us to communicate effectively with clients around the world and understand regional market demands, providing products and services that cater to local preferences and cultural nuances.
            </ListItem>
            <ListItem title="Tailored Solutions for Clients">
              We understand that every client has unique needs. That's why we offer customized trade solutions. Whether it’s product design, packaging, logistics, or market entry strategies, we provide flexible solutions that are tailored to each client’s specific requirements, ensuring the best possible business outcomes.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a professional trading company specializing in B2B solutions. We deliver exceptional services and products tailored to meet the needs of businesses worldwide. Partner with us for efficient, reliable, and innovative cross-border trading experiences.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-2xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Professional trading company based in Hong Kong.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a professional trading company specializing in B2B solutions. We deliver exceptional services and products tailored to meet the needs of businesses worldwide. Partner with us for efficient, reliable, and innovative cross-border trading experiences.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <Features />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Mordic Innovations', logo: logoMordicInnovationsDark }}
      >
        Working with COBO TRADING has greatly improved our business. They supplied high-quality home decor and office furniture while streamlining our supply chain, ensuring on-time delivery ahead of schedule.
      </Testimonial>

      <CaseStudies caseStudies={caseStudies} />

      <ContactSection />
    </>
  )
}
