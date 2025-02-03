let editbtn = document.querySelector('.edit-box button');
console.log(editbtn);
let editForm = document.getElementById('edit-resume-form');
const resumeSection = document.querySelector('.resume-section');
let edituserName = document.getElementById("edit-name");
let edituserEmail = document.getElementById("edit-email");
let edituserNumber = document.getElementById("edit-number");
let edituserAddress = document.getElementById("edit-address");
let edituserProfile = document.getElementById("edit-profile");
let edituserSkill = document.getElementById("edit-skill");
let edituserjobtitle = document.getElementById("edit-jobtitle");
let editschoolName = document.getElementById("edit-school-name");
let editschoolSub = document.getElementById("edit-school-subject");
let editcollegeName = document.getElementById("edit-college-name");
let editcollegeSub = document.getElementById("edit-collegesubject");
let edituniName = document.getElementById("edit-uni-name");
let edituniSub = document.getElementById("edit-uni-sub");
let editsholPeriod = document.getElementById("edit-schol-period");
let editcolgPeriod = document.getElementById("edit-colg-period");
let edituniPeriod = document.getElementById("edit-uni-period");
let editworkExperinc = document.getElementById("edit-work-experience");
let editlastJob = document.getElementById("edit-lastjob");
let editlastCompany = document.getElementById("edit-lastcompany");
let editjobPeriod = document.getElementById("edit-employ-period");
let editprofilePic = document.getElementById("edit-profile-pic-1");
let edituserLang = document.getElementById("edit-language");
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
    editcolgPeriod.value = '';
    edituniPeriod.value = '';
    editworkExperinc.value = '';
    editlastJob.value = '';
    editlastCompany.value = '';
    editjobPeriod.value = '';
    edituserLang.value = '';
    editprofilePic.value = '';
};
let resumeObj = localStorage.getItem('Resume');
let convIntoObj = JSON.parse(resumeObj);
editbtn.addEventListener('click', () => {
    if (editForm.className === 'hidden') {
        editForm.className = 'form-resume';
        resumeSection.style.display = 'none';
        setInputValueEdit();
    }
    else {
        editForm.className = 'hidden';
        resumeSection.style.display = 'flex';
    }
});
editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (edituserName.value === "" ||
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
        edituserLang.value === "") {
        alert("Plz fill the fields");
    }
    else {
        alert("Form has Edited Successfully");
        let resumeObj = {
            userName: edituserName.value,
            userEmail: edituserEmail.value,
            userNumber: edituserNumber.value,
            userAddress: edituserAddress.value,
            userLang: edituserLang.value.trim().split(' '),
            userjobtitle: edituserjobtitle.value,
            userProfile: edituserProfile.value,
            userSkill: edituserSkill.value.trim().split(' '),
            colgPeriod: editcolgPeriod.value,
            collegeName: editcollegeName.value,
            collegeSub: editcollegeSub.value,
            jobPeriod: editjobPeriod.value,
            schoolName: editschoolName.value,
            schoolSub: editschoolSub.value,
            sholPeriod: editsholPeriod.value,
            uniName: edituniName.value,
            uniPeriod: edituniPeriod.value,
            uniSub: edituniSub.value,
            lastCompany: editlastCompany.value,
            lastJob: editlastJob.value,
            profilePic: editprofilePic.value,
            workExperinc: editworkExperinc.value,
        };
        localStorage.setItem("Resume", JSON.stringify(resumeObj));
        console.log(resumeObj);
        setINputValueEmpty();
        editForm.className = 'hidden';
        resumeSection.style.display = 'flex';
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }
});
export {};
