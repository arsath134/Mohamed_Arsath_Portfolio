// ---------- Nav toggle (mobile) ----------
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
navToggle.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
navList.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navList.classList.remove('open');
  navToggle.setAttribute('aria-expanded', false);
}));

// ---------- Typing effect ----------
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const typedEl = document.getElementById('typed');
const cursorEl = document.getElementById('typeCursor');
const phrase = "Cloud/DevOps Engineer";
if (reduceMotion) {
  typedEl.textContent = phrase;
  cursorEl.style.display = 'none';
} else {
  let i = 0;
  function type(){
    if(i <= phrase.length){
      typedEl.textContent = phrase.slice(0, i);
      i++;
      setTimeout(type, 55);
    }
  }
  type();
}

// ---------- Skill chips ----------
const skillData = {
  'chips-aws': ["EC2","S3","IAM","VPC","EBS","RDS","Lambda","DynamoDB","SNS","SQS","CloudWatch","CloudTrail","EventBridge","API Gateway","ALB","Auto Scaling","Route 53"],
  'chips-lang': ["Python","C","SQL","JavaScript"],
  'chips-devops': ["Docker","Docker Hub","Jenkins","Git","GitHub"],
  'chips-sys': ["Linux","Bash Scripting","IP Addressing","DNS","HTTP/HTTPS","Subnets","Routing","Security Groups","NACLs"],
  'chips-web': ["HTML","CSS","PHP","MySQL","DynamoDB"]
};
Object.entries(skillData).forEach(([id, items]) => {
  const el = document.getElementById(id);
  el.innerHTML = items.map(s => `<span class="chip">${s}</span>`).join('');
});

// ---------- Projects ----------
function archHTML(nodes){
  return nodes.map((n, idx) => {
    const node = `<span class="arch-node svc">${n}</span>`;
    return idx === 0 ? node : `<span class="arch-arrow">→</span>${node}`;
  }).join('');
}

const projects = [
  {
    id: "01",
    title: "Event-Driven Architecture",
    stack: "AWS · Event-driven",
    desc: "An event-driven monitoring pipeline that captures AWS account activity and delivers real-time email alerts for critical events. CloudTrail, EventBridge, Lambda, SQS and SNS automate event capture, message processing and notification delivery, secured with least-privilege IAM policies and centralized CloudWatch logging.",
    arch: ["CloudTrail","EventBridge","Lambda","SQS","Lambda","SNS","Email","CloudWatch"]
  },
  {
    id: "02",
    title: "AI Disaster Response System",
    stack: "AWS · Serverless + AI",
    desc: "A cloud-based platform that ingests disaster-related data and triggers automated alerts to subscribed users. S3, Lambda and DynamoDB handle scalable file processing, serverless compute and structured data storage, with SNS notifications and CloudWatch monitoring for timely, reliable alerting.",
    arch: ["EC2","S3","DynamoDB","Lambda","AI","Lambda","SNS"]
  },
  {
    id: "03",
    title: "Multi-Tier Architecture",
    stack: "AWS · Multi-tier",
    desc: "A secure, multi-tier web application on AWS with public/private subnets, route tables and an Internet Gateway. EC2 and RDS sit behind an Application Load Balancer and Target Group, with Auto Scaling for elastic capacity, separated frontend/backend components, and Security Groups controlling traffic.",
    arch: ["VPC","ALB","Target Group","EC2","RDS"]
  },
  {
    id: "04",
    title: "Serverless Application Deployment",
    stack: "AWS · Serverless",
    desc: "A fully serverless calculator built on API Gateway, Lambda and DynamoDB to process and persist calculations, with service-to-service communication secured by scoped IAM permissions across the request-processing workflow.",
    arch: ["EC2","API Gateway","Lambda","DynamoDB"]
  },
  {
    id: "05",
    title: "Conversational Image Generator",
    stack: "Python · Flask · Stable Diffusion",
    desc: "A local, GPU-accelerated AI image-generation app built in Python and Flask using Stable Diffusion, with a chat-style interface and customizable text, fonts, colours and image placement for flexible, fast output.",
    arch: ["Chat UI","Flask","Stable Diffusion","GPU render","Image output"]
  },
  {
    id: "06",
    title: "Local Service Search Engine",
    stack: "HTML · CSS · JS · PHP · MySQL",
    desc: "A full-stack web app for locating local service providers by category and location, with dynamic filtering and an admin panel for provider management, improving search relevance and data control.",
    arch: ["Browser","PHP backend","MySQL","Admin panel"]
  }
];

document.getElementById('projectList').innerHTML = projects.map(p => `
  <div class="project reveal">
    <div class="project-head">
      <span class="project-id">${p.id}</span>
      <h3>${p.title}</h3>
      <span class="project-stack">${p.stack}</span>
    </div>
    <div class="project-body">
      <p>${p.desc}</p>
      <div class="arch">
        <span class="arch-label">Architecture</span>
        <div class="arch-flow">${archHTML(p.arch)}</div>
      </div>
    </div>
  </div>
`).join('');

// ---------- Timeline ----------
const timeline = [
  {
    title: "DevOps Course — Innovel Training &amp; Placement",
    date: "Aug 2026 – Oct 2026",
    desc: "Hands-on DevOps training covering CI/CD concepts, containerization with Docker and Docker Hub, build automation with Jenkins, and version control with Git and GitHub."
  },
  {
    title: "AWS Cloud Course — Innovel Training &amp; Placement",
    date: "Jun 2026 – Aug 2026",
    desc: "Hands-on AWS training covering EC2, S3, VPC, IAM, RDS, Lambda, DynamoDB, CloudWatch, SNS, SQS, ALB and Auto Scaling — practicing secure, scalable multi-tier, serverless and event-driven architectures."
  },
  {
    title: "Deloitte Virtual Internship — Technology Consulting",
    date: "Forage · Dec 2025",
    desc: "Designed a secure intranet dashboard to monitor machine health status across multiple factories — featuring real-time visibility, collapsible factory/device views, historical status tracking, and integration with internal authentication systems."
  },
  {
    title: "AWS Cloud Intern — Internship Studio",
    date: "Sep – Oct 2024 · Remote",
    desc: "Deployed and managed cloud compute and storage resources using EC2 and EBS to support reliable application hosting. Configured IAM roles/policies, security groups and VPC networking to enforce least-privilege access, and monitored system health to improve uptime and overall cloud performance."
  },
  {
    title: "UiPath Academy — Automation Explorer Training",
    date: "Certification",
    desc: "Foundational RPA training covering UiPath tools and workflows, bot design, and where enterprise automation actually pays off."
  },
  {
    title: "Python Essentials 1 &amp; 2",
    date: "Cisco Networking Academy & Python Institute",
    desc: "OOP, scripting and debugging with Python 3 — foundational to intermediate training in logic building and real-world problem solving."
  }
];

document.getElementById('timelineList').innerHTML = timeline.map(t => `
  <div class="t-item">
    <div class="t-head"><h4>${t.title}</h4><span class="t-date">${t.date}</span></div>
    <p>${t.desc}</p>
  </div>
`).join('');

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll('.reveal');
if (reduceMotion) {
  revealEls.forEach(el => el.classList.add('in'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
}
