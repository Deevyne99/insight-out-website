import {
  FaHandHoldingUsd,
  FaLightbulb,
  FaProjectDiagram,
  FaChartLine,
  FaBullhorn,
  FaBalanceScale,
} from 'react-icons/fa'
import {
  FaBrain,
  FaRegFileAlt,
  FaChartBar,
  FaGlobe,
  FaHandshake,
} from 'react-icons/fa'

export const links = [
  { id: 1, name: 'home', url: '/' },
  { id: 2, name: 'about', url: '/about' },
  { id: 3, name: 'contact', url: '/contact' },
  { id: 4, name: 'insight', url: '/insight' },
]

export const hero = [
  {
    id: 1,
    title: 'InsightOut',
    subtitle: 'Dream. Do.',
    description:
      'At InsightOut, we believe every bold dream deserves a pathway to reality. We transform visionary ideas into actionable strategies through innovation, collaboration, and purpose-driven individuals and organisations to achieve impact that truly matters.',
    img: '/assets/image-1.jpg',
    color: '#f5f3ff',
  },
  {
    id: 2,
    title: 'InsightOut',
    subtitle: 'Lead. Transform.',
    description:
      'Leadership is more than direction, it’s transformation. We guide organisations to navigate change with confidence, unlock their full potential, and implement scalable solutions that not only create growth but also deliver lasting value to communities worldwide.',
    img: '/assets/image-2.jpg',
    color: '#f5f3ff',
  },
  {
    id: 4,
    title: 'InsightOut',
    subtitle: 'Create. Scale.',
    description:
      'Great ideas deserve more than a start, they deserve momentum. From conception to execution, we design programmes and initiatives with the power to grow alongside your vision, ensuring that innovation turns into sustainable and scalable progress over time.',
    img: '/assets/image-2.jpg',
    color: '#fdf2f8',
  },
  {
    id: 5,
    title: 'InsightOut',
    subtitle: 'Innovate. Sustain.',
    description:
      'Innovation should not be fleeting, it should endure. We deliver forward-thinking, creative strategies that embrace sustainability at every stage, enabling organisations to push boundaries, inspire change, and contribute to a future that is prosperous and equitable for all.',
    img: '/assets/image-2.jpg',
    color: '#f8fafc',
  },
];


export const services = [
  {
    id: 1,
    service: 'Grant Sourcing & Matching',
    description:
      'We identify suitable funding opportunities and strategically align them with your organizational goals, increasing your chances of success and long-term impact.',
    icon: FaHandHoldingUsd,
    color: '#7e22ce',
    background:'#e5d3f5'
  },

  {
    id: 3,
    service: 'Thought Leadership',
    description:
      'We position your organization as an authority through compelling content, insights, and strategic engagement that influence your sector and stakeholders.',
    icon: FaLightbulb,
    color: '#ef4444',
    background:'#fcdada'
  },
  {
    id: 4,
    service: 'Programme Design & Execution',
    description:
      'From concept to implementation, we help you create well-structured, results-oriented programs that meet your objectives and serve your target audience effectively.',
    icon: FaProjectDiagram,
    color: '#facc15',
    background:'#fef5d0'
  },
  {
    id: 5,
    service: 'Monitoring and Evaluation',
    description:
      'Our M&E frameworks track progress, measure impact, and inform improvements, ensuring accountability and learning throughout the program lifecycle.',
    icon: FaChartLine,
    color: '#22c55e',
    background:'#d3f3df'
  },
  {
    id: 6,
    service: 'Development Communications',
    description:
      'We craft and deliver clear, compelling messages that communicate your mission, mobilize support, and build trust with partners and communities.',
    icon: FaBullhorn,
    color: `#f97316`,
    background:'#fee3d0'
  },
  {
    id: 7,
    service: 'Policy and Regulatory Support',
    description:
      'We provide expert guidance in shaping, analyzing, and navigating policy and regulatory environments to support advocacy and compliance efforts.',
    icon: FaBalanceScale,
    color: `#d946ef`,
    
    background:'#f7dafc'
  },
]

export const blogs = [
  {
    id: 1,
    name: 'The Ultimate Guide to Event Planning',
    description:
      "Discover key strategies and tools to plan a successful event, whether it's a wedding, conference, or birthday bash.",
    image: '/assets/event-1.jpg',
  },
  {
    id: 2,
    name: 'How to Maximize Engagement at Your Events',
    description:
      'Learn how to boost audience participation and create memorable experiences that keep people coming back.',
    image: '/assets/event-12.jpg',
  },
  {
    id: 3,
    name: 'Top 10 Event Themes That Never Fail',
    description:
      'Stuck on ideas? These crowd-pleasing event themes are sure to inspire your next big gathering.',
    image: '/assets/event-3.jpg',
  },
  {
    id: 4,
    name: 'Mastering the Art of Virtual Events',
    description:
      'Tips and tools for hosting seamless and engaging online events that rival in-person experiences.',
    image: '/assets/event-4.jpg',
  },
  {
    id: 5,
    name: 'Behind the Scenes of a Music Festival',
    description:
      'Take a look at the logistics and planning that go into making a large-scale music festival run smoothly.',
    image: '/assets/event-5.jpg',
  },
  {
    id: 6,
    name: 'Eco-Friendly Event Planning Tips',
    description:
      'Explore how to host sustainable events without compromising on style or experience.',
    image: '/assets/event-6.jpg',
  },
  {
    id: 7,
    name: 'Event Marketing: What Actually Works?',
    description:
      'From social media to email campaigns, discover the most effective ways to promote your events.',
    image: '/assets/event-7.jpg',
  },
  {
    id: 8,
    name: 'Catering Ideas Your Guests Will Love',
    description:
      'From finger foods to gourmet spreads, these catering ideas are sure to impress at any event.',
    image: '/assets/event-8.jpg',
  },
  {
    id: 9,
    name: 'Post-Event Follow-Up Strategies',
    description:
      'Learn how to retain attendees and collect valuable feedback after your event ends.',
    image: '/assets/event-9.jpg',
  },
  {
    id: 10,
    name: 'Budgeting for Success: Event Finance 101',
    description:
      'A practical guide to creating and managing your event budget for maximum impact and minimum stress.',
    image: '/assets/event-10.jpg',
  },
]

export const entities = [
  {
    sector: "Not-for-Profits",
    description: "We empower NGOs, charities, and social enterprises to amplify their impact through strategic support in grant applications, fundraising, and programme development.",
    image: '/assets/ngo-image.jpg'
  },
  {
    sector: "Private Sector",
    description: "We partner with businesses to integrate social responsibility into operations, align commercial goals with the development agenda, and drive measurable social impact.",
    image: '/assets/modern-business-center.jpg'
  },
  {
    sector: "Public Sector (Sovereigns)",
    description: "We work with government entities to fundraise for social impact initiatives, bridge the gap between policy design and implementation, and ensure programmes reach their beneficiaries.",
    image: '/assets/Central-bank.jpg'
  },
  {
    sector: "Cross-Sector Collaborators",
    description: "We support partnerships that unite public, private, and non-profit actors to co-create scalable solutions for systemic challenges.",
    image: '/assets/cross-collaboration.jpg'
  }
];


  //   description:
  //   description:

// Make sure to import the icons at the top of your React file:
// import { FaBrain, FaRegFileAlt, FaChartBar, FaGlobe, FaHandshake, FaLightbulb } from 'react-icons/fa';

export const developmentArray = [
  {
    title: 'Comprehensive Expertise',
    color: '#4A90E2',
    icon: FaBrain,
    description:
      'Offering deep knowledge and guidance in various development fields. Our experts bring years of hands-on experience to drive informed decision-making.',
      background:'#dbe9f9'
  },
  {
    title: 'Policy Guidance',
    color: '#50E3C2',
    icon: FaRegFileAlt,
    description:
      'Providing informed policy recommendations for effective development. We help shape policies that align with both local context and global standards.',
      background:'#dcf9f3'
  },
  {
    title: 'Results-Based Management',
    color: '#F5A623',
    icon: FaChartBar,
    description:
      'Ensuring projects deliver tangible outcomes and measurable impact. Our approach emphasizes accountability and continuous improvement.',
      background:'#fdedd3'
  },
  {
    title: 'Holistic Approach',
    color: '#BD10E0',
    icon: FaGlobe,
    description:
      'Integrating economic, social, and technical aspects for sustainable solutions. We consider the full ecosystem to create long-term value.',
      background:'#f2cff9'
  },
  {
    title: 'Collaborative Network',
    color: '#7ED321',
    icon: FaHandshake,
    description:
      'Working with passionate specialists to ensure thorough and contextually relevant approaches. Together, we leverage diverse expertise for greater impact.',
      background:'#e5f6d3'
  },
  {
    title: 'Innovative Outcomes',
    color: '#D0021B',
    icon: FaLightbulb,
    description:
      'Delivering creative and impactful solutions for optimal results. Innovation is at the heart of everything we do to overcome complex challenges.',
      background:'#f6ccd1'
  },
]



export const infoArray = [
  {
    id: 1,
    name: 'mission',
    description: `Our mission is to empower the realisation of development aspirations 
through the design of sound policy options, innovative funding 
solutions, strategic programme implementation, and robust 
stakeholder engagement. We aim to serve as the conduit between 
ambition and achievement, guaranteeing that each project we 
embark upon is enduring, impactful and, in tandem with global 
development objectives.`,
    image: 'src/mission.jpg',
  },
  {
    id: 2,
    name: 'vision',
    description: `Our vision is to emerge as a global leader in sustainable development 
consulting. We envision a world where every organisation, 
irrespective of its scale or sector, is empowered with the resources 
and assistance necessary to reach its goals and audience, while 
actively contributing to a sustainable and prosperous future for all.`,
    image: 'src/vision.jpg',
  },
  {
    id: 3,
    name: 'values',
    description: `Our values shape the way we work and the impact we create. 
We believe in accountability, ensuring that every project delivers measurable 
results. We value collaboration, working closely with diverse stakeholders to 
design context-sensitive solutions. We prioritise innovation, constantly seeking 
creative approaches to complex challenges. Above all, we are committed to 
sustainability and inclusivity, ensuring that our work contributes to lasting, 
positive change. `,
    image: 'src/values.jpg',
  }
]



export const events = [
  {
    id: 1,
    name: 'The Ultimate Guide to Event Planning',
    description:
      "Discover key strategies and tools to plan a successful event, whether it's a wedding, conference, or birthday bash.",
    image: '/assets/AAD-2025.jpg',
  },
  {
    id: 2,
    name: 'How to Maximize Engagement at Your Events',
    description:
      'Learn how to boost audience participation and create memorable experiences that keep people coming back.',
    image: '/assets/AAD-2025-2.jpg',
  },
  {
    id: 3,
    name: 'Top 10 Event Themes That Never Fail',
    description:
      'Stuck on ideas? These crowd-pleasing event themes are sure to inspire your next big gathering.',
    image: '/assets/AAD-2025-4.jpg',
  }]




  export const approach = [
    {
      name: " Needs Assessment and Contextual Analysis",
      description: "We begin with a comprehensive Needs Assessment, engaging NGOs, charities, and social enterprises to identify their unique challenges, goals, and operational contexts. ",
      image: '/assets/needs.jpg'
    },
    {
      name: " Strategic Alignment and Stakeholder Engagement",
      description: "We initiate a process of Strategic Alignment by leveraging our sectoral expertise and established networks.",
      image: '/assets/strategic.jpg'
    },
    {
      name: " Solution Design and Co-Creation",
      description: "In this phase, we apply Human-Centered Design and Co-Creation Methodologies to develop tailored, context-sensitive solutions.",
      image: '/assets/solutions.jpg'
    },
    {
      name: "Impact Evaluation & Systems Scaling",
      description: "We implement robust Monitoring, Evaluation, and Learning (MEL) frameworks to assess outcomes and drive continuous improvement.",
      image: '/assets/monitoring.jpg'
    }
  ]


export const newBlogs = [
  {
    id: 1,
    title: "Africa Agriculture Dialogue 2025: Unlocking Finance for Agricultural Transformation",
    date: "2025-10-23",
    author: "AAD Communications Team",
    tags: ["Agriculture", "Finance", "Africa", "Dialogue", "Development"],
    image: "/assets/AAD-dialogue.jpg",
    summary: `
      In October 2025, Abuja will host the Africa Agriculture Dialogue, the first time this global platform convenes on African soil. This is not a symbolic gesture; it is a recognition that Africa is ready to exercise sovereignty over the future of its food and nutrition security.

      The theme, “Unlocking Finance for Agricultural Transformation in Africa,” speaks to the most persistent barrier facing African farmers. Smallholders, the majority of them women and youth, produce much of what Africa eats. Yet they remain excluded from the financial systems that should enable their growth. To unlock finance is to unlock opportunity, to give millions of farmers the means to move from subsistence to enterprise, from vulnerability to dignity.
    `,
    contentBlocks: [
      {
        label: "A theme that demands solutions",
        items:[
          `A theme that demands solutions: Finance is the bloodstream of agriculture, and its scarcity has long held the sector hostage. This Dialogue will not be about resurfacing old problems but about charting bold pathways to channel credit, insurance, and investment into agriculture at scale. Expect ideas that move from the theoretical to the implementable, from promise to practice.`,
          `African voices shaping the agenda: For too long, Africa has been positioned as the subject of global conversations rather than the author of its own narrative. At AAD 2025, Africans will lead with clarity and confidence. Financiers, investors, researchers, and policymakers will bring their experiences to the table, not as afterthoughts but as the blueprint for global solutions.`,
          `African voices shaping the agenda: For too long, Africa has been positioned as the subject of global conversations rather than the author of its own narrative. At AAD 2025, Africans will lead with clarity and confidence. Financiers, investors, researchers, and policymakers will bring their experiences to the table, not as afterthoughts but as the blueprint for global solutions.`,
          `Partnerships that break silos: Transformation does not happen in isolation. The Dialogue will convene unlikely allies — farmers and financiers, policymakers and innovators, governments and philanthropists. In the same room, they will explore how to align risk, capital, and ambition. Expect conversations that blur boundaries and build bridges, creating partnerships strong enough to endure beyond the event.`,
          `Real commitments: The true test of AAD 2025 will be what happens after the closing session. Dialogue is valuable, but its value is proven only when words translate into measurable action. This year, the Dialogue is designed not just to inspire but to consolidate. Commitments made in Abuja will be captured in a compact document — a living roadmap that will travel with Africa to the global stage in Des Moines later in the year. This compact will spell out the reforms, partnerships, and financing instruments pledged, from governments unlocking land and markets, to financial institutions deploying de-risking tools that give banks the confidence to lend, to private sector actors pledging investments that expand hectarage and transform livelihoods. Abuja will therefore not mark an end, but a beginning, with Des Moines as the next milestone for accountability and global resonance.`,
          `A confident Africa on the global stage: Abuja will not just host a gathering. It will host a statement of intent. AAD 2025 will project Africa’s agricultural vision to the world — a continent ready to feed itself, to trade with itself, and to lead global food systems transformation. It will say with authority that Africa is not waiting for aid or sympathy. Africa is ready for investment, partnership, and leadership.`
        ]
      },
      
      
    ],
    closingNote: `
      AAD 2025 will be both a mirror and a milestone, showcasing the progress made and the potential yet to be unlocked in Africa’s agricultural transformation. It is not just another conference — it is a declaration of readiness, resilience, and reform. Join us in Abuja to be part of the transformation.
    `
  },
  {
    id: 2,
    title: "Bridging Nigeria’s Primary Healthcare Gap: Identifying the Issues and Laying Down Solutions",
    date: "2025-10-23",
    author: "Health Policy Desk",
    tags: ["Healthcare", "Nigeria", "PHC", "Public Health", "Development"],
    image: "/assets/primary-healthcare.jpg",
    summary: `
      Nigeria’s Primary Healthcare (PHC) system is designed to be the foundational first line of defense for the country’s population of over 220 million people, yet it is currently underperforming significantly. Recent estimates show that only around 20% of Nigeria’s approximately 30,000 PHC facilities are fully functional, leaving the vast majority of communities without consistent access to adequately equipped or staffed healthcare centers. This shortfall is particularly critical for maternal health; only about 1.8% of PHC facilities meet the minimum requirement of skilled birth attendants needed for safe deliveries, a dire gap contributing to Nigeria’s high maternal mortality ratio of roughly 512 deaths per 100,000 live births. Although there has been some progress with a 12% reduction in maternal mortality in 2025 compared to the previous year, much remains to be done to ensure safe antenatal and newborn care.

      Fiscal commitments exacerbate the challenges: Nigeria’s federal health budget for 2024 allocated only about 4.6% of the national budget to the health sector, far below the 15% Abuja Declaration target recommended for African countries. This underfunding impedes large-scale PHC revitalization efforts. Furthermore, the country loses an estimated $1.1 to $1.2 billion annually to medical tourism, signaling both a trust deficit in local healthcare quality and a substantial economic loss that could otherwise be reinvested in strengthening domestic health services. Despite this, national efforts are underway to revitalize PHCs, with government programs adding and upgrading facilities and improving immunization coverage, showing early signs of progress in public confidence and usage of PHC services.

      This context underscores an urgent need to bridge Nigeria’s primary healthcare gap through investment in infrastructure, skilled personnel, adequate funding, and community trust to restore the PHC system as an accessible, reliable cornerstone of the nation’s health security. Comprehensive reforms must address systemic weaknesses and leverage ongoing initiatives to reduce maternal mortality, improve service delivery, and curb financial leakages to medical tourism.
    `,
    contentBlocks: [
      {
        label: "Key Gaps in Nigeria’s Primary Healthcare System",
        items: [
          "Infrastructure and Functionality Deficit: Only about 20% of PHC facilities meet required service standards, with many lacking water, power, and essential drugs.",
          "Shortage of Skilled Health Personnel: Just 1.8% of PHCs have the minimum number of skilled birth attendants required to ensure safe maternal care.",
          "Inadequate Budget Allocation and Utilisation: Nigeria’s health budget falls well below the Abuja Declaration goal of 15% allocation to health.",
          "Access, Utilisation, and Trust Barriers: Communities often bypass PHCs due to perceived or real poor quality of care and weak referral systems.",
          "Governance, Accountability, and Programme Continuity Weaknesses: Coordination gaps between federal, state and local governments hinder consistent policy execution."
        ]
      },
      {
        label: "Four Key Government Interventions in 2025",
        items: [
          "Enhanced Financing through BHCPF 2.0: The government disbursed ₦32.9 billion via the Basic Health Care Provision Fund to strengthen PHC services nationwide.",
          "Infrastructure and Equipment Upgrades: Over 900 PHCs have been rehabilitated with solar power, cold-chain storage, and essential medical supplies.",
          "Human Resources Capacity Building: Training and incentivizing skilled birth attendants and community health extension workers across states.",
          "Emergency Medical Service Expansion: The National Emergency Medical Service and Ambulance System now operates in over 30 states, improving rural access to urgent care."
        ]
      },
      {
        label: "Proposed Solutions to Strengthen Nigeria’s PHC System",
        items: [
          "Strengthen Infrastructure and Equipment: Focus investments on upgrading facilities and ensuring reliable supply chains for essential drugs and vaccines.",
          "Expand and Retain Skilled Workforce: Enhance training programs and provide rural service incentives to curb health worker attrition.",
          "Increase and Improve Health Financing: Scale up budget allocations toward the 15% Abuja Declaration target, ensuring transparent fund utilization.",
          "Build Community Trust and Increase Access: Implement health education campaigns and revive community health committees to improve service uptake.",
          "Governance and Accountability Enhancements: Improve coordination across government tiers and embed PHC reforms into law to ensure sustainability."
        ]
      }
    ],
    closingNote: `
      Reimagining Nigeria’s PHC system demands a mix of political will, investment, and accountability. Strengthening governance, financing, and community trust will not only save lives but also serve as the foundation for a resilient national health architecture.
    `
  }
];

