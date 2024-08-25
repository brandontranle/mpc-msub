
export const navigations = [
    {
      title: "EXPERIENCE",
      link: "/",
      menuItems: [
        {
          label: "Student Life",
          link: "",
        },
        {
          label: "Summer Program",
          link: "",
        },
      ],
    },
    {
      title: "ABOUT",
      link: "/about",
      menuItems: [
        {
          label: "Who We Are",
          link: "",
        },
        {
          label: "First Generation Students",
          link: "",
        },
        {
          label: "Diversity & Inclusion",
          link: "",
        },
      ],
    },
    {
      title: "RESOURCES",
      link: "/services",
      menuItems: [
        {
          label: "Scholarships",
          link: "",
        },
        {
          label: "Student Resources",
          link: "",
        },
        {
          label: "Parent Resources",
          link: "",
        },
      ],
    },
    {
      title: "CONTACT",
      link: "/contact",
    },
  ];

export const feedbacks = [
{
  path: "/src/assets/images/1.png",
},
{
  path: "/src/assets/images/2.png",
},
{
  path: "/src/assets/images/3.png",
},
{
  path: "/src/assets/images/1.png",
},
{
  path: "/src/assets/images/2.png",
},
{
  path: "/src/assets/images/3.png",
}
]


export const homeContents = [
  {
    title: "Our Mission",
    text: "The Math-Science Upward Bound (MSUB) program is dedicated to empowering first-generation and income-eligible students to pursue successful careers in math and science. We aim to cultivate self-awareness, enhance understanding of others, and provide essential guidance for college readiness. Our goal is to inspire and prepare students to excel in their chosen fields and achieve their full potential.",
    img: "/src/assets/images/group-photo1.webp",
    flip: true,
  },
  {
    title: "Made for STEM Success",
    text: "For six weeks, these high school students immerse themselves in a rigorous schedule of STEM classes on the University of California, Santa Cruz campus. They study marine biology, mathematics, communications, foreign language, and computer science, gaining valuable academic experience and exposure to university life.",
    img: "/src/assets/images/group-photo1.webp",
    flip: false
  }



]

export const faqs = [
  {
    question: "What is Math-Science Upward Bound?",
    answer: "Math-Science Upward Bound (MSUB) is a federally funded program that provides free college preparatory services to high school students who are first-generation and/or low-income. The program is designed to help students excel in math and science and prepare for college."
  },
  {
    question: "Who is eligible to apply for MSUB?",
    answer: "MSUB is open to high school students who are first-generation college-bound, meaning neither parent has a four-year college degree, and/or students who meet low-income criteria based on federal guidelines."
  },
  {
    question: "What subjects are covered in the MSUB program?",
    answer: "Students participate in a six-week summer program at the University of California, Santa Cruz, covering subjects such as marine biology, mathematics, communications, foreign language, and computer skills."
  },
  {
    question: "What are the benefits of joining MSUB?",
    answer: "Participants benefit from rigorous academic training, personalized mentorship, college readiness workshops, and the opportunity to experience university life, all of which prepare them for success in college and beyond. Drop-in tutoring is available after school at Monterey Peninsula College."
  },
  {
    question: "Is there any cost to participate in the MSUB program?",
    answer: "No, the MSUB program is completely free for eligible students, as it is funded by the U.S. Department of Education."
  },
  {
    question: "How can I apply to the MSUB program?",
    answer: "Interested students can apply by completing an application form, which includes providing academic records, teacher recommendations, and a personal statement. Applications are typically available through school counselors or directly from the MSUB website."
  },
  {
    question: "What support is provided during the school year?",
    answer: "MSUB provides ongoing support throughout the school year, including tutoring, academic advising, college tours, and workshops focused on college applications and financial aid."
  }
];



export interface FAQDropdownProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}