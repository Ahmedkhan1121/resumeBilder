let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userNumber = document.getElementById("number");
let userAddress = document.getElementById("address");
let userProfile = document.getElementById("profile");
let userSkill = document.getElementById("skill");
let userjobtitle = document.getElementById("jobtitle");
let schoolName = document.getElementById("school-name");
let schoolSub = document.getElementById("school-subject");
let collegeName = document.getElementById("college-name");
let collegeSub = document.getElementById("collegesubject");
let uniName = document.getElementById("uni-name");
let uniSub = document.getElementById("uni-sub");
let sholPeriod = document.getElementById("schol-period");
let colgPeriod = document.getElementById("colg-period");
let uniPeriod = document.getElementById("uni-period");
let workExperinc = document.getElementById("work-experience");
let lastJob = document.getElementById("lastjob");
let lastCompany = document.getElementById("lastcompany");
let jobPeriod = document.getElementById("employ-period");
let profilePic = document.getElementById("profile-pic-1");
let userLang = document.getElementById("language");
let resumeForm = document.getElementById("resume-form");
const setINputValueEmpty = () => {
    userName.value = "";
    userEmail.value = "";
    userNumber.value = "";
    userAddress.value = "";
    userProfile.value = "";
    userSkill.value = "";
    userjobtitle.value = "";
    schoolName.value = "";
    schoolSub.value = "";
    collegeName.value = "";
    collegeSub.value = "";
    uniName.value = "";
    uniSub.value = "";
    sholPeriod.value = "";
    colgPeriod.value = "";
    uniPeriod.value = "";
    workExperinc.value = "";
    lastJob.value = "";
    lastCompany.value = "";
    jobPeriod.value = "";
    profilePic.value = "";
    userLang.value = "";
};
resumeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (userName.value === "" ||
        userEmail.value === "" ||
        userNumber.value === "" ||
        userAddress.value === "" ||
        userProfile.value === "" ||
        userSkill.value === "" ||
        userjobtitle.value === "" ||
        schoolName.value === "" ||
        schoolSub.value === "" ||
        collegeName.value === "" ||
        collegeSub.value === "" ||
        uniName.value === "" ||
        uniSub.value === "" ||
        sholPeriod.value === "" ||
        colgPeriod.value === "" ||
        uniPeriod.value === "" ||
        workExperinc.value === "" ||
        lastJob.value === "" ||
        lastCompany.value === "" ||
        jobPeriod.value === "" ||
        profilePic.value === "" ||
        userLang.value === "") {
        alert("Plz fill the fields");
    }
    else {
        alert("Form has Submitted");
        let resumeObj = {
            userName: userName.value,
            userEmail: userEmail.value,
            userNumber: userNumber.value,
            userAddress: userAddress.value,
            userLang: userLang.value.trim().split(' '),
            userjobtitle: userjobtitle.value,
            userProfile: userProfile.value,
            userSkill: userSkill.value.trim().split(' '),
            colgPeriod: colgPeriod.value,
            collegeName: collegeName.value,
            collegeSub: collegeSub.value,
            jobPeriod: jobPeriod.value,
            schoolName: schoolName.value,
            schoolSub: schoolSub.value,
            sholPeriod: sholPeriod.value,
            uniName: uniName.value,
            uniPeriod: uniPeriod.value,
            uniSub: uniSub.value,
            lastCompany: lastCompany.value,
            lastJob: lastJob.value,
            profilePic: profilePic.value,
            workExperinc: workExperinc.value,
        };
        localStorage.setItem("Resume", JSON.stringify(resumeObj));
        console.log(resumeObj);
        setINputValueEmpty();
        location.href = './cv.html';
    }
});
export {};
