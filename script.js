// ============== start heart ++ button and -- button ==============
const hearts = document.querySelectorAll(".heart-btn");
const heartCountElement = document.getElementById("heart-count");

let heartCount = 0;

for (const heart of hearts) {
  heart.addEventListener("click", function () {
    if (heart.classList.contains("fa-regular")) {
      heart.classList.remove("fa-regular");
      heart.classList.add("fa-solid", "text-red-500");
      heartCount++;
    } else {
      heart.classList.remove("fa-solid", "text-red-500");
      heart.classList.add("fa-regular");
      heartCount--;
    }

    heartCountElement.innerText = heartCount;
  });
}
// ============== end heart ++ button and -- button ==============

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

// coin --  button
const callBtns = document.querySelectorAll(".call-button");
const coinCount = document.getElementById("coin-count");

callBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let coins = parseInt(coinCount.textContent);

    if (coins >= 20) {
      coins -= 20; 
      coinCount.textContent = coins;
    } else {
      alert("❌ কল করার জন্য 20 কয়েন প্রয়োজন"); // coins কম হলে alert
    }
  });
});

// // ================== start copy count section ============
//  const copyBtn = document.getElementById("copy-button-national");
//  const emergencyNumber = document.getElementById("NationalEmergency");
//  copyBtn.addEventListener("click", () => {
//   const textToCopy = emergencyNumber.innerText;
//   navigator.clipboard
//     .writeText(textToCopy)
//     .then(() => {
//       alert("✅ Copied to clipboard :  " +   textToCopy );
//     })
//     .catch((err) => {
//       console.error("Failed to copy: ", err);
//     });
//  });
//     const copyBtnPolice = document.getElementById("copy-button-police");
//     const emergencyNumberPolice = document.getElementById("PoliceEmergency");
//     copyBtnPolice.addEventListener("click", () => {
//       const textToCopy = emergencyNumberPolice.innerText;
//       navigator.clipboard
//         .writeText(textToCopy)
//         .then(() => {
//           alert("✅ Copied to clipboard :  " +   textToCopy );
//         })
//         .catch((err) => {
//           console.error("Failed to copy: ", err);
//         });
//     });
//  const copyBtnFire = document.getElementById("copy-button-fire");
//  const emergencyNumberFire = document.getElementById("FireEmergency");
//  copyBtnFire.addEventListener("click", () => {
//    const textToCopy = emergencyNumberFire.innerText;
//    navigator.clipboard
//      .writeText(textToCopy)
//      .then(() => {
//        alert("✅ Copied to clipboard :  " +   textToCopy );
//      })
//      .catch((err) => {
//        console.error("Failed to copy: ", err);
//      });
//  });
//     const copyBtnAmbulance = document.getElementById("copy-button-ambulance");
//     const emergencyNumberAmbulance = document.getElementById("AmbulanceEmergency");
//     copyBtnAmbulance.addEventListener("click", () => {
//       const textToCopy = emergencyNumberAmbulance.innerText;
//       navigator.clipboard
//         .writeText(textToCopy)
//         .then(() => {
//           alert("✅ Copied to clipboard :  " +   textToCopy );
//         })
//         .catch((err) => {
//           console.error("Failed to copy: ", err);
//         });
//     });
//     const copyBtnWomenChild = document.getElementById(
//       "copy-button-women-child"
//     );
//     const emergencyNumberWomenChild = document.getElementById(
//       "WomenChildEmergency"
//     );
//     copyBtnWomenChild.addEventListener("click", () => {
//       const textToCopy = emergencyNumberWomenChild.innerText;
//       navigator.clipboard
//         .writeText(textToCopy)
//         .then(() => {
//           alert("✅ Copied to clipboard :  " +   textToCopy );
//         })
//         .catch((err) => {
//           console.error("Failed to copy: ", err);
//         });
//     });
//      const copyBtnAntiCorruption = document.getElementById(
//        "copy-button-anti-corruption"
//      );
//      const emNumberAntiCorruption = document.getElementById(
//        "AntiCorruptionEmergency"
//      );
//      copyBtnAntiCorruption.addEventListener("click", () => {
//        const textToCopy = emNumberAntiCorruption.innerText;
//        navigator.clipboard
//          .writeText(textToCopy)
//          .then(() => {
//            alert("✅ Copied to clipboard :  " +   textToCopy );
//          })
//          .catch((err) => {
//            console.error("Failed to copy: ", err);
//          });
//      });
//     const copyBtnElectricity = document.getElementById("copy-button-electricity");
//     const emergencyNumberElectricity = document.getElementById("ElectricityEmergency");
//     copyBtnElectricity.addEventListener("click", () => {
//       const textToCopy = emergencyNumberElectricity.innerText;
//       navigator.clipboard
//         .writeText(textToCopy)
//         .then(() => {
//           alert("✅ Copied to clipboard :  " +   textToCopy );
//         })
//         .catch((err) => {
//           console.error("Failed to copy: ", err);
//         });
//     });
//     const copyBtnBrac = document.getElementById("copy-button-brac");
//     const emergencyNumberBrac = document.getElementById("BracEmergency");
//     copyBtnBrac.addEventListener("click", () => {
//       const textToCopy = emergencyNumberBrac.innerText;
//       navigator.clipboard
//         .writeText(textToCopy)
//         .then(() => {
//           alert("✅ Copied to clipboard :  " +   textToCopy );
//         })
//         .catch((err) => {
//           console.error("Failed to copy: ", err);
//         });
//     });
//     const copyBtnBangladeshRailway = document.getElementById("copy-button-bangladesh-railway");
//     const emergencyNumberBangladeshRailway = document.getElementById("BangladeshRailwayEmergency");
//     copyBtnBangladeshRailway.addEventListener("click", () => {
//       const textToCopy = emergencyNumberBangladeshRailway.innerText;
//       navigator.clipboard
//         .writeText(textToCopy)
//         .then(() => {
//           alert("✅ Copied to clipboard :  " +   textToCopy );
//         })
//         .catch((err) => {
//           console.error("Failed to copy: ", err);
//         });
//   });
// // ================== End copy count section ============


// ================== start copy count section ============
// Reusable function
function setupCopyButton(buttonId, textId) {
  const button = document.getElementById(buttonId);
  const textElement = document.getElementById(textId);

  if (button && textElement) {
    button.addEventListener("click", () => {
      const textToCopy = textElement.innerText;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          alert("✅ Copied to clipboard : " + textToCopy);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    });
  }
}
// List of buttons and text IDs
const copyMappings = [
  ["copy-button-national", "NationalEmergency"],
  ["copy-button-police", "PoliceEmergency"],
  ["copy-button-fire", "FireEmergency"],
  ["copy-button-ambulance", "AmbulanceEmergency"],
  ["copy-button-women-child", "WomenChildEmergency"],
  ["copy-button-anti-corruption", "AntiCorruptionEmergency"],
  ["copy-button-electricity", "ElectricityEmergency"],
  ["copy-button-brac", "BracEmergency"],
  ["copy-button-bangladesh-railway", "BangladeshRailwayEmergency"],
];
// Loop through mappings
copyMappings.forEach(([btnId, textId]) => setupCopyButton(btnId, textId));

// ================== End copy count section ============ 



// ============================================
const callButtons = document.querySelectorAll(".call-button");
const coinElement = document.getElementById("coin-count");
let coins = parseInt(coinElement.innerText);
const callHistoryContainer = document.getElementById("call-history");

for (const btn of callButtons) {
  btn.addEventListener("click", function () {
    if (coins < 20) {
      return;
    }
    const card = btn.closest(".card");
    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNumber = card.querySelector(".helpline-number").innerText;
    const serviceTitle = card.querySelector(".service-title").innerText;

    alert(`Calling ${serviceName} at ${serviceNumber}`);

    const historyItem = document.createElement("div");

    historyItem.innerHTML = `
    
        <div class="flex justify-between items-center p-4 my-4 bg-[#FAFAFA] rounded-lg">
            <div>
                <h3 class="font-[Inter] font-semibold text-[#111111]">${serviceTitle}</h3>
                <p class="text-[#5C5C5C] text-[18px]">${serviceNumber}</p>
            </div>
            <p class="text-[18px] text-[#111111]">${new Date().toLocaleTimeString()}</p>
        </div>

    `;

    callHistoryContainer.appendChild(historyItem);
  });
}