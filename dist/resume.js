const resumeSection = document.querySelector('.resume-section');
(() => {
    let getResumeData = localStorage.getItem('Resume');
    let convIntoObj = JSON.parse(getResumeData);
    if (convIntoObj) {
        resumeSection.innerHTML = `
     <section class="resume-parent" id="resume">
        <section class="section-1">
            <!-- img -->
            <div class="profile-img">
                <img src="./img/profile-picture.jpeg" alt="">

            </div>
            <!-- name -->
            <div  class="name">
                <h1>${convIntoObj.userName}</h1>
            </div>
            <!-- Job Title -->
            <div class="jobTitle">
                <h2>${convIntoObj.userjobtitle}</h2>
            </div>

            <!-- Contact -->
             <div class="contact">
                <div class="contact-detail-h2">
                    <i class="fa-solid fa-phone"></i>
                    <h2>Contact</h2>
                </div>
                <div class="contact-list">
                    
                    <div class="contact-detail">
                        <i class="fa-solid fa-phone-flip"></i>
                    <p>${convIntoObj.userNumber}</p>
                </div>
                <div class="contact-detail">
                    <i class="fa-solid fa-envelope"></i>
                    <p>${convIntoObj.userEmail}</p>
                </div>
                <div class="contact-detail">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>${convIntoObj.userAddress}</p>
                </div>
            </div>
             </div>

             <div class="About">
                <div class="about-h2">
                    <i class="fa-solid fa-user"></i>
                    <h2>About Me</h2>
                </div>
                <div class="about-p">
                 <p>${convIntoObj.userProfile}</p>
                </div>
             </div>

             <div class="skill">
                <div class="skill-h2">
                    <i class="fa-solid fa-puzzle-piece"></i>
                    <h2>
                        Skills
                    </h2>
                </div>
                    <ul class="skill-list">
                      ${convIntoObj.userSkill.map((e) => `<li>${e}</li>`).join('')}
                    </ul>
             </div>
        </section>

        <section class="section-2"> 
        <!-- education heading  -->
            <div class="education-heading">

                <div class="education-icon">
                    <i class="fa-solid fa-graduation-cap"></i>
                </div>
                <div class="education-h2">
                    <h2>Education</h2>
                </div>
                </div>
                <!-- degree -->
                <div class="education">

                    <div class="degree">
                        <p>${convIntoObj.schoolSub}</p>
                    </div>
                    <!-- schoolname&period -->
                    <div class="school">
                        <div class="school-name">
                    <p>${convIntoObj.schoolName} </p>
                    </div>
                    <div class="school-period">
                        <p>${convIntoObj.sholPeriod}</p>
                    </div>
                </div>
                </div>
            
                
            <!-- degree name -->
                <div class="education">
                    <div class="degree">
                        <p>${convIntoObj.collegeSub}</p>
                    </div>
                    <!-- collagename&period -->
                    <div class="collage">
                        <div class="collage-name">
                    <p>${convIntoObj.collegeName} </p>
                    </div>
                    <div class="collage-period">
                        <p>${convIntoObj.colgPeriod}</p>
                    </div>
                </div>
                </div>
                 
            <!-- degree name -->
             <div class="education">
                <div class="degree">
                    <p>${convIntoObj.uniSub}</p>
                </div>
                <!-- universityname&period -->
                <div class="university">
                    <div class="university-name">
                <p> ${convIntoObj.uniName}</p>
                </div>
                <div class="university-period">
                    <p>${convIntoObj.uniPeriod}</p>
                </div>
            </div>
             </div>
            
            <div class="experience-heading">
                <div class="experience-icon"><i class="fa-solid fa-briefcase"></i></div>
                <div class="experience-h2"><h2>Experience</h2></div>
            </div>

            <div class="experience">
                <div class="last-job">
                    <P>${convIntoObj.lastJob}</P>
                </div>
                <div class="Company-name">
                    <div class="last-company">
                        <p>${convIntoObj.lastCompany} </p>
                    </div>
                    <div class="Employment-period">
                        <p>${convIntoObj.jobPeriod}</p>
                    </div>
                </div>
                <div class="experience-profile">
                    <p>${convIntoObj.workExperinc}.</p>
                </div>
            </div>
                <div class="language">
                    <div class="language-heading">
                        <div class="language-icon">
                            <i class="fa-solid fa-language"></i>
                        </div>
                        <div class="language-h2">
                            <h2>Language</h2>
                        </div>
                    </div>
                
                <ul class="langauge-list">
                  ${convIntoObj.userLang.map((e) => `<li>${e}</li>`).join('')}
                </ul>
            </div>
        </section>
    </section>
    
    `;
    }
    else {
        resumeSection.innerHTML = `
       <h1>Data Not Found</h1>
       `;
    }
})();
export {};
