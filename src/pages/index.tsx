import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import WhatsappButton from '../../components/WhatsappButton';
import Link from 'next/link';
const Index = () => {
	const Timetable = ({ duration, title, description }: any) => {
		return (
			<div className='flex flex-col md:flex-row items-start'>
				<p className='font-[400] font-montserrat text-[16px] leading-6 text-[#3c3838] md:w-[150px]'>
					{duration}
				</p>
				<div className='md:ml-[140px]'>
					<p className='font-[700] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[16px]'>
						{title}
					</p>
					<p className='font-[400] font-montserrat text-[14px] leading-6 text-[#3c3838] mb-[16px]'>
						{description}
					</p>
				</div>
			</div>
		);
	};
	return (
		<>
			<Nav />
			<div className="z-[50] relative bg-[url('/images/kcca2.JPG')] h-[100vh] bg-cover bg-center overflow-hidden">
				<div
					className='absolute top-[1px] left-0 right-0 bottom-0 min-h-[100vh] z-[1] bg-black'
					style={{
						background: 'rgba(21, 21, 21, 0.6)',
						// "linear-gradient(84.59deg, rgba(0, 0, 0, 0.58) 17.84%, rgba(0, 0, 0, 0.17) 52.14%, rgba(0, 0, 0, 0.65) 80.9%)",
					}}
				/>
				<div className='relative z-[100] flex flex-col justify-center items-center text-white h-full px-[20px]'>
					<h3 className='font-[600] font-montserrat text-[30px] md:text-[64px] leading-[40px] md:leading-[80px] capitalize md:w-[525px] text-center'>
						About KCCA Program
					</h3>
					<div className=''>
						<Link
							href='/registration'
							className='font-[600] text-[16px] font-montserrat text-white bg-primary p-4 w-full md:w-[428px] mt-[40px] mb-[16px] rounded-[4px] block text-center'
						>
							REGISTER NOW
						</Link>
						<p className='font-[400] font-montserrat text-[20px] leading-[28px] text-center'>
							over 2000 students already enrolled
						</p>
					</div>
				</div>
			</div>
			<section className='md:h-[106px] flex flex-col md:flex-row md:items-center pl-[20px] md:pl-[120px] relative bg-white '>
				<ul className='flex flex-wrap md:justify-between md:basis-[90%] gap-[15px]'>
					<li>
						<Link
							href='#about'
							className='font-monteserrat font-[600] text-[15px] md:text-[20px] leading-[20px]  text-primary'
						>
							About The Program
						</Link>
					</li>
					<li>
						<Link
							href='#feature'
							className='font-monteserrat font-[600] text-[15px] md:text-[20px] leading-[20px]  text-[#3c3838]'
						>
							Program Features
						</Link>
					</li>
					<li>
						<Link
							href='#timetable'
							className='font-monteserrat font-[600] text-[15px] md:text-[20px] leading-[20px]  text-[#3c3838]'
						>
							Program Timetable
						</Link>
					</li>
					<li>
						<Link
							href='#eligibility'
							className='font-monteserrat font-[600] text-[15px] md:text-[20px] leading-[20px]  text-[#3c3838]'
						>
							Application Eligibility
						</Link>
					</li>
					<li>
						<Link
							href='#benefit'
							className='font-monteserrat font-[600] text-[15px] md:text-[20px] leading-[20px]  text-[#3c3838]'
						>
							Benefits
						</Link>
					</li>
				</ul>
			</section>
			<section
				id='about'
				className='px-[20px] md:px-[60px] md:flex justify-between  text-justify mb-[40px] md:mb-[120px] bg-white'
			>
				<article className='flex-1 mr-[20px]'>
					<h3 className='font-[600] font-montserrat text-[24px] leading-8 text-[#3c3838] mb-[16px]'>
						About the program
					</h3>
					<p className='font-[400] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[20px]'>
						Welcome to Kids Code Club Africa 2023, the 5th edition
						of our flagship programme designed to impact the lives
						of young persons in Africa. Our aim this year is to get
						2,000 students into the programme. Here is a breakdown
						of what you need to know about the KCCA 2023 programme:
					</p>
					{/* </section> */}
					<div id='feature'>
						<h3 className='font-[600] font-montserrat text-[24px] leading-8 text-[#3c3838] mb-[16px]'>
							Special Features of the 2023 Edition:
						</h3>
						<p className='font-[400] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[20px]'>
							The Kids Code Club Africa 2023 has some exciting
							features, including an intense Bootcamp and
							Hackathon, as well as the introduction of two
							interesting programmes: BlockChain Development and
							Entrepreneurship.
						</p>
						<p className='font-[500] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[20px]'>
							a. The Bootcamp
						</p>
						<p className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[20px]'>
							This is a free, practical digital capacity building
							and mentorship project, designed to equip
							participants with the necessary coding skills. The
							boot camp for this year is a hybrid one, which means
							that it is both physical and virtual. It would take
							place in six states, including Plateau and Abuja,
							inclusive. We are expecting to have 2,000
							participants.
						</p>
						<p className='font-[500] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[20px]'>
							b. Kids in Tech
						</p>
						<p className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[20px]'>
							{' '}
							Conference & Hackathon The kids in tech conference
							is the showcasing of the talents domiciled in kids,
							the coming together of critical digital tech
							stakeholders, educational organizations and
							professionals, STEM educationists, federal and state
							government ministries and departments to engage in
							policy formulation or implementation on the
							development of tech in Nigeria.
						</p>
						<p className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[20px]'>
							The Hackathon is a great way to introduce children
							to the world of technology and foster their
							creativity and problem-solving skills. The Hackathon
							this year is designed to provide a fun and
							collaborative environment for children to explore
							different areas of technology, such as
							Cybersecurity, Artificial Intelligence, Internet of
							Things, Mobile App Development and build their own
							solutions using these tools to solve real-life
							problems.
						</p>
						<p className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] mb-[20px]'>
							The Hackathon (Coding Competition) would be broken
							into two categories:
						</p>
						<ul className='ml-[15px]'>
							<li className='font-[400] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc'>
								The Junior Category (9 – 12 years) &{' '}
							</li>
							<li className='font-[400] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc'>
								The Senior Category (13 -16 years).
							</li>
						</ul>

						<p className='font-[400] font-montserrat text-[16px] leading-6 text-[#3c3838] mt-[20px]'>
							The finalist for the Junior Category would be
							awarded a cash prize of N250,000, while the finalist
							for the Senior category would be awarded a cash
							prize of N300,000.
						</p>
					</div>
				</article>
				<aside className='flex-1 flex flex-col justify-center h-full relative mt-[20px] gap-x-[20px]'>
					<div className='md:max-w-[506px] md:absolute right-0 md:top-[100px]'>
						<img
							src='/images/front.JPG'
							className='max-w-full rounded-md'
							alt=''
						/>
					</div>
					<div className='md:max-w-[506px] md:absolute right-[20px] md:top-[400px]'>
						<img
							src='/images/front2.jpg'
							className=' rounded-md '
							alt=''
						/>
					</div>
				</aside>
			</section>
			<section
				id='timetable'
				className='px-[20px] md:px-[60px] text-justify bg-[#F6F8F7] py-[30px] md:py-[70px]'
			>
				<h3 className='font-[600] font-montserrat text-[24px] leading-8 text-[#3c3838] mb-[16px]'>
					Program timetable:
				</h3>
				<Timetable
					duration='March - July 2023'
					title='Application portal'
					description='The portal for application will be opened for registration by interested candidates from March - July 2023. (The registration is ongoing)'
				/>
				<Timetable
					duration='April - July 2023'
					title='Screening'
					description='Screening of accepted students will take place between April - May, 2023.'
				/>
				<Timetable
					duration='August 2023'
					title='Bootcamp'
					description='The bootcamp is schedule to start from August, 2023'
				/>
				<Timetable
					duration='September 2023'
					title='Hackathon'
					description='The hackathon is scheduled to start from September, 2023.'
				/>
			</section>
			<section
				id='eligibility'
				className='px-[20px] md:px-[60px] text-justify bg-white py-[30px] md:py-[70px] flex flex-col md:flex-row gap-x-[40px] items-center'
			>
				<article className='flex-1'>
					<h3 className='font-[600] font-montserrat text-[24px] leading-8 text-[#3c3838] mb-[16px]'>
						Eligibility for the 2023 KCCA Cohort:
					</h3>
					<p className='font-[400] font-montserrat text-[16px] leading-6 text-[#3c3838] mt-[8px] mb-[16px]'>
						To be eligible for the KCCA 2023 programme:
					</p>
					<ul className='ml-[15px]'>
						<li className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]'>
							Participants must be between 9 – 16 years’ old
						</li>
						<li className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]'>
							Should be computer literate (must be able to know
							basic computer operations)
						</li>
						<li className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]'>
							Must have the willingness to learn.
						</li>
						<li className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]'>
							Should have access to the internet and a computer
						</li>
						<li className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]'>
							Should be a Club Member
						</li>
					</ul>
					<div className='mt-[20px] md:mt-[40px]'>
						<h3 className='font-[600] font-montserrat text-[24px] leading-8 text-[#3c3838] mb-[16px]'>
							How to Apply:
						</h3>
						<p className='font-[400] font-montserrat text-[16px] leading-6 text-[#3c3838] mt-[8px] mb-[16px]'>
							To apply for the KCCA 2023 programme:
						</p>
						<ul className='ml-[15px]'>
							<li className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]'>
								Visit our website, www.kidcodeclubafrica.org
								between March and July 2023, and complete the
								application form{' '}
								<span className='font-[500] text-primary'>
									(Application is ongoing)
								</span>
							</li>
							<li className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]'>
								Do an online exam and be invited for, and
								participate in the screening process
							</li>
							<li className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]'>
								Pay an annual club fee of N10,000
							</li>
							<li className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]'>
								Wait for the notification via email and prepare
								to attend the Bootcamp in August 2023.
							</li>
							<li className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]'>
								Become a KCCA Club member
							</li>
						</ul>
						<p className='font-[400] font-montserrat text-[16px] leading-6 text-[#3c3838] mt-[8px] mb-[16px]'>
							We look forward to welcoming the next generation of
							young coders to Kids Code Club Africa 2023. Join us
							on this exciting journey of digital innovation and
							technology empowerment.
						</p>
					</div>
				</article>
				<aside className='flex-1'>
					<div className='md:max-w-[506px]'>
						<img
							src='/images/kcca7.JPG'
							className='max-w-full rounded-md'
							alt=''
						/>
					</div>
				</aside>
			</section>
			<section
				id='benefit'
				className='px-[20px] md:px-[60px] text-justify bg-[#F6F8F7] py-[30px] md:py-[70px]'
			>
				<h3 className='font-[600] font-montserrat text-[24px] leading-8 text-[#3c3838] mb-[16px]'>
					Benefits of Joining KCCA
				</h3>
				<ul className='ml-[15px]'>
					<li className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]'>
						Access to Free digital capacity development for three
						years
					</li>
					<li className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]'>
						Access to a Free lifetime membership
					</li>
					<li className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]'>
						Access to free mentorship from digital experts and
						professionals
					</li>
					<li className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]'>
						Free entrance into the hackathon project after
						displaying commitment
					</li>
					<li className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]'>
						Access to any international and national digital
						competitions
					</li>
					<li className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]'>
						Free inclusion in the international digital tours
						programs of KCCA
					</li>
					<li className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]'>
						Access to all ALPHA BLUE FOUNDATION and KCCA’s programs
						and African affiliate hubs in partnership with Alpha
						Blue to participate in competitions and carry out
						activities/tasks when assigned
					</li>
					<li className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]'>
						Opportunities to network and connect with digital tech
						peers to be able to share experiences as they grow in
						the digital ecosystem
					</li>

					<li className='font-[300] font-montserrat text-[16px] leading-6 text-[#3c3838] list-disc mb-[10px]'>
						Free access to the ABF/KCCA Hubs in Jos City Nigeria
					</li>
				</ul>
			</section>
			<div className='relative'>
				<WhatsappButton />
			</div>
			<Footer />
		</>
	);
};

export default Index;
