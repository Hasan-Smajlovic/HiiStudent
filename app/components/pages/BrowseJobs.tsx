import React, { useState } from "react";
import Navigation from "./Navigation";
import FooterPage from "./FooterPage";
import "../assets/styles/BrowseJobsStyle.css";

function BrowseJobs() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <Navigation />
      <section id="browseJobs">
        <div className="browseJobsContainer">
          <h1>Feel Free to Post Your Job!</h1>
          <div className="filterBox">
            <div className="browseJobsFilter">
              <div className="jobCategory">
                <h3>Job Category</h3>
                <select title="Job">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="jobTypeContainer">
                <div className="jobType">
                  <h3>Job Type</h3>
                  <input
                    type="checkbox"
                    name="fullTime"
                    id="fullTimeCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="fullTimeCheckbox">Full Time</label>
                </div>
                <div className="jobType">
                  <input
                    type="checkbox"
                    name="partTime"
                    id="partTimeCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="partTimeCheckbox">Part Time</label>
                </div>
                <div className="jobType">
                  <input
                    type="checkbox"
                    name="remote"
                    id="remoteCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="remoteCheckbox">RemoTe</label>
                </div>
                <div className="jobType">
                  <input
                    type="checkbox"
                    name="freelance"
                    id="freelanceCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="freelanceCheckbox">Freelance</label>
                </div>
              </div>
              <div className="jobLocation">
                <h3>Location</h3>
                <select title="Location">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="jobTypeExperienceContainer">
                <div className="jobTypeExperience">
                  <h3>Experience</h3>
                  <input
                    type="checkbox"
                    name="oneTwoYears"
                    id="oneTwoYearsCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="oneTwoYearsCheckbox">Full Time</label>
                </div>
                <div className="jobTypeExperience">
                  <input
                    type="checkbox"
                    name="twoThreeYears"
                    id="twoThreeYearsCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="twoThreeYearsCheckbox">Part Time</label>
                </div>
                <div className="jobTypeExperience">
                  <input
                    type="checkbox"
                    name="threeSixYears"
                    id="threeSixYearsCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="threeSixYearsCheckbox">RemoTe</label>
                </div>
                <div className="jobTypeExperience">
                  <input
                    type="checkbox"
                    name="sixPlus"
                    id="sixPlusCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="sixPlusCheckbox">Freelance</label>
                </div>
              </div>

              <div className="postedWithinContainer">
                <div className="postedWithin">
                  <h3>Posted Within</h3>
                  <input
                    type="checkbox"
                    name="any"
                    id="anyCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="anyCheckbox">Any</label>
                </div>
                <div className="postedWithin">
                  <input
                    type="checkbox"
                    name="today"
                    id="todayCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="todayCheckbox">Today</label>
                </div>
                <div className="postedWithin">
                  <input
                    type="checkbox"
                    name="lastTwoDays"
                    id="lastTwoDaysCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="lastTwoDaysCheckbox">Last Two Days</label>
                </div>
                <div className="postedWithin">
                  <input
                    type="checkbox"
                    name="lastThreeDays"
                    id="lastThreeDaysCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="lastThreeDaysCheckbox">Last Three Days</label>
                </div>
                <div className="postedWithin">
                  <input
                    type="checkbox"
                    name="lastFiveDays"
                    id="lastFiveDaysCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="lastFiveDaysCheckbox">Last Five Days</label>
                </div>
                <div className="postedWithin">
                  <input
                    type="checkbox"
                    name="lastTenDays"
                    id="lastTenDaysCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="lastTenDaysCheckbox">Last Ten Days</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterPage />
    </>
  );
}

export default BrowseJobs;
