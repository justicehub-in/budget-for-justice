const didYouKnow = [
  {
    content:
      "Approved cost for the eCourts Phase II Schemes in 2015 was Rs. 1670 crores for 4 years, of which approximately 70% has been utilized so far.",
  },
  {
    content:
      "In 2021, a new scheme - SAMBAL - was introduced under the Ministry of Women and Child Development by combining the budgets for 7 other schemes, including One Stop Center and Mahila Police Volunteers.",
  },
  {
    content:
      "Expenditure on nation-wide elections, on average, formed  x% of total expenditure of law and justice ministry between 2015-16 and 2019-20.",
  },
];
const Header = () => {
  return (
    <section className="home-header">
      <div className="container wrapper">
        <h2>Did you know?</h2>
        <ul>
          {didYouKnow.map((item, index) => (
            <li key={`homeHeader-${index}`}>
              <span></span> {item.content}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Header;
