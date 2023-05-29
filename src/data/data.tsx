const data = {
  navNames: [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ],
  navs: {
    Store: {
      Shop: [
        "Shop the Latest",
        "Mac",
        "iPad",
        "iPhone",
        "Apple Watch",
        "Accessories",
      ],
      "Quick Links": [
        "Find a Store",
        "Order Status",
        "Apple Trade In",
        "Financing",
      ],
      "Shop Special Stores": [
        "Certified Refurbished",
        "Education",
        "Business",
        "Vererans and Military",
        "Government",
      ],
    },
    Mac: {
      "Explore Mac": [
        "Explore All Mac",
        "Macbook Air",
        "Macbook Pro",
        "iMac",
        "Mac Mini",
        "Mac Studio",
        "Mac Pro",
        "Displays",
      ],
      "Shop Mac": [
        "Shop Mac",
        "Mac Accessories",
        "Apple Trade In",
        "Financing",
      ],
      "More from Mac": [
        "Mac Support",
        "macOS Ventura",
        "Final Cut Pro",
        "Logic Pro",
        "Continunity",
        "iCloud",
        "Mac for Business",
        "Education",
      ],
    },
    iPad: {
      "Explore iPad": [
        "Explore All iPad",
        "iPad Pro",
        "iPad Air",
        "iPad",
        "iPad mini",
        "Apple Pencil",
        "Keyboard",
      ],
      "Shop iPad": [
        "shop iPad",
        "iPad Accessories",
        "Apple Trade in",
        "Financing",
      ],
      "More from iPad": [
        "iPad Support",
        "iPadOS 16",
        "Final Cut Pro for iPad",
        "Logic Pro for iPad",
        "iCloud",
        "Education",
      ],
    },
    iPhone: {
      "Explore iPhone": [
        "Explore all iPhone",
        "iPhone 14 Pro",
        "iPhone 14",
        "iPhone 13",
        "iPhone 12",
        "iPhone 11",
        "iPhone SE",
      ],
      "Shop iPhone": [
        "Shop iPhone",
        "iPhone Accessories",
        "Apple Trade in",
        "Carrier Deals at Apple",
        "Financing",
      ],
      "More from iPhone": [
        "iPhone Support",
        "IOS 16",
        "iPhone Privacy",
        "iCloud",
        "Wallet, Pay, Card",
        "Siri",
      ],
    },
    Watch: {
      "Explore Watch": [
        "Explore All Apple Watch",
        "Apple Watch Ultra",
        "Apple Watch Series 8",
        "Apple Watch SE",
        "Apple watch Nike",
        "Apple Watch Hermes",
      ],
      "Shop Watch": [
        "Shop Apple Watch",
        "Apple Watch Studio",
        "Apple Watch Bands",
        "Apple Watch Accessories",
        "Apple trade in",
        "Financing",
      ],
      "More from Watch": [
        "Apple Watch Support",
        "WatchOS 9",
        "Apple Fiteness +",
      ],
    },
    AirPods: {
      "Explore AirPods": [
        "Explore All AirPods",
        "AirPods 2nd Generation",
        "AirPods 3rd Generation",
        "AirPods Pro 2nd Generation",
        "AirPods max",
      ],
      "Shop AirPods": ["Shop AirPods", "AirPods Accessories"],
      "More From AirPods": ["Airpods Support", "Apple Music"],
    },
    "TV & Home": {
      "Explore TV & Home": [
        "Explore All TV & Home",
        "Apple TV 4k",
        "HomePod",
        "HomePod mini",
      ],
      "Shop TV & Home": [
        "Shop Apple TV & Home",
        "Shop HomePod",
        "Shop HomePod Mini",
        "Shop Siri Remote",
        "TV & Home Accessories",
      ],
      "More from TV & Home": [
        "APple TV Support",
        "HomePod Support",
        "Apple TV App",
        "Apple TV+",
        "Home App",
        "Apple Music",
        "Siri",
        "AirPlay",
      ],
    },
    Entertainment: {
      "Explore Entertainment": [
        "Explore Entertainment",
        "Apple One",
        "Apple TV+",
        "Apple Music",
        "Apple Arcade",
        "Apple Fitness+",
        "Apple New+",
        "Apple Podcasts",
        "Apple Books",
        "App Store",
      ],
      Support: ["Apple TV+ Support", "Apple Music Support"],
    },
    Accessories: {
      "Shop Accessories": [
        "Shop All Accessories",
        "Mac",
        "iPad",
        "iPhone",
        "Apple Watch",
        "AirPods",
        "TV & Homes",
      ],
      "Explore Accessories": ["Made by Illuminati", "Beats by Dr. Dre"],
    },
    Support: {
      "Explore Support": [
        "iPhone",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "AirPods",
        "Music",
        "TV",
      ],
      "Get Help": ["Community", "Check Coverage", "Repair", "Contact Us"],
      "Helpful Topics": [
        "Get AppleCare+",
        "Apple ID & Password",
        "Billing and Subscription",
        "Find My",
        "Accessibility",
      ],
    },
  },

  directories: {
    "Shop and Learn": [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "AirPods",
      "TV & Home",
      "AirTags",
      "Accessories",
      "Gift Cards",
    ],
    "Apple Wallet": ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
    Account: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
    Entertainment: [
      "Apple One",
      "Apple TV+",
      "Apple Music",
      "Apple Arcade",
      "Apple Fitness+",
      "Apple News+",
      "Apple Podcasts",
      "Apple Books",
      "App Store",
    ],
    "Apple Store": [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Apple Camp",
      "Apple Store App",
      "Certified Refurbished",
      "Apple Trade In",
      "Financing",
      "Carrier Deals at Apple",
      "Order Status",
      "Shopping Help",
    ],
    "For Business": ["Apple and Business", "Shop for Business"],
    "For Education": [
      "Apple and Education",
      "Shop for K-12",
      "Shop for College",
    ],
    "For Healthcare": [
      "Apple in Healthcare",
      "Health on Apple Watch",
      "Health Records on iPhone",
    ],
    "For Government": ["Shop for Government", "Shop for Veterans and Military"],

    "Apple Values": [
      "Accessibility",
      "Education",
      "Environment",
      "Inclusion and Diversity",
      "Privacy",
      "Racial Equity and Justice",
      "Supplier Responsibility",
    ],
    "About Apple": [
      "Newsroom",
      "Apple Leadership",
      "Career Opportunities",
      "Investors",
      "Ethics & Compliance",
      "Events",
      "Contact Apple",
    ],
  },

  term: {
    1: `1. Trade-in values will vary based on the condition, year, and
        configuration of your eligible trade-in device. Not all devices are
        eligible for credit. You must be at least 18 years old to be eligible to
        trade in for credit or for an Apple Gift Card. Trade-in value may be
        applied toward qualifying new device purchase, or added to an Apple Gift
        Card. Actual value awarded is based on receipt of a qualifying device
        matching the description provided when estimate was made. Sales tax may
        be assessed on full value of a new device purchase. In-store trade-in
        requires presentation of a valid photo ID (local law may require saving
        this information). Offer may not be available in all stores, and may
        vary between in-store and online trade-in. Some stores may have
        additional requirements. Apple or its trade-in partners reserve the
        right to refuse or limit quantity of any trade-in transaction for any
        reason. More details are available from Apple’s trade-in partner for
        trade-in and recycling of eligible devices. Restrictions and limitations
        may apply.`,
    2: `To access and use all the features of Apple Card, you must add Apple
        Card to Wallet on an iPhone or iPad with the latest version of iOS or
        iPadOS. Update to the latest version by going to Settings General
        Software Update. Tap Download and Install.`,
    3: `Available for qualifying applicants in the United States.`,
    4: `Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.`,
    5: `Learn more about how Apple Card applications are evaluated at
        support.apple.com/kb/HT209218.`,
    6: `A subscription is required for Apple TV+.`,
    7: ` Major League Baseball trademarks and copyrights are used with permission
        of MLB Advanced Media, L.P. All rights reserved.`,
  },
  guide: {
    1: {
      title: "Beware of counterfeit part",
      description: `Some counterfeit and third party power adapters and batteries may
            not be designed properly and could result in safety issues. To
            ensure you receive a genuine Apple battery during a battery
            replacement, we recommend visiting an Apple Store or Apple
            Authorized Service Provider. If you need a replacement adapter to
            charge your Apple device, we recommend getting an Apple power
            adapter. Also non-genuine replacement displays may have compromised
            visual quality and may fail to work correctly. Apple-certified
            screen repairs are performed by trusted experts who use genuine
            Apple parts.`,
    },
    2: {
      title: "Be aware of gift card scams",
      description: `Be aware of scams involving Apple Gift Cards, App Store & iTunes
            Gift Cards, and Apple Store Gift Cards.`,
    },
  },
  repairs: {
    1: {
      title: "My Support",
      description: `Get up to date information about your Apple products including coverage,
        repairs, and much more.`,
    },
    2: {
      title: "AppleCare+",
      description: `Get unlimited repairs for accidental damage protection, 24/7 priority access to Apple experts, and more.`,
    },
    3: {
      title: "Apple Trade In",
      description: `Turn an eligible device into credit towards a new one, or recycle it for free. `,
    },
    4: {
      title: "Safe and reliable repairs",
      description: `At Apple, every product we make is built to last. We design durable,
          easy-to-use devices with innovative features that customers depend on,
          all while protecting their privacy and data. Customers should have
          access to safe, reliable, and secure repairs with genuine Apple parts
          if they need them. Learn more about Apple’s approach to expanding
          access to safe and reliable repairs. View (PDF).`,
    },
  },
  support: {
    1: {
      title: "Get Support",
      description: `Give us a few details and we’ll offer the best solution. Connect by
        phone, chat, email, and more.`,
    },
    2: {
      title: "Apple Support app",
      description: `Get help for all of your Apple products in one place, or connect with an
        expert.`,
    },
  },
  privacy: {
    title: "Take charge of your privacy",
    description: `Join a 30-minute session at the Apple Store and learn how to protect
        your privacy on iPhone.`,
  },
  update: {
    title: "Get the latest",
    description: `Update your iPhone or iPad to the latest version of iOS or iPadOS.`,
  },
  servidePrograms: {
    title: "Apple Service Programs",
    data: [
      "Apple Watch Series 6 Service Program for Blank Screen Issue",
      "iPhone 12 and iPhone 12 Pro Service Program for No Sound Issues",
      "iPhone 11 Display Module Replacement Program for Touch Issues",
      "15-inch MacBook Pro Battery Recall Program",
      "Apple Three-Prong AC Wall Plug Adapter Recall Program",
    ],
  },

  // navs: {
  //   Store: {
  //     Shop: [
  //       "Shop the Latest",
  //       "Mac",
  //       "iPad",
  //       "iPhone",
  //       "Apple Watch",
  //       "Accessories",
  //     ],
  //     "Quick Links": [
  //       "Find a Store",
  //       "Order Status",
  //       "Apple Trade In",
  //       "Financing",
  //     ],
  //     "Shop Special Stores": [
  //       "Certified Refurbished",
  //       "Education",
  //       "Business",
  //       "Vererans and Military",
  //       "Government",
  //     ],
  //   },
  // },
  devNavTitle: [
    "News",
    "Discover",
    "Design",
    "Develop",
    "Distribute",
    "Support",
    "Account",
  ],
};

export default data;
