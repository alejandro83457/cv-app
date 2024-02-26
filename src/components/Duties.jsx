function Duties({ data, handleForm }) {
  return (
    <div id="duties">
      {data.workData.duties.map((item, index) => {
        console.log('test');
        return (
          <input
            type="text"
            key={index}
            value={item}
            onChange={(e) => handleForm(e, 'duties')}
          />
        );
      })}
      <input type="text" />
    </div>
  );
}
export { Duties };
