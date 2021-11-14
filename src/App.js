import React, { useEffect, useState } from 'react'
import './App.css'
import Job from './component/Job';

// Welcome to FEM's React Test!
// The frontend is built for you and it's your job as a developer to get this code up and running.
// Please follow the TODO LIST and helpful comments along the way

/*  PART 1   */
//TODO: Create a fetch call that should be able to console.log the response data in JSON (You should see an object)
//TODO: How can you access the "jobs" from that object? (You should be able to access the array of job objects)
//TODO: Put that fetch call in a useEffect() *That will ONLY run when INTIALIZED.* (What does the dependancy module do?)
//TODO: How do we store the "jobs" data? 
//TODO: Once you successfully store the jobs in the useEffect, HOW and WHERE can you map out that info to your Job.js component (*think props!*)
//HINT: WHen you map the objects array remember you should create a Job component for every ITEM in the jobs array. (How would you do that?)


/*  PART 2   */
//TODO: Go into your Job.js component and think where should each prop go and set it up so that each job component will have a different job!
//TODO: Get the search bar to display the jobs you write in the input field!
//TODO: Finish the functionality of the findJobs function
//TODO: Get the Apply now button to work!
//TODO: Display the correct count of the jobs that are displayed


function App() {

    // Paste the api url given by your instructor here:
    const url = "https://cpbootcamp.proxy.beeceptor.com/devjobs"
    //HINT: This array may be useful somewhere!
    //Replace any instance of placeholder with something else
    
    let [jobs, setJobs] = useState([])
    let [originJob, setOriginJob] = useState([])
    let filtered = []
    
    
    useEffect(() => {
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            let jobsArray = []
            let originArr = []
            // console.log(data);
            data.map((job) => {
                jobsArray.push(job)
                originArr.push(job)
            })
            setOriginJob(originArr)
            setJobs(jobsArray)
        })
        
        
    }, [])
    // console.log(jobs);
      const findJobs = (e) => {
        // This function should filter jobs based on what you type on the input field!
        //How can you grab what you typed in the input field?
        // let searchInput = document.getElementById("filter-jobs").value
        console.log(e.target.value);
        if(e.target.value){
            // What does the filter function do?
            // What array should you be filtering?
            jobs.filter(job => {
                if(job.roleName.toLowerCase().includes(e.target.value) 
                    || job.type.toLowerCase().includes(e.target.value)
                    || job.company.toLowerCase().includes(e.target.value)
                    || job.requirements.content.toLowerCase().includes(e.target.value)) {
                        
                        //Once the jobs are filtered, how can get each job in an array again?
                        filtered.push(job)
                        
                        
                        console.log(job)
                    } 
                return true
            })
            //Should setJobs to the filtered jobs
            setJobs(filtered)
        } else {
           //Should reset Jobs to the unfiltered data set of jobs
            return setJobs(originJob)
        }
      }

      const searchJob = (e) => {
          //Should be the same code as findJobs but only when you click the Find Jobs button!
          if(e.target.value){
            // What does the filter function do?
            // What array should you be filtering?
            jobs.filter(job => {
                if(job.roleName.toLowerCase().includes(e.target.value) 
                    || job.type.toLowerCase().includes(e.target.value)
                    || job.company.toLowerCase().includes(e.target.value)
                    || job.requirements.content.toLowerCase().includes(e.target.value)) {
                        
                        //Once the jobs are filtered, how can get each job in an array again?
                        filtered.push(job)
                        
                        
                        console.log(job)
                    } 
                return true
            })
            //Should setJobs to the filtered jobs
            setJobs(filtered)
        } else {
           //Should reset Jobs to the unfiltered data set of jobs
            return setJobs(originJob)
        }
          
      }
      

    return (
        <div className="app">
             <header>
                <div className="header-container">
                    <div className="logo">
                        <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" alt=""/>
                    </div>
                    <span>CleverJobs</span>
                </div>
            </header>
            <div className="search">
                <div className="search-container">
                <div className="input-container">
                        <i className="fas fa-search"></i>
                        <input type="text" id="filter-jobs" onChange={findJobs} name="filter-jobs" placeholder="Filter by title" />
                    </div>
                    <div className="button-container">
                        <span onClick ={searchJob}>Find Job</span>
                    </div>
                </div>
            </div>
            
            <div className="jobs-list">
                <h1>Showing {jobs.length} Jobs </h1>
                <div className="jobs-container"> 
                     {jobs.map((job) => {
                         return <Job role = {job.roleName} apply = {job.website} companyName = {job.company} description = {job.requirements.description} coLogo = {job.logo} />
                     })}      
                </div>
            </div>
        </div>
    )
}

export default App

