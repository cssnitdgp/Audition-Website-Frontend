export const FORM_DATA = [
	{
		page: 1,
		subHeading: "Personal Information",
		questionData: [
			{
				id: 1,
				title: "Enter your Name",
				required: true,
				value: "name",
				type: "textfield",
				inputType: "text",
			},
			{
				id: 2,
				title: "Enter your Roll Number",
				required: true,
				value: "roll_no",
				type: "textfield",
				inputType: "text",
			},
			{
				id: 3,
				title: "Enter your Registration Number",
				required: true,
				value: "reg_no",
				type: "textfield",
				inputType: "text",
			},
			{
				id: 4,
				title: "Enter your Personal Email ID",
				required: true,
				value: "email_id",
				type: "textfield",
				inputType: "email",
			},
			{
				id: 5,
				title: "Enter your Institute Email ID",
				required: true,
				value: "ins_email_id",
				type: "textfield",
				inputType: "email",
			},
			{
				id: 6,
				title: "Link to your github profile (Optional).",
				required: false,
				value: "github",
				type: "textfield",
				inputType: "text",
			},
			{
				id: 7,
				title: "Link to your Linkedin profile (Optional).",
				required: false,
				value: "linkedin",
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
					{ id: "web_dev", option: "Web Development" },
					{ id: "gd", option: "Graphic Design" },
					{ id: "vid_edit", option: "Video Editing" },
					{ id: "alumini_outreach", option: "Alumini Outreach" },
					{ id: "event_man", option: "Event Management" },
					{ id: "app_dev", option: "App Development" },
					{ id: "content_writing", option: "Content Writing" },
				],
				type: "checkbox",
				required: false,
			},
			{
				id: 2,
				title: "Give the preference order of the roles you are interested in.",
				type: "textfield",
				value: "pref_order",
				required: true,
			},
			{
				id: 3,
				title:
					"Rate yourself on the tech-stack/ softwares / tools you are good at on a scale of 1-10.",
				type: "textfield",
				value: "tech_stack",
				required: true,
			},
			{
				id: 4,
				title:
					"Give links of some of your previous works related to the roles you are applying for.(optional)",
				type: "textfield",
				value: "prev_links",
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
					{ id: 1, value: "hardwork", option: "Hardworking" },
					{ id: 2, value: "teamwork", option: "Team Work" },
					{ id: 3, value: "humor", option: "Sense of Humor" },
					{ id: 4, value: "punctual", option: "Punctual" },
					{ id: 5, value: "creative", option: "Creativity" },
					{ id: 6, value: "prob_solving", option: "Problem Solving Skill" },
					{ id: 7, value: "responsible", option: "Responsibility" },
				],
				type: "textfield",
				fieldType: "number",
			},
		],
	},
];
