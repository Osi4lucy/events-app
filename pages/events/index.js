import { Layout, EventItem } from '../../components';
import { API_URL } from '../../config/index';

export default function EventsPage({ events }) {
	// console.log(events);
	return (
		<Layout title='Homepage'>
			<h1>Events</h1>
			{events.length === 0 && <h3>No Events to Show</h3>}

			{events.map((evt) => (
				// <h3 key={evt.id}>{evt.name}</h3>
				<EventItem key={evt.id} evt={evt} />
			))}
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(`${API_URL}/api/events`);
	const events = await res.json();

	// console.log(events);
	return {
		props: { events },
		revalidate: 1, // revalidates data fetched every 1 second
	};
}
