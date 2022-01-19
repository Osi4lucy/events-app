import { useRouter } from 'next/router';
import { Layout } from '../../components';

const EventPage = () => {
	const router = useRouter();
	return (
		<Layout>
			<h1>My Events</h1>
			<h3>{router.query.slug}</h3>
		</Layout>
	);
};

export default EventPage;
