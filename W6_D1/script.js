const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];
// Interazione case insensitive in minuscolo
function searchJobs(title, location) {
  const lowerTitle = title.toLowerCase();
  const lowerLocation = location.toLowerCase();
  // itera i campi all'interno dell'array jobs
  const results = [];

  for (const job of jobs) {
    const lowerJobTitle = job.title.toLowerCase();
    const lowerJobLocation = job.location.toLowerCase();
    // Aggiunge gli elementi nell'array results se entrambi gli elementi includono il minuscolo
    if (
      lowerJobTitle.includes(lowerTitle) &&
      lowerJobLocation.includes(lowerLocation)
    ) {
      results.push(job);
    }
  }
  // ritorna i risultati nel campi result e count
  return {
    result: results,
    count: results.length,
  };
}

// Crea la funzione per l'algoritmo di ricerca
function performSearch() {
  // cancella la lista ad ogni ricerca
  const resultsList = document.getElementById("resultsList");
  resultsList.innerHTML = "";
  const jobTitle = document.getElementById("jobTitle").value;
  const jobLocation = document.getElementById("jobLocation").value;

  // Chiama la funzione di ricerca
  const searchResult = searchJobs(jobTitle, jobLocation);

  function createTable(result) {
    const tr = document.createElement("tr");

    // Aggiungi le celle della riga e per ogni Title e Position make it bold!
    const tdTitle = document.createElement("td");
    const strongTitle = document.createElement("strong");
    strongTitle.textContent = "Titolo:  ";
    tdTitle.appendChild(strongTitle);

    const textTitle = document.createTextNode(result.title);
    tdTitle.appendChild(textTitle);

    const tdLocation = document.createElement("td");
    const strongLocation = document.createElement("strong");
    strongLocation.textContent = "Posizione: ";
    tdLocation.appendChild(strongLocation);

    const textLocation = document.createTextNode(result.location);
    tdLocation.appendChild(textLocation);

    // Aggiungi le celle alla riga
    tr.appendChild(tdTitle);
    tr.appendChild(tdLocation);

    return tr;
  }
  // Aggiungi i risultati alla lista
  for (let i = 0; i < searchResult.result.length; i++) {
    const result = searchResult.result[i];

    // Chiama la funzione createTable
    const resultTable = createTable(result);

    // Aggiungi la tabella come elemento della lista
    resultsList.appendChild(resultTable);
  }
}

// Enter input case
document
  .getElementById("jobTitle")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      performSearch();
    }
  });

document
  .getElementById("jobLocation")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      performSearch();
    }
  });

// Clear button per gli input e lista
function clearResults() {
  const resultsList = document.getElementById("resultsList");
  resultsList.innerHTML = "";

  const jobTitle = document.getElementById("jobTitle");
  jobTitle.value = "";

  const jobLocation = document.getElementById("jobLocation");
  jobLocation.value = "";
}
