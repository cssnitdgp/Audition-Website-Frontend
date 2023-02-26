import { googleLogout } from "@react-oauth/google";
import React, { useState, useLayoutEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FORM_DATA } from "../../data";

import "./Form.css";

const Form = ({ isUserLoggedIn }) => {
  const [page, setPage] = useState(0);
  const [skills,setSkills] = useState({
    web_dev : false,
    gd : false,
    vid_edit : false,
    alumini_outreach : false,
    event_man : false,
    app_dev : false,
    content_writing : false,
  });

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [aboutPerson, setAboutPerson] = useState(undefined);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    roll_no: "",
    reg_no: "",
    email_id: "",
    phone: "",
    github: "",
    linkedin: "",
  });

  const [skillsData, setSkillsData] = useState({
    pref_order: "",
    tech_stack: "",
    prev_links: "",
  });

  const [otherInfo, setOtherInfo] = useState({
    hardwork: "",
    teamwork: "",
    humor: "",
    punctual: "",
    creative: "",
    prob_solving: "",
    responsible: "",
  });


  console.log(personalInfo);

  let navigate = useNavigate();
  useLayoutEffect(() => {
    if (!isUserLoggedIn) {
      return navigate("/");
    }
  }, [isUserLoggedIn, navigate]);

const handleInputChange = (e, value) => {
    if (page === 0) {
      setPersonalInfo(previousState => {
        let y = e.target.value;
        if(value==="name")
        return { ...previousState, name:y }
        if(value==="roll_no")
        return { ...previousState, roll_no:y }
        else if(value==="reg_no")
        return { ...previousState, reg_no:y }
        else if(value==="email_id")
        return { ...previousState, email_id:y }
        else if(value==="phone")
        return { ...previousState, phone:y }
        else if(value==="github")
        return { ...previousState, github:y }
        else if(value==="linkedin")
        return { ...previousState, linkedin:y }
      });
    } else if (page === 2) {
      setSkillsData(previousState => {
        let y = e.target.value;
        if(value==="pref_order")
        return { ...previousState, pref_order:y }
        else if(value==="tech_stack")
        return { ...previousState, tech_stack:y }
        else if(value==="prev_links")
        return { ...previousState, prev_links:y }
      });
    } else if(page === 3) {
      setOtherInfo(previousState => {
        let y = e.target.value;
        if(value==="hardwork")
        return { ...previousState, hardwork:y }
        else if(value==="teamwork")
        return { ...previousState, teamwork:y }
        else if(value==="humor")
        return { ...previousState, humor:y }
        else if(value==="punctual")
        return { ...previousState, punctual:y }
        else if(value==="creative")
        return { ...previousState, creative:y }
        else if(value==="prob_solving")
        return { ...previousState, prob_solving:y }
        else if(value==="responsible")
        return { ...previousState, responsible:y }
      });
    }
  };

  const handleInputAreaChange = (e, value) => {
    if (page === 1) {
      setAboutPerson(e.target.value);
    } else if(page === 2) {
      setSkillsData(previousState => {
        let y = e.target.value;
        if(value==="pref_order")
        return { ...previousState, pref_order:y }
        else if(value==="tech_stack")
        return { ...previousState, tech_stack:y }
        else if(value==="prev_links")
        return { ...previousState, prev_links:y }
      });
    }
  };

  const handleCheckChange = (e, value) => {
    setSkills(previousState => {
        let y = e.target.checked;
        if(value==="web_dev")
        return { ...previousState, web_dev:y }
        else if(value==="gd")
        return { ...previousState, gd:y }
        else if(value==="vid_edit")
        return { ...previousState, vid_edit:y }
        else if(value==="alumini_outreach")
        return { ...previousState, alumini_outreach:y }
        else if(value==="event_man")
        return { ...previousState, event_man:y }
        else if(value==="app_dev")
        return { ...previousState, app_dev:y }
        else if(value==="content_writing")
        return { ...previousState, content_writing:y }
      });
    
  };


  const handlePageSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: personalInfo.name,
      rollno: personalInfo.roll_no,
      regno: personalInfo.reg_no,
      email: personalInfo.email_id,
      phone: personalInfo.phone,
      github: personalInfo.github,
      linkedin: personalInfo.linkedin,
      introduction: aboutPerson,
      skills: skillsData.tech_stack,
      roles: selectedSkills,
      preference: skillsData.pref_order,
      proj_link: skillsData.prev_links,
      hardworking: parseInt(otherInfo.hardwork),
      teamwork: parseInt(otherInfo.teamwork),
      senseofhumour: parseInt(otherInfo.humor),
      punctuality: parseInt(otherInfo.punctual),
      creativity: parseInt(otherInfo.creative),
      problemSolving: parseInt(otherInfo.prob_solving),
      responsibility: parseInt(otherInfo.responsible),
    };

    try {
      const url = "https://audition-backend.onrender.com/api/form/add";
      const { data: res } = await axios.post(url, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);
      if (res.message === "Form Submitted Successfully") {
        alert("Form Submitted Successfully");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
    }
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
    <div className='back'>
      <h3 style={{ marginBottom: "20px" }}>Login to fill the form</h3>
      <button className='btn primary' onClick={() => navigate("/")}>
        Go back
      </button>
    </div>
  ) : (
    <div className='form_root'>
      <div className='header'>
        <a href='/' className='nav_logo'>
          <img height='60' width='60' src='/favicon.png' alt='CSS' />
        </a>
        <div className='question-range'>
          <input
            type='range'
            min={0}
            max={FORM_DATA.length - 1}
            step={1}
            defaultValue={page}
            className='styled-slider slider-progress'
          />
          <span>
            Page : {page + 1}/{FORM_DATA.length}
          </span>
        </div>
        <button
          className='btn primary logout_btn'
          type='submit'
          onClick={() => {
            googleLogout();
            localStorage.removeItem("userinfo");
          }}
        >
          <a href='/'>Logout</a>
        </button>
      </div>
      <div className='questions-page'>
        {FORM_DATA.length > page && (
          <form>
            <div className='question_box'>
              <h3 className='question_heading'>{FORM_DATA[page].subHeading}</h3>
              {FORM_DATA[page].questionData.map((questions) => {
                return (
                  <div className='question' key={questions.id}>
                    <p>{questions.title}</p>
                    {questions.type === "textfield" &&
                      (questions.options ? (
                        questions.options.map((op) => {
                          return (
                            <div key={op.id} className='questions_input_num'>
                              <label className='option_label'>
                                {op.option}
                              </label>
                              <input
                                type={questions.fieldType}
                                required
                                min='1'
                                max='10'
                                size={2}
                                value={
                                  otherInfo[op.value]
                                }
                                onChange={(e) => handleInputChange(e, op.value)}
                                className='input_field'
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
                          className='input_field'
                        />
                      ))}

                    {questions.type === "textarea" && (
                      <textarea
                        className='input_area'
                        placeholder='Enter Here...'
                        value={
                          page === 1 ? aboutPerson : skillsData[questions.value]
                        }
                        onChange={(e) =>
                          handleInputAreaChange(e, questions.value)
                        }
                      />
                    )}
                    {questions.type === "checkbox" &&
                      questions.options.map((op) => {
                        return (
                          <div className='options_box' key={op.id}>
                            <label className='option_label'>
                              {op.option}
                              <input
                                type='checkbox'
                                id={op.id}
                                checked={
                                  skills[op.id]
                                }
                                onChange={(e) => {
                                  handleCheckChange(e, op.id);
                                  if(!(selectedSkills.includes(op.id)) && e.target.checked===true )
                                    selectedSkills.push(e.target.id);
                                  if((selectedSkills.includes(op.id)) && e.target.checked===false )
                                  {
                                    const index = selectedSkills.indexOf(op.id);
                                    selectedSkills.splice(index, 1);
                                  }
                                  setSelectedSkills(selectedSkills);
                                  console.log(
                                    selectedSkills.find((sk) => sk === op.id)
                                  );
                                }}
                              />
                              <span className='checkmark'></span>
                            </label>
                          </div>
                        );
                      })}
                  </div>
                );
              })}
            </div>
            <div className='button_group'>
              <button
                className='btn primary form_btn'
                type='button'
                id='prev'
                disabled={page === 0}
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                Go Back
              </button>
              {page < FORM_DATA.length - 1 && (
                <button
                  className='btn secondary form_btn'
                  type='button'
                  id='next'
                  onClick={() => {
                    setPage(page + 1);
                  }}
                >
                  Next
                </button>
              )}
              {page === FORM_DATA.length - 1 && (
                <button
                  className='btn secondary form_btn'
                  type='submit'
                  id='next'
                  onClick={handlePageSubmit}
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;