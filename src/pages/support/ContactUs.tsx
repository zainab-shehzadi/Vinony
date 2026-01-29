import ContactForm from "@/components/contactUs/ContactForm";
import ContactInfoPanel from "@/components/contactUs/ContactInfoPanel";
import VinonyFaq from "@/components/contactUs/VinonyFaq";
import type { ContactSchemaValues } from "@/components/validations/contact.schema";
import { CONTACT_INFO } from "@/constants/contact";


export default function ContactUs() {
  const handleSubmit = async (values: ContactSchemaValues) => {
    console.log("Contact submit:", values);
    await new Promise((r) => setTimeout(r, 500));
  };

  return (
    <div className="w-full">
      <div className="px-6 md:px-10 xl:px-20 pt-10 md:pt-20 xl:pt-32 md:pb-10">
        <div className="text-center">
          <h1 className="text-[30px] font-extrabold leading-[1.05] text-gray-900 dark:text-white md:text-6xl xl:text-[64px]">
            Contact <span className="text-primary">Us</span>
          </h1>

          <p className="mx-auto mt-2 max-w-3xl text-base font-medium leading-7 text-gray-900 dark:text-accent md:mt-6 md:text-[20px] lg:mt-8 lg:text-[24px]">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        <div className="mt-4 rounded-2xl bg-white dark:bg-primary/10 shadow-[0_0px_10px_rgba(0,0,0,0.10)] md:mt-10 lg:mt-12 ">
          <div className="grid overflow-hidden rounded-2xl md:grid-cols-12">
            <div className="md:col-span-5 p-2 lg:p-4 ">
              <ContactInfoPanel info={CONTACT_INFO} ballsImageSrc="/ball.png" />
            </div>

            <div className="md:col-span-7 md:p-0 lg:p-8">
              <ContactForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
        <div className="lg:pt-10">
          <VinonyFaq />
        </div>
      </div>
    </div>
  );
}
