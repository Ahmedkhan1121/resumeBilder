import { ResumeData } from "./app.js";

let editbtn = document.querySelector('.edit-box button') as HTMLButtonElement;
console.log(editbtn)
let editForm = document.getElementById('edit-resume-form') as HTMLFormElement;
const resumeSection  = document.querySelector('.resume-section') as HTMLElement;
let edituserName = document.getElementById("edit-name") as HTMLInputElement;
let edituserEmail = document.getElementById("edit-email") as HTMLInputElement;
let edituserNumber = document.getElementById("edit-number") as HTMLInputElement;
let edituserAddress = document.getElementById("edit-address") as HTMLInputElement;
let edituserProfile = document.getElementById("edit-profile") as HTMLTextAreaElement;
let edituserSkill = document.getElementById("edit-skill") as HTMLInputElement;
let edituserjobtitle = document.getElementById("edit-jobtitle") as HTMLInputElement;
let editschoolName = document.getElementById("edit-school-name") as HTMLInputElement;
let editschoolSub = document.getElementById("edit-school-subject") as HTMLInputElement;
let editcollegeName = document.getElementById("edit-college-name") as HTMLInputElement;
let editcollegeSub = document.getElementById("edit-collegesubject") as HTMLInputElement;
let edituniName = document.getElementById("edit-uni-name") as HTMLInputElement;
let edituniSub = document.getElementById("edit-uni-sub") as HTMLInputElement;
let editsholPeriod = document.getElementById("edit-schol-period") as HTMLInputElement;
let editcolgPeriod = document.getElementById("edit-colg-period") as HTMLInputElement;
let edituniPeriod = document.getElementById("edit-uni-period") as HTMLInputElement;
let editworkExperinc = document.getElementById("edit-work-experience") as HTMLTextAreaElement;
let editlastJob = document.getElementById("edit-lastjob") as HTMLInputElement;
let editlastCompany = document.getElementById("edit-lastcompany") as HTMLInputElement;
let editjobPeriod = document.getElementById("edit-employ-period") as HTMLInputElement;
let editprofilePic = document.getElementById("edit-profile-pic-1") as HTMLInputElement;
let edituserLang = document.getElementById("edit-language") as HTMLInputElement;
const setInputValueEdit = () => {
    edituserName.value = convIntoObj.userName;
    edituserEmail.value = convIntoObj.userEmail;
    edituserNumber.value = convIntoObj.userNumber;
    edituserAddress.value = convIntoObj.userAddress;
    edituserProfile.value = convIntoObj.userProfile;
    edituserSkill.value = convIntoObj.userSkill.join(' ');
    edituserjobtitle.value = convIntoObj.userjobtitle;
   editschoolName.value = convIntoObj.schoolName;
    editschoolSub.value = convIntoObj.schoolSub;
    editcollegeName.value = convIntoObj.collegeName;
    editcollegeSub.value = convIntoObj.collegeSub;
   edituniName.value = convIntoObj.uniName;
    edituniSub.value = convIntoObj.uniPeriod;
    editsholPeriod.value = convIntoObj.sholPeriod;
    editcolgPeriod.value = convIntoObj.colgPeriod;
    edituniPeriod.value = convIntoObj.uniPeriod;
    editworkExperinc.value = convIntoObj.workExperinc;
    editlastJob.value = convIntoObj.lastJob;
    editlastCompany.value = convIntoObj.lastCompany;
    editjobPeriod.value = convIntoObj.jobPeriod;
    edituserLang.value = convIntoObj.userLang.join(' ');
    editprofilePic.value = convIntoObj.profilePic;
};
const setINputValueEmpty = () => {
    edituserName.value = '';
    edituserEmail.value = '';
    edituserNumber.value = '';
    edituserAddress.value = '';
    edituserProfile.value = '';
    edituserSkill.value = '';
    edituserjobtitle.value = '';
   editschoolName.value = '';
    editschoolSub.value = '';
    editcollegeName.value = '';
    editcollegeSub.value = '';
   edituniName.value = '';
    edituniSub.value = '';
    editsholPeriod.value = '';
    editcolgPeriod.value ='';
    edituniPeriod.value = '';
    editworkExperinc.value = '';
    editlastJob.value = '';
    editlastCompany.value = '';
    editjobPeriod.value = '';
    edituserLang.value = '';
    editprofilePic.value = '';
};
let resumeObj = localStorage.getItem('Resume');
let convIntoObj:ResumeData = JSON.parse(resumeObj as string);
editbtn.addEventListener('click',() => {
    if(editForm.className === 'hidden'){
        editForm.className = 'form-resume';
        resumeSection.style.display = 'none';
        setInputValueEdit();

    }else{
        editForm.className = 'hidden';
        resumeSection.style.display = 'flex';
    }
});


editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    edituserName.value === "" ||
    edituserEmail.value === "" ||
    edituserNumber.value === "" ||
    edituserAddress.value === "" ||
    edituserProfile.value === "" ||
    edituserSkill.value === "" ||
    edituserjobtitle.value === "" ||
    editschoolName.value === "" ||
    editschoolSub.value === "" ||
    editcollegeName.value === "" ||
    editcollegeSub.value === "" ||
    edituniName.value === "" ||
    edituniSub.value === "" ||
    editsholPeriod.value === "" ||
    editcolgPeriod.value === "" ||
    edituniPeriod.value === "" ||
    editworkExperinc.value === "" ||
    editlastJob.value === "" ||
    editlastCompany.value === "" ||
    editjobPeriod.value === "" ||
    editprofilePic.value === "" ||
    edituserLang.value === ""
  ) {
    alert("Plz fill the fields");
  } else {
    alert("Form has Edited Successfully");
    
    let resumeObj:ResumeData = {
        userName:edituserName.value,
        userEmail:edituserEmail.value,
        userNumber:edituserNumber.value,
        userAddress:edituserAddress.value,
        userLang:edituserLang.value.trim().split(' '),
        userjobtitle:edituserjobtitle.value,
        userProfile:edituserProfile.value,
        userSkill:edituserSkill.value.trim().split(' '),
        colgPeriod:editcolgPeriod.value,
        collegeName:editcollegeName.value,
        collegeSub:editcollegeSub.value,
        jobPeriod:editjobPeriod.value,
        schoolName:editschoolName.value,
        schoolSub:editschoolSub.value,
        sholPeriod:editsholPeriod.value,
        uniName:edituniName.value,
        uniPeriod:edituniPeriod.value,
        uniSub:edituniSub.value,
        lastCompany:editlastCompany.value,
        lastJob:editlastJob.value,
        profilePic:editprofilePic.value,
        workExperinc:editworkExperinc.value,
    };
    localStorage.setItem("Resume",JSON.stringify(resumeObj));
    console.log(resumeObj);
    setINputValueEmpty();
    editForm.className = 'hidden';
    resumeSection.style.display = 'flex';
    setTimeout(() => {
        window.location.reload()
    },500)
  }
});

