import Container from "@/components/ui/container";
import Layout from "@/components/layout/layout";
import PageHeader from "@/components/ui/page-header";
import ContactForm from "@/components/common/form/contact-form";
import ContactInformation from "@/containers/contact/contact-information";
import ContactSupport from '@/components/contact/contact-support';
import Map from '@/components/ui/map';


export default function ContactUsPage() {
	return (
		<>
			<PageHeader pageHeader="Contact Us" />
      <Container>
        <div className="max-w-[1420px] mx-auto mb-12 lg:mb-14 xl:mb-16">
          <div className="flex flex-wrap bg-skin-fill w-full p-5 md:p-7 lg:p-10 xl:p-16 3xl:px-[70px] xl:py-12 shadow-contact rounded-md -mt-8 relative z-10">
            <div className="w-full md:w-[53%] xl:w-[60%] md:pe-8 lg:pe-0 2xl:pe-24 lg:mb-0 mb-8">
              <ContactSupport />
            </div>
            <div className="w-full md:w-[47%] xl:w-[40%] pb-0.5 lg:ps-12 pt-1.5">
              <ContactForm />
            </div>
          </div>
        </div>
        <ContactInformation />
      </Container>
      <div className="mt-12 md:mt-16 xl:mt-20 2xl:mt-24 bg-skin-three relative h-[420px]">
        <Map
          lat={23.9028}
          lng={89.1194}
          height={'420px'}
          zoom={15}
          showInfoWindow={true}
        />
      </div>
		</>
	);
}

ContactUsPage.Layout = Layout;