function Page({
  pageContactData,
  pageSchoolsData,
  pageWorksData,
  pageSkillsData,
}) {
  return (
    <div id="page">
      <div id="contact-info-sec">
        <h2>{pageContactData.name}</h2>
        <div>
          <div id="phone">{pageContactData.phone}</div>
          <div id="email">{pageContactData.email}</div>
        </div>
      </div>
      <div id="school-info-sec">
        <h2>Education</h2>
        <hr />
        <div id="schools-info">
          {Object.entries(pageSchoolsData).map(([key, pageSchoolData]) => (
            <div key={key}>
              <div className="school">
                <b>{pageSchoolData.school}</b>
              </div>
              <div className="graduation-date">
                {pageSchoolData.graduationDate}
              </div>
              <div className="degree">
                <i>{pageSchoolData.degree}</i>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="work-info-sec">
        <h2>Work</h2>
        <hr />
        <div id="works-info">
          {Object.entries(pageWorksData).map(([key, pageWorkData]) => (
            <div key={key}>
              <div>
                <div id="company">
                  <b>{pageWorkData.companyName}</b>
                </div>
                <div id="work-time">
                  <div>
                    {pageWorkData.dateHired} - {pageWorkData.dateLeft}
                  </div>
                </div>
                <div id="position">
                  <i>{pageWorkData.positionTitle}</i>
                </div>
              </div>
              <div>Duties:</div>
              <ul>
                {Object.entries(pageWorkData.dutiesData).map(([key, value]) => (
                  <li key={key}>{value}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div id="skills-info-sec">
        <h2>Skills</h2>
        <hr />
        <div id="skills-info">
          {Object.entries(pageSkillsData).map(([key, value]) => (
            <div key={key}>{value}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Page };
