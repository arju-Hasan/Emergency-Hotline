// heart ++ button
const heartBtns = document.querySelectorAll(".heart-btn");
const heartCount = document.getElementById("heart-count");
let heartCounter = 0;

heartBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        heartCounter++;
        heartCount.textContent = heartCounter;
    });
});
 const heartBtn = document.querySelectorAll(".heart-btn");

 heartBtn.forEach((btn) => {
   btn.addEventListener("click", () => {
     btn.classList.toggle("text-red-500");
   });
 });

//  copy ++ button
const copyBtns = document.querySelectorAll(".copy-button");
const copyCount = document.getElementById("copy-count");
let copyCounter = 0;

copyBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        copyCounter++;
        copyCount.textContent = copyCounter;
    });
});

// coin ++ button
const callBtns = document.querySelectorAll(".call-button");
const coinCount = document.getElementById("coin-count");

callBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let coins = parseInt(coinCount.textContent);

    if (coins >= 20) {
      coins -= 20; // 20 কমাও
      coinCount.textContent = coins;
    } else {
      alert("No coins"); // coins কম হলে alert
    }
  });
});

//===================== Clipboard Copy Functionality
const copyBtn = document.getElementById("copy-button-national");
const emergencyNumber = document.getElementById("NationalEmergency");
copyBtn.addEventListener("click", () => {
  const textToCopy = emergencyNumber.innerText;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Copied: " + textToCopy);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});
    const copyBtnPolice = document.getElementById("copy-button-police");
    const emergencyNumberPolice = document.getElementById("PoliceEmergency");
    copyBtnPolice.addEventListener("click", () => {
      const textToCopy = emergencyNumberPolice.innerText;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          alert("Copied: " + textToCopy);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    });
 const copyBtnFire = document.getElementById("copy-button-fire");
 const emergencyNumberFire = document.getElementById("FireEmergency");
 copyBtnFire.addEventListener("click", () => {
   const textToCopy = emergencyNumberFire.innerText;
   navigator.clipboard
     .writeText(textToCopy)
     .then(() => {
       alert("Copied: " + textToCopy);
     })
     .catch((err) => {
       console.error("Failed to copy: ", err);
     });
 });
    const copyBtnAmbulance = document.getElementById("copy-button-ambulance");
    const emergencyNumberAmbulance = document.getElementById("AmbulanceEmergency");
    copyBtnAmbulance.addEventListener("click", () => {
      const textToCopy = emergencyNumberAmbulance.innerText;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          alert("Copied: " + textToCopy);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    });
    const copyBtnWomenChild = document.getElementById(
      "copy-button-women-child"
    );
    const emergencyNumberWomenChild = document.getElementById(
      "WomenChildEmergency"
    );
    copyBtnWomenChild.addEventListener("click", () => {
      const textToCopy = emergencyNumberWomenChild.innerText;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          alert("Copied: " + textToCopy);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    });
     const copyBtnAntiCorruption = document.getElementById(
       "copy-button-anti-corruption"
     );
     const emNumberAntiCorruption = document.getElementById(
       "AntiCorruptionEmergency"
     );
     copyBtnAntiCorruption.addEventListener("click", () => {
       const textToCopy = emNumberAntiCorruption.innerText;
       navigator.clipboard
         .writeText(textToCopy)
         .then(() => {
           alert("Copied: " + textToCopy);
         })
         .catch((err) => {
           console.error("Failed to copy: ", err);
         });
     });
    const copyBtnElectricity = document.getElementById("copy-button-electricity");
    const emergencyNumberElectricity = document.getElementById("ElectricityEmergency");
    copyBtnElectricity.addEventListener("click", () => {
      const textToCopy = emergencyNumberElectricity.innerText;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          alert("Copied: " + textToCopy);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    });
    const copyBtnBrac = document.getElementById("copy-button-brac");
    const emergencyNumberBrac = document.getElementById("BracEmergency");
    copyBtnBrac.addEventListener("click", () => {
      const textToCopy = emergencyNumberBrac.innerText;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          alert("Copied: " + textToCopy);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    });
    const copyBtnBangladeshRailway = document.getElementById("copy-button-bangladesh-railway");
    const emergencyNumberBangladeshRailway = document.getElementById("BangladeshRailwayEmergency");
    copyBtnBangladeshRailway.addEventListener("click", () => {
      const textToCopy = emergencyNumberBangladeshRailway.innerText;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          alert("Copied: " + textToCopy);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    });
