
import Card from './components/card'


const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkPh-8ehAyuE4OYmL4Wcew8FuVpOI16g_5ODIV_Zsrhw&s=10",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part time",
    tag2: "Senior level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    companyName: "Google",
    datePosted: "2 weeks ago",
    post: "Frontend Software Engineer",
    tag1: "Full time",
    tag2: "Junior level",
    pay: "$95/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag1: "Full time",
    tag2: "Senior level",
    pay: "$140/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full time",
    tag2: "Mid level",
    pay: "$130/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    companyName: "Netflix",
    datePosted: "10 weeks ago",
    post: "Senior Backend Engineer",
    tag1: "Full time",
    tag2: "Senior level",
    pay: "$160/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Solutions Architect",
    tag1: "Full time",
    tag2: "Senior level",
    pay: "$135/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI Research Engineer",
    tag1: "Full time",
    tag2: "Senior level",
    pay: "$155/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    companyName: "Adobe",
    datePosted: "3 weeks ago",
    post: "UI Design Systems Lead",
    tag1: "Part time",
    tag2: "Senior level",
    pay: "$110/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=uber.com&sz=128",
    companyName: "Uber",
    datePosted: "1 day ago",
    post: "Full Stack Developer",
    tag1: "Full time",
    tag2: "Junior level",
    pay: "$85/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=128",
    companyName: "Salesforce",
    datePosted: "2 days ago",
    post: "React Frontend Developer",
    tag1: "Part time",
    tag2: "Junior level",
    pay: "$80/hr",
    location: "Chennai, India"
  }
];
const App = () => {
  return (
    <div className="parent">
       {jobOpenings.map((elem , idx) => {
        return <div key = {idx}>  
          <Card name ={elem.companyName} post ={elem.post} tag1 ={elem.tag1} tag2 ={elem.tag2} pay ={elem.pay} location ={elem.location} logo ={elem.brandLogo} datePosted ={elem.datePosted} />
        </div>
       })}
    
    </div>
  )
}

export default App
