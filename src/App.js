import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Photo from './Photo';

const mainURL = 'https://api.unsplash.com/photos/';

const searchURL = 'https://api.unsplash.com/search/photos/';

const ClientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

function App() {
	const [photos, setPhotos] = useState([]);
	const [loading, setLoading] = useState(true);

	const submitHandler = (e) => {
		e.preventDefault();
	};

	const fetchImages = async () => {
		let url;
		url = mainURL + ClientID;
		try {
			setLoading(true);
			const response = await fetch(url);
			const data = await response.json();
			setPhotos(data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		fetchImages();
	}, []);

	return (
		<main>
			<section className='search'>
				<form action='' className='search-form'>
					<input type='text' placeholder='Search...' className='form-input' />
					<button type='submit' className='submit-btn' onClick={submitHandler}>
						<FaSearch />
					</button>
				</form>
			</section>
			<section className='photos'>
				<div className='photos-center'>
					{photos.map((photo) => {
						return <Photo key={photo.id} {...photo} />;
					})}
				</div>
				{loading && <div className='loading'>Loading...</div>}
			</section>
		</main>
	);
}

export default App;
