import { HeroProps } from "./hero"
import { FeatureListProps } from "./feature-list"
import { LogoListProps } from "./logo-list"
import { BenefitListProps } from "./benefit-list"
import { TestimonialListProps } from "./testimonial-list"
import { StatListProps } from "./stat-list"
import { CtaProps } from "./cta"
import { ProductListProps } from "./product-list"
import { MapYandexProps } from "./map-yandex"
import { PromoProps } from "./promo"
//import { AboutProps } from "./about"
import { ClientListProps } from "./client-list"


import { AboutHeroProps } from "./about-hero"
import { AboutStatListProps } from "./about-stat-list"
import { AboutLeadershipProps } from "./about-leadership"
import { AboutLogoListProps } from "./about-logo-list"

export { default as HomepageHero } from "./hero"
export { default as HomepageFeatureList } from "./feature-list"
export { default as HomepageLogoList } from "./logo-list"
export { default as HomepageBenefitList } from "./benefit-list"
export { default as HomepageTestimonialList } from "./testimonial-list"
export { default as HomepageStatList } from "./stat-list"
export { default as HomepageCta } from "./cta"
export { default as HomepageProductList } from "./product-list"
export { default as AboutHero } from "./about-hero"
export { default as AboutStatList } from "./about-stat-list"
export { default as AboutLeadership } from "./about-leadership"
export { default as AboutLogoList } from "./about-logo-list"
export { default as MapYandex } from "./map-yandex"
export { default as HomepagePromo } from "./promo"
export { default as HomepageAbout } from "./about"
export { default as HomepageClientList } from "./client-list"

export type SectionProps =
  | HeroProps
  | FeatureListProps
  | LogoListProps
  | BenefitListProps
  | TestimonialListProps
  | StatListProps
  | CtaProps
  | ProductListProps
  | AboutHeroProps
  | AboutStatListProps
  | AboutLeadershipProps
  | AboutLogoListProps
  | MapYandexProps
  | PromoProps
  | ClientListProps
  // | AboutProps

type Blocktypes =
  | "HomepageHero"
  | "HomepageFeatureList"
  | "HomepageLogoList"
  | "HomepageBenefitList"
  | "HomepageTestimonialList"
  | "HomepageStatList"
  | "HomepageCta"
  | "HomepageProductList"
  | "AboutHero"
  | "AboutStatList"
  | "AboutLeadership"
  | "AboutLogoList"
  | "MapYandex"
  | "HomepagePromo"
  | "HomepageClientList"
  // | "HomepageAbout"

type WithBlocktype<B = Blocktypes, P = SectionProps> = {
  id: string
  blocktype: B
} & P

export type HomepageBlock =
  | WithBlocktype<"HomepageHero", HeroProps>
  | WithBlocktype<"HomepageFeatureList", FeatureListProps>
  | WithBlocktype<"HomepageLogoList", LogoListProps>
  | WithBlocktype<"HomepageBenefitList", BenefitListProps>
  | WithBlocktype<"HomepageTestimonialList", TestimonialListProps>
  | WithBlocktype<"HomepageStatList", StatListProps>
  | WithBlocktype<"HomepageCta", CtaProps>
  | WithBlocktype<"HomepageProductList", ProductListProps>
  | WithBlocktype<"AboutHero", AboutHeroProps>
  | WithBlocktype<"AboutStatList", AboutStatListProps>
  | WithBlocktype<"AboutLeadership", AboutLeadershipProps>
  | WithBlocktype<"AboutLogoList", AboutLogoListProps>
  | WithBlocktype<"MapYandex", MapYandexProps>
  | WithBlocktype<"HomepagePromo", PromoProps>
  | WithBlocktype<"HomepageClientList", ClientListProps>
  // | WithBlocktype<"HomepageAbout", AboutProps>
