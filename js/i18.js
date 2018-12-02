function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

// var language = getCookie('vc-lang');
var language = 'en';
if (!language) {
	language = 'en';
	setCookie('vc-lang', 'en', 30);
}

var app = new Vue({
	el: '#voicecoin',
	data: {
		lang: language,
		vc: {
			en: {
				header: {
					home: 'HOME',
					about: 'ABOUT',
					team: 'TEAM',
					feat: 'FEATURES',
					token: 'TOKEN SALE',
					found: 'FOUNDATION',
					test: 'TESTNET',
					white: 'WHITEPAPER',
					faq: 'FAQ',
					lang: '中文'
				},
				wel: {
					title: 'Welcome to Voicecoin\'s ICO',
					sub1: 'We\'re building a voice-driven decentralized smart web based on voicechain.',
					sub2: 'The universal bridge between AI chatbot and IoT.',
					sub3: 'Voicecoin is the money of Voiceweb.',
					buy: 'Buy Tokens',
				},
				spe: {
					h2: 'Ask what you need',
					p1: 'Escape the screen and endless scrolling, get what you’re looking for by just ASKING.',
					p2: 'By 2020, Morgan Stanley predicts 75 billion IoT devices will be connected. We are going to step into the post mobile era, next generation internet is voice Internet. People will talk to the computer like the way we talk to people—minus the sassiness!',
					more: 'Read More',
					faq: 'FAQ'
				},
				prblm: {
					h2: 'Pain Points',
					h4: 'Google and Amazon are privatizing voice internet',
					p1: 'A lot of companies are developing post mobile smart devices. Many companies are developing this market, and one such example	are smart speaker manufacturers. These manufacturers require chatbot developers to register their chatbots as skill sets within the smart speakers. In this approach, chatbots must be registered on different smart speakers; therefore, chatbot developers must learn and utilize different accessing protocols to have their chatbot installed. Every smart device manufacturer requires the chatbot developers to register their chatbots and follow their specific standards so that the chatbots can be browsed by their end users. Traditional WWW web is going to die in voice internet, people will use less and less chance to input a domain name and URL address.',
					p2: '',
					i: [{
							h4: 'Hard to use',
							p: 'The current voice systems make it hard for users to find services',
						},
						{
							h4: 'Lack of Variety',
							p: 'Manufacturers are not providing enough variety of voice enabled applications for current consumers',
						},
						{
							h4: 'No Standard',
							p: 'Current voice app stores have no common standard. It is difficult for developers to create their own voice applications for these devices',
						},
					]
				},
				sl: {
					h2: 'ABOUT VOICECOIN',
					h4: 'We propose a blockchain solution to underpin the voice-based Internet',
					p1: ' Under this new system, chatbot developers will register voice domains on the blockchain, follow a set of simple instructions, and then their chatbots will be launched. In this way, any global user will be able to talk to any registered chatbot. Smart device manufacturers will no longer need to ask chatbot developers to register their chatbots. This solution preserves developer resources, while giving users a more convenient way to surf an open, voice-based internet. As traditional browser-based web sites evolve into chatbots, the traditional domain name system evolves into a decentralized voice domain system, and cryptocurrency becomes the global standard for chatbot payments.',
					p2: '',
					i: [{
							h4: 'Awesome Experience',
							p: 'People can talk to a wide variety of unique voice chatbot',
						},
						{
							h4: 'Fast and Simple',
							p: 'Developers publish chatbot in one stop',
						},
						{
							h4: 'Diversity',
							p: 'A global voice chatbot economy opens up',
						},
					]
				},
				sch: {
					h2: 'Semantic VNS Resolving',
					h4: 'How does voiceweb blockchain work?',
					p1: 'Voiceweb is a blockchain platform for voice chatbot development and voicecoin is cryptocurrency for Voiceweb.',
					i: [{
							p: 'You can register your voice chatbot name on Voiceweb VNS and fill in chatbot URL address.',
						},
						{
							p: 'You can use chatbot browser to find any chatbot by searching the chatbot name to access your favorite applications, brands and skills with just your voice.',
						},
						{
							p: 'The chatbot directory will be open, decentralized, and interconnected for easy development and access to your own chatbot and others.',
						},
					]
				},
				feat: {
					h2: 'VOICECOIN FEATURES',
					i: [{
							h4: 'Decentralized Platform',
						},
						{
							h4: 'Secure Transactions',
						},
						{
							h4: 'Interconnected Synergy',
						},
						{
							h4: 'Trusted Support',
						},
						{
							h4: 'World Wide Communication',
						},
						{
							h4: 'Fast Uptime',
						},
					]
				},
				team: {
					h2: 'OUT TEAM',
					i: [{
							h4: 'George Zhao',
							h5: 'Founder, CEO',
							p1: "Inventor of WeChat IP, George is an executive member of Blockchain at Berkeley, the CEO of the chatbot development platform Voicebot AI, and a recent dropout from the Stanford Master’s Program in Artificial Intelligence and Cryptography. Before earning an MBA in the US, Jianwen worked for companies including Youku-Tudou (Alibaba), Shanda,and SMS Assist. In late 2017, George published a whitepaper initiating the blockchain voice-based internet together with five leading blockchain developers.",
						},
						{
							h4: 'Elaine Shao',
							h5: 'CMO',
							p1: 'Founder of California Angel and advertisement analyst who provided consulting services at Google. She was also the media marketing Supervisor for Leo Burnett.',
						},
						{
							h4: 'Yong Duan',
							h5: 'Ai & Big Data Scientist',
							p1: 'Yong Duan is the big data expert of WiFi master key with 16 years of proficient experience in big data, business intelligence(BI), data mining, machine learning and deep learning technology. After a couple of years of working for the domestic pioneer data mining enterprise named Huayuan Data, he co-founded the Shuyun Co.,Ltd which is successfully obtained the investment of the Sequoia capital A round and Alibaba C round and became its CTO.',
						},
						{
							h4: 'Kyle Bao',
							h5: 'Ph.D., Cryptologist',
							p1: 'Designing next generation cryptogram standard for NIST. Master quantum proof cryptography.',
						},
						{
							h4: 'Joyce Zhang',
							h5: 'CFO',
							p1: 'Joyce Zhang is the president of the Alumni Association of Central University of Finance and Economics in Chicago with 20 years of professinal experience in finance, investment and business management. She is a certified public accountant registered in China, a certified international internal auditor and a senior economic analyst.',
						},
						{
							h4: 'Craig Watts',
							h5: 'CSO',
							p1: 'Craig Watts is an expert on the Digital Marketing. He is not only the co-founder of Madhouse but also the general manager of digital intelligence for GroupM (WPP). He holds a Ph.D. in Media Studies from Osaka University and an M.A. in English from the University of Chicago.',
						},
						{
							h4: 'Terry Fogarty',
							h5: 'Legal Counsel',
							p1: '',
						},
						{
							h4: 'Chelsea Rustrum',
							h5: 'Community Strategist',
							p1: '',
						},
						{
							h4: 'David Passiak',
							h5: 'Keynote Speaker, Innovator, Futurist',
							p1: '',
						},
						{
							h4: 'Monette Stephens',
							h5: 'Strategic Advisory',
							p1: '',
						},
						{
							h4: 'Amanda Rivera',
							h5: 'Millennial Business Strategist',
							p1: '',
						},
						{
							h4: 'Arnold Gu',
							h5: 'CPO',
							p1: "An expert of Internet of Things, former director of China Telecom's IoT operation. He is in charge of IoT open lab with considerable experience in IoT products, operation and development. There are 19 authorized patents and 7 ITU standards issued. He is cooperated with more than 100 major customers such as OFO and Haier. He is the leading officer of IoT League which has over 300 members including Intel, Qualcomm, Bosch and IBM etc. He has experience of holding summit forum and exposition. Also he develops more than 1000 IoT solutions and the users break through 100 million.",
						},
					]
				},
				dev: {
					h2: 'Developer Community',
					i: [{
							h4: 'Squall Zhao',
							p: 'Blockchain, AI and microservice expert, 10 years C++ development experience.',
						},
						{
							h4: 'Gavin Zhang',
							p: 'Working in Shanghai Futures Exchange, developed bidding system.',
						},
						{
							h4: 'Yoky Xu',
							p: '8+ years experience, game server developer, master real media development.',
						},
						{
							h4: 'Kevin Liu',
							p: 'Client developer, also dedicated in developing large scale passport system.',
						},
						{
							h4: 'Eric Chan',
							p: '10+ years software development experience, Voice based chatbot platform developer.',
						},
					]
				},
				aa: {
					h2: 'ADVISORS/INVESTORS',
					i: [{
							h4: 'Min H. Kim',
							h5: 'Investor Relations Advisor',
							p1: "Head of BD at The Bee Token, decentralized Airbnb. Previously was Chief of Staff at Civic Technologies and Marketing & Partnerships Associate at Draper University. Working with Tim Draper on blockchain-related initiatives.",
						},
						{
							h4: 'Bing Liu',
							h5: 'Distinguished Professor',
							p1: "AI Advisor,Bing Liu is the professor of computer science who specializes in data mining, machine learning and natural language processing. Two of his research papers published in KDD-1998 and KDD-2004 were received KDD Test-of-Time awards in 2014 and 2015. In 2013, he was elected the chair of SIGKDD, ACM Special Interest Group on Knowledge Discovery and Data Mining. Besides. he is an AI Scientis and the Fellow of IEEE.",
						},
						{
							h4: 'Pierre He',
							h5: 'Co-Founder of iex.ec',
							p1: "Co-founder of iex.ec. 100 Talent Professor at the CNIC ​ (Computer Network Information Center)​​",
						},
						{
							h4: 'Ken Huang',
							h5: 'Blockchain Security Consultant',
							p1: "Blockchain Security Consultant Huawei VP, Chief Blockchain Scientist and Chief Identity Management System Architect, CISSP, Commit Member of ACM, Chinese Electric Academy Blochchain Expert Committee Member.",
						},
						{
							h4: 'Zong Ling',
							h5: 'Ph.D., Scientist in IBM',
							p1: "Senior Software Engineer / Scientist in IBM Software Group / Almaden Research Center. Over past 14 years, Dr. Ling has been working on evaluating the performance of IBM Tivoli Storage Products and distributed clouding storage systems.",
						},
						{
							h4: 'Liren Chen',
							h5: 'NLP Scientist',
							p1: "A former Googler, involved in multi-language search engines, and Google+ for 7 years. Led mobile search at Qihoo 360 and the Pangu search engine. Graduate of Carnegie Mellon University.",
						},
						{
							h4: 'Deming Cha',
							h5: 'ChinaRun Venture Capital Managing Partner',
							p1: "With more than 20 years of experience in private equity venture capital and high-tech enterprises, in the Greater China region and North America. He served as the largest private investment institutions - China Minsheng Investment Group (CMIG) International Division as Managing Director. He has been vice president of a world-class enterprise software - SAP, and as General Manager of Greater China region for many European and US technology companies and also Inventec as head of software & services business unit.",
						},
						{
							h4: 'Mingshun Li',
							h5: 'Angel of Huobi',
							p1: "CEO of Haorong Global Inc. Founder & CEO of Haodai.com.",
						},
					],
				},
				partners: {
					h2: 'PARTNERS/RESS'
				},
				foot: {
					paper: 'White Paper',
					medium:'Medium',
					saft: 'SAFT',
					gist: 'One Pager',
					gistpaper: '/doc/voiceweb_en.pdf',
					git: 'GitHub',
					contact: 'Contact',
					vf: 'Voiceweb Foundation',
					dot: '.',
					right: 'All Rights Reserved.',
				},
				faq: {
					title: 'Frequently Asked Questions',
					q01: "What is Voicecoin?",
					a01: "Voicecoin is the cryptocurrency used on the Voicecoin platform and is also the first phase of the Voiceweb project.",
					q02: "What is Voiceweb?",
					a02: "Chatbots are registered on the Voice Chain. People then use the Voice Name to access a Chatbot by voice and use the various services provided by the Chatbot. Because each Chatbot has an exclusive and unique ID, Chatbots can also reference and connect with each other, and in this way an interconnected chatbot network is formed. From the perspective of voice, we have named this web the Voice Web.",
					q03: "What is the Voice Domain?",
					a03: "Instead of using the keyboard to enter a traditional domain name, our voice Internet browser, the Voice Browser, uses voice to access. These domain names, unlike traditional domain names, are in the form of natural language that we call the Voice Domain. When people use a voice Internet device, they access the desired services by calling up the appropriate Voice Domain.",
					q04: "What will the communication protocol of the Voice Browser be?",
					a04: "For better network conditions, HTTP / HTTPS is recommended. For poor network conditions, the MQTT protocol can be used, and Headload for smaller protocols. At present, the CoAP protocol is also the more commonly used protocol in IoT. For small devices, implementing the TCP and HTTP protocols is clearly excessive. The CoAP protocol was designed to allow small devices to connect to the Internet. CoAP is an application layer protocol that runs on the UDP protocol rather than TCP over HTTP. CoAP protocol is very small, the smallest data packet is only 4 bytes.",
					q05: "Won't people prefer to install such a capability themselves and then use it?",
					a05: "The trouble with this approach is that getting to the use phase can be troublesome because you first must install and set-up the capability. Imagine you are traveling while wearing such a device; your set up will be very troublesome. We will also provide a favorites function for ease of use.",
					q06: "What is DBot?",
					a06: "Voiceweb is one of our means of achieving this new form of internet, that will be built using blockchain technology. In Voiceweb, the sites will no longer take the form of the traditional web, but will serve mainly in the form of voice conversations, known as DBots.",
					q07: "Why not solve these issues using traditional domain names?",
					a07: "The main issue is that the traditional domain name design is not suited to the characteristics of voice, but really only suitable to keyboard input. People have witnessed the inconvenience of entering these domains when surfing the Internet, and they are extremely inconvenient when using a speaker interface. Many domain names do not pass the Radio Test. Voice Blockchain aims to establish standards so that registered domain names take a natural language form, without special symbols, that can be easily read and are identifiable by voice. The Namecoin platform utilizes this this scheme of establishing a domain name through the blockchain, but the Namecoin platform has no voice domain name resolution.",
					q08: "Why not use the Ethereum of NEO blockchain platform to address these issues?",
					a08: "Any developer can create a domain name smart contract on the Ethereum blockchain platform, but the problem is voice domain names are industry-specific; Chatbot developers uniformly follow this standard and then push their products to the specialized organizations, with nothing more than a hope that they’ll become a public industry resource. Owing to the special nature of Chatbots, including the communication protocol, security certification, user privacy, and other issues, there are many special requirements associated with the provision of a voice domain name blockchain that can only be solved through a proprietary platform.",
					q09: "Why create this project?",
					a09: "The earliest motivation for the Voiceweb project was to find a method of revitalizing the Web in the Internet of Things Era, using Blockchain technology. In the Mobile Era, people are using social platforms more and more, and utilizing the Web less. But these social platforms are centralized and not globally open or interconnected. In this Internet of Things Era, the founders believe that people are more likely to access the Internet via voice. But if a new open standard is not developed, this new Internet access point will be controlled solely by the Internet Giants, which would result in all online services needing to be distributed through a centralized voice platform. The founders are dissatisfied with the bleak outlook of a centralized future, and instead adopt a decentralized view aimed at smashing the monopolies these large companies are establishing, and bringing about the birth of a new open voice Internet Era.",
					q10: "How do you establish an individual Voice Web ecosystem?",
					a10: "In the initial Voiceweb’s ecology, we will develop voice application plug-ins on Alexa or Google Home, and these voice plugins will resolve various chatbot service brands. As the marketplace continues to validate this model, a voice-based chatbot browser will eventually be introduced. This browser will be the essential software for voice speakers. The browser access agreement will be open so that more people will develop this kind of browser.",
				},
				found: {
					h2: "Voice Enabled World Wide Web",
					p1: "Extend WWW to IoT devices with blockchain technologies",
					vision: {
						h1: "Vision",
						p: "To advance with the times, we will build a decentralized voice WEB by establishing a domain name system that conforms to the voice age, stimulates the creativity of small and medium-sized enterprises and individuals, liberates the Internet, and frees the Internet from the monopoly of centralized forces, bringing greater conveniences to the public.",
					},
					mission: {
						h1: "Mission",
						p: "The mission of the foundation is to establish and operate a blockchain-based voice domain name system by establishing technical standards and protocols to connect Chatbots with users around the world, so that in the future, people can access chatbots from any smart voice-enabled device and use the corresponding Chatbot service. Through the community, third-party developers and technological innovations, we will create an open-source globally influential ecology that will integrate voice domain names into domain name services of all walks of life, in order to improve people’s online experience. Through the integration of regulatory logic, and through linking with third-party platforms, we will establish the voice Internet.",
					},
					moti: {
						h1: "Motivation",
						p1: "Since the invention of the World Wide Web, it has been widely loved by the public for its open nature. But we have noticed that the Web is not perfect, and its abuses are continuously emerging. 1. In the mobile Internet Era, World Wide Web usage is falling far below that of mobile APPs. ​2. Within social networks, the Web is becoming more and more entangled and entwined with these centralized platforms, becoming little more than an accessory not available to the general public. 3. As stated by Tim Berners Lee, the father of the World Wide Web, the prevalence of rumors and loss of control over personal data are severe challenges to the Web. 4. In the IoT era, people cannot type URLs and browse web pages on a smart voice device that lacks a user interface. If voice is to be the main way people use web services in the future, then entering web addresses into the World Wide Web will be history. 5. Amid the fierce competition of among Internet giants, centralized forces are trying to establish a monopoly over Internet access. The World Wide Web is being split into independent kingdoms by them to track user behavior and covertly sell this data to gain advertising revenue. The result is the inadequate protection of people’s data and privacy, as well as added difficulties for developers and greater inconveniences to those people using the service.",
						p2: "Artificial intelligence and blockchain technology are constantly creating new conditions that allow people to enjoy a better Internet life. We believe that the World Wide Web can only avoid annihilation by the torrent of technological development in the world through highly advanced development. We cannot rely on the W3C to do this. We have endured an endless era of WAP, which is ample proof of the serious lag in the development of the World Wide Web. We propose building a Voiceweb that combines voice and semantics based upon blockchain technology, building on the three foundational achievements of John Berners Lee, and we are have already established and are in the process of improving the Voiceweb protocol stack. Voice is the most fundamental means of communication between people and should also be the main way for people to communicate with other kinds of intelligence. The trend of smart terminals brought about by cloud integration requires a more powerful human-computer interaction than the touch screen of a mobile phone. With this goal and purpose, we must first establish a decentralized voice domain name system to link with decentralized artificial intelligence services.",
					},
					value: {
						h1: "Values",
						p1: "The Foundation’s core values include non-profit operations structure, open-source, collaboration, interconnection, decentralization, transparency, respect for user privacy, enhancement of Internet security, enhancement of the Internet user’s convenience and experience, and protection of user privacy. The tenet of foundation management is that the foundation’s product designs and management policies must conform to these objectives and they must also be included in the implementation phase. The Foundation’s values are partly inherited from ICANN, the WWW organization, and the Bitcoin Foundation. Any decision that violates these core values must be immediately terminated and corrected. Full support and promotion of this value system is needed for sustainable development. ",
						p2: "ICANN’s goal: One world, One Internet. On this basis, Voice Blockchain analysis is aimed only at voice domain name services, and strives to take the lead amid fierce market competition, gradually forming an industry standard that is accepted by the majority of intelligent speaker equipment manufacturers, thus benefiting more Internet users. The ideologies inherited from the WWW include open-source and inter connectivity. The Voiceweb Blockchain project’s founding tenet is to revitalize the WEB in the era of voice Internet access to avoid complete monopolization by the Internet giants. ​",
						img: "img/found-img/found-values-en.png",
					},
					partner: {
						h1: "Partners",
					}
				},
			},
			zh: {
				header: {
					home: '首页',
					about: '介绍',
					team: '团队',
					feat: '优势',
					token: 'Token发行',
					found: '基金会',
					test: '测试网路',
					white: '白皮书',
					faq: 'FAQ',
					lang: 'ENG'
				},
				wel: {
					title: '欢迎访问语音链',
					sub1: '我们致力于构建语音驱动的去中心化物联网',
					sub2: '通过语音链连接数以亿计的IoT设备和智能机器人',
					sub3: '语音币是语音网络的通用货币',
					buy: '购买语音币',
				},
				spe: {
					h2: '答你所想 不负众望',
					p1: ' ',
					p2: '摩根士丹利预计到2020年会有750亿台IoT设备联网。我们将进入后移动时代，而下一代互联网是语音互联网。语音链就在现在：极速而至。从此：人机交流会像人与人之间的交流一样畅快淋漓！有我们，世界为你们而改变！',
					more: '更多',
					faq: 'FAQ'
				},
				prblm: {
					h2: '当前痛点',
					h4: '谷歌和亚马逊正在私有化语音网络',
					p1: '许多公司正在开发后手机时代的智能设备，典型案例就是各种智能音箱制造商。这些制造商要求语音服务开发者将他们的语音服务作为技能注册到智能音箱中。这种方式的语音服务必须被指定注册于不同的智能音箱上，所以语音服务的开发者不得不学习并使用不同的协议来开发。在一定程度上，也大大束缚并局限了用户方的自由使用。而且每个智能设备制造商都要求语音开发者注册他们的语音服务并遵循特定标准，捆绑式的语音服务只限于他们的最终用户使用，而未真正考虑如何更方便广大用户的利益，给用户带来诸多选择上的不便。 如此一来，智能音箱用户找服务难，智能音箱生产商又很难在音箱里集成丰富的服务。',
					p2: '不同于大公司的种种设限，语音网打破了传统万维网的局限，人们会很大幅度的降低输入域名和网址的次数。新一代创新语音网的为打破限制而生，零设限，为世人开拓无限多的自由空间。',
					i: [{
							h4: '功能繁琐',
							p: '目前的语音系统让用户很难找到想要的服务',
						},
						{
							h4: '产品单调',
							p: ' 制造商没有为当前客户提供充足的语音应用',
						},
						{
							h4: '无统一标准',
							p: '目前的语音应用商店没有共同的标准,所以开发人员很难为这些设备创建自己的语音应用程序',
						},
					]
				},
				sl: {
					h2: '什么是语音链',
					h4: '一场颠覆性的语音革命已经到来',
					p1: '我们首当其冲提出：区块链解决方案来支持语音互联网。我们创造并实现一个真正意义上的说比写快的语音区块链新生代！',
					p2: '全球化开启语音万维网新纪元，开发者一站式发布语音服务，全世界的公众可以免费享用任何语音服务，实现了真正意义上的语音服务共享。任何用户，可以在世界的任何地方，与已注册的语音服务通话。 智能设备制造商将不再需要请开发者注册他们的语音服务。该方案节省了大量开发资源的同时，也为用户提供了更便捷的方式来浏览开放的语音万维网。随着传统的基于浏览器的网站演变成语音服务，传统域名系统将会进化成去中心化的语音域名系统，加密货币将成为语音服务支付的全球标准。非同凡响，不负众望，就是我们要完成的底层技术。',
					i: [{
							h4: '智能',
							p: '智能助理，随唤随到',
						},
						{
							h4: '高效',
							p: '一站开发，省时省力',
						},
						{
							h4: '丰富多样',
							p: '全球开启人工智能新经济',
						},
					]
				},
				sch: {
					h2: '技术原理',
					h4: '语音网络区块链如何工作？',
					p1: '语音链是语音万维网上连接所有语音对话服务的基础公链，语音币是语音网络的加密货币。',
					i: [{
							p: '我们将进入后移动时代，而下一代互联网就是语音互联网。',
						},
						{
							p: '人机交流会像人与人之间的交流一样畅快淋漓，风雨无阻！',
						},
						{
							p: '不同于其他公司的种种设限，语音网打破了传统万维网的局限，人们会很大幅度的降低输入域名和网址的次数。新一代创新语音网的创新则为打破局限和被控无奈而生。',
						},
					]
				},
				feat: {
					h2: '语音链的优势',
					i: [{
							h4: '去中心化',
						},
						{
							h4: '安全交易',
						},
						{
							h4: '互联协同',
						},
						{
							h4: '可信赖的支持',
						},
						{
							h4: '世界范围的交流',
						},
						{
							h4: '高效运行',
						},
					]
				},
				team: {
					h2: '核心团队',
					i: [{
							h4: '赵建文',
							h5: '创始人',
							p1: '连续创业者。曾开发过中国最早的邮件系统——凯利邮局，负责过盛大通行证产品、阿里巴巴旗下优酷土豆播放业务线，运营过中国最早的知识问答社区。在上海的创业成果被腾讯收购，被新浪网报道为移动即通基础技术发明人、微信底层技术原创者。伊利诺伊大学MBA，曾先后在Stanford、UC Berkeley进修人工智能和区块链技术。在创立Voicebot人工智能平台之后，在硅谷创立了基于区块链技术的语音万维网。',
						},
						{
							h4: '邵懿',
							h5: '市场总监',
							p1: '加州天使创始人。作为市场评估分析师为谷歌提供广告市场分析咨询。曾担任美国李奥贝纳广告公司的市场媒体主管。',
						},
						{
							h4: '段勇',
							h5: '人工智能科学家',
							p1: '原 WiFi 万能钥匙大数据专家。16 年大数据从业经验，精通大数据，商业智能（BI），数据挖掘，机器学习，深度学习技术。在国内数据挖掘先驱企业华院数据任职多年后，联合创立杭州数云信息技术有限公司并担任 CTO，先后获得 “最佳电商CRM服务商”，“金牌淘拍档” 等称号，成功获得了红杉资本A轮和阿里巴巴 C 轮投资。',
						},
						{
							h4: 'Kyle Bao 博士',
							h5: '密码学专家',
							p1: '为 NIST 设计下一代密码标准。',
						},
						{
							h4: 'Joyce Zhang',
							h5: '财务总监',
							p1: '中央财经大学校友会主席于芝加哥，20 年金融、投资和商业管理方面的专业经验。 中国注册会计师，国际认证的内部审计师和高级经济分析师。',
						},
						{
							h4: 'Craig Watts',
							h5: '首席战略官',
							p1: '数字营销专家。 Craig 担任GroupM（WPP）的数字智能总经理，Madhouse!的联合创始人. Craig 拥有大阪大学的媒体研究博士学位和芝加哥大学的英语硕士学位。',
						},
						{
							h4: 'Terry Fogarty',
							h5: '语言学家',
							p1: '',
						},
						{
							h4: 'Chelsea Rustrum',
							h5: '社区策略师',
							p1: '',
						},
						{
							h4: 'David Passiak',
							h5: '区块链作家',
							p1: '演讲家, 发明家, 未来主义者',
						},
						{
							h4: 'Monette Stephens',
							h5: '战略咨询师',
							p1: '',
						},
						{
							h4: 'Amanda Rivera',
							h5: '千禧年商业策略师',
							p1: '',
						},
						{
							h4: '顾冬晨',
							h5: '首席产品官',
							p1: "物联网运营专家，担任中国电信物联网运营总监，华东师范大学经济学硕士 。负责物联网开放实验室运营，拥有相当物联网相关产品、运营、开发经验。累计获授 权专利19项、发布ITU标准7项；对ofo、haier等100多家大客户的合作产品提供开发 、测试、咨询、技术支持；负责天翼物联产业联盟运营，拥有大量产业资源。成员发展超300家，包括Intel、高 通、博世、IBM等；举行多次国际产业链高峰论坛、博览会；拥有1000+行业解决方案 ；专网用户突破1亿。",
						},
					]
				},
				dev: {
					h2: '语音万维网社区开发者',
					i: [{
							h4: 'Squall Zhao',
							p: '区块链开发、人工智能和微服务专家，10 年 C++ 开发经验',
						},
						{
							h4: 'Gavin Zhang',
							p: '竞价系统架构师，工作于上海期货交易所',
						},
						{
							h4: 'Yoky Xu',
							p: '后端开发工程师，8 年游戏服务器开发经验，专注 RealMedia 开发',
						},
						{
							h4: 'Kevin Liu',
							p: '前端开发工程师，同时致力于大规模用户身份安全认证系统的开发',
						},
						{
							h4: 'Eric Chan',
							p: '资深全栈工程师，语音聊天平台的开发者，10 年软件开发经验',
						},
					]
				},
				aa: {
					h2: '顾问 & 投资人',
					i: [{
							h4: '李儒雄',
							h5: '创业导师',
							p1: "联邦软件的创始人，中国最大的软件流通公司; 中国软件行业协会执行董事；光谷创业咖啡，创始人。",
						},
						{
							h4: '刘兵 教授',
							h5: 'AI顾问',
							p1: "刘兵教授是 ACM Fellow 以及 IEEE Fellow，主要从事语义分析、观点挖掘、机器学习以及自然语言处理方面的研究，论文曾在 KDD 会议中获得 “ 10-year test-of-time ” 奖项，还担任 ACM SIGKDD Chair，DMKD Action Editor，TWEB、KAIS 等期刊的 Associate。",
						},
						{
							h4: '贺海武 博士',
							h5: '分布式云存储顾问',
							p1: "iex.ec 联合创始人；CNIC 百大杰出教授 (计算机网络信息中心)​。",
						},
						{
							h4: '黄连金',
							h5: '区块链安全顾问',
							p1: "华为副总裁，首席区块链科学家，首席身份管理系统架构师，CISSP，ACM 委员，中国电子学会区块链专家委员会委员。",
						},
						{
							h4: '凌棕 博士',
							h5: '分布式系统安全顾问',
							p1: "IBM 软件集团 / 阿尔马登研究中心的高级软件工程师 / 科学家。在过去的 14 年中，凌博士一直致力于评估 IBM Tivoli Storage Products 和分布式存储系统的性能。​",
						},
						{
							h4: '陈利人',
							h5: '搜索引擎顾问',
							p1: "前 Google 员工，在 Google+ 和多语言搜索引擎领域有 7 年工作经验。领导移动搜索奇虎360和盘古搜索引擎。卡内基梅隆大学毕业。",
						},
						{
							h4: '车德明',
							h5: '犇远资本 管理合伙人',
							p1: "在大中华区和北美地区拥有二十多年的私募创投和高科技企业从业经验，投资方向：高科技，医疗健康，消费零售，现代农业，文化创意等多个行业。目前配合地方政府及上市企业合作设立产业发展母基金和管理特色小镇PPP专项基金；在加入犇远资本之前，车总曾任中国最大民营投资机构-中民投国际董事总经理，负责海外投资，跨境并购；犇远资本管理合伙人负责创新创业投资私募基金管理多年；也做过世界级企业软件-SAP 副总裁， 及欧美科技公司大中华区总经理和英业达公司软件服务事业部总经理。16年的私募基金管理9个基金资本近美金30亿，平均IRR超过20%，在他带领下外商企业近几年也一直保持两位数字的销售强劲增长。",
						},
						{
							h4: '李明顺',
							h5: '好贷网创始人兼总裁',
							p1: "互联网从业13年，中国互联网发展的见证者、参与者、缔造者。资深互联网从业者和创业者，互联网金融千人会（IFC1000）的执委、发起人，拥有15年互联网经验，于2013年3月创立贷款第一搜索平台好贷网。作为互联网老兵，李明顺在创办好贷网之前，曾创办聚淘网、财猫浏览器；在此之前，曾担任康盛公司副总裁，中国最大的社区平台Discuz!的联合创始人，并带领公司于2010年以近5000万美元被腾讯全资收购。在2004年创办中国最早的广告交易平台，并担任公司总裁。在更早之前，曾在网易、CBSi等互联网公司担任过核心骨干和主管职务，是中国互联网协会的顾问和北京大学、上海交大等多所知名高校的创业导师。",
						},
					],
				},
				partners: {
					h2: '合作伙伴'
				},
				foot: {
					paper: '白皮书',
					medium: 'Medium',
					saft: 'SAFT',
					gist: 'One Pager',
					gistpaper: '/doc/voiceweb_cn.pdf',
					git: 'GitHub',
					contact: '联系我们',
					vf: '语音万维网基金会',
					dot: '',
					right: '版权所有',
				},
				faq: {
					title: '常见问答',
					// q01: "什么是 Voicecoin?",
					// a01: "",
					// q02: "",
					// a02: "",
					// q03: "",
					// a03: "",
					// q04: "",
					// a04: "",
					// q05: "",
					// a05: "",
					// q06: "",
					// a06: "",
					// q07: "",
					// a07: "",
					// q08: "",
					// a08: "",
					// q09: "",
					// a09: "",
					// q10: "",
					// a10: "",
					q01: "What is Voicecoin?",
					a01: "Voicecoin is the cryptocurrency used on the Voicecoin platform and is also the first phase of the Voiceweb project.",
					q02: "What is Voiceweb?",
					a02: "Chatbots are registered on the Voice Chain. People then use the Voice Name to access a Chatbot by voice and use the various services provided by the Chatbot. Because each Chatbot has an exclusive and unique ID, Chatbots can also reference and connect with each other, and in this way an interconnected chatbot network is formed. From the perspective of voice, we have named this web the Voice Web.",
					q03: "What is the Voice Domain?",
					a03: "Instead of using the keyboard to enter a traditional domain name, our voice Internet browser, the Voice Browser, uses voice to access. These domain names, unlike traditional domain names, are in the form of natural language that we call the Voice Domain. When people use a voice Internet device, they access the desired services by calling up the appropriate Voice Domain.",
					q04: "What will the communication protocol of the Voice Browser be?",
					a04: "For better network conditions, HTTP / HTTPS is recommended. For poor network conditions, the MQTT protocol can be used, and Headload for smaller protocols. At present, the CoAP protocol is also the more commonly used protocol in IoT. For small devices, implementing the TCP and HTTP protocols is clearly excessive. The CoAP protocol was designed to allow small devices to connect to the Internet. CoAP is an application layer protocol that runs on the UDP protocol rather than TCP over HTTP. CoAP protocol is very small, the smallest data packet is only 4 bytes.",
					q05: "Won't people prefer to install such a capability themselves and then use it?",
					a05: "The trouble with this approach is that getting to the use phase can be troublesome because you first must install and set-up the capability. Imagine you are traveling while wearing such a device; your set up will be very troublesome. We will also provide a favorites function for ease of use.",
					q06: "What is DBot?",
					a06: "Voiceweb is one of our means of achieving this new form of internet, that will be built using blockchain technology. In Voiceweb, the sites will no longer take the form of the traditional web, but will serve mainly in the form of voice conversations, known as DBots.",
					q07: "Why not solve these issues using traditional domain names?",
					a07: "The main issue is that the traditional domain name design is not suited to the characteristics of voice, but really only suitable to keyboard input. People have witnessed the inconvenience of entering these domains when surfing the Internet, and they are extremely inconvenient when using a speaker interface. Many domain names do not pass the Radio Test. Voice Blockchain aims to establish standards so that registered domain names take a natural language form, without special symbols, that can be easily read and are identifiable by voice. The Namecoin platform utilizes this this scheme of establishing a domain name through the blockchain, but the Namecoin platform has no voice domain name resolution.",
					q08: "Why not use the Ethereum of NEO blockchain platform to address these issues?",
					a08: "Any developer can create a domain name smart contract on the Ethereum blockchain platform, but the problem is voice domain names are industry-specific; Chatbot developers uniformly follow this standard and then push their products to the specialized organizations, with nothing more than a hope that they’ll become a public industry resource. Owing to the special nature of Chatbots, including the communication protocol, security certification, user privacy, and other issues, there are many special requirements associated with the provision of a voice domain name blockchain that can only be solved through a proprietary platform.",
					q09: "Why create this project?",
					a09: "The earliest motivation for the Voiceweb project was to find a method of revitalizing the Web in the Internet of Things Era, using Blockchain technology. In the Mobile Era, people are using social platforms more and more, and utilizing the Web less. But these social platforms are centralized and not globally open or interconnected. In this Internet of Things Era, the founders believe that people are more likely to access the Internet via voice. But if a new open standard is not developed, this new Internet access point will be controlled solely by the Internet Giants, which would result in all online services needing to be distributed through a centralized voice platform. The founders are dissatisfied with the bleak outlook of a centralized future, and instead adopt a decentralized view aimed at smashing the monopolies these large companies are establishing, and bringing about the birth of a new open voice Internet Era.",
					q10: "How do you establish an individual Voice Web ecosystem?",
					a10: "In the initial Voiceweb’s ecology, we will develop voice application plug-ins on Alexa or Google Home, and these voice plugins will resolve various chatbot service brands. As the marketplace continues to validate this model, a voice-based chatbot browser will eventually be introduced. This browser will be the essential software for voice speakers. The browser access agreement will be open so that more people will develop this kind of browser.",
				},
				found: {
					h2: "语音万维网",
					p1: "将万维网扩展到物联网设备的区块链技术",
					vision: {
						h1: "愿景",
						p: "既然未来以来，所以我们超越现在：开拓一个去中心化的语音万维网，激发中小企业和个人的创造力，解放互联网，从此，互联网摆脱中心化势力的垄断，去繁就简，为人们带来轻松愉悦的生活感受，引领高尚生活。",
					},
					mission: {
						h1: "使命",
						p: "基金会的使命，旨在通过建立一系列技术标准和协议，建立和运营一个基 于区块链技术的语音域名系统，将全世界的 Chatbot 和全世界的用户连接起来，无论人们未来在何地，都能通过任何智能语音设备，只要通过语音就可以随时随唤聊天机器人，使用相应的 Chatbot 服务。通过社区、第三方开发者和技术创新，打造一个全球具有影响力的开源社区生态，将语音域名融入到各行业各业的会话服务中，改善人们的网络生活。通过融自动化的内容分发共识机制减少人工审查、监管和干预，通过和第三方平台的对接，创建一个全球领先的语音万维网。",
					},
					moti: {
						h1: "初衷",
						p1: "万维网被发明以来，由于它的开放性和传播性的广泛深深受到了人们的喜爱。然而，任何事物都是不完美的，万维网也不例外。它的弊端正在一一显现: 1、万维网在移动互联网时代的使用率，远远低于移动 APP 的使用率; 2、在社交网络中，Web 更多地被中心化的社交平台携裹，成为一种不能被全球网民浏览的附属物;3、正如万维网之父 Tim Berners Lee 所述，Web 面临谣言的盛行、人们正失去对数据的控制并面临着诸多严峻的挑战; 4、在 IoT 时代，人们无法对着一个无界面的智能语音设备输入网址、浏览网页，如果说未来人们使用网络服务的主要方式是这样的，那么输入网址访问万维网的方式将会成为历史; 5、在互联网巨头的竞争中，各个中心化的势力都在试图建立互联网流量入口上的垄断，万维网被它们分裂成为一个个独立的王国，跟踪用户行为、 变相出卖用户数据牟取广告收入，使人们的数据安全和隐私得不到真正、有效的保护，同时也给开发者带来了开发阻碍和并给他们带来了使用上的诸多不便。",
						p2: "人工智能和区块链技术，正在不断地创造崭新的条件和空间，让人们可以体验更加美好的互联网生活。我们认为，万维网应具有更加超前的先发优势，才能不被世界科技发展的洪流所湮灭。我们不能依赖 W3C 来做这件事，我们曾经经历过非常漫长的 WAP 时代，这就是万维网发展严重滞后的充分证明。 我们首当其冲提出了：建立语音万维网 Voiceweb。结合语音和语义，基于区块链技术， 从 John Berners Lee 发明的三项基本成果出发来构建语音万维网，已经制定并正在不断改进和完善语音万维网的协议栈。语音是人与人之间最主要、最直接的沟通方式，也应该是人与另一种智能进行交流的主要方式。云端一体化带来的趋势是高度智能化，智能终端需要一个比手机触屏更强大的人机交互方式。基于这个目标和宗旨，我们首先建立了起去中心化的语音域名体系，以对接去中心化的人工智能服务。"
					},
					value: {
						h1: "价值观",
						p1: "基金会的价值观，主要的核心思想包括开放、互联、去中心化、透明、尊 重用户隐私、强化互联网安全、提高用户使用互联网的便利性和用户体验。 基金会管理的第一条，就是基金会的产品设计、经营决策，必须符合这些 宗旨，并且在具体的实施中不断贯彻执行和体现出这些精神。基金会的价值观部分继承自 ICANN 组织、万维网组织和 Bitcoin 基金会。对于违反这个价值观体系的决策是需要终止和立即被纠正的; 对于迎合、促进这个 价值观体系的决策， 是需要给予支持和鼓励发展的。",
						p2: "ICANN 的宗旨:One world，One Internet。基于此，Voiceweb 基金 会，旨在主推语音域名区块链技术和配套的传输和解析协议，并努力在激 烈的市场竞争中取得领先，逐渐形成一个行业标准，被广大的智能音箱设备生产厂商接受，进而造福更多的互联网用户。从 WWW 万维网继承的思想，包括开放和互联，Voiceweb Blockchain 项目创立的出发点，就是为了振兴语音互联网时代的万维网，避免万维网入口完全被互联网巨头垄断; 通过 Voiceweb Blockchain，所有聊天机器人都有一个共同的名字和 ID，聊天机器人也可以正式地相互通信。从 Bitcoin 的创立通过去中心化方式解决货币超发和重复支付问题，我们看到了去中心化、透明、 尊重用户隐私、强化互联网安全诸多的理念和要素，这些也将成为 Voiceweb 基金会的重要价值观。",
						img: "img/found-img/found-values-zh.png",
					},
					partner: {
						h1: "合作伙伴",
					}
				},
			}
		}
	},
	methods: {
		changeLang: function (e) {
			e.stopPropagation();
			if (this.lang === 'zh') {
				this.lang = 'en';
				setCookie('vc-lang', 'en', 30);
			} else {
				this.lang = 'zh';
				setCookie('vc-lang', 'zh', 30);
			}
		},
		goAnchor(selector) {
			var anchor = this.$el.querySelector(selector);
			$('html, body').animate({
				scrollTop: $(selector).offset().top
			}, 1000);
		},
	}
});
