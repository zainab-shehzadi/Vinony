
import SectionHero from "@/components/common/section-hero/SectionHero";
import SectionHeading from "@/components/common/SectionHeading";
import VinonyFaq from "@/components/contactUs/VinonyFaq";
import CtaBanner from "@/components/landingPage/CtaBanner";
import GetStartedSection from "@/components/landingPage/GetStarted/GetStartedShowcase";
import GetStartedPreview from "@/components/landingPage/GetStartedPreview";
import GuaranteeStrip from "@/components/landingPage/guarantee-strip/GuaranteeStrip";
import HowItWorksCard from "@/components/landingPage/HowItWork/HowItWorksCard";
import LeadingAiProviders from "@/components/landingPage/LeadingAiProviders";
import ModelShowcaseList from "@/components/landingPage/ModelShowcase/ModelShowcaseList";
import ModelsShowcase from "@/components/landingPage/ModelShowcase/ModelsShowcase";

import ModelsMarquee from "@/components/landingPage/ModelsMarquee";

import TestimonialsSection from "@/components/landingPage/TestimonialSection/TestimonialsSection";
import { HOW_IT_WORKS } from "@/constants/landingPage";
import { DEFAULT_MODELS_MARQUEE } from "@/constants/model";
import { MODEL_SHOWCASE } from "@/constants/modelShowcase";
import Container from "@/lib/Container";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <Container>
        <SectionHero
          variant="heroB"
          titleParts={[
            { type: "text", value: "All " },
            { type: "highlight", value: "AI Models" },
            { type: "text", value: ".\nOne Subscription." },
          ]}

          subtitle="Access 100+ chat, image, video, and AI agent tools, without juggling multiple subscriptions."
        />
        <GetStartedPreview
          imageSrc="/overlay-bg.svg"
          darkimgSrc="/darkbg.svg"
          onGetStarted={() => navigate("/login")}
        />

      </Container>
      <LeadingAiProviders />
      <ModelsMarquee
        items={DEFAULT_MODELS_MARQUEE}
        defaultActiveId="claude-sonnet"
        onSelect={(item) => {
          console.log("Selected:", item);
        }}
        speedSeconds={16}
        pauseOnHover
      />
      <Container>
        <ModelShowcaseList
          items={MODEL_SHOWCASE}
          onExplore={(id) => console.log("Explore:", id)}
        />
      </Container>

      <div className="lg:pt-10 xl:pt-16">
        <ModelsShowcase onCtaClick={() => navigate("/ai-models")} />;
      </div>

      <Container>
        <div className="mb-10 text-center sm:mb-12">
          <SectionHeading
            eyebrow="HOW VINONY WORKS "
            title="All AI Models Available for Creators"
          />
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {HOW_IT_WORKS.map((item) => (
            <HowItWorksCard
              key={item.title}
              title={item.title}
              description={item.description}
              iconSrc={item.iconSrc}
              iconAlt={item.title}
            />
          ))}
        </div>
        <div className="xl:pt-14">

          <GetStartedSection imageSrc="/model.png"
            eyebrow="Get Started With Vinony"
            title={
              <>
                Experience All Models <br className="hidden sm:block" />
                of AI
              </>
            }

            description="Based on the conversation with the AI chatbot, you will receive personalized recommendations." />
        </div>
        <GuaranteeStrip />
        <TestimonialsSection />

        <VinonyFaq />
        <CtaBanner />
      </Container>

    </div>

  );
}
