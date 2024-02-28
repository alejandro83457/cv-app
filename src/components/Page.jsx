function Page({ pageContactData, pageSchoolsData, pageWorksData }) {
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
              <div className="school">{pageSchoolData.school}</div>
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
    </div>
  );
}

export { Page };
