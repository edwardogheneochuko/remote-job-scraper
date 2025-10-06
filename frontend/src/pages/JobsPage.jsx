import React, { useEffect, useState } from "react";
import SearchFilters from "../components/SearchFilters";
import JobDetailsModal from "../components/JobDetails";
import JobCard from "../components/JobCard";
import { fetchJobs, fetchJobById } from "../utils/api";

const styles = {
  container: "p-6 max-w-6xl mx-auto",
  heading: "text-3xl font-bold text-gray-900 mb-6 text-center",
  grid: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
  loading: "text-center text-gray-500 py-10 text-lg",
  empty: "text-center text-gray-400 py-10 text-base",
};

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    title: "",
    location: "",
    tag: "",
  });
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    setLoading(true);
    try {
      const data = await fetchJobs(filters);
      setJobs(data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const openJobDetails = async (id) => {
    try {
      const data = await fetchJobById(id);
      setSelectedJob(data);
    } catch (err) {
      console.error("Error loading job details:", err);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>🌍 Remote Jobs</h1>

      <SearchFilters filters={filters} onChange={handleChange} onSearch={loadJobs} />

      {loading ? (
        <p className={styles.loading}>Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p className={styles.empty}>No jobs found. Try adjusting your filters.</p>
      ) : (
        <div className={styles.grid}>
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onClick={openJobDetails} />
          ))}
        </div>
      )}

      <JobDetailsModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </div>
  );
};

export default JobsPage;
