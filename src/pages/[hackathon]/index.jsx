import React from 'react';
import Nav from '../../../components/Nav';
import Link from 'next/link';

const Index = () => {
	return (
		<div>
			<Nav />
			<div className="relative bg-[url('/images/kcca2.JPG')] h-[100vh] bg-cover bg-center overflow-hidden">
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
				<article className='flex-1 mr-[20px]'>
					<h1 className='font-[600] font-montserrat text-[30px] leading-10 mb-[16px]'>
						KIDS IN TECH CONFERENCE AND HACKATHON
					</h1>
					<p className='font-[400] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[20px]'>
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
					<p className='font-[400] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[20px]'>
						<span className='font-[700] text-black'>Inspire:</span>{' '}
						The conference component of the event will feature
						renowned speakers who will share their experiences and
						insights, inspiring kids to explore and pursue their
						passion for technology. By listening to these inspiring
						stories, young participants will be motivated to dream
						big and believe in their abilities.
					</p>
					<p className='font-[400] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[20px]'>
						<span className='font-[700] text-black'>Learn:</span>{' '}
						Through interactive workshops and panel discussions,
						participants will have the opportunity to delve into
						various technology topics, learn new concepts, and
						develop a deeper understanding of the digital world.
						They will gain practical knowledge that can be applied
						in real-life scenarios, fostering their intellectual
						growth and expanding their horizons.
					</p>
					<p className='font-[400] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[20px]'>
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
					<p className='font-[400] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[20px]'>
						<span className='font-[700] text-black'>Innovate:</span>{' '}
						The hackathon will provide a platform for kids to think
						outside the box, come up with innovative ideas, and
						transform them into tangible solutions using
						cutting-edge technologies. By exploring their
						creativity, participants will develop critical thinking
						skills and gain hands-on experience in turning ideas
						into reality.
					</p>
					<p className='font-[400] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[20px]'>
						<span className='font-[700] text-black'>Showcase:</span>{' '}
						The event will showcase the remarkable projects and
						achievements of young tech enthusiasts, highlighting
						their talent and potential to industry professionals and
						the wider community. Participants will have the
						opportunity to gain recognition for their work and build
						a portfolio that can open doors to future opportunities.
					</p>
					<p className='font-[400] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[20px]'>
						<span className='font-[700] text-black'>Connect:</span>{' '}
						Participants will have the opportunity to network with
						like-minded peers, mentors, and industry experts,
						fostering valuable connections for future collaborations
						and opportunities. Building a supportive network of
						peers and mentors can enhance their learning journey and
						provide a foundation for future endeavors. Conferenc
					</p>
				</article>
			</section>
		</div>
	);
};

export default Index;
