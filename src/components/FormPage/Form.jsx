import { googleLogout } from "@react-oauth/google";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FORM_DATA } from "../../data";

import "./Form.css";

const Form = ({ isUserLoggedIn }) => {
	const [page, setPage] = useState(0);
	let navigate = useNavigate();
	useEffect(() => {
		if (!isUserLoggedIn) {
			alert("You must be logged in");
			return navigate("/");
		}
	}, [isUserLoggedIn, navigate]);

	for (let e of document.querySelectorAll(
		'input[type="range"].slider-progress'
	)) {
		e.style.setProperty("--value", page);
		e.style.setProperty("--min", "0");
		e.style.setProperty("--max", FORM_DATA.length - 1);
		e.addEventListener("input", () => e.style.setProperty("--value", page));
	}

	return (
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
						value={page}
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
														<label className="option_label">{op.option}</label>
														<input
															type={questions.fieldType}
															required
															min={1}
															max={10}
															className="input_field"
														/>
													</div>
												);
											})
										) : (
											<input
												type={questions.inputType}
												required={questions.required}
												className="input_field"
											/>
										))}
									{questions.type === "textarea" && (
										<textarea
											className="input_area"
											placeholder="Enter Here..."
										/>
									)}
									{questions.type === "checkbox" &&
										questions.options.map((op) => {
											return (
												<div className="options_box" key={op.id}>
													<label className="option_label">
														{op.option}
														<input type="checkbox" />
														<span className="checkmark"></span>
													</label>
												</div>
											);
										})}
								</div>
							);
						})}
					</div>
				)}
				<div className="button_group">
					<button
						className="btn primary form_btn"
						type="submit"
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
						disabled={page === FORM_DATA.length - 1}
						onClick={() => {
							setPage(page + 1);
						}}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default Form;
