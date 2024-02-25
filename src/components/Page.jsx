function Page({ pageData }) {
  return (
    <div id="page">
      <div id="contact-info-sec">
        <h2>{pageData.contactData.name}</h2>
        <div>
          <div id="phone">{pageData.contactData.phone}</div>
          <div id="email">{pageData.contactData.email}</div>
        </div>
      </div>
      <div id="school-info-sec">
        <h2>Education</h2>
        <hr />
        <div>
          <div id="school">{pageData.schoolData.school}</div>
          <div id="graduation-date">{pageData.schoolData.graduationDate}</div>
          <div id="degree">{pageData.schoolData.degree}</div>
        </div>
      </div>
      <div id="education-info-sec">
        <h2>Work</h2>
        <hr />
        <div>
          <div id="company">{pageData.workData.companyName}</div>
          <div id="work-time">
            <div>
              {pageData.workData.dateHired} - {pageData.workData.dateLeft}
            </div>
          </div>
          <div id="position">{pageData.workData.positionTitle}</div>
        </div>
      </div>
    </div>
  );
}

export { Page };
