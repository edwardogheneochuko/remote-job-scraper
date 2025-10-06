const styles = {
    overlay: "fixed inset-0 bg-black/60 flex items-center justify-center z-50",
    modal:
      "bg-white rounded-xl shadow-2xl p-6 max-w-lg w-full relative animate-fadeIn",
    closeBtn:
      "absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl transition-colors duration-200",
    title: "text-2xl font-bold mb-2 text-gray-900",
    subtitle: "text-gray-600 mb-3 text-sm md:text-base",
    description: "text-gray-700 mb-5 whitespace-pre-line leading-relaxed",
    applyBtn:
      "bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold",
  };

  
  const JobDetailsModal = ({ job, onClose }) => {
    if (!job) return null;
  
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <button onClick={onClose} className={styles.closeBtn} aria-label="Close">
            ✕
          </button>
  
          <h2 className={styles.title}>{job.title}</h2>
  
          <p className={styles.subtitle}>
            {job.company} — {job.location}
          </p>
  
          <p className={styles.description}>{job.description}</p>
  
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.applyBtn}
          >
            Apply Now
          </a>
        </div>
      </div>
    );
  };
  
  export default JobDetailsModal;
  