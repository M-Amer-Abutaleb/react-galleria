import { useEffect, useState, useRef, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';
import Photo from './Photo';
import Navbar from './Navbar';

const mainURL = 'https://api.unsplash.com/photos/';
const searchURL = 'https://api.unsplash.com/search/photos/';
const ClientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

function App() {
	const [photos, setPhotos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [userInput, setUserInput] = useState('');
	const mounted = useRef(false);
	const [newImages, setNewImages] = useState(false);


	const fetchImages = useCallback(async () => {
		let url;
		let urlPage = `&page=${page}`;
		let urlQuery = `&query=${userInput}`;
		if (userInput) {
			url = searchURL + ClientID + urlPage + urlQuery;
		} else {
			url = mainURL + ClientID + urlPage;
		}

		try {
			setLoading(true);
			const response = await fetch(url);
			const data = await response.json();
			setPhotos((previousData) => {
				if (userInput && page === 1) {
					return data.results;
				} else if (userInput) {
					return [...previousData, ...data.results];
				} else {
					return [...previousData, ...data];
				}
			});
			setNewImages(false);
			setLoading(false);
		} catch (error) {
			setNewImages(false);
			setLoading(false);
			console.log(error);
		}
	}, [userInput, page]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (page === 1) {
			fetchImages();
			setUserInput('');
			return;
		}
		setPage(1);

		if (!userInput) {
			return;
		}
	};
	useEffect(() => {
		fetchImages();
	}, [page]);

	useEffect(() => {
		if (!mounted.current) {
			mounted.current = true;
			return;
		}
		if (!newImages) { 
			return;
		}
		if (loading) {
			return;
		}
		setPage((previousPage) => {
			return previousPage + 1;
		});
	}, [newImages]);

	const event = window.addEventListener('scroll', () => {
			if (window.scrollY + window.innerHeight > document.body.scrollHeight - 10
			) {
				setNewImages(true)
				
			}
		});



	useEffect(() => {
		window.addEventListener('scroll', event);
		return () => window.removeEventListener('scroll', event);
	}, []);

	return (
		<main>
			<Navbar />
			<section className='search'>
				<form action='' className='search-form'>
					<input
						type='text'
						placeholder='Search...'
						className='form-input'
						value={userInput}
						onChange={(e) => setUserInput(e.target.value)}
					/>
					{userInput && (
						<button
							type='submit'
							className='submit-btn'
							onClick={submitHandler}>
							<FaSearch />
						</button>
					)}
				</form>
			</section>
			<section className='photos'>
				<div className='photos-center'>
					{photos.map((photo, index) => {
						return <Photo key={index} {...photo} />;
					})}
				</div>
				{loading && <div className='loading'>Loading...</div>}
			</section>
		</main>
	);
}

export default App;
