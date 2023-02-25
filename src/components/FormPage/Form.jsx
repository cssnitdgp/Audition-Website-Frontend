import { googleLogout } from "@react-oauth/google";
import React, { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FORM_DATA } from "../../data";

import "./Form.css";

const Form = ({ isUserLoggedIn }) => {
	const [page, setPage] = useState(0);
	const [selectedSkills, setSelectedSkills] = useState([]);
	const [aboutPerson, setAboutPerson] = useState("");
	const [personalInfo, setPersonalInfo] = useState({
		name: undefined,
		roll_no: undefined,
		reg_no: undefined,
		email_id: undefined,
		ins_email_id: undefined,
		github: undefined,
		linkedin: undefined,
	});

	const [skillsData, setSkillsData] = useState({
		pref_order: undefined,
		tech_stack: undefined,
		prev_links: undefined,
	});

	const [otherInfo, setOtherInfo] = useState({
		hardwork: undefined,
		teamwork: undefined,
		humor: undefined,
		punctual: undefined,
		creative: undefined,
		prob_solving: undefined,
		responsible: undefined,
	});

	let navigate = useNavigate();
	useLayoutEffect(() => {
		if (!isUserLoggedIn) {
			return navigate("/");
		}
	}, []);

	const handleInputChange = (e, value) => {
		if (page === 0) {
			personalInfo[value] = e.target.value;
			setPersonalInfo(personalInfo);
		} else if (page === 2) {
			skillsData[value] = e.target.value;
			setSkillsData(skillsData);
		} else {
			otherInfo[value] = e.target.value;
			setOtherInfo(otherInfo);
		}
	};

	const handlePageSubmit = (e) => {
		e.preventDefault();
		// bakckend api integration
		console.log(personalInfo);
		console.log(selectedSkills);
		console.log(skillsData);
		console.log(otherInfo);
		setPage(page + 1);
	};

	for (let e of document.querySelectorAll(
		'input[type="range"].slider-progress'
	)) {
		e.style.setProperty("--value", page);
		e.style.setProperty("--min", "0");
		e.style.setProperty("--max", FORM_DATA.length - 1);
		e.addEventListener("input", () => e.style.setProperty("--value", page));
	}

	return !isUserLoggedIn ? (
		<div className="back">
			<h3 style={{ marginBottom: "20px" }}>Login to fill the form</h3>
			<button className="btn primary" onClick={() => navigate("/")}>
				Go back
			</button>
		</div>
	) : (
		<div className="form_root">
			<div className="header">
				<a href="/" className="nav_logo">
					<img height="60" width="60" src="/favicon.png" alt="CSS" />
				</a>
				<div className="question-range">
					<input
						type="range"
						min={0}
						max={FORM_DATA.length - 1}
						step={1}
						defaultValue={page}
						className="styled-slider slider-progress"
					/>
					<span>
						Page : {page + 1}/{FORM_DATA.length}
					</span>
				</div>
				<button
					className="btn primary logout_btn"
					type="submit"
					onClick={() => {
						googleLogout();
						localStorage.removeItem("userinfo");
					}}
				>
					<a href="/">Logout</a>
				</button>
			</div>
			<div className="questions-page">
				{FORM_DATA.length > page && (
					<form onSubmit={handlePageSubmit}>
						<div className="question_box">
							<h3 className="question_heading">{FORM_DATA[page].subHeading}</h3>
							{FORM_DATA[page].questionData.map((questions) => {
								return (
									<div className="question" key={questions.id}>
										<p>{questions.title}</p>
										{questions.type === "textfield" &&
											(questions.options ? (
												questions.options.map((op) => {
													return (
														<div className="questions_input_num">
															<label className="option_label">
																{op.option}
															</label>
															<input
																type={questions.fieldType}
																required
																min={1}
																max={10}
																onChange={(e) => handleInputChange(e, op.value)}
																className="input_field"
															/>
														</div>
													);
												})
											) : (
												<input
													type={questions.inputType}
													required={questions.required}
													value={
														page === 0
															? personalInfo[questions.value]
															: skillsData[questions.value]
													}
													onChange={(e) =>
														handleInputChange(e, questions.value)
													}
													className="input_field"
												/>
											))}
										{questions.type === "textarea" && (
											<textarea
												className="input_area"
												placeholder="Enter Here..."
												value={aboutPerson}
												onChange={(e) => setAboutPerson(e.target.value)}
											/>
										)}
										{questions.type === "checkbox" &&
											questions.options.map((op) => {
												return (
													<div className="options_box" key={op.id}>
														<label className="option_label">
															{op.option}
															<input
																type="checkbox"
																id={op.id}
																onChange={(e) => {
																	selectedSkills.push(e.target.id);
																	setSelectedSkills(selectedSkills);
																	console.log(
																		selectedSkills.find((sk) => sk === op.id)
																	);
																}}
															/>
															<span className="checkmark"></span>
														</label>
													</div>
												);
											})}
									</div>
								);
							})}
						</div>
						<div className="button_group">
							<button
								className="btn primary form_btn"
								type="submit"
								id="prev"
								disabled={page === 0}
								onClick={() => {
									setPage(page - 1);
								}}
							>
								Go Back
							</button>
							<button
								className="btn secondary form_btn"
								type="submit"
								id="next"
								disabled={page === FORM_DATA.length - 1}
							>
								{page === FORM_DATA.length - 1 ? "Submit" : "Next"}
							</button>
						</div>
					</form>
				)}
			</div>
		</div>
	);
};

export default Form;
