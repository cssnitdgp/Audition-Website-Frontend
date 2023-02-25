export const FORM_DATA = [
  {
    page: 1,
    subHeading: "Personal Information",
    questionData: [
      {
        id: 1,
        title: "Enter your Name",
        required: true,
        type: "textfield",
        inputType: "text",
      },
      {
        id: 2,
        title: "Enter your Roll Number",
        required: true,
        type: "textfield",
        inputType: "text",
      },
      {
        id: 3,
        title: "Enter your Registration Number",
        required: true,
        type: "textfield",
        inputType: "text",
      },
      {
        id: 7,
        title: "Enter your Personal Email ID",
        required: true,
        type: "textfield",
        inputType: "email",
      },
      {
        id: 4,
        title: "Phone Number(Preferably Whatsapp)",
        required: true,
        type: "Number",
        inputType: "Number",
      },
      {
        id: 5,
        title: "Link to your github profile (Optional).",
        required: false,
        type: "textfield",
        inputType: "text",
      },
      {
        id: 6,
        title: "Link to your Linkedin profile (Optional).",
        required: false,
        type: "textfield",
        inputType: "text",
      },
    ],
  },
  {
    page: 2,
    subHeading: "Personal Information",
    questionData: [
      {
        id: 1,
        title: "Give a brief introduction of yourself.",
        type: "textarea",
        required: true,
      },
    ],
  },
  {
    page: 3,
    subHeading: "Skills",
    questionData: [
      {
        id: 1,
        title: "Tick the roles you are interested in:",
        options: [
          { id: 1, option: "Web Development" },
          { id: 2, option: "Graphic Design" },
          { id: 3, option: "Video Editing" },
          { id: 4, option: "Alumini Outreach" },
          { id: 5, option: "Event Management" },
          { id: 6, option: "App Development" },
          { id: 7, option: "Content Writing" },
        ],
        type: "checkbox",
        required: false,
      },
      {
        id: 2,
        title: "Give the preference order of the roles you are interested in.",
        type: "textfield",
        required: true,
      },
      {
        id: 3,
        title:
          "Rate yourself on the tech-stack/ softwares / tools you are good at on a scale of 1-10.",
        type: "textfield",
        required: true,
      },
      {
        id: 4,
        title:
          "Give links of some of your previous works related to the roles you are applying for.(optional)",
        type: "textfield",
        required: "false",
      },
    ],
  },
  {
    page: 4,
    subHeading: "Other Information",
    questionData: [
      {
        id: 1,
        title: "Rate yourself on the scale of 1-10 on following skills : ",
        options: [
          { id: 1, option: "Hardworking" },
          { id: 2, option: "Team Work" },
          { id: 3, option: "Sense of Humor" },
          { id: 4, option: "Punctual" },
          { id: 5, option: "Creativity" },
          { id: 6, option: "Problem Solving Skill" },
          { id: 7, option: "Responsibility" },
        ],
        type: "textfield",
        fieldType: "number",
      },
    ],
  },
];
