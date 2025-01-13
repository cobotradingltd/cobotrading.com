import { type Metadata } from 'next'

import { ContactSection } from '@/components/sections/ContactSection'
import { Container } from '@/components/layout/Container'
import { FadeIn } from '@/components/animations/FadeIn'
import { GridList, GridListItem } from '@/components/ui/GridList'
import { GridPattern } from '@/components/common/GridPattern'
import { List, ListItem } from '@/components/ui/List'
import { PageIntro } from '@/components/sections/PageIntro'
import { SectionIntro } from '@/components/sections/SectionIntro'
import { StylizedImage } from '@/components/common/StylizedImage'
import imageExpress from '@/images/express.webp'
import imageVendor from '@/images/vendor.webp'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function UnderstandingYourNeeds() {
  return (
    <Section title="Understanding Your Needs" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our process begins with a deep understanding of your business and product requirements. We collaborate closely with you to define the specifics of your order, including product types, quantities, and any particular quality or sourcing criteria.
        </p>
        <p>
          This is crucial for tailoring the most effective solution and ensuring that we meet your expectations every step of the way.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Initial Consultation">
          We hold an in-depth meeting to discuss your business needs and goals, ensuring that we understand your specific requirements.
        </ListItem>
        <ListItem title="Product Specification">
          Our team works with you to define product types, materials, specifications, and any custom requirements, ensuring the final product aligns with your vision.
        </ListItem>
        <ListItem title="Market Research">
          Based on your needs, we conduct thorough research into the best suppliers and manufacturers who can deliver high-quality products at competitive prices.
        </ListItem>
      </List>
    </Section>
  )
}

function VendorSourcingAndCoordination() {
  return (
    <Section title="Vendor Sourcing & Coordination" image={{ src: imageVendor, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Once we understand your needs, we move to the next stage—vendor sourcing and coordination. This is where COBO TRADING leverages our extensive network of trusted global suppliers to identify the right manufacturers that can deliver the quality and quantity you require.
        </p>
        <p>
          We handle the entire procurement process, from supplier negotiations to quality checks, ensuring a smooth, hassle-free experience.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Supplier Selection">
          We select the best suppliers based on product quality, pricing, and delivery capabilities. Our global network spans multiple regions, including Europe, Asia, and North America.
        </ListItem>
        <ListItem title="Vendor Negotiations">
          We negotiate favorable terms with suppliers to ensure competitive pricing, reliable delivery schedules, and high-quality standards.
        </ListItem>
        <ListItem title="Quality Control">
          Before finalizing any order, we conduct thorough quality checks on sample products to ensure that they meet your specifications. Our team inspects both product quality and packaging to ensure everything is in order.
        </ListItem>
        <ListItem title="Production & Customization">
          If your order involves customized products, we oversee the production process to ensure that every detail meets your requirements. This includes regular updates and coordination with the supplier to ensure that production timelines are met.
        </ListItem>
      </List>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageExpress, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Once your products are ready, we move to the final stage—shipping and delivery. COBO TRADING handles all logistics, ensuring that your order reaches you on time and in perfect condition.
        </p>
        <p>
          Whether it’s air, sea, or land freight, we select the best shipping method based on your delivery time requirements and product type, managing every aspect of the process from warehouse to final destination.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Logistics Planning">
          We assess the most efficient shipping methods based on your timeline and the nature of your products. This could include air freight for fast delivery or sea freight for larger, bulk shipments.
        </ListItem>
        <ListItem title="Customs Handling">
          We manage all customs documentation and duties to ensure that your order moves smoothly through international borders, preventing any delays.
        </ListItem>
        <ListItem title="Packaging & Shipping">
          Our team works with trusted logistics partners to package your goods safely, ensuring that they arrive intact. We track the shipment and keep you informed about its status every step of the way.
        </ListItem>
        <ListItem title="Final Delivery">
          Once the goods arrive at the destination, we ensure the smooth delivery to your warehouse or store, coordinating with local distribution teams if necessary.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="The foundation of everything we do"
      >
        <p>
          At COBO TRADING, our values guide our decisions, shape our partnerships, and drive us to deliver exceptional results for our clients. We believe that adhering to these principles ensures not only successful outcomes but also lasting relationships built on trust and integrity.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Customer-Centric Approach">
            We prioritize our clients’ needs above all else, ensuring that every solution we offer is tailored to meet their specific goals. Your success is our success, and we are committed to providing the best service and support throughout every stage of our collaboration.
          </GridListItem>
          <GridListItem title="Integrity and Transparency">
            Honesty and openness are at the heart of our business practices. We maintain clear communication, set realistic expectations, and deliver on our promises. Trust is the cornerstone of our relationships, and we strive to earn and keep it with every interaction.
          </GridListItem>
          <GridListItem title="Excellence in Execution">
            We are dedicated to delivering high-quality solutions with precision and efficiency. From sourcing to logistics, we pay attention to every detail, ensuring that our clients receive exceptional service and products that meet the highest standards.
          </GridListItem>
          <GridListItem title="Innovation and Adaptability">
            In an ever-changing global market, we embrace innovation and flexibility. We continuously seek out new ways to improve our processes, adopt cutting-edge technologies, and stay ahead of industry trends to provide the most effective solutions.
          </GridListItem>
          <GridListItem title="Global Reach, Local Expertise">
            Our extensive global network allows us to connect clients with the best suppliers worldwide. At the same time, we leverage local market knowledge to navigate regional complexities, ensuring smooth and successful transactions across borders.
          </GridListItem>
          <GridListItem title="Sustainability and Responsibility">
            We are committed to ethical business practices and sustainability. We work with partners who share our commitment to environmental responsibility and fair labor practices, ensuring that our operations contribute positively to the global community.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We focus on providing seamless B2B trade solutions by understanding your unique requirements, sourcing the best products from global suppliers, and ensuring timely delivery. Our proven process is designed to ensure transparency, efficiency, and quality at every stage.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <UnderstandingYourNeeds />
        <VendorSourcingAndCoordination />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
