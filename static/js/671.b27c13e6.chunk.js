"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[671],{4671:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var i=n(2791),s=n(1087),a=n(6842),r=n(184),o=function(e){var t=e.data;return(0,r.jsx)("article",{className:"degree-container",children:(0,r.jsxs)("header",{children:[(0,r.jsx)("h4",{className:"degree",children:t.degree}),(0,r.jsxs)("p",{className:"school",children:[(0,r.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},c=function(e){var t=e.data;return(0,r.jsxs)("div",{className:"education",children:[(0,r.jsx)("div",{className:"link-to",id:"education"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,r.jsx)(o,{data:e},e.school)}))]})};c.defaultProps={data:[]};var l=c,u=function(e){var t=e.data;return(0,r.jsxs)("article",{className:"jobs-container",children:[(0,r.jsxs)("header",{children:[(0,r.jsxs)("h4",{children:[(0,r.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),(0,r.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,r.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,r.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return(0,r.jsxs)("div",{className:"experience",children:[(0,r.jsx)("div",{className:"link-to",id:"experience"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,r.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var h=d,p=n(5671),m=n(3144),g=n(136),y=n(516),f=n(4942),b=n(1413),v=function(e){var t=e.handleClick,n=e.active,i=e.label;return(0,r.jsx)("button",{className:"skillbutton ".concat(n[i]?"skillbutton-active":""),type:"button",onClick:function(){return t(i)},children:i})},k=function(e){var t=e.data,n=e.categories,i=t.category,s=t.competency,a=t.title,o={background:n.filter((function(e){return i.includes(e.name)})).map((function(e){return e.color}))[0]},c=(0,b.Z)((0,b.Z)({},o),{},{width:"".concat(String(Math.min(100,Math.max(s/5*100,0))),"%")});return(0,r.jsxs)("div",{className:"skillbar clearfix",children:[(0,r.jsx)("div",{className:"skillbar-title",style:o,children:(0,r.jsx)("span",{children:a})}),(0,r.jsx)("div",{className:"skillbar-bar",style:c}),(0,r.jsxs)("div",{className:"skill-bar-percent",children:[s," / 5"]})]})};k.defaultProps={categories:[]};var S=k,j=function(e){(0,g.Z)(n,e);var t=(0,y.Z)(n);function n(e){var i;return(0,p.Z)(this,n),(i=t.call(this,e)).handleChildClick=function(e){i.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,i){return(0,b.Z)((0,b.Z)({},n),{},(0,f.Z)({},i,e===i&&!t.buttons[i]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},i.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,b.Z)((0,b.Z)({},e),{},(0,f.Z)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),i}return(0,m.Z)(n,[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,r.jsx)(S,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,r.jsx)(v,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,r.jsxs)("div",{className:"skills",children:[(0,r.jsx)("div",{className:"link-to",id:"skills"}),(0,r.jsxs)("div",{className:"title",children:[(0,r.jsx)("h3",{children:"Skills"}),(0,r.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,r.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,r.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}]),n}(i.Component);j.defaultProps={skills:[],categories:[]};var x=j,C=function(e){var t=e.data,n=e.last;return(0,r.jsxs)("li",{className:"course-container",children:[(0,r.jsxs)("a",{href:t.link,children:[(0,r.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,r.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,r.jsx)("div",{className:"course-dot",children:(0,r.jsx)("p",{className:"course-name",children:" \u2022"})})]})};C.defaultProps={last:!1};var D=C,w=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,r.jsx)(D,{data:t,last:n===e.length-1},t.title)}))},I=function(e){var t=e.data;return(0,r.jsxs)("div",{className:"courses",children:[(0,r.jsx)("div",{className:"link-to",id:"courses"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Selected Courses"})}),(0,r.jsx)("ul",{className:"course-list",children:w(t)})]})};I.defaultProps={data:[]};var P=I,U=function(){return(0,r.jsxs)("div",{className:"references",children:[(0,r.jsx)("div",{className:"link-to",id:"references"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)(s.rU,{to:"/contact",children:(0,r.jsx)("h3",{children:"References are available upon request"})})})]})},N=[{title:"Computer Science",number:"CS 124",link:"https://cs.illinois.edu/academics/courses/cs124",university:"UIUC"},{title:"Data Science Discovery",number:"STAT 107",link:"https://discovery.cs.illinois.edu",university:"UIUC"},{title:"Intro to CyberSecurity",number:"ENG 198",link:"https://www.coursicle.com/illinois/courses/ENG/198/",university:"UIUC"},{title:"Reading and Writing Data",number:"IS 312",link:"https://ischool.illinois.edu/degrees-programs/courses/is312",university:"UIUC"},{title:"Data Science Exploration",number:"STAT 207",link:"http://courses.las.illinois.edu/spring2020/stat207/",university:"UIUC"},{title:"Social Aspects of Info Tech",number:"IS 202",link:"https://ischool.illinois.edu/degrees-programs/courses/is202",university:"UIUC"},{title:"Research Design for Information Sciences",number:"IS 204",link:"https://ischool.illinois.edu/degrees-programs/courses/is204",university:"UIUC"},{title:"Programming for Information Problems",number:"IS 205",link:"https://ischool.illinois.edu/degrees-programs/courses/is205",university:"UIUC"},{title:"Database Concepts & Applications",number:"IS 206",link:"https://ischool.illinois.edu/degrees-programs/courses/is206",university:"UIUC"},{title:"Calculus 1 & 2",number:"Math",link:"https://apstudents.collegeboard.org/courses/ap-calculus-bc",university:"Vernon Hills High School"},{title:"Data Visualization",number:"IS 445",link:"https://ischool.illinois.edu/degrees-programs/courses/is445",university:"UIUC"},{title:"Intro to Accounting",number:"ACCY 200",link:"https://giesbusiness.illinois.edu/course/ACCY/200",university:"UIUC"},{title:"Database Design and Prototyping",number:"IS 455",link:"https://ischool.illinois.edu/degrees-programs/courses/is455",university:"UIUC"},{title:"Concepts of Machine Learning",number:"IS 327",link:"https://ischool.illinois.edu/degrees-programs/courses/is327",university:"UIUC"},{title:"Microeconomics",number:"ECON 102",link:"https://blogs.illinois.edu/view/6869/486316",university:"UIUC"},{title:"Systems Analysis and Design",number:"IS 446",link:"https://ischool.illinois.edu/degrees-programs/courses/is446",university:"UIUC"},{title:"Ethics & Policy for Data Science",number:"IS 467",link:"https://ischool.illinois.edu/degrees-programs/courses/is467",university:"UIUC"},{title:"Data Management, Curation & Reproducibility",number:"IS 477",link:"https://ischool.illinois.edu/degrees-programs/courses/is477",university:"UIUC"},{title:"Algorithms and Data Structures for Data Science",number:"CS 277",link:"https://courses.grainger.illinois.edu/cs277/sp2023/",university:"UIUC"},{title:"Model & Learning in Data Science",number:"CS 307",link:"https://cs.illinois.edu/academics/courses/cs307",university:"UIUC"},{title:"Linear Algebra For Data Science",number:"MATH 227",link:"http://ee266.stanford.edu/",university:"UIUC"},{title:"Data Analytics Applications in Business",number:"BDI 475",link:"https://www.bdi475.org",university:"UIUC"},{title:"Blockchain, Tokens, and Their Application in Business",number:"BDI 411",link:"http://catalog.illinois.edu/courses-of-instruction/bdi/",university:"UIUC"}],A=[{school:"University of Illinois at Urbana Champaign",degree:"B.S. Data Science and Information Science, Minor: Buisness | James Scholar Honors Student",link:"https://illinois.edu",year:2025},{school:"Vernon Hills High School",degree:"High School Diploma",link:"https://www.d128.org/vhhs",year:2021}],L=[{company:"Synchrony Financial",position:"Artificial Intelligence Intern",link:"https://www.synchrony.com",daterange:"May 2023 - Present",points:["Researched and found multiple ways to incorporate generative AI into the Fin-Tech space while also looking at the viability of AI in the market.","Built an Object Detection bot using Python in the OpenCV library trained on custom data. This bot is used to scan and search for objects from Synchrony vendors through pictures on a database I designed of over 500 products.","Pitched and developed a PTO for an AI marketplace application that uses the Chat GPT API to find items a customer may like based on any theme they choose such as a tv show, song or a character (thematic shopping)."]},{company:"SCROLL",position:"Co-founder",link:"https://tbath18.github.io/web3/",daterange:"December 2022 - Present",points:["Developing an application that uses generative AI to turn text(datasets, textbooks, websites) into a Social Media Style digestible feed, utilizing the infinite scroll effect. Working with Professors and PhD students in the Computer Science, Information Science and Business Departments at the University of Illinois.","Participated in two Pitch Competitions for innovation receiving over $1,250 in funding and found that the product is 100% student and professor recommended. Joined I-Corps start-up accelerator.","Trademarked company and engineered a concpet/POC to advertise to educational proffesionals. ","Built Company Website Using HTML, JavaScript, and CSS."]},{company:"Illini Blockchain",position:"Data Science Researcher",link:"https://illiniblockchain.com",daterange:"December 2022 - Present",points:["Published a paper on Layer 2 Blockchain platforms and compared each network with data extracted from Flipside Crypto using python for data analysis. Developed leadership and teamwork skills while creating the paper as we learned to use SQL, do high level research, gain technical writing skills, and instill passion within each other.","Used SQL to extract insights on these Layer 2 platforms specifically looking at variables that may affect Market Share such as the number of transactions per day and the number of users on each platform. Presented Findings at the Gies Blockchain Summit to Leaders in the blockchain field.","Researched and discussed Web3 and Blockchain topics to develop online learning resources."]},{company:"Center for Disease Control at UIUC",position:"Research Assitant for Data Analysis",link:"https://www.cdc.gov",daterange:"August 2022 - Present",points:["Collaborated with Professor Rebecca Smith and other PhD students to create an online Data Analysis Application to measure mosquito insecticide effectiveness within the United States.","Engineered the application using the R programming language and libraries such as ggplot, r-shiny and tidyr. Utilized data extracted from the CDC database to create meaningful visualizations."]},{company:"Institute for Genomic Biology",position:"Bioinformatics Research Intern",link:"https://www.igb.illinois.edu",daterange:"January 2023 - Present",points:["Working under Doctor Sandra Zas and Professor Bruce Southey to publish a paper on Differential alternative splicing genes and isoform co-expression networks of Brassica napus under multiple abiotic stresses.","Creating quantitative visualizations with the MISO software to make sashimi plots to find out about the \u201cversion\u201d of a gene that are produced.","Working with Python in the Biopython library and SQL.","Utlized Libraries such as Pandas, Numpy, Sckilit-Learn, Matplotlib, Seaborn."]},{company:"Tennis Academy",position:"Tennis Instructor",link:"",daterange:"Runs Every Summer Since May, 2021",points:["Conducted a tennis clinic for children aged 5 to 14 and procured lesson plans to teach the fundamentals of the sport.","Attained crucial leaderships skills by teaching and organizing youth camps of up to 16 eager tennis players.","Maintained welcoming and open communication channels for students' and their parents.","Instilled passion into over 20 students through fun exercises and engaging lesson plans."]},{company:"Kumon",position:"Instructor",link:"https://www.kumon.com",daterange:"August 2020 - March 2021",points:["Instructor for elementary school students in English literacy and mathematics up to algebra. Taught basic pronunciation, literacy, and basic addition to pre-school students. Evaluated the performance of students by logging results in an online database.","Tutored students aged 12 - 15 in areas of Probability/Statistics, Algebra, Geometry, Trigonometry, Calculus, and Classical Literature.","Worked with staff to help with day-to-day business operations. Maintained a clean and sanitary workspace for children during the Covid-19 Pandemic."]},{company:"Feed My Starving Children",position:"Volunteer",link:"https://www.fmsc.org",daterange:"Ever since I can remember",points:["Package and store food which would later be shipped to third-world countries with communities in need of food."]}],O=n(3433),T=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Amazon Web Services",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:2,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL",competency:3,category:["Web Development","Databases","Languages"]},{title:"Data Mining",competency:3,category:["Data Science"]},{title:"Git/Mercurial",competency:3,category:["Tools"]},{title:"Google Cloud Compute",competency:2,category:["Tools","Web Development"]},{title:"Numpy",competency:5,category:["Data Science","Data Engineering","Python"]},{title:"Numba",competency:2,category:["Data Science","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:1,category:["Data Science","Python"]},{title:"Jupyter",competency:5,category:["Data Science","Python"]},{title:"HTML + SASS/SCSS/CSS",competency:4,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"R",competency:4,category:["Languages"]},{title:"Data Visualization",competency:5,category:["Data Science","Javascript"]},{title:"Pandas",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","Data Science","Python"]},{title:"Pylint",competency:2,category:["Data Engineering","Python"]},{title:"NLTK",competency:2,category:["Data Engineering","Python"]},{title:"Seaborn",competency:4,category:["Data Science","Python"]},{title:"GGplot",competency:4,category:["Data Engineering","Python"]},{title:"Tableau",competency:4,category:["Data Science","Web Development"]},{title:"Scipy",competency:2,category:["Data Science","Python"]},{title:"Excel",competency:5,category:["Databases","Tools"]}].map((function(e){return(0,b.Z)((0,b.Z)({},e),{},{category:e.category.sort()})})),B=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],M=(0,O.Z)(new Set(T.reduce((function(e,t){var n=t.category;return e.concat(n)}),[]))).sort().map((function(e,t){return{name:e,color:B[t]}})),E=["Education","Experience","Skills","Courses","References"],R=function(){return(0,r.jsx)(a.Z,{title:"Resume",description:"Tarun Bathini's Resume. SCROLL, Illini Blockchain, Center for Disease Control, and Illinois Institute of Genomic Biology.",children:(0,r.jsxs)("article",{className:"post",id:"resume",children:[(0,r.jsx)("header",{children:(0,r.jsxs)("div",{className:"title",children:[(0,r.jsx)("h2",{children:(0,r.jsx)(s.rU,{to:"resume",children:"Resume"})}),(0,r.jsx)("div",{className:"link-container",children:E.map((function(e){return(0,r.jsx)("h4",{children:(0,r.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,r.jsx)(l,{data:A}),(0,r.jsx)(h,{data:L}),(0,r.jsx)(x,{skills:T,categories:M}),(0,r.jsx)(P,{data:N}),(0,r.jsx)(U,{})]})})}},4942:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(9142);function s(e,t,n){return(t=(0,i.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(4942);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=671.b27c13e6.chunk.js.map