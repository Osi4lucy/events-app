import { Layout, EventItem } from '../components';
import { API_URL } from '../config/index';
import Link from 'next/link';

export default function Homepage({ events }) {
	// console.log(events);
	return (
		<Layout title='Homepage'>
			<h1>Up Coming Events</h1>
			{events.length === 0 && <h3>No Events to Show</h3>}

			{events.map((evt) => (
				// <h3 key={evt.id}>{evt.name}</h3>
				<EventItem key={evt.id} evt={evt} />
			))}

			{events.length > 0 && (
				<Link href='/events'>
					<a className='btn-secondary'>View All Events</a>
				</Link>
			)}
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(`${API_URL}/api/events`);
	const events = await res.json();

	// console.log(events);
	return {
		props: { events: events.slice(0, 3) },
		revalidate: 1, // revalidates data fetched every 1 second
	};
}
