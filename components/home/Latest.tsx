const latest = [
  {
    name: 'Approved cost for the eCourts Phase II Schemes in 2015 was Rs. 1670 crores for 4 years, of which approximately 70% has been utilized so far.',
    link: '#',
  },
  {
    name: 'In 2021, a new scheme - SAMBAL - was introduced under the Ministry of Women and Child Development by combining the budgets for 7 other schemes, including One Stop Center and Mahila Police Volunteers.',
    link: '#',
  },
  {
    name: 'Expenditure on nation-wide elections, on average, formed  x% of total expenditure of law and justice ministry between 2015-16 and 2019-20.',
    link: '#',
  },
];

const Latest = () => {
  return (
    <section className="home-latest container">
      <div>
        <h2 className="heading">Do You Know?</h2>
        <p className="home__sub-head">
          Everything you need to analyse the data more efficiently
        </p>
      </div>
      <ul>
        {latest.map((news, index) => (
          <li key={`latest-${index}`}>
            <span>{`0${index + 1}`}</span>
            <a href={news.link}>{news.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Latest;
