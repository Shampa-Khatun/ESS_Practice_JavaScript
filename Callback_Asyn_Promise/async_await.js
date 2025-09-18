const hasmeeting = false;
const meeting = new Promise((resolve, reject) => {
  if (!hasmeeting) {
    const meetingdetails = {
      name: "Technical Meeting",
      location: "Google Meet",
      time: "10:00 PM",
    };
    resolve(meetingdetails);
  } else {
    reject(new Error("Meeting already scheduled"));
  }
});

const addtocalender = (meetingdetails) => {
  const calender = `${meetingdetails.name} has been scheduled on ${meetingdetails.location} at ${meetingdetails.time}`;
  return Promise.resolve(calender);
};

// meeting
//   .then(addtocalender)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });


// Async/Await
async function myMeeting(){
    const meetingdetails = await meeting;
    const calender2 = await addtocalender(meetingdetails);
    console.log(calender2);
}
myMeeting();