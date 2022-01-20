import { FaExclamationTriangle } from 'react-icons/fa';
import { Layout } from '../components';
import styles from '../styles/404.module.css';
import Link from 'next/link';

const PageNotFound = () => {
	return (
		<Layout title='Page Not Found'>
			<div className={styles.error}>
				<h1>
					<FaExclamationTriangle className={styles.icon} />
					404
				</h1>
				<h4>Sorry, the page you requested was not found</h4>
				<Link href='/'>Go back to homepage</Link>
			</div>
		</Layout>
	);
};

export default PageNotFound;
