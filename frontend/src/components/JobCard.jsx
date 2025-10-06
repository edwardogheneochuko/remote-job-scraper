const styles = {
    card: `
      p-5 border border-gray-200 rounded-xl bg-white shadow-sm 
      hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer
    `,
    title: "text-lg font-bold text-gray-900 mb-1",
    subtitle: "text-sm text-gray-600 mb-2",
    tags: "flex flex-wrap gap-2 mt-2",
    tag: "text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium",
  };
  
  const JobCard = ({ job, onClick }) => {
    return (
      <div onClick={() => onClick(job.id)} className={styles.card}>
        <h2 className={styles.title}>{job.title}</h2>
  
        <p className={styles.subtitle}>
          {job.company} — {job.location}
        </p>
  
        {job.tags && job.tags.length > 0 && (
          <div className={styles.tags}>
            {job.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default JobCard;
  