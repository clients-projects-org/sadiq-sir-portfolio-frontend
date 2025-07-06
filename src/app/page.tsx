import {
	About01,
	Banner01,
	Footer,
	Nav,
	Portfolio02,
	Service01,
	Service03,
	Service04,
} from '@/components';
import { Blog01 } from '@/components/section/blog-01';
import { Contact01 } from '@/components/section/contact-01';

export default function Home() {
	return (
		<>
			<Nav />
			<Banner01 />
			<About01 />
			<Service01 />
			<Service03 />
			<Service04 />
			<Portfolio02 />
			<Blog01 />
			<Contact01 />
			<Footer />
		</>
	);
}
