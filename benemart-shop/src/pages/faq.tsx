import Container from "@/components/ui/container";
import Layout from "@/components/layout/layout";
import Subscription from "@/components/common/subscription";
import Accordion from "@/components/common/accordion";
import PageHeader from "@/components/ui/page-header";
import { faq } from "@/settings/faq.settings";

export default function FAQ() {
	return (
		<>
			<PageHeader pageHeader="Frequently Ask Question" />
			<Container>
				<div className="py-16 lg:py-20 px-0 max-w-5xl mx-auto space-y-4">
					<Accordion items={faq} translatorNS="faq" />
				</div>
				<Subscription />
			</Container>
		</>
	);
}

FAQ.Layout = Layout;