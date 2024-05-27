function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const gcy = getCurrentYear();
  
  const budget = {
    [`income-${gcy}`]: income,
    [`gdp-${gcy}`]: gdp,
    [`capita-${gcy}`]: capita,
  };

  return budget;
}
