const styles = {
  container:
    "bg-white shadow-md rounded-xl p-5 flex flex-wrap items-center gap-4 justify-between",
  group: "flex-1 min-w-[200px]",
  label: "block text-sm font-semibold text-gray-600 mb-1",
  input:
    "w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none",
  button:
    "bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300",
};

const SearchFilters = ({ filters, onChange, onSearch }) => {
  return (
    <div className={styles.container}>
      {/* Title */}
      <div className={styles.group}>
        <label htmlFor="title" className={styles.label}>
          Job Title
        </label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="e.g. Frontend Developer"
          value={filters.title}
          onChange={onChange}
          className={styles.input}
        />
      </div>

      {/* Location */}
      <div className={styles.group}>
        <label htmlFor="location" className={styles.label}>
          Location
        </label>
        <input
          id="location"
          type="text"
          name="location"
          placeholder="e.g. Remote, Lagos"
          value={filters.location}
          onChange={onChange}
          className={styles.input}
        />
      </div>

      {/* Tag */}
      <div className={styles.group}>
        <label htmlFor="tag" className={styles.label}>
          Tag
        </label>
        <input
          id="tag"
          type="text"
          name="tag"
          placeholder="e.g. React, Python"
          value={filters.tag}
          onChange={onChange}
          className={styles.input}
        />
      </div>

      {/* Button */}
      <button onClick={onSearch} className={styles.button}>
        🔍 Search Jobs
      </button>
    </div>
  );
};

export default SearchFilters;
