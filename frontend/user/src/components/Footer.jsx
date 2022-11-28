import { BiChevronRight } from 'react-icons/bi';
import {
	AiFillYoutube,
	AiFillInstagram,
	AiOutlineTwitter,
	AiFillLinkedin,
} from 'react-icons/ai';
import apay from './assets/apay.png';
import gpay from './assets/gpay.png';
import paypal from './assets/paypal.png';
import visa from './assets/visa.png';

const styles = {
	container: 'w-full pt-6 pb-2 bg-gray-100',
	innerContainer: 'w-full h-full max-w-screen-xl px-8 mx-auto',
	logo: 'handWritten tracking-wider font-semibold sm:text-xl',
	iconContainer: 'border sm:ml-2 sm:mr-0 mr-4 sm:mt-0 mt-2 rounded-full',
	icon: 'sm:mx-2 mx-0 text-xl',
	stepsContainer: 'w-full sm:flex items-center justify-between mb-6',
	steps: 'flex items-center',
	step: 'text-sm italic font-semibold',
	col: 'w-48 h-full mr-12',
	title: 'my-4 text-sm sm:text-base font-bold uppercase',
	subtitle:
		'text-xs leading-8 font-semibold text-gray-500 hover:text-gray-900 hover:font-bold hidden sm:block',
	paymentContainer: 'flex items-center w-full mt-2',
	paymentInnerContainer: 'flex items-center mx-auto',
	paymentIcons:
		'max-h-6 mx-1 last:py-1 px-4 rounded-lg bg-gray-50 cursor-pointer',
	copyright: 'text-center text-xs py-2 tracking-widest italic bg-gray-200',
};

const data = [
	{
		title: 'Products',
		subtitles: [
			{ name: 'liteSL', link: '' },
			{ name: 'superSL', link: '' },
			{ name: 'routineSL', link: '' },
			{ name: 'listenSL', link: '' },
			{ name: 'readSL', link: '' },
		],
	},

	{
		title: 'Services',
		subtitles: [
			{ name: 'liteSL', link: '' },
			{ name: 'superSL', link: '' },
			{ name: 'routineSL', link: '' },
			{ name: 'listenSL', link: '' },
			{ name: 'readSL', link: '' },
		],
	},

	{
		title: 'Support',
		subtitles: [
			{ name: 'Online Support', link: '' },
			{ name: 'Call Numbers', link: '' },
			{ name: 'Emails', link: '' },
			{ name: 'Social Supports', link: '' },
			{ name: 'Locations', link: '' },
			{ name: 'Support Tips', link: '' },
		],
	},
];

export default function Footer() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.innerContainer}>
					<div className={styles.stepsContainer}>
						<div className={styles.steps}>
							<div className={styles.logo}>StoryLine</div>
							<BiChevronRight className={styles.icon} />
							<div className={styles.step}>v2</div>
							<BiChevronRight className={styles.icon} />
							<div className={styles.step}>AI Generated Stories</div>
						</div>

						<div className={styles.steps}>
							<a className={styles.iconContainer} href=''>
								<AiFillYoutube className={styles.icon} />
							</a>
							<a className={styles.iconContainer} href=''>
								<AiFillInstagram className={styles.icon} />
							</a>
							<a className={styles.iconContainer} href=''>
								<AiFillLinkedin className={styles.icon} />
							</a>
							<a className={styles.iconContainer} href=''>
								<AiOutlineTwitter className={styles.icon} />
							</a>
						</div>
					</div>

					<div className='sm:flex sm:justify-between sm:px-8'>
						{data.map((item, index) => (
							<div className={styles.col} key={index}>
								<div className={styles.title}>{item.title}</div>
								{item.subtitles.map((subtitle, index) => (
									<p className={styles.subtitle} key={index}>
										<a href={subtitle.link}>{subtitle.name} &gt;</a>
									</p>
								))}
							</div>
						))}

						<div className={styles.col}>
							<div className={styles.title}>Blog</div>

							<p className={styles.subtitle}>
								<a href=''>How to &gt;</a>
							</p>
							<p className={styles.subtitle}>
								<a href=''>Catalogs &gt;</a>
							</p>

							<div className={styles.title}>For Business</div>

							<p className={styles.subtitle}>
								<a href=''>Openings &gt;</a>
							</p>
							<p className={styles.subtitle}>
								<a href=''>For Organizations &gt;</a>
							</p>
						</div>
					</div>

					<div className={styles.paymentContainer}>
						<div className={styles.paymentInnerContainer}>
							<img
								className={styles.paymentIcons}
								src={gpay}
								alt='payment method'
							/>
							<img
								className={styles.paymentIcons}
								src={visa}
								alt='payment method'
							/>
							<img
								className={styles.paymentIcons}
								src={apay}
								alt='payment method'
							/>
							<img
								className={styles.paymentIcons}
								src={paypal}
								alt='payment method'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.copyright}>Copyright Badge</div>
		</>
	);
}
