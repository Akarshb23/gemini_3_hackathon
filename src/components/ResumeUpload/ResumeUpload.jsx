function ResumeUpload({ setResume }) {
  return (
    <input
      type="file"
      accept=".pdf"
      onChange={(e) => setResume(e.target.files[0])}
    />
  );
}

export default ResumeUpload;
