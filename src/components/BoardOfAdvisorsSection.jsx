import safiKaskasImage from '../assets/Dr.Safi.png'
import mariamAzimiImage from '../assets/mariam.webp'
import basemHassanImage from '../assets/bassemhassan.png'
import emanKaskasImage from '../assets/eman.png'
import zainMalikImage from '../assets/zaimmalik.png'
import './board-of-advisors-section.css'

const defaultAdvisors = [
  {
    key: 'safi-kaskas',
    name: 'Dr. Safi Kaskas',
    role: 'Board Advisor',
    initials: 'SK',
    accent: '#3E766E',
    bg: '#E3ECE4',
    imageSrc: safiKaskasImage,
    paragraphs: [
      'Dr. Safi Kaskas is a scholar, entrepreneur, and advocate for peace and reconciliation. He has over 40 years of experience in strategic planning, leadership, and business ethics, having founded Strategic Edge Management Consultants.',
      'He has co-founded East West University in Chicago and served as President of the Board of Directors for East West University for over two decades.',
      'In addition to his business pursuits, Dr. Kaskas was and still is passionate about the Abrahamic religions and has lectured throughout the US and the Middle East on topics related to Islam, interfaith, and reconciliation between Evangelicals, Jews, and American Muslims.',
      "He is currently a guest lecturer at The Jim Forest Institute for Religion, Peace & Justice, of St. Stephen's University, in NB, Canada, and at Earlham School of Religion, in Richmond, Indiana.",
      'He is Senior Researcher in Islam and Multifaith Reconciliation with George Mason University, Center for World Religions, Diplomacy and Conflict Resolution.',
      {
        text: "He is the founder and President of the International Qur'an Research Association (IQRA\u2019), an organization dedicated to the study and promotion of a contemporary understanding of the Qur'an.",
        linkHref: 'https://iqra.study/',
        linkLabel: 'iqra.study'
      },
      "Dr. Kaskas is known for his English Qur'an translation, The Qur\u2019an a Contemporary Understanding, published in January 2015, and The Qur'an with References to the Bible in January 2016. The Kindest of Manners, Learning from Prophet Muhammad, a collection of Hadith, published online.",
      "He has finished working on and is ready to publish The Qur'an with References to the Tanakh, and he is currently working on The Thematic Qur'an, a book addressing the various themes of the Qur\u2019an."
    ]
  },
  {
    key: 'mariam-azimi',
    name: 'Mariam Azimi',
    role: 'Founder & CEO',
    initials: 'MA',
    accent: '#D66252',
    bg: '#FBE1D8',
    imageSrc: mariamAzimiImage,
    paragraphs: [
      'Mariam is founder and CEO of Care2Elevate.space, a 501(c) nonprofit. After her own divorce she learned that understanding our grief is key in avoiding rebounding into toxic relationships. Her focus is to create safe spaces of support for Muslims to be acknowledged and connected to a larger community of their peers as a way of healing. She is the co-founder of Ikram Foundation for empowering Muslim women, which provides educational grants post-divorce for self-sufficiency. However, she observed and assessed that even with a stable financial ground, both women and men grieve, and unless we tackle the grief cycle, it is most likely that we will recreate the toxic relationships we came away from.',
      "As Muslims who have experienced the grief of divorce, we need a community to find a guide designed to help with navigating the intricate terrain of the grief cycle, overcome the profound loss of a marriage, and empower ourselves to move forward with confidence and mindfulness centered in spirituality. In the midst of heartache and change, it's crucial to recognize that healing is not a linear path but a journey through the multifaceted stages of grief. Understanding the intricate layers of grief, acknowledging the pain, anger, and sadness that often accompany the end of a marriage, is key to finding our identity. Gaining insight into your emotions allows you to navigate the grief cycle and build yourself up both emotionally and mentally, better enabling you to elevate yourself into a new beginning.",
      'Mariam has her Bachelors from the University of Massachusetts and has facilitator training from The Grief Center, NM, as well as Cognitively-Based Compassion Meditation (CBCM) training from Emory University. She holds a Certificate in Trauma-Informed Spiritual Care from The Human Flourishing Program at Harvard, and is always in pursuit of gaining knowledge to better help her niche population.'
    ]
  },
  {
    key: 'basem-hassan',
    name: 'Basem Hassan',
    role: 'Board Advisor',
    initials: 'BH',
    accent: '#E8AC4F',
    bg: '#FCEBD2',
    imageSrc: basemHassanImage,
    paragraphs: [
      "Basem's passion for wielding communication as a tool for good has earned him the reputation as a pivotal figure in driving positive social change and fostering a more inclusive global society.",
      "He is a seasoned external affairs strategist and executive leader, currently serving in the NYC Mayor's Office. His strategic vision and execution capabilities have been instrumental in overseeing the development of national strategy across the highest levels of city, state, and federal government, and with foreign embassies.",
      "Prior to his current role in government, Basem's experience includes national and global leadership with mission-driven nonprofits and NGOs, where he leveraged his skills in activating communities by creating culturally responsive communications that influence policymakers around the world to work for all people. His work has had a profound impact on creating equity for marginalized and vulnerable communities across America and internationally.",
      'Basem also serves as President for the NY State Chapter of Muslim Americans in Public Service (MAPS NY State), a national organization representing thousands of Muslims working in, and in partnership with, government roles.'
    ]
  },
  {
    key: 'eman-kaskas',
    name: 'Eman Kaskas',
    role: 'Board Advisor',
    initials: 'EK',
    accent: '#3E766E',
    bg: '#E3ECE4',
    imageSrc: emanKaskasImage,
    paragraphs: [
      'Eman Kaskas is a distinguished businesswoman with a wealth of experience in diagnostics and healthcare. She co-founded East West University in Chicago and dedicated 15 years to serving on the Board of Governors of the British International School of Jeddah. During her tenure, she worked closely with students in the International Baccalaureate program, championing their community service projects with an emphasis on creativity, action, and service.',
      "Since relocating to the Washington, DC area, Mrs. Kaskas has devoted herself to fostering reconciliation and promoting cross-cultural understanding. Her work focuses on bridging divides between multifaith groups, actively supporting initiatives that encourage dialogue and collaboration among diverse communities. She, alongside her husband, contributed to the translation of the Qur'an into accessible English and authored The Qur'an with References to the Bible, a groundbreaking text that builds interfaith connections.",
      'A dedicated advocate for unity and peace, Mrs. Kaskas has been a regular speaker and participant at the National Prayer Breakfast in Washington, DC for over two decades. Her efforts have extended across the United States, Europe, and the Middle East, where she has played a key role in organizing and participating in events that build bridges between cultures and faiths.'
    ]
  },
  {
    key: 'zain-malik',
    name: 'Zain Malik',
    role: 'Board Advisor',
    initials: 'ZM',
    accent: '#D66252',
    bg: '#FBE1D8',
    imageSrc: zainMalikImage,
    paragraphs: [
      "Zain Malik is an accomplished journalist, youth advocate, and human rights activist with a robust academic and professional background in mass communication and international relations. He holds a Bachelor's degree in Mass Communication from Government College University, Faisalabad, and is currently pursuing a Master of Philosophy (MPhil) in International Relations at Minhaj University Lahore.",
      "Zain serves as an Advisor to the Society 5.0 Initiative, a global movement leveraging technology and innovation to drive positive change and sustainable development. In this capacity, he contributes his expertise to drive impactful initiatives and support the organization's mission. Zain is deeply engaged in a variety of leadership roles: he serves as the Corporate Secretary of the International Qur'an Research Association Pakistan (IQRA\u2019) and coordinates the organization's International Committee of Scholars & Scientists. His leadership has extended to international platforms, where he represented Pakistan at the Kathmandu Dialogue\u2014an International Summer School organized by The Kathmandu School of Law\u2014in 2019. He was also selected to represent Pakistan at the International Youth Festival 2020 hosted by the University of Greifswald, Germany, and in 2023 was invited by the Mohammed Bin Salman Foundation to attend the Misk Global Forum in Riyadh, Saudi Arabia.",
      'Zain is a prominent voice in youth leadership in Pakistan, currently serving as the Information Secretary and Spokesperson for the National Youth Alliance of Pakistan. He also holds key public relations positions as the Public Relations Officer for Core Middle East News Organization and Public Relations Director for the Global Peace Summit. His career includes experience as an Associate Producer for Investigative Journalism at Pakistan Television Corporation (PTV). As a seasoned public relations and communications specialist, Zain excels in crafting compelling narratives, managing crisis communications, and developing strategic communications plans that drive results. He earned a certificate in International Peace & Security in 2021 from the Center for International Peace & Security (CIPS) at the National University of Science & Technology (NUST), Islamabad.',
      'His commitment to community service is evident in his role as the Zonal Rotaract Representative for Rotary International District 3272 during the 2021-22 Rotary Year. He provides comprehensive consulting services to nonprofit organizations, including structural development and capacity building, project design and implementation, strategic planning and management, advocacy and campaign development, community engagement and outreach, partnership development and collaboration, and impact assessment and evaluation.',
      'With a passion for advancing social causes and advocating for human rights, Zain continues to be a driving force for positive change both locally and internationally.'
    ]
  }
]

export default function BoardOfAdvisorsSection({
  id = 'board-of-advisors',
  title = 'Board of Advisors',
  subtitle = 'Meet the leaders guiding our mission',
  advisors = defaultAdvisors
}) {
  return (
    <section id={id} className="board-section">
      <div className="board-header">
        <h1 className="board-title">{title}</h1>
        <p className="board-subtitle">{subtitle}</p>
      </div>

      <div className="board-list">
        {advisors.map((advisor) => (
          <article className="board-card" key={advisor.key}>
            {advisor.imageSrc ? (
              <img
                className="board-photo"
                src={advisor.imageSrc}
                alt={`Portrait of ${advisor.name}`}
                loading="lazy"
                style={{ '--accent': advisor.accent }}
              />
            ) : (
              <div
                className="board-avatar"
                style={{ '--accent': advisor.accent, '--bg': advisor.bg }}
              >
                {advisor.initials}
              </div>
            )}
            <div className="board-copy">
              <h2 className="board-name">{advisor.name}</h2>
              <p className="board-role">{advisor.role}</p>
              {advisor.paragraphs.map((paragraph, index) =>
                typeof paragraph === 'string' ? (
                  <p className="board-paragraph" key={index}>
                    {paragraph}
                  </p>
                ) : (
                  <p className="board-paragraph" key={index}>
                    {paragraph.text}{' '}
                    <a href={paragraph.linkHref} target="_blank" rel="noopener noreferrer">
                      {paragraph.linkLabel}
                    </a>
                  </p>
                )
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
