import "./Job.css";

function JobDescriptionInput({ setJobDescription }) {
  return (
    <textarea
      placeholder="Paste job description here..."
      onChange={(e) => setJobDescription(e.target.value)}
      rows={10}
    />
  );
}

export default JobDescriptionInput;



