import Card from "./components/Card";
const App = () => {
  //data  to be passed to components via props
  const jobs = [
    {
      company_logo_url:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      company_name: "Google",
      posted_ago_days: 2,
      job_role: "Frontend Developer",
      employment_type: "Full-time",
      experience: "Mid-Level",
      price_usd: 120,
      location: "Bangalore, India",
    },
    {
      company_logo_url:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      company_name: "Amazon",
      posted_ago_days: 5,
      job_role: "Backend Engineer",
      employment_type: "Full-time",
      experience: "Mid-Level",
      price_usd: 110,
      location: "Hyderabad, India",
    },
    {
      company_logo_url:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      company_name: "Microsoft",
      posted_ago_days: 1,
      job_role: "Software Engineer",
      employment_type: "Full-time",
      experience: "Expert",
      price_usd: 130,
      location: "Noida, India",
    },
    {
      company_logo_url:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      company_name: "Netflix",
      posted_ago_days: 3,
      job_role: "UI Engineer",
      employment_type: "Contract",
      experience: "Beginner",
      price_usd: 140,
      location: "Remote",
    },
    {
      company_logo_url:
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
      company_name: "Meta",
      posted_ago_days: 4,
      job_role: "Full Stack Developer",
      employment_type: "Full-time",
      experience: "Mid-Level",
      price_usd: 125,
      location: "Gurgaon, India",
    },
    {
      company_logo_url:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
      company_name: "Tesla",
      posted_ago_days: 6,
      job_role: "Embedded Engineer",
      employment_type: "Full-time",
      experience: "High-level",
      price_usd: 135,
      location: "Pune, India",
    },
    {
      company_logo_url:
        "https://fabrikbrands.com/wp-content/uploads/Adobe-Logo-History-5.png",
      company_name: "Adobe",
      posted_ago_days: 2,
      job_role: "Frontend Engineer",
      employment_type: "Full-time",
      experience: "Beginner",
      price_usd: 115,
      location: "Noida, India",
    },
    {
      company_logo_url:
        "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
      company_name: "Uber",
      posted_ago_days: 7,
      job_role: "Data Engineer",
      employment_type: "Full-time",
      experience: "Mid-Level",
      price_usd: 118,
      location: "Bangalore, India",
    },
    {
      company_logo_url:
        "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
      company_name: "Airbnb",
      posted_ago_days: 3,
      job_role: "Product Engineer",
      employment_type: "Contract",
      experience: "Expert",
      price_usd: 122,
      location: "Remote",
    },
    {
      company_logo_url:
        "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
      company_name: "Spotify",
      posted_ago_days: 1,
      job_role: "Mobile Developer",
      employment_type: "Full-time",
      experience: "Mid-Level",
      price_usd: 117,
      location: "Remote",
    },
  ];

  return (
    <div className="parent">
      {jobs.map(function (element, idx) {
        return (
          <div key={idx}>
            <Card
              company_logo_url={element.company_logo_url}
              companyName={element.company_name}
              days={element.posted_ago_days}
              role={element.job_role}
              type={element.employment_type}
              location={element.location}
              pay={element.price_usd}
              experience={element.experience}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
