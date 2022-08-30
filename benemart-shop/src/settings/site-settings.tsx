import { ILFlag } from "@/components/icons/ILFlag";
import { SAFlag } from "@/components/icons/SAFlag";
import { CNFlag } from "@/components/icons/CNFlag";
import { USFlag } from "@/components/icons/USFlag";
import { DEFlag } from "@/components/icons/DEFlag";
import { ESFlag } from "@/components/icons/ESFlag";

export const siteSettings = {
  name: "Benemart",
  description:
    "Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.",
  author: {
    name: "Alamin.",
    websiteUrl: "https://devalamin.com",
    address: "",
  },
  logo: {
    url: "/assets/images/logo.svg",
    alt: "Benemart",
    href: "/",
    width: 95,
    height: 30,
  },
  defaultLanguage: "en",
  currencyCode: "USD",
  site_header: {
    menu: [
      {
        id: 1,
        path: "/search?q=men-wear",
        label: "men-wear",
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: "/search?q=top-wear",
                label: "top-wear",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=t-shit-shirtrt",
                    label: "t-shirt",
                  },
                  {
                    id: 2,
                    path: "/search?q=casual-shirts",
                    label: "casual-shirts",
                  },
                  {
                    id: 3,
                    path: "/search?q=formal-shirts",
                    label: "formal-shirts",
                  },
                  {
                    id: 4,
                    path: "/search?q=blazwers-coats",
                    label: "blazwers-coats",
                  },
                  {
                    id: 5,
                    path: "/search?q=suits",
                    label: "suits",
                  },
                  {
                    id: 6,
                    path: "/search?q=jackets",
                    label: "jackets",
                  },
                ],
              },
              {
                id: 2,
                path: "/search?q=belt-scarves",
                label: "belt-scarves",
              },
              {
                id: 3,
                path: "/search?q=watches-wearables",
                label: "watches-wearables",
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: "/search?q=western-wear",
                label: "western-wear",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=dresses",
                    label: "dresses",
                  },
                  {
                    id: 2,
                    path: "/search?q=jumpsuits",
                    label: "jumpsuits",
                  },
                  {
                    id: 3,
                    path: "/search?q=tops-t-shirt",
                    label: "tops-shirts",
                  },
                  {
                    id: 4,
                    path: "/search?q=shorts-skirts",
                    label: "shorts-skirts",
                  },
                  {
                    id: 5,
                    path: "/search?q=shurgs",
                    label: "shurgs",
                  },
                  {
                    id: 6,
                    path: "/search?q=blazers",
                    label: "blazers",
                  },
                ],
              },
              {
                id: 2,
                path: "/search?q=plus-size",
                label: "plus-size",
              },
              {
                id: 3,
                path: "/search?q=sunglasses-frames",
                label: "sunglasses-frames",
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: "/search?q=footwear",
                label: "footwear",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=flats",
                    label: "flats",
                  },
                  {
                    id: 2,
                    path: "/search?q=casual-shoes",
                    label: "casual-shoes",
                  },
                  {
                    id: 3,
                    path: "/search?q=heels",
                    label: "heels",
                  },
                  {
                    id: 4,
                    path: "/search?q=boots",
                    label: "boots",
                  },
                ],
              },
              {
                id: 2,
                path: "/search?q=sports-active-wear",
                label: "sports-active-wear",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=clothing",
                    label: "clothing",
                  },
                  {
                    id: 2,
                    path: "/search?q=footwear",
                    label: "footwear",
                  },
                  {
                    id: 3,
                    path: "/search?q=sports-accessories",
                    label: "sports-accessories",
                  },
                ],
              },
            ],
          },
          {
            id: 4,
            columnItems: [
              {
                id: 1,
                path: "/search?q=lingerie-sleepwear",
                label: "lingerie-sleepwear",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=bra",
                    label: "bra",
                  },
                  {
                    id: 2,
                    path: "/search?q=briefs",
                    label: "briefs",
                  },
                  {
                    id: 3,
                    path: "/search?q=sleepwear",
                    label: "sleepwear",
                  },
                ],
              },
              {
                id: 2,
                path: "/search?q=belt-scarves",
                label: "belt-scarves",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=makeup",
                    label: "makeup",
                  },
                  {
                    id: 2,
                    path: "/search?q=skincare",
                    label: "skincare",
                  },
                  {
                    id: 3,
                    path: "/search?q=premium-beauty",
                    label: "premium-beauty",
                  },
                  {
                    id: 4,
                    path: "/search?q=lipsticks",
                    label: "lipsticks",
                  },
                ],
              },
            ],
          },
          {
            id: 5,
            columnItems: [
              {
                id: 1,
                path: "/search?q=gadgets",
                label: "gadgets",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=smart-wearables",
                    label: "smart-wearables",
                  },
                  {
                    id: 2,
                    path: "/search?q=headphones",
                    label: "headphones",
                  },
                ],
              },
              {
                id: 2,
                path: "/search?q=jewellers",
                label: "jewellers",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=fashion-jewellers",
                    label: "fashion-jewellers",
                  },
                  {
                    id: 2,
                    path: "/search?q=fine-jewellers",
                    label: "fine-jewellers",
                  },
                ],
              },
              {
                id: 3,
                path: "/search?q=backpacks",
                label: "backpacks",
              },
              {
                id: 4,
                path: "/search?q=handbags-wallets",
                label: "handbags-wallets",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        path: "/search?q=women-wear",
        label: "women-wear",
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: "/search?q=gadgets",
                label: "gadgets",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=smart-wearables",
                    label: "smart-wearables",
                  },
                  {
                    id: 2,
                    path: "/search?q=headphones",
                    label: "headphones",
                  },
                ],
              },
              {
                id: 2,
                path: "/search?q=jewellers",
                label: "jewellers",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=fashion-jewellers",
                    label: "fashion-jewellers",
                  },
                  {
                    id: 2,
                    path: "/search?q=fine-jewellers",
                    label: "fine-jewellers",
                  },
                ],
              },
              {
                id: 3,
                path: "/search?q=backpacks",
                label: "backpacks",
              },
              {
                id: 4,
                path: "/search?q=handbags-wallets",
                label: "handbags-wallets",
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: "/search?q=top-wear",
                label: "top-wear",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=t-shit-shirtrt",
                    label: "t-shirt",
                  },
                  {
                    id: 2,
                    path: "/search?q=casual-shirts",
                    label: "casual-shirts",
                  },
                  {
                    id: 3,
                    path: "/search?q=formal-shirts",
                    label: "formal-shirts",
                  },
                  {
                    id: 4,
                    path: "/search?q=blazwers-coats",
                    label: "blazwers-coats",
                  },
                  {
                    id: 5,
                    path: "/search?q=suits",
                    label: "suits",
                  },
                  {
                    id: 6,
                    path: "/search?q=jackets",
                    label: "jackets",
                  },
                ],
              },
              {
                id: 2,
                path: "/search?q=belt-scarves",
                label: "belt-scarves",
              },
              {
                id: 3,
                path: "/search?q=watches-wearables",
                label: "watches-wearables",
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: "/search?q=footwear",
                label: "footwear",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=flats",
                    label: "flats",
                  },
                  {
                    id: 2,
                    path: "/search?q=casual-shoes",
                    label: "casual-shoes",
                  },
                  {
                    id: 3,
                    path: "/search?q=heels",
                    label: "heels",
                  },
                  {
                    id: 4,
                    path: "/search?q=boots",
                    label: "boots",
                  },
                ],
              },
              {
                id: 2,
                path: "/search?q=sports-active-wear",
                label: "sports-active-wear",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=clothing",
                    label: "clothing",
                  },
                  {
                    id: 2,
                    path: "/search?q=footwear",
                    label: "footwear",
                  },
                  {
                    id: 3,
                    path: "/search?q=sports-accessories",
                    label: "sports-accessories",
                  },
                ],
              },
            ],
          },
          {
            id: 4,
            columnItems: [
              {
                id: 1,
                path: "/search?q=western-wear",
                label: "western-wear",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=dresses",
                    label: "dresses",
                  },
                  {
                    id: 2,
                    path: "/search?q=jumpsuits",
                    label: "jumpsuits",
                  },
                  {
                    id: 3,
                    path: "/search?q=tops-t-shirt",
                    label: "tops-shirts",
                  },
                  {
                    id: 4,
                    path: "/search?q=shorts-skirts",
                    label: "shorts-skirts",
                  },
                  {
                    id: 5,
                    path: "/search?q=shurgs",
                    label: "shurgs",
                  },
                  {
                    id: 6,
                    path: "/search?q=blazers",
                    label: "blazers",
                  },
                ],
              },
              {
                id: 2,
                path: "/search?q=plus-size",
                label: "plus-size",
              },
              {
                id: 3,
                path: "/search?q=sunglasses-frames",
                label: "sunglasses-frames",
              },
            ],
          },
          {
            id: 5,
            columnItems: [
              {
                id: 1,
                path: "/search?q=lingerie-sleepwear",
                label: "lingerie-sleepwear",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=bra",
                    label: "bra",
                  },
                  {
                    id: 2,
                    path: "/search?q=briefs",
                    label: "briefs",
                  },
                  {
                    id: 3,
                    path: "/search?q=sleepwear",
                    label: "sleepwear",
                  },
                ],
              },
              {
                id: 2,
                path: "/search?q=belt-scarves",
                label: "belt-scarves",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=makeup",
                    label: "makeup",
                  },
                  {
                    id: 2,
                    path: "/search?q=skincare",
                    label: "skincare",
                  },
                  {
                    id: 3,
                    path: "/search?q=premium-beauty",
                    label: "premium-beauty",
                  },
                  {
                    id: 4,
                    path: "/search?q=lipsticks",
                    label: "lipsticks",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        path: "/search?q=casual-wear",
        label: "casual-wear",
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: "/search?q=gadgets",
                label: "gadgets",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=smart-wearables",
                    label: "smart-wearables",
                  },
                  {
                    id: 2,
                    path: "/search?q=headphones",
                    label: "headphones",
                  },
                ],
              },
              {
                id: 2,
                path: "/search?q=jewellers",
                label: "jewellers",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=fashion-jewellers",
                    label: "fashion-jewellers",
                  },
                  {
                    id: 2,
                    path: "/search?q=fine-jewellers",
                    label: "fine-jewellers",
                  },
                ],
              },
              {
                id: 3,
                path: "/search?q=backpacks",
                label: "backpacks",
              },
              {
                id: 4,
                path: "/search?q=handbags-wallets",
                label: "handbags-wallets",
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: "/search?q=top-wear",
                label: "top-wear",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=t-shit-shirtrt",
                    label: "t-shirt",
                  },
                  {
                    id: 2,
                    path: "/search?q=casual-shirts",
                    label: "casual-shirts",
                  },
                  {
                    id: 3,
                    path: "/search?q=formal-shirts",
                    label: "formal-shirts",
                  },
                  {
                    id: 4,
                    path: "/search?q=blazwers-coats",
                    label: "blazwers-coats",
                  },
                  {
                    id: 5,
                    path: "/search?q=suits",
                    label: "suits",
                  },
                  {
                    id: 6,
                    path: "/search?q=jackets",
                    label: "jackets",
                  },
                ],
              },
              {
                id: 2,
                path: "/search?q=belt-scarves",
                label: "belt-scarves",
              },
              {
                id: 3,
                path: "/search?q=watches-wearables",
                label: "watches-wearables",
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: "/search?q=footwear",
                label: "footwear",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=flats",
                    label: "flats",
                  },
                  {
                    id: 2,
                    path: "/search?q=casual-shoes",
                    label: "casual-shoes",
                  },
                  {
                    id: 3,
                    path: "/search?q=heels",
                    label: "heels",
                  },
                  {
                    id: 4,
                    path: "/search?q=boots",
                    label: "boots",
                  },
                ],
              },
              {
                id: 2,
                path: "/search?q=sports-active-wear",
                label: "sports-active-wear",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=clothing",
                    label: "clothing",
                  },
                  {
                    id: 2,
                    path: "/search?q=footwear",
                    label: "footwear",
                  },
                  {
                    id: 3,
                    path: "/search?q=sports-accessories",
                    label: "sports-accessories",
                  },
                ],
              },
            ],
          },
          {
            id: 4,
            columnItems: [
              {
                id: 1,
                path: "/search?q=western-wear",
                label: "western-wear",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=dresses",
                    label: "dresses",
                  },
                  {
                    id: 2,
                    path: "/search?q=jumpsuits",
                    label: "jumpsuits",
                  },
                  {
                    id: 3,
                    path: "/search?q=tops-t-shirt",
                    label: "tops-shirts",
                  },
                  {
                    id: 4,
                    path: "/search?q=shorts-skirts",
                    label: "shorts-skirts",
                  },
                  {
                    id: 5,
                    path: "/search?q=shurgs",
                    label: "shurgs",
                  },
                  {
                    id: 6,
                    path: "/search?q=blazers",
                    label: "blazers",
                  },
                ],
              },
              {
                id: 2,
                path: "/search?q=plus-size",
                label: "plus-size",
              },
              {
                id: 3,
                path: "/search?q=sunglasses-frames",
                label: "sunglasses-frames",
              },
            ],
          },
          {
            id: 5,
            columnItems: [
              {
                id: 1,
                path: "/search?q=lingerie-sleepwear",
                label: "lingerie-sleepwear",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=bra",
                    label: "bra",
                  },
                  {
                    id: 2,
                    path: "/search?q=briefs",
                    label: "briefs",
                  },
                  {
                    id: 3,
                    path: "/search?q=sleepwear",
                    label: "sleepwear",
                  },
                ],
              },
              {
                id: 2,
                path: "/search?q=belt-scarves",
                label: "belt-scarves",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=makeup",
                    label: "makeup",
                  },
                  {
                    id: 2,
                    path: "/search?q=skincare",
                    label: "skincare",
                  },
                  {
                    id: 3,
                    path: "/search?q=premium-beauty",
                    label: "premium-beauty",
                  },
                  {
                    id: 4,
                    path: "/search?q=lipsticks",
                    label: "lipsticks",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        path: "/search",
        label: "search",
      },
      {
        id: 5,
        path: "/",
        label: "pages",
        subMenu: [
          {
            id: 1,
            path: "/",
            label: "users",
            subMenu: [
              {
                id: 1,
                path: "/my-account",
                label: "my-account",
              },
              {
                id: 2,
                path: "/signin",
                label: "sign-in",
              },
              {
                id: 3,
                path: "/signup",
                label: "sign-up",
              },
              {
                id: 4,
                path: "/forget-password",
                label: "forget-password",
              },
            ],
          },
          {
            id: 2,
            path: "/faq",
            label: "faq",
          },
          {
            id: 3,
            path: "/privacy",
            label: "privacy-policy",
          },
          {
            id: 4,
            path: "/terms",
            label: "terms-condition",
          },
          {
            id: 5,
            path: "/contact-us",
            label: "contact-us",
          },
          {
            id: 6,
            path: "/checkout",
            label: "checkout",
          },
          {
            id: 7,
            path: "/collections/mens-collection",
            label: "collection",
          },
          {
            id: 8,
            path: "/category/man",
            label: "category",
          },
          {
            id: 9,
            path: "/order",
            label: "order",
          },
          {
            id: 10,
            path: "/404",
            label: "404",
          },
        ],
      },
    ],
    mobileMenu: [
      {
        id: 1,
        path: "/search?q=men-wear",
        label: "men-wear",
        subMenu: [
          {
            id: 1,
            path: "/search?q=top-wear",
            label: "top-wear",
            subMenu: [
              {
                id: 1,
                path: "/search?q=t-shit-shirtrt",
                label: "t-shirt",
              },
              {
                id: 2,
                path: "/search?q=casual-shirts",
                label: "casual-shirts",
              },
              {
                id: 3,
                path: "/search?q=formal-shirts",
                label: "formal-shirts",
              },
              {
                id: 4,
                path: "/search?q=blazwers-coats",
                label: "blazwers-coats",
              },
              {
                id: 5,
                path: "/search?q=suits",
                label: "suits",
              },
              {
                id: 6,
                path: "/search?q=jackets",
                label: "jackets",
              },
            ],
          },
          {
            id: 2,
            path: "/search?q=belt-scarves",
            label: "belt-scarves",
          },
          {
            id: 3,
            path: "/search?q=watches-wearables",
            label: "watches-wearables",
          },
          {
            id: 4,
            path: "/search?q=western-wear",
            label: "western-wear",
            subMenu: [
              {
                id: 1,
                path: "/search?q=dresses",
                label: "dresses",
              },
              {
                id: 2,
                path: "/search?q=jumpsuits",
                label: "jumpsuits",
              },
              {
                id: 3,
                path: "/search?q=tops-t-shirt",
                label: "tops-shirts",
              },
              {
                id: 4,
                path: "/search?q=shorts-skirts",
                label: "shorts-skirts",
              },
              {
                id: 5,
                path: "/search?q=shurgs",
                label: "shurgs",
              },
              {
                id: 6,
                path: "/search?q=blazers",
                label: "blazers",
              },
            ],
          },
          {
            id: 5,
            path: "/search?q=plus-size",
            label: "plus-size",
          },
          {
            id: 6,
            path: "/search?q=sunglasses-frames",
            label: "sunglasses-frames",
          },
          {
            id: 7,
            path: "/search?q=footwear",
            label: "footwear",
            subMenu: [
              {
                id: 1,
                path: "/search?q=flats",
                label: "flats",
              },
              {
                id: 2,
                path: "/search?q=casual-shoes",
                label: "casual-shoes",
              },
              {
                id: 3,
                path: "/search?q=heels",
                label: "heels",
              },
              {
                id: 4,
                path: "/search?q=boots",
                label: "boots",
              },
            ],
          },
          {
            id: 8,
            path: "/search?q=sports-active-wear",
            label: "sports-active-wear",
            subMenu: [
              {
                id: 1,
                path: "/search?q=clothing",
                label: "clothing",
              },
              {
                id: 2,
                path: "/search?q=footwear",
                label: "footwear",
              },
              {
                id: 3,
                path: "/search?q=sports-accessories",
                label: "sports-accessories",
              },
            ],
          },
          {
            id: 9,
            path: "/search?q=lingerie-sleepwear",
            label: "lingerie-sleepwear",
            subMenu: [
              {
                id: 1,
                path: "/search?q=bra",
                label: "bra",
              },
              {
                id: 2,
                path: "/search?q=briefs",
                label: "briefs",
              },
              {
                id: 3,
                path: "/search?q=sleepwear",
                label: "sleepwear",
              },
            ],
          },
          {
            id: 10,
            path: "/search?q=belt-scarves",
            label: "belt-scarves",
            subMenu: [
              {
                id: 1,
                path: "/search?q=makeup",
                label: "makeup",
              },
              {
                id: 2,
                path: "/search?q=skincare",
                label: "skincare",
              },
              {
                id: 3,
                path: "/search?q=premium-beauty",
                label: "premium-beauty",
              },
              {
                id: 4,
                path: "/search?q=lipsticks",
                label: "lipsticks",
              },
            ],
          },
          {
            id: 11,
            path: "/search?q=gadgets",
            label: "gadgets",
            subMenu: [
              {
                id: 1,
                path: "/search?q=smart-wearables",
                label: "smart-wearables",
              },
              {
                id: 2,
                path: "/search?q=headphones",
                label: "headphones",
              },
            ],
          },
          {
            id: 12,
            path: "/search?q=jewellers",
            label: "jewellers",
            subMenu: [
              {
                id: 1,
                path: "/search?q=fashion-jewellers",
                label: "fashion-jewellers",
              },
              {
                id: 2,
                path: "/search?q=fine-jewellers",
                label: "fine-jewellers",
              },
            ],
          },
          {
            id: 13,
            path: "/search?q=backpacks",
            label: "backpacks",
          },
          {
            id: 14,
            path: "/search?q=handbags-wallets",
            label: "handbags-wallets",
          },
        ],
      },
      {
        id: 2,
        path: "/search?q=women-wear",
        label: "women-wear",
      },
      {
        id: 3,
        path: "/search?q=casual-wear",
        label: "casual-wear",
        subMenu: [
          {
            id: 1,
            path: "/search?q=top-wear",
            label: "top-wear",
            subMenu: [
              {
                id: 1,
                path: "/search?q=t-shit-shirtrt",
                label: "t-shirt",
              },
              {
                id: 2,
                path: "/search?q=casual-shirts",
                label: "casual-shirts",
              },
              {
                id: 3,
                path: "/search?q=formal-shirts",
                label: "formal-shirts",
              },
              {
                id: 4,
                path: "/search?q=blazwers-coats",
                label: "blazwers-coats",
              },
              {
                id: 5,
                path: "/search?q=suits",
                label: "suits",
              },
              {
                id: 6,
                path: "/search?q=jackets",
                label: "jackets",
              },
            ],
          },
          {
            id: 2,
            path: "/search?q=belt-scarves",
            label: "belt-scarves",
          },
          {
            id: 3,
            path: "/search?q=watches-wearables",
            label: "watches-wearables",
          },
          {
            id: 4,
            path: "/search?q=western-wear",
            label: "western-wear",
            subMenu: [
              {
                id: 1,
                path: "/search?q=dresses",
                label: "dresses",
              },
              {
                id: 2,
                path: "/search?q=jumpsuits",
                label: "jumpsuits",
              },
              {
                id: 3,
                path: "/search?q=tops-t-shirt",
                label: "tops-shirts",
              },
              {
                id: 4,
                path: "/search?q=shorts-skirts",
                label: "shorts-skirts",
              },
              {
                id: 5,
                path: "/search?q=shurgs",
                label: "shurgs",
              },
              {
                id: 6,
                path: "/search?q=blazers",
                label: "blazers",
              },
            ],
          },
          {
            id: 5,
            path: "/search?q=plus-size",
            label: "plus-size",
          },
          {
            id: 6,
            path: "/search?q=sunglasses-frames",
            label: "sunglasses-frames",
          },
          {
            id: 7,
            path: "/search?q=footwear",
            label: "footwear",
            subMenu: [
              {
                id: 1,
                path: "/search?q=flats",
                label: "flats",
              },
              {
                id: 2,
                path: "/search?q=casual-shoes",
                label: "casual-shoes",
              },
              {
                id: 3,
                path: "/search?q=heels",
                label: "heels",
              },
              {
                id: 4,
                path: "/search?q=boots",
                label: "boots",
              },
            ],
          },
          {
            id: 8,
            path: "/search?q=sports-active-wear",
            label: "sports-active-wear",
            subMenu: [
              {
                id: 1,
                path: "/search?q=clothing",
                label: "clothing",
              },
              {
                id: 2,
                path: "/search?q=footwear",
                label: "footwear",
              },
              {
                id: 3,
                path: "/search?q=sports-accessories",
                label: "sports-accessories",
              },
            ],
          },
          {
            id: 9,
            path: "/search?q=lingerie-sleepwear",
            label: "lingerie-sleepwear",
            subMenu: [
              {
                id: 1,
                path: "/search?q=bra",
                label: "bra",
              },
              {
                id: 2,
                path: "/search?q=briefs",
                label: "briefs",
              },
              {
                id: 3,
                path: "/search?q=sleepwear",
                label: "sleepwear",
              },
            ],
          },
          {
            id: 10,
            path: "/search?q=belt-scarves",
            label: "belt-scarves",
            subMenu: [
              {
                id: 1,
                path: "/search?q=makeup",
                label: "makeup",
              },
              {
                id: 2,
                path: "/search?q=skincare",
                label: "skincare",
              },
              {
                id: 3,
                path: "/search?q=premium-beauty",
                label: "premium-beauty",
              },
              {
                id: 4,
                path: "/search?q=lipsticks",
                label: "lipsticks",
              },
            ],
          },
          {
            id: 11,
            path: "/search?q=gadgets",
            label: "gadgets",
            subMenu: [
              {
                id: 1,
                path: "/search?q=smart-wearables",
                label: "smart-wearables",
              },
              {
                id: 2,
                path: "/search?q=headphones",
                label: "headphones",
              },
            ],
          },
          {
            id: 12,
            path: "/search?q=jewellers",
            label: "jewellers",
            subMenu: [
              {
                id: 1,
                path: "/search?q=fashion-jewellers",
                label: "fashion-jewellers",
              },
              {
                id: 2,
                path: "/search?q=fine-jewellers",
                label: "fine-jewellers",
              },
            ],
          },
          {
            id: 13,
            path: "/search?q=backpacks",
            label: "backpacks",
          },
          {
            id: 14,
            path: "/search?q=handbags-wallets",
            label: "handbags-wallets",
          },
        ],
      },
      {
        id: 4,
        path: "/search",
        label: "search",
      },
      {
        id: 5,
        path: "/",
        label: "pages",
        subMenu: [
          {
            id: 1,
            path: "/",
            label: "users",
            subMenu: [
              {
                id: 1,
                path: "/my-account",
                label: "my-account",
              },
              {
                id: 2,
                path: "/signin",
                label: "sign-in",
              },
              {
                id: 3,
                path: "/signup",
                label: "sign-up",
              },
              {
                id: 4,
                path: "/forget-password",
                label: "forget-password",
              },
            ],
          },
          {
            id: 2,
            path: "/faq",
            label: "faq",
          },
          {
            id: 3,
            path: "/privacy",
            label: "privacy-policy",
          },
          {
            id: 4,
            path: "/terms",
            label: "terms-condition",
          },
          {
            id: 5,
            path: "/contact-us",
            label: "contact-us",
          },
          {
            id: 6,
            path: "/checkout",
            label: "checkout",
          },
          {
            id: 7,
            path: "/collections/mens-collection",
            label: "collection",
          },
          {
            id: 8,
            path: "/category/man",
            label: "category",
          },
          {
            id: 9,
            path: "/order",
            label: "order",
          },
          {
            id: 10,
            path: "/404",
            label: "404",
          },
        ],
      },
    ]
  },
};
