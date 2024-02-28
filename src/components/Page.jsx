function Page({
  pageContactData,
  pageSchoolsData,
  pageWorksData,
  pageDutiesData,
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
              <div className="school">{pageSchoolData.school}</div>
              <div className="graduation-date">
                {pageSchoolData.graduationDate}
              </div>
              <div className="degree">{pageSchoolData.degree}</div>
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
              <div id="company">{pageWorkData.companyName}</div>
              <div id="work-time">
                <div>
                  {pageWorkData.dateHired} - {pageWorkData.dateLeft}
                </div>
              </div>
              <div id="position">{pageWorkData.positionTitle}</div>
            </div>
          ))}
        </div>
        <h3>Duties</h3>
        <ul>
          {Object.entries(pageDutiesData).map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { Page };
