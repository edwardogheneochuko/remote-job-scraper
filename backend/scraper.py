# scraper.py
import requests

def fetch_remoteok_jobs():
    url = "https://remoteok.io/api"
    response = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})
    data = response.json()
    jobs = []
    for job in data[1:]:  # first element is metadata
        jobs.append({
            "id": job.get("id"),
            "title": job.get("position"),
            "company": job.get("company"),
            "location": job.get("location"),
            "tags": job.get("tags"),
            "url": job.get("url"),
            "date": job.get("date"),
            "description": job.get("description")
        })
    return jobs
