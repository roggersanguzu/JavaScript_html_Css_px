let k = [
  "🤠",
  "😐",
  "🐲",
  "😊",
  "🕸️",
  "😗",
  "👻",
  "🐈",
  "🦾",
  "⛷️",
  "🤺",
  "😫",
  "🥱",
  "😒",
  "😜",
  "😛",
  "😌",
  "🫤",
  "🙃",
  "🫠",
  "😔",
  "😦",
  "😧",
  "😔",
  "😕",
  "🫤",
];

const emo = document.querySelector(".j");

emo.addEventListener("mouseover", () => {
  emo.innerHTML = k[Math.floor(Math.random() * k.length)];
});

let actor = document.querySelector(".actor");
actor.addEventListener("click", () => {
  alert("Thanks for the Click, you can give us the Feedback Please");
});

let desc = document.querySelector(".w");
let initialText = desc.innerHTML;

desc.addEventListener("mouseover", () => {
  desc.innerHTML =
    "Computer Science is the modern-day alchemy, seamlessly translating abstract concepts into tangible realities through sophisticated algorithms and immersive interfaces. It catalyzes innovation, enabling seamless connectivity and empowering individuals to shape the future with boundless creativity and limitless potential. From pioneering artificial intelligence to revolutionizing cybersecurity, it offers a vast landscape for exploration and discovery. With its transformative capabilities, Computer Science drives progress across diverse fields, from healthcare to entertainment, unleashing unprecedented opportunities for collaboration, growth, and societal advancement. Embracing its dynamic nature, we embark on a journey of continuous learning, discovery, and transformation, shaping the digital world of tomorrow.";
});

desc.addEventListener("mouseout", () => {
  desc.innerHTML = initialText;
});
var dem = document.querySelector(".head");
let man = dem.innerHTML;
dem.addEventListener("mouseover", () => {
  dem.style.color = "green";
  dem.innerHTML = "Welcome to Netforge Technologies by Roggers ";
});
dem.addEventListener("mouseout", () => {
  dem.innerHTML = man;
});

//**********************************Button One******************************* */
var mak = document.querySelector(".a");
mak.addEventListener("click", () => {
  mak.textContent =
    "Roggers exemplifies expertise in the React framework, showcasing a deep understanding of its intricacies and capabilities. With a wealth of experience, he adeptly navigates its ecosystem, crafting dynamic and responsive user interfaces with precision and finesse. His proficiency extends to leveraging React's state-of-the-art features and libraries, ensuring optimal performance and scalability. Whether architecting complex applications or implementing innovative solutions, Roggers consistently delivers excellence, earning acclaim for his mastery of React's advanced concepts and best practices. Through his dedication to continuous learning and innovation, he remains at the forefront of React development, driving forward progress and shaping the future of web applications.";
  mak.style.color = "white";
  mak.style.font = "arial";
  mak.style.width = "80%";
  mak.style.height = "500px";
});

var a = document.querySelector(".a");
a.addEventListener("dblclick", () => {
  a.style.color = "white";
  a.style.height = "100px";
  a.style.width = "100px";
  a.style.margin = "20px";
  a.innerHTML = "REACT js";
});

//*******************************Button 2********************************* */
var make = document.querySelector(".b");
make.addEventListener("click", () => {
  make.textContent =
    "JavaScript remains Roggers's forte, where his proficiency extends beyond mere syntax familiarity. With an innate understanding of its core principles and advanced concepts, he crafts elegant solutions to complex problems, leveraging JavaScript's versatility to create dynamic and interactive web experiences. Roggers adeptly employs modern frameworks and libraries, harnessing the full potential of JavaScript to develop robust applications that meet the evolving demands of the digital landscape. His expertise spans from front-end development to server-side scripting, demonstrating a comprehensive mastery of JavaScript's vast ecosystem. Roggers's commitment to excellence in JavaScript development ensures the delivery of high-quality, scalable, and performant solutions that drive innovation and propel businesses forward.";
  make.style.color = "white";
  make.style.font = "arial";
  make.style.width = "80%";
  make.style.height = "500px";
});

var make = document.querySelector(".b");
make.addEventListener("dblclick", () => {
  make.style.color = "white";
  make.style.height = "100px";
  make.style.width = "100px";
  make.style.margin = "20px";
  make.innerHTML = "Java Script";
});

//*******************************THREE********************************** */

var maker = document.querySelector(".c");
maker.addEventListener("click", () => {
  maker.textContent =
    "CSS proficiency complements Roggers's skill set, elevating his web development projects with stunning visual aesthetics and seamless user experiences. With meticulous attention to detail, he transforms design concepts into reality, leveraging CSS's powerful features to create responsive layouts, beautiful typography, and engaging animations. Roggers demonstrates a deep understanding of CSS best practices, employing preprocessors like Sass to streamline his workflow and maintain code maintainability. His expertise extends to CSS frameworks like Bootstrap and Tailwind CSS, allowing him to expedite development while adhering to modern design standards. Roggers's dedication to mastering CSS ensures that his projects stand out with polished and visually captivating designs, enriching the digital landscape with creativity and innovation.";
  maker.style.color = "white";
  maker.style.font = "arial";
  maker.style.width = "80%";
  maker.style.height = "500px";
});

var maker = document.querySelector(".c");
maker.addEventListener("dblclick", () => {
  maker.style.color = "white";
  maker.style.height = "100px";
  maker.style.width = "100px";
  maker.style.margin = "20px";
  maker.innerHTML = "CSS";
});

//*************************************FOUR*************************************
var makers = document.querySelector(".d");
makers.addEventListener("click", () => {
  makers.textContent =
    "Roggers exhibits proficiency in MySQL, utilizing its robust database management capabilities to power his web applications and backend systems. With expertise in database design, optimization, and querying, he architects scalable and efficient data solutions tailored to project requirements. Roggers leverages MySQL's advanced features such as indexing, transactions, and stored procedures to ensure data integrity and performance. His adeptness in writing complex SQL queries enables him to retrieve, manipulate, and analyze data with precision, empowering informed decision-making and driving business outcomes. Roggers's mastery of MySQL extends to database administration tasks, including security, backups, and performance tuning, ensuring reliable and secure data management throughout the project lifecycle.";
  makers.style.color = "white";
  makers.style.font = "arial";
  makers.style.width = "80%";
  makers.style.height = "500px";
});

var makers = document.querySelector(".d");
makers.addEventListener("dblclick", () => {
  makers.style.color = "white";
  makers.style.height = "100px";
  makers.style.width = "100px";
  makers.style.margin = "20px";
  makers.innerHTML = "MYSQL";
});

//***********************************FIVE************************** */
var makerss = document.querySelector(".e");
makerss.addEventListener("click", () => {
  makerss.textContent =
    "Computer networks form the backbone of modern connectivity, enabling seamless communication and resource sharing between devices worldwide. Roggers possesses a deep understanding of networking principles, protocols, and technologies, allowing him to design, deploy, and maintain robust network infrastructures. With expertise in TCP/IP, routing, switching, and subnetting, he ensures efficient data transmission and optimal network performance. Roggers leverages his knowledge of network security mechanisms, such as firewalls and encryption, to safeguard data against unauthorized access and cyber threats. His proficiency in network troubleshooting and diagnostics enables him to identify and resolve connectivity issues promptly, minimizing downtime and ensuring uninterrupted service delivery. Roggers's passion for networking extends to emerging technologies like SDN and IoT, where he explores innovative solutions to address evolving connectivity challenges and shape the future of networking.";
  makerss.style.color = "white";
  makerss.style.font = "arial";
  makerss.style.width = "80%";
  makerss.style.height = "500px";
});

var makerss = document.querySelector(".e");
makerss.addEventListener("dblclick", () => {
  makerss.style.color = "white";
  makerss.style.height = "100px";
  makerss.style.width = "100px";
  makerss.style.margin = "20px";
  makerss.innerHTML = "Networks";
});
