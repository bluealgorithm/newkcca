import React from 'react';
import Nav from '../../../components/Nav';
import Link from 'next/link';
const Index = () => {
	return (
		<div>
			<Nav />
			<div className="relative bg-[url('/images/hackathon.jpeg')] h-[100vh] bg-cover bg-top overflow-hidden z-[50]">
				<div
					className='absolute top-[1px] left-0 right-0 bottom-0 min-h-[100vh] z-[1] bg-black'
					style={{
						background: 'rgba(21, 21, 21, 0.6)',
						// "linear-gradient(84.59deg, rgba(0, 0, 0, 0.58) 17.84%, rgba(0, 0, 0, 0.17) 52.14%, rgba(0, 0, 0, 0.65) 80.9%)",
					}}
				/>
				<div className='relative z-[100] flex flex-col justify-center items-center text-white h-full px-[20px]'>
					<h3 className='font-[600] font-montserrat text-[30px] md:text-[64px] leading-[40px] md:leading-[80px] capitalize md:w-[800px] text-center'>
						About {new Date().getFullYear()} Hackathon Program
					</h3>
					<div className=''>
						<Link
							href='/hackathon/register'
							className='font-[600] text-[16px] font-montserrat text-white bg-primary p-4 w-full md:w-[428px] mt-[40px] mb-[16px] block text-center rounded-md'
						>
							REGISTER NOW
						</Link>
						{/* <p className='font-[400] font-montserrat text-[20px] leading-[28px] text-center'>
							over 2000 students already enrolled
						</p> */}
					</div>
				</div>
			</div>
			<section className='pt-[20px] px-[20px] md:px-[60px] md:flex justify-between  text-justify mb-[40px] md:mb-[120px] bg-white'>
				<article className='flex-1 mr-[20px] text-[19px]'>
					<h1 className='font-[600] font-montserrat text-[30px] leading-10 mb-[16px]'>
						KIDS IN TECH CONFERENCE AND HACKATHON
					</h1>
					<p className='font-[400] font-montserrat leading-6 text-[#3c3838] mb-[20px] text-[20px]'>
						The Kids in Tech Conference and Hackathon is an exciting
						and innovative event designed to inspire young minds,
						nurture their curiosity, and unleash their creativity in
						the world of technology. This unique platform aims to
						empower kids with the knowledge, skills, and confidence
						to become the next generation of tech innovators and
						problem solvers.
					</p>
					{/* </section> */}
					<h3 className='font-[600] font-montserrat text-[24px] leading-8 mb-[16px]'>
						WHY KIDS IN TECH CONFERENCE AND HACKATHON
					</h3>
					<p className='font-[400] font-montserrat leading-6 text-[#3c3838] mb-[20px] text-[20px]'>
						<span className='font-[700] text-black'>Inspire:</span>{' '}
						The conference component of the event will feature
						renowned speakers who will share their experiences and
						insights, inspiring kids to explore and pursue their
						passion for technology. By listening to these inspiring
						stories, young participants will be motivated to dream
						big and believe in their abilities.
					</p>
					<p className='font-[400] font-montserrat leading-6 text-[#3c3838] mb-[20px] text-[20px]'>
						<span className='font-[700] text-black'>Learn:</span>{' '}
						Through interactive workshops and panel discussions,
						participants will have the opportunity to delve into
						various technology topics, learn new concepts, and
						develop a deeper understanding of the digital world.
						They will gain practical knowledge that can be applied
						in real-life scenarios, fostering their intellectual
						growth and expanding their horizons.
					</p>
					<p className='font-[400] font-montserrat leading-6 text-[#3c3838] mb-[20px] text-[20px]'>
						<span className='font-[700] text-black'>
							Collaborate:
						</span>{' '}
						The hackathon segment will foster collaboration and
						teamwork, enabling participants to work together to
						solve real-world challenges using their technological
						skills and creativity. Through collaborative
						problem-solving, kids will learn the value of teamwork,
						communication, and collective intelligence.
					</p>
					<p className='font-[400] font-montserrat leading-6 text-[#3c3838] mb-[20px] text-[20px]'>
						<span className='font-[700] text-black'>Innovate:</span>{' '}
						The hackathon will provide a platform for kids to think
						outside the box, come up with innovative ideas, and
						transform them into tangible solutions using
						cutting-edge technologies. By exploring their
						creativity, participants will develop critical thinking
						skills and gain hands-on experience in turning ideas
						into reality.
					</p>
					<p className='font-[400] font-montserrat leading-6 text-[#3c3838] mb-[20px] text-[20px]'>
						<span className='font-[700] text-black'>Showcase:</span>{' '}
						The event will showcase the remarkable projects and
						achievements of young tech enthusiasts, highlighting
						their talent and potential to industry professionals and
						the wider community. Participants will have the
						opportunity to gain recognition for their work and build
						a portfolio that can open doors to future opportunities.
					</p>
					<p className='font-[400] font-montserrat leading-6 text-[#3c3838] mb-[20px] text-[20px]'>
						<span className='font-[700] text-black'>Connect:</span>{' '}
						Participants will have the opportunity to network with
						like-minded peers, mentors, and industry experts,
						fostering valuable connections for future collaborations
						and opportunities. Building a supportive network of
						peers and mentors can enhance their learning journey and
						provide a foundation for future endeavors. Conferenc
					</p>
					<h3 className='font-[600] font-montserrat text-[24px] leading-8 mb-[16px]'>
						Conference
					</h3>
					<p className='font-[400] font-montserrat leading-6 text-[#3c3838] mb-[20px] text-[20px]'>
						Inspiring keynote speeches by renowned technology
						leaders, sharing their success stories and offering
						insights into emerging trends. Participants will gain
						valuable knowledge and inspiration from industry
						experts.
					</p>
					<p className='font-[400] font-montserrat leading-6 text-[#3c3838] mb-[20px] text-[20px]'>
						Engaging workshops covering a wide range of technology
						topics such as coding, robotics, artificial
						intelligence, cybersecurity, and more. These workshops
						will equip kids with practical skills that are highly
						relevant in today&apos;s digital age.
					</p>
					<p className='font-[400] font-montserrat leading-6 text-[#3c3838] mb-[20px] text-[20px]'>
						Interactive panel discussions featuring experts from
						various fields, providing a platform for discussions on
						the impact of technology in our lives. Participants will
						gain a broader perspective on the ethical, social, and
						environmental aspects of technology.
					</p>
					<p className='font-[400] font-montserrat leading-6 text-[#3c3838] mb-[20px] text-[20px]'>
						Q&A sessions to encourage active participation and
						address the queries of young attendees. Participants
						will have the opportunity to interact directly with
						experts and seek guidance on their technological
						interests.
					</p>
					<h3 className='font-[600] font-montserrat text-[24px] leading-8 mb-[16px]'>
						HACKATHON
					</h3>
					<p className='font-[400] font-montserrat leading-6 text-[#3c3838] mb-[20px] text-[20px]'>
						A dynamic and competitive environment where participants
						can collaborate and put their problem-solving skills to
						the test. They will experience the thrill of working
						under pressure and the satisfaction of finding
						innovative solutions.
					</p>
					<p className='font-[400] font-montserrat leading-6 text-[#3c3838] mb-[20px] text-[20px]'>
						Themed challenges designed to stimulate creativity and
						innovation in areas such as sustainability, healthcare,
						education, climate change and social impact. By focusing
						on real-world issues, participants will develop a sense
						of purpose and understand how technology can be used for
						positive change.
					</p>
					<p className='font-[400] font-montserrat leading-6 text-[#3c3838] mb-[20px] text-[20px]'>
						Access to cutting-edge tools, technologies, and
						resources to assist participants in developing their
						projects. The event will provide a platform for
						participants to explore new technologies and gain
						hands-on experience with state-of-the-art tools.
					</p>
					<p className='font-[400] font-montserrat leading-6 text-[#3c3838] mb-[20px] text-[20px]'>
						Mentors and industry professionals available to provide
						guidance, support, and feedback throughout the
						hackathon. Participants will have the opportunity to
						learn from experienced professionals and receive
						valuable insights to improve their projects.
					</p>
					<p className='font-[400] font-montserrat leading-6 text-[#3c3838] mb-[20px] text-[20px]'>
						Exciting prizes and recognition for the most outstanding
						projects, encouraging participants to strive for
						excellence. The event will celebrate the achievements of
						young participants and provide tangible rewards for
						their hard work and dedication.
					</p>
					<h3 className='font-[600] font-montserrat text-xl capitalize leading-8 underline mb-[16px]'>
						target audience
					</h3>
					<p className='font-[400] font-montserrat leading-6 text-[#3c3838] mb-[20px] text-[20px]'>
						The Kids in Tech Conference and Hackathon is open to
						tech-savvy kids between the ages of 9 and 16 who have a
						keen interest in exploring the world of technology.
						Participants may have varying levels of experience, from
						beginners to those with advanced skills, and all are
						welcome to join this inclusive and diverse event.
					</p>
					<h3 className='font-[600] font-montserrat text-xl  leading-8 underline mb-[16px]'>
						About the event
					</h3>
					<h4 className='font-[400] font-montserrat text-[16px] uppercase leading-6 text-[#3c3838] mb-[20px]'>
						kids in tech conference and hackathon
					</h4>
					<p className='font-[400] font-montserrat leading-6 text-[#3c3838] mb-[20px] text-[20px]'>
						<span className='font-[700] uppercase text-black'>
							theme:
						</span>{' '}
						climate action and innovation
					</p>
					<p className='font-[400] font-montserrat leading-6 text-[#3c3838] mb-[20px] text-[20px]'>
						Alpha Blue Foundation is thrilled to announce its 2023
						edition of Kids in Tech Conference and Hackathon with
						theme: Climate Action and Innovation children of aged
						9-16 is invited to showcase their coding skills and
						develop web or game applications that provide solutions
						to climate change issues. This exciting event is open to
						participants who have registered and are attending the
						Kids Code Club Africa summer bootcamps. We believe that
						young minds have the power to make a difference, and
						this hackathon aims to inspire and empower them to
						create tech solutions that tackle the challenges of
						climate change head-on.
					</p>
					<p className='font-[400] font-montserrat leading-6 text-[#3c3838] mb-[20px] text-[20px]'>
						The Kids in Tech Conference and Hackathon: Climate
						Action and Innovation Edition is an exciting event that
						encourages young participants to develop tech solutions
						to address climate change challenges. By focusing on the
						theme, climate action and innovation, we aim to inspire
						and empower children to think creatively and contribute
						to building a sustainable future. With different
						categories and attractive benefits, this hackathon
						provides a platform for participants to showcase their
						skills and compete for prizes. Join us on this
						incredible journey and let&apos;s create a better world
						through technology!
					</p>
					<p className='font-[400] font-montserrat text-[16px] leading-6  mb-[20px]'>
						<span className='font-[700]  text-black'>Date:</span>{' '}
						8th and 9th September {new Date().getFullYear()}
					</p>
					<p className='font-[400] font-montserrat text-[16px] leading-6 mb-[20px]'>
						<span className='font-[700]  text-black'>Time:</span>{' '}
						10am - 4pm daily
					</p>
					<p className='font-[400] font-montserrat text-[16px] leading-6  mb-[20px]'>
						<span className='font-[700]  text-black'>Venue:</span>{' '}
						Conference Hall, Nigeria Institute of Mining and
						Geoscience, Tudun Wada, Jos Plateau State. Nigeria.
					</p>
					<h3 className='font-[600] font-montserrat text-xl leading-8 mb-[16px]'>
						Registration Guidelines for School Participant Groups:
					</h3>
					<p className='font-[400] font-montserrat text-[16px] leading-6  mb-[20px]'>
						For schools that received an invitation to the KCCA boot
						camp and allowed their students to register, the
						hackathon offers two categories: Junior and Senior.
						Schools are required to identify a group of three to
						five children who have web programming experience from
						the list of their registered students. These groups will
						represent their respective schools in the hackathon.
						Participants should familiarize themselves with the
						hackathon&apos;s registration page, which outlines the
						theme and the solutions they are expected to build. The
						theme for the 2023 KCCA/hackathon event is Climate,
						Education, and Health.
					</p>
					<h3 className='font-[600] font-montserrat text-xl leading-8 mb-[16px]'>
						Registration Guidelines for Non-School Participant
						Groups:
					</h3>
					<p className='font-[400] font-montserrat text-[16px] leading-6  mb-[20px]'>
						Children aged 13-19 who are not representing any school
						but have individually registered for the KCCA boot camp
						can participate in the hackathon as friends forming a
						group. These participants should have web programming
						experience. Similar to school participant groups, they
						need to review the content on the hackathon&apos;s
						registration page to understand the theme and the
						expected solutions they need to build. The theme for the
						2023 KCCA/hackathon event is Climate, Education, and
						Health.
					</p>
					<h3 className='font-[600] font-montserrat text-xl capitalize leading-8 underline mb-[16px]'>
						Competitor Levels and Benefits:
					</h3>
					<p className='font-[400] font-montserrat text-[16px] leading-6 mb-[20px]'>
						The Kids in Tech Conference and Hackathon is open to
						tech-savvy kids between the ages of 9 and 16 who have a
						keen interest in exploring the world of technology.
						Participants may have varying levels of experience, from
						beginners to those with advanced skills, and all are
						welcome to join this inclusive and diverse event.
					</p>
					<p className='font-[400] font-montserrat  leading-6  mb-[20px]'>
						<span className='font-[400] text-black'>
							The hackathon features two categories:
						</span>{' '}
						Junior and Senior, catering to different age groups with
						varying project requirements.
					</p>
					<p className='font-[400] font-montserrat  leading-6  mb-[20px]'>
						<span className='font-[400] text-black'>
							Junior Category (9-12 years):
						</span>{' '}
						Participants with web and mobile development experience
						will build Cleantech web app solutions to address
						climate change issues.
					</p>
					<p className='font-[400] font-montserrat  leading-6  mb-[20px]'>
						<span className='font-[400] text-black'>
							Senior Category (13-16 years):
						</span>{' '}
						Participants with web and mobile development experience
						will develop game apps that guide users through fun
						scenes, activities, and levels, simulating learning
						experiences related to climate situations and
						recommended solutions.
					</p>
					<h3 className='font-[600] font-montserrat text-xl capitalize leading-8 underline mb-[16px]'>
						Benefits and Rewards for Junior Participants:
					</h3>
					<span className='font-[600] text-black'>
						Junior category winners can look forward to the
						following rewards:
					</span>{' '}
					<ul className='ml-10 list-decimal'>
						<li>Cash prize of N250,000</li>
						<li>
							Certificates of Participation and medals for all
							participants
						</li>
						<li>Additional prizes from prospective sponsors</li>
						<li>
							Certificates of participation and prizes from
							prospective sponsors for runners-up and other
							participants
						</li>
					</ul>
					<p className='font-[600] text-black my-3'>
						Additionally, the winning school in the Junior category
						will receive:
					</p>{' '}
					<ul className='ml-10 list-disc'>
						<li>An award plaque</li>
						<li>
							Framed certificates of participation for the school
						</li>
						<li>A printer machines</li>
					</ul>
					<h3 className='font-[600] text-[20px] my-2 text-black'>
						Benefits and Rewards for Senior Participants:
					</h3>{' '}
					<br />
					<span className='font-[600] text-black'>
						Senior category winners can look forward to the
						following rewards:
					</span>{' '}
					<ul className='ml-10 list-decimal'>
						<li>
							Cash prize of N300 000 for winners of senior
							category
						</li>
						<li>
							Certificates of Participation as well as medals for
							all the participants.
						</li>
						<li>Other prizes from prospective sponsors </li>
						<li>
							Certificates of participation to runners-up as well
							as other prizes from prospective sponsors.
						</li>
						<li>
							Prizes from prospective sponsors to other
							participants
						</li>
					</ul>
					<p className='font-[600] text-black mt-[20px]'>
						Additionally, the winning school in the Senior category
						will receive:
					</p>{' '}
					<ul className='ml-10 list-disc'>
						<li>Award Plaque</li>
						<li>
							Framed certificates of participation to the school
						</li>
						<li>A desktop computer</li>
					</ul>
					<h3 className='font-[600] font-montserrat  leading-8 underline my-[16px]'>
						Cash Prize modality and other prizes:
					</h3>
					<p className='font-[400] ml-10 font-montserrat leading-6 mb-[20px] text-[20px]'>
						Both winners from the junior and senior category will
						receive IOUs to indicate that their cash prizes are
						intact for them while they commit to the process of
						submitting their prototypes to KCCA instructors and
						mentors for refining. Through their guardians or
						parents, the winners will be presented with MOUs to
						indicate their agreement to complete the aforementioned
						process before being able to gain access to their cash
						prizes. <br />
						Once the hackathon is over and other prizes have been
						sent, KCCA will provide mentors amongst its instructors
						and outside, if need be, to mentor the winners for the
						purpose of refining their prototypes. Cash prizes will
						then be released to the group members after they have
						successfully worked with their mentors to refine their
						prototypes
					</p>
					<p className='font-[400] ml-10 font-montserrat text-[20px] leading-6 mb-[20px]'>
						To ensure the development and refinement of the winning
						prototypes, both Junior and Senior category winners will
						receive IOUs indicating that their cash prizes are
						reserved. Winners, together with their parents or
						guardians, will be presented with MOUs to signify their
						commitment to the process of submitting their prototypes
						to KCCA instructors and mentors for refinement.
					</p>
					<p className='font-[400] font-montserrat text-[20px] leading-6 mb-[16px]'>
						After the hackathon concludes and other prizes are
						awarded, KCCA will provide mentors, including their own
						instructors and external experts if needed, to guide and
						refine the prototypes developed by the winners. Once the
						mentoring process is successfully completed, the cash
						prizes will be released to the group members.
					</p>
					<p className='font-[600] text-black '>
						Join Us in Climate Action and Innovation:
					</p>{' '}
					<br />
					<p className='font-[400] text-black '>
						We invite all registered participants of the Kids Code
						Club Africa summer bootcamps to join us at the Kids in
						Tech Conference and Hackathon:{' '}
						<span className='font-[600] text-black'>
							Climate Action and Innovation Edition.
						</span>
					</p>
					<p className='font-[400] font-montserrat text-[20px] leading-6 my-[10px]'>
						This is an excellent opportunity for children to apply
						their coding skills and creativity to develop tech
						solutions that address climate change challenges.
						Let&apos;s work together to inspire the next generation
						of tech leaders and change-makers to make a positive
						impact on our planet through innovation and
						entrepreneurship.
					</p>
				</article>
			</section>
			<div className='flex justify-center items-center'>
				<Link
					href='/hackathon/register'
					className='font-[600] text-[16px] font-montserrat text-white bg-primary p-4 w-full md:w-[428px] mt-[40px] mb-[16px] block text-center rounded-md'
				>
					REGISTER NOW
				</Link>
			</div>
		</div>
	);
};

export default Index;
