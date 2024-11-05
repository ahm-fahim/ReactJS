

// get application
const getApplication = () => {
    const storedApplication = localStorage.getItem('job-application');
    if (storedApplication) {
        return JSON.parse(storedApplication);
    }
    return [];
}

// save application
const saveApplication = (id) => {
    const storedApplications = getApplication();
    const exist = storedApplications.find(jobId => jobId === id);

    if (!exist) {
        storedApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedApplications));
    }
}
export {saveApplication,getApplication}