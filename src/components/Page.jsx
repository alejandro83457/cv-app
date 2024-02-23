function Page({ formInfo }) {
  return (
    <div id="page">
      <div id="contact-info-sec">
        <h2>{formInfo.name}</h2>
        <div>
          <div id="phone">{formInfo.phone}</div>
          <div id="email">{formInfo.email}</div>
        </div>
      </div>
      <div id="school-info-sec">
        <h2>Education</h2>
        <hr />
        <div>
          <div id="school">{formInfo.school}</div>
          <div id="graduation-date">{formInfo.graduationDate}</div>
          <div id="degree">{formInfo.degree}</div>
        </div>
      </div>
    </div>
  );
}

export { Page };
