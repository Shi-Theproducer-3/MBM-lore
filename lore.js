const htmlBody = document.querySelector("body");

const mbmLogo = document.createElement("img");
mbmLogo.id = "main-img";
mbmLogo.src = "./logo.svg";
mbmLogo.alt = "MBMs designated logo";
htmlBody.appendChild(mbmLogo);

const base = document.createElement("main");
base.id = "base";
const mainButton = document.createElement("button");
mainButton.id = "main-btn";
mainButton.textContent = "*Blob*";
mainButton.type = "button";
mainButton.addEventListener("click", () => {
  renderTxtOne();
});
base.appendChild(mainButton);
htmlBody.appendChild(base);

function renderTxtOne() {
    htmlBody.removeChild(mbmLogo);
    base.removeChild(mainButton);
    const blobHdr = document.createElement("h1");
    const pageOneBlob = document.createElement("small");
    const nextPage = document.createElement("button");
    nextPage.textContent = "*Blob*";
    nextPage.className = "next-btn";
    nextPage.type = "button";
    nextPage.addEventListener("click", () => {
      renderTxtTwo();
    });
    blobHdr.id = "first-hdr";
    blobHdr.append("The Story");
    pageOneBlob.className = "blobs";
    pageOneBlob.append("*Blob*");
    const blobContainter = document.createElement("div");
    blobContainter.className = "blobs-cont";
    blobContainter.appendChild(pageOneBlob);
    blobContainter.appendChild(nextPage);
    base.appendChild(blobHdr);
    base.appendChild(blobContainter);
  };

const blobPartOne = "Where does the BlobMan start?...*Blob*...That would be earth. The year is 2068 and man has all but destroyed themselves...*Blob*...Before doing so, the worlds leaders put their petty differences aside and decided to send a group of spectacular individuals into space. The aim of these individuals...*Blob*...was to find a suitable home for the next wave of humans. They chose people from all backgrounds, with a focus on common sense smarts. The journey would be a longer one than they anticipated though...";

function renderTxtTwo() {
  base.removeChild(document.querySelector("#first-hdr"));
  base.removeChild(document.querySelector(".blobs-cont"));
  const blobTxt = document.createElement("p");
  const nextPage = document.createElement("button");
  const plainBlob = document.createElement("small");
  nextPage.textContent = "*Blob*";
  nextPage.className = "next-btn";
  nextPage.type = "button";
  nextPage.addEventListener("click", () => {
    renderTxtThree();
  });
  blobTxt.id = "first-txt";
  blobTxt.append(blobPartOne);
  plainBlob.className = "blobs";
  plainBlob.append("*Blob*");
  const blobContainter = document.createElement("div");
  blobContainter.className = "blobs-cont";
  blobContainter.appendChild(plainBlob);
  blobContainter.appendChild(nextPage);
  base.appendChild(blobTxt);
  base.appendChild(blobContainter);
}

const blobPartTwo = "The chosen group was placed into a deep deep...*Blob*...deep sleep, that was triggered to end once their ship found a suitable host. The journey lasted about 5 space years, which...*Blob*...if you know anything about space (you can fact check this with...*Blob*...the movie Interstellar) is like 70 human years at least, the planet the ship finally found suitable was one called InnHaus. The planet resembled there own, with...*Blob*...the main difference being, the ship found no natural predators here.";

function renderTxtThree() {
  base.removeChild(document.querySelector("#first-txt"));
  base.removeChild(document.querySelector(".blobs-cont"));
  const blobTxt = document.createElement("p");
  const nextPage = document.createElement("button");
  const plainBlob = document.createElement("small");
  nextPage.textContent = "*Blob*";
  nextPage.className = "next-btn";
  nextPage.type = "button";
  nextPage.addEventListener("click", () => {
    renderTxtFour();
  });
  blobTxt.id = "first-txt";
  blobTxt.append(blobPartTwo);
  plainBlob.className = "blobs";
  plainBlob.append("*Blob*");
  const blobContainter = document.createElement("div");
  blobContainter.className = "blobs-cont";
  blobContainter.appendChild(plainBlob);
  blobContainter.appendChild(nextPage);
  base.appendChild(blobTxt);
  base.appendChild(blobContainter);
}

function renderTxtFour() {
  base.removeChild(document.querySelector("#first-txt"));
  base.removeChild(document.querySelector(".blobs-cont"));
  const bigBlob = document.createElement("h1");
  const blobLink = document.createElement("a");
  const nextPage = document.createElement("button");
  const plainBlob = document.createElement("small");
  nextPage.textContent = "*Blob*";
  nextPage.id = "inv-next-btn";
  nextPage.type = "button";
  nextPage.addEventListener("click", () => {
    renderTxtFive();
  });
  bigBlob.id = "big-blob";
  bigBlob.append("*Blob*");
  blobLink.appendChild(bigBlob);
  blobLink.id = "blob-link";
  blobLink.href = "https://discord.gg/eUYfaUwCbh";
  blobLink.target = "_blank";
  plainBlob.id = "inv-blob";
  plainBlob.append("*Blob*");
  const blobContainter = document.createElement("div");
  blobContainter.className = "blobs-cont";
  blobContainter.appendChild(plainBlob);
  blobContainter.appendChild(nextPage);
  base.appendChild(blobLink);
  base.appendChild(blobContainter);
}

function renderTxtFive() {
  base.removeChild(document.querySelector("#blob-link"));
  base.removeChild(document.querySelector(".blobs-cont"));
  const blobTxt = document.createElement("p");
  const nextPage = document.createElement("button");
  const plainBlob = document.createElement("small");
  const blobValue = document.createElement("input");
  nextPage.textContent = "*Blob*";
  nextPage.className = "next-btn";
  nextPage.type = "button";
  blobValue.type = "number";
  blobValue.id = "blob-value";
  blobValue.placeholder = "*Blob*";
  nextPage.addEventListener("click", () => {
    if(parseInt(blobValue.value) === 17) {
      renderTxtSix();
    } else {
      alert("That's not it...*Blob*")
    };
  });
  blobTxt.id = "first-txt";
  blobTxt.append("How many *Blob*'s have you seen, not including this page...if you don't know, refresh and start again...");
  plainBlob.className = "blobs";
  plainBlob.append("*Blob*");
  const blobContainter = document.createElement("div");
  blobContainter.className = "blobs-cont";
  blobContainter.appendChild(plainBlob);
  blobContainter.appendChild(nextPage);
  base.appendChild(blobTxt);
  base.appendChild(blobValue);
  base.appendChild(blobContainter);
}

const blobPartThree = "Once awakened and fully accustomed to the planet's climate, the humans started to spread accross the terrain. They deployed the farming...*Blob*...robots they brought with them, that got to immediate work in finding ideal fields and plowing them out. The...*Blob*...hunans prospered here far greater than they could have hoped for. Life was easy. Life was infact so easy...*Blob*...humans began to undergo an evolution. It could be argued it was more a devolution, than an...*Blob*...evolution though.";

function renderTxtSix() {
  base.removeChild(document.querySelector("#first-txt"));
  base.removeChild(document.querySelector(".blobs-cont"));
  base.removeChild(document.querySelector("#blob-value"));
  const blobTxt = document.createElement("p");
  const nextPage = document.createElement("button");
  const plainBlob = document.createElement("small");
  nextPage.textContent = "*Blob*";
  nextPage.className = "next-btn";
  nextPage.type = "button";
  nextPage.addEventListener("click", () => {
    renderTxtSeven();
  });
  blobTxt.id = "first-txt";
  blobTxt.append(blobPartThree);
  plainBlob.className = "blobs";
  plainBlob.append("*Blob*");
  const blobContainter = document.createElement("div");
  blobContainter.className = "blobs-cont";
  blobContainter.appendChild(plainBlob);
  blobContainter.appendChild(nextPage);
  base.appendChild(blobTxt);
  base.appendChild(blobContainter);
}

const blobPartFour = "The devolution wasn't instantaneous, in total it took...*Blob*...about 33 years. It happened not to the first generation Innhaus inhabitants, but to their children. Due to the lack of working and other predators the...*Blob*...children were all born disfigured. Not third arm or third eye disfigured, but they were all blob shaped. As if the bones didn't form like they once...*Blob*...did. This decendent of the human race was called BlobMen with each one being a...*Blob*...BlobMan. This new generation would change InnHaus forever...";

function renderTxtSeven() {
  base.removeChild(document.querySelector("#first-txt"));
  base.removeChild(document.querySelector(".blobs-cont"));
  const blobTxt = document.createElement("p");
  const nextPage = document.createElement("button");
  const plainBlob = document.createElement("small");
  nextPage.textContent = "*Blob*";
  nextPage.className = "next-btn";
  nextPage.type = "button";
  nextPage.addEventListener("click", () => {
    renderTxtEight();
  });
  blobTxt.id = "first-txt";
  blobTxt.append(blobPartFour);
  plainBlob.className = "blobs";
  plainBlob.append("*Blob*");
  const blobContainter = document.createElement("div");
  blobContainter.className = "blobs-cont";
  blobContainter.appendChild(plainBlob);
  blobContainter.appendChild(nextPage);
  base.appendChild(blobTxt);
  base.appendChild(blobContainter);
}

const blobPartFive = "Due...*Blob*...to the blob like nature it was hard for this new generation to get around, so they developed a new form of communication...*Blob...they called it BlobSpace. It was a place for all to hang out together and share their ideas and have some fun. This...*Blob...generation was also a game change because since they had the time, they rediscovered music. Music was lost on the first inhabitants of the planet InnHaus. They were too focused...*Blob*...on getting their civilization back up and running.";

function renderTxtEight() {
  base.removeChild(document.querySelector("#first-txt"));
  base.removeChild(document.querySelector(".blobs-cont"));
  const blobTxt = document.createElement("p");
  const nextPage = document.createElement("button");
  const plainBlob = document.createElement("small");
  nextPage.textContent = "*Blob*";
  nextPage.className = "next-btn";
  nextPage.type = "button";
  nextPage.addEventListener("click", () => {
    renderTxtNine();
  });
  blobTxt.id = "first-txt";
  blobTxt.append(blobPartFive);
  plainBlob.className = "blobs";
  plainBlob.append("*Blob*");
  const blobContainter = document.createElement("div");
  blobContainter.className = "blobs-cont";
  blobContainter.appendChild(plainBlob);
  blobContainter.appendChild(nextPage);
  base.appendChild(blobTxt);
  base.appendChild(blobContainter);
}

const finalBlob = "Therefore the era of the BlobMan was born. The music loving, social media using, and blob shaped new age humans. What's to come for them? Why don't you come find out...";

function renderTxtNine() {
  base.removeChild(document.querySelector("#first-txt"));
  base.removeChild(document.querySelector(".blobs-cont"));
  const blobTxt = document.createElement("p");
  const nextPage = document.createElement("button");
  const plainBlob = document.createElement("small");
  const blobContainter = document.createElement("div");
  blobContainter.className = "blobs-cont";
  blobContainter.appendChild(plainBlob);
  blobContainter.appendChild(nextPage);
  nextPage.textContent = "*Blob*";
  nextPage.className = "next-btn";
  nextPage.type = "button";
  nextPage.addEventListener("click", () => {
    renderTxtTen();
  });
  blobTxt.id = "first-txt";
  blobTxt.append(finalBlob);
  plainBlob.className = "blobs";
  plainBlob.append("*Blob*");
  base.appendChild(blobTxt);
  base.appendChild(blobContainter);
}

function renderTxtTen() {
  base.removeChild(document.querySelector(".blobs-cont"));
  
  const blobTxt = document.createElement("p");
  
  blobTxt.id = "tbc";
  blobTxt.append("To Be Continued");
  base.appendChild(blobTxt);
}