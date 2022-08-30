import {
	IoLogoInstagram,
	IoLogoTwitter,
	IoLogoFacebook,
	IoLogoYoutube,
} from "react-icons/io5";

export const footer = {
	widgets: [
		{
			id: 1,
			widgetTitle: "social",
			lists: [
				{
					id: 1,
					title: "instagram",
					path: "https://www.instagram.com",
					icon: <IoLogoInstagram />,
				},
				{
					id: 2,
					title: "twitter",
					path: "https://twitter.com",
					icon: <IoLogoTwitter />,
				},
				{
					id: 3,
					title: "facebook",
					path: "https://www.facebook.com",
					icon: <IoLogoFacebook />,
				},
				{
					id: 4,
					title: "youtube",
					path: "https://www.youtube.com",
					icon: <IoLogoYoutube />,
				},
			],
		},
		{
			id: 2,
			widgetTitle: "contact",
			lists: [
				{
					id: 1,
					title: "contact-us",
					path: "/contact-us",
				},
				{
					id: 2,
					title: "email",
					path: "/",
				},
				{
					id: 3,
					title: "email-two",
					path: "/",
				},
				{
					id: 4,
					title: "phone",
					path: "/",
				},
			],
		},
		{
			id: 3,
			widgetTitle: "about",
			lists: [
				{
					id: 1,
					title: "support-center",
					path: "/contact-us",
				},
				{
					id: 2,
					title: "customer-support",
					path: "/",
				},
				{
					id: 3,
					title: "about-us",
					path: "/contact-us",
				},
				{
					id: 4,
					title: "copyright",
					path: "/",
				},
			],
		},
		{
			id: 4,
			widgetTitle: "customer-care",
			lists: [
				{
					id: 1,
					title: "faq",
					path: "/faq",
				},
				{
					id: 2,
					title: "shipping",
					path: "/",
				},
				{
					id: 3,
					title: "exchanges",
					path: "/",
				},
			],
		},
		{
			id: 5,
			widgetTitle: "our-information",
			lists: [
				{
					id: 1,
					title: "privacy",
					path: "/privacy",
				},
				{
					id: 2,
					title: "terms",
					path: "/terms",
				},
				{
					id: 3,
					title: "return-policy",
					path: "/privacy",
				},
				{
					id: 4,
					title: "site-map",
					path: "/",
				},
			],
		},
		{
			id: 6,
			widgetTitle: "top-categories",
			lists: [
				{
					id: 1,
					title: "men-wear",
					path: "/search",
				},
				{
					id: 2,
					title: "men-wear",
					path: "/search",
				},
				{
					id: 3,
					title: "kids-wear",
					path: "/search",
				},
				{
					id: 4,
					title: "sports-wear",
					path: "/search",
				},
			],
		},
	],
	payment: [
		{
			id: 1,
			path: "/",
			image: "/assets/images/payment/mastercard.svg",
			name: "payment-master-card",
			width: 34,
			height: 20,
		},
		{
			id: 2,
			path: "/",
			image: "/assets/images/payment/visa.svg",
			name: "payment-visa",
			width: 50,
			height: 20,
		},
		{
			id: 3,
			path: "/",
			image: "/assets/images/payment/paypal.svg",
			name: "payment-paypal",
			width: 76,
			height: 20,
		},
		{
			id: 4,
			path: "/",
			image: "/assets/images/payment/jcb.svg",
			name: "payment-jcb",
			width: 26,
			height: 20,
		},
		{
			id: 5,
			path: "/",
			image: "/assets/images/payment/skrill.svg",
			name: "payment-skrill",
			width: 39,
			height: 20,
		},
	],
};
