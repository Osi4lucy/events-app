import { useRouter } from 'next/router';
import { Layout } from '../../components';
import { API_URL } from '../../config/index';

const EventPage = ({ evt }) => {
	const router = useRouter();
	return (
		<Layout>
			<h1>My Events</h1>
			{/* <h3>{router.query.slug}</h3> */}
			<h1>{evt.name}</h1>
		</Layout>
	);
};

export default EventPage;

export async function getStaticPaths() {
	const res = await fetch(`${API_URL}/api/events/`);
	const events = await res.json();

	const paths = events.map((evt) => ({
		params: { slug: evt.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	// console.log(slug);

	const res = await fetch(`${API_URL}/api/events/${slug}`);

	const events = await res.json();
	return {
		props: {
			evt: events[0],
		},
		revalidate: 1, // revalidates data fetched every 1 second
	};
}

// Serve pages from the server

// export async function getServerSideProps({ query: { slug } }) {
// 	// console.log(slug);

// 	const res = await fetch(`${API_URL}/api/events/${slug}`);

// 	const events = await res.json();
// 	return {
// 		props: {
// 			evt: events[0],
// 		},
// 	};
// }
