const Form = document.querySelector(".Form");
const patroPatri = document.getElementsByName("patroPatri");
const namee = document.querySelector(".name");
const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.querySelector(".weight");
const gayerRong = document.querySelector(".gayerRong");
const boibahicObostha = document.querySelector(".boibahicObostha");
const sthaiThikana = document.querySelector(".sthaiThikana");
const bortomanThikana = document.querySelector(".bortomanThikana");
const pesha = document.querySelector(".pesha");
const monthSalary = document.querySelector(".monthSalary");
const clas = document.querySelector(".class");
const babarPesha = document.querySelector(".babarPesha");
const mayerPesha = document.querySelector(".mayerPesha");
const namazPoreKina = document.getElementsByName("namazPoreKina");
const quranPareKina = document.getElementsByName("quranPareKina");
const apniKiSontanAseEmonKawKBiyeKorteChan = document.getElementsByName(
  "apniKiSontanAseEmonKawKBiyeKorteChan"
);
const sharirikOngohaniAseKina = document.getElementsByName(
  "sharirikOngohaniAseKina"
);
const dariAseKina = document.getElementsByName("dariAseKina");
const pordaKoreKina = document.getElementsByName("pordaKoreKina");
const jmonJannatiSathiChai = document.querySelector(".jmonJannatiSathiChai");
const patroPatrirBoyos = document.querySelector(".patroPatrirBoyos");
const patroPatrirHeight = document.querySelector(".patroPatrirHeight");
const patroPatrirGayerRong = document.querySelector(".patroPatrirGayerRong");
const patroPatrirLekhapora = document.querySelector(".patroPatrirLekhapora");
const extraKisuLekha = document.querySelector(".extraKisuLekha");
const img = document.querySelector(".img");
const phoneNumber = document.querySelector(".phoneNumber");
const FBIdLink = document.querySelector(".FBIdLink");
const amaderShebatiKmnLaglo = document.querySelector(".amaderShebatiKmnLaglo");
//////////////////
const submitBtn = document.querySelector(".submitBtn");
const alertTag = document.querySelector(".alert");

//////////////////
//////////////////
let patroPatriValue,
  namazPoreKinaValue,
  quranPareKinaValue,
  apniKiSontanAseEmonKawKBiyeKorteChanValue,
  sharirikOngohaniAseKinaValue,
  dariAseKinaValue,
  pordaKoreKinaValue;
//////////////////
const patroPatriFunc = () => {
  if (patroPatri[0].checked) {
    patroPatriValue = patroPatri[0].value;
  } else if (patroPatri[1].checked) {
    patroPatriValue = patroPatri[1].value;
  } else {
    patroPatriValue = "";
  }
};
const namazPoreKinaFunc = () => {
  if (namazPoreKina[0].checked) {
    namazPoreKinaValue = namazPoreKina[0].value;
  } else if (namazPoreKina[1].checked) {
    namazPoreKinaValue = namazPoreKina[1].value;
  } else if (namazPoreKina[2].checked) {
    namazPoreKinaValue = namazPoreKina[2].value;
  } else {
    namazPoreKinaValue = "";
  }
};
const quranPareKinaFunc = () => {
  if (quranPareKina[0].checked) {
    quranPareKinaValue = quranPareKina[0].value;
  } else if (quranPareKina[1].checked) {
    quranPareKinaValue = quranPareKina[1].value;
  } else {
    quranPareKinaValue = "";
  }
};
const apniKiSontanAseEmonKawKBiyeKorteChanFunc = () => {
  if (apniKiSontanAseEmonKawKBiyeKorteChan[0].checked) {
    apniKiSontanAseEmonKawKBiyeKorteChanValue =
      apniKiSontanAseEmonKawKBiyeKorteChan[0].value;
  } else if (apniKiSontanAseEmonKawKBiyeKorteChan[1].checked) {
    apniKiSontanAseEmonKawKBiyeKorteChanValue =
      apniKiSontanAseEmonKawKBiyeKorteChan[1].value;
  } else {
    apniKiSontanAseEmonKawKBiyeKorteChanValue = "";
  }
};
const sharirikOngohaniAseKinaFunc = () => {
  if (sharirikOngohaniAseKina[0].checked) {
    sharirikOngohaniAseKinaValue = sharirikOngohaniAseKina[0].value;
  } else if (sharirikOngohaniAseKina[1].checked) {
    sharirikOngohaniAseKinaValue = sharirikOngohaniAseKina[1].value;
  } else {
    sharirikOngohaniAseKinaValue = "";
  }
};
const dariAseKinaFunc = () => {
  if (dariAseKina[0].checked) {
    dariAseKinaValue = dariAseKina[0].value;
  } else if (dariAseKina[1].checked) {
    dariAseKinaValue = dariAseKina[1].value;
  } else {
    dariAseKinaValue = "";
  }
};
const pordaKoreKinaFunc = () => {
  if (pordaKoreKina[0].checked) {
    pordaKoreKinaValue = pordaKoreKina[0].value;
  } else if (pordaKoreKina[1].checked) {
    pordaKoreKinaValue = pordaKoreKina[1].value;
  } else {
    pordaKoreKinaValue = "";
  }
};

//////////////////
let nameValue,
  ageValue,
  heightValue,
  weightValue,
  gayerRongValue,
  boibahicObosthaValue,
  sthaiThikanaValue,
  bortomanThikanaValue,
  peshaValue,
  monthSalaryValue,
  classValue,
  babarPeshaValue,
  mayerPeshaValue,
  jmonJannatiSathiChaiValue,
  patroPatrirBoyosValue,
  patroPatrirHeightValue,
  patroPatrirGayerRongValue,
  patroPatrirLekhaporaValue,
  extraKisuLekhaValue,
  imgValue,
  phoneNumberValue,
  FBIdLinkValue,
  amaderShebatiKmnLagloValue;
//////////////////
const inputFunc = () => {
  nameValue = namee.value;
  ageValue = age.value;
  heightValue = height.value;
  weightValue = weight.value;
  gayerRongValue = gayerRong.value;
  boibahicObosthaValue = boibahicObostha.value;
  sthaiThikanaValue = sthaiThikana.value;
  bortomanThikanaValue = bortomanThikana.value;
  peshaValue = pesha.value;
  monthSalaryValue = monthSalary.value;
  classValue = clas.value;
  babarPeshaValue = babarPesha.value;
  mayerPeshaValue = mayerPesha.value;
  jmonJannatiSathiChaiValue = jmonJannatiSathiChai.value;
  patroPatrirBoyosValue = patroPatrirBoyos.value;
  patroPatrirHeightValue = patroPatrirHeight.value;
  patroPatrirGayerRongValue = patroPatrirGayerRong.value;
  patroPatrirLekhaporaValue = patroPatrirLekhapora.value;
  extraKisuLekhaValue = extraKisuLekha.value;
  imgValue = img.value;
  phoneNumberValue = phoneNumber.value;
  FBIdLinkValue = FBIdLink.value;
  amaderShebatiKmnLagloValue = amaderShebatiKmnLaglo.value;
};
//////////////////
//////////////////
Form.addEventListener("submit", (e) => {
  e.preventDefault();
  patroPatriFunc();
  //////////////////
  inputFunc();
  //////////////////
  namazPoreKinaFunc();
  quranPareKinaFunc();
  apniKiSontanAseEmonKawKBiyeKorteChanFunc();
  sharirikOngohaniAseKinaFunc();
  dariAseKinaFunc();
  pordaKoreKinaFunc();
  /////////////////
  //////////////////
  axios
    .post("https://dindar-patropatri-api.herokuapp.com/data", {
    alertTag.textContent = "Sending...";
      patroPatri: patroPatriValue,
      namee: nameValue,
      age: ageValue,
      height: heightValue,
      weight: weightValue,
      gayerRong: gayerRongValue,
      boibahicObostha: boibahicObosthaValue,
      sthaiThikana: sthaiThikanaValue,
      bortomanThikana: bortomanThikanaValue,
      pesha: peshaValue,
      monthSalary: monthSalaryValue,
      clas: classValue,
      babarPesha: babarPeshaValue,
      mayerPesha: mayerPeshaValue,
      namazPoreKina: namazPoreKinaValue,
      quranPareKina: quranPareKinaValue,
      apniKiSontanAseEmonKawKBiyeKorteChan:
        apniKiSontanAseEmonKawKBiyeKorteChanValue,
      sharirikOngohaniAseKina: sharirikOngohaniAseKinaValue,
      dariAseKina: dariAseKinaValue,
      pordaKoreKina: pordaKoreKinaValue,
      jmonJannatiSathiChai: jmonJannatiSathiChaiValue,
      patroPatrirBoyos: patroPatrirBoyosValue,
      patroPatrirHeight: patroPatrirHeightValue,
      patroPatrirGayerRong: patroPatrirGayerRongValue,
      patroPatrirLekhapora: patroPatrirLekhaporaValue,
      extraKisuLekha: extraKisuLekhaValue,
      img: imgValue,
      phoneNumber: phoneNumberValue,
      FBIdLink: FBIdLinkValue,
      amaderShebatiKmnLaglo: amaderShebatiKmnLagloValue,
    
    })
    .then(function () {
      console.log();
      alert("Your information has been sent.");
      alertTag.textContent = "Your information has been sent.";
    })
    .catch(function (error) {
      console.log(error);
    });
  //////////////////
  //////////////////
});
