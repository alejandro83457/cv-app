function Page({
  pageContactData,
  pageSchoolsData,
  pageWorksData,
  pageSkillsData,
  lightTheme,
}) {
  function parseDate(date) {
    date = date.split('-');
    let months = {
      '01': 'Jan',
      '02': 'Feb',
      '03': 'Mar',
      '04': 'Apr',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'Aug',
      '09': 'Sep',
      10: 'Oct',
      11: 'Nov',
      12: 'Dec',
    };
    return `${months[date[1]]} ${date[0]}`;
  }

  return (
    <div id="page" className={lightTheme ? '' : 'dark-page'}>
      <div id="contact-info-sec">
        <h2>{pageContactData.name}</h2>
        <div className="phone-email-div">
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
                {parseDate(pageSchoolData.graduationDate)}
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
                    {parseDate(pageWorkData.dateHired)} -{' '}
                    {parseDate(pageWorkData.dateLeft)}
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
