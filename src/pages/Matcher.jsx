import { useState } from "react";
import JobDescriptionInput from "../components/JobDescriptionInput/JobDescriptionInput";
import ResumeUpload from "../components/ResumeUpload/ResumeUpload";
import MatchButton from "../components/MatchButton/MatchButton";
import ResultSection from "../components/ResultSection/ResultSection";

function Matcher() {
  const [jobDescription, setJobDescription] = useState("");
  const [resume, setResume] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleMatch = async () => {
    if (!resume || !jobDescription) {
      alert("Please upload resume and job description");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("jobDescription", jobDescription);

    setLoading(true);

    const response = await fetch("http://localhost:5000/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <>
      <JobDescriptionInput setJobDescription={setJobDescription} />
      <ResumeUpload setResume={setResume} />
      <MatchButton onClick={handleMatch} loading={loading} />
      {result && <ResultSection result={result} />}
    </>
  );
}

export default Matcher;
