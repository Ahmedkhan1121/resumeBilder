let userName = document.getElementById("name") as HTMLInputElement;
let userEmail = document.getElementById("email") as HTMLInputElement;
let userNumber = document.getElementById("number") as HTMLInputElement;
let userAddress = document.getElementById("address") as HTMLInputElement;
let userProfile = document.getElementById("profile") as HTMLTextAreaElement;
let userSkill = document.getElementById("skill") as HTMLInputElement;
let userjobtitle = document.getElementById("jobtitle") as HTMLInputElement;
let schoolName = document.getElementById("school-name") as HTMLInputElement;
let schoolSub = document.getElementById("school-subject") as HTMLInputElement;
let collegeName = document.getElementById("college-name") as HTMLInputElement;
let collegeSub = document.getElementById("collegesubject") as HTMLInputElement;
let uniName = document.getElementById("uni-name") as HTMLInputElement;
let uniSub = document.getElementById("uni-sub") as HTMLInputElement;
let sholPeriod = document.getElementById("schol-period") as HTMLInputElement;
let colgPeriod = document.getElementById("colg-period") as HTMLInputElement;
let uniPeriod = document.getElementById("uni-period") as HTMLInputElement;
let workExperinc = document.getElementById("work-experience") as HTMLTextAreaElement;
let lastJob = document.getElementById("lastjob") as HTMLInputElement;
let lastCompany = document.getElementById("lastcompany") as HTMLInputElement;
let jobPeriod = document.getElementById("employ-period") as HTMLInputElement;
let profilePic = document.getElementById("profile-pic-1") as HTMLInputElement;
let userLang = document.getElementById("language") as HTMLInputElement;
let resumeForm = document.getElementById("resume-form") as HTMLFormElement;
export interface ResumeData {
  userName: string;
  userEmail: string;
  userNumber: string;
  userAddress: string;
  userProfile: string;
  userSkill: string[];
  userjobtitle: string;
  schoolName: string;
  schoolSub: string;
  collegeName: string;
  collegeSub: string;
  uniName: string;
  uniSub: string;
  sholPeriod: string;
  colgPeriod: string;
  uniPeriod: string;
  workExperinc: string;
  lastJob: string;
  lastCompany: string;
  jobPeriod: string;
  profilePic: string;
  userLang: string[];
}
export const setINputValueEmpty = () => {
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
  if (
    userName.value === "" ||
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
    userLang.value === ""
  ) {
    alert("Plz fill the fields");
  } else {
    alert("Form has Submitted");
    
    let resumeObj:ResumeData = {
        userName:userName.value,
        userEmail:userEmail.value,
        userNumber:userNumber.value,
        userAddress:userAddress.value,
        userLang:userLang.value.trim().split(' '),
        userjobtitle:userjobtitle.value,
        userProfile:userProfile.value,
        userSkill:userSkill.value.trim().split(' '),
        colgPeriod:colgPeriod.value,
        collegeName:collegeName.value,
        collegeSub:collegeSub.value,
        jobPeriod:jobPeriod.value,
        schoolName:schoolName.value,
        schoolSub:schoolSub.value,
        sholPeriod:sholPeriod.value,
        uniName:uniName.value,
        uniPeriod:uniPeriod.value,
        uniSub:uniSub.value,
        lastCompany:lastCompany.value,
        lastJob:lastJob.value,
        profilePic:profilePic.value,
        workExperinc:workExperinc.value,
    }
    localStorage.setItem("Resume",JSON.stringify(resumeObj));
    console.log(resumeObj);
    setINputValueEmpty();
    location.href = './cv.html';
  }
});
