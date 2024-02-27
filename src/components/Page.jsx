function Page({
  pageContactData,
  pageSchoolData,
  pageWorkData,
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
        <div>
          <div id="school">{pageSchoolData.school}</div>
          <div id="graduation-date">{pageSchoolData.graduationDate}</div>
          <div id="degree">{pageSchoolData.degree}</div>
        </div>
      </div>
      <div id="education-info-sec">
        <h2>Work</h2>
        <hr />
        <div>
          <div id="company">{pageWorkData.companyName}</div>
          <div id="work-time">
            <div>
              {pageWorkData.dateHired} - {pageWorkData.dateLeft}
            </div>
          </div>
          <div id="position">{pageWorkData.positionTitle}</div>
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
