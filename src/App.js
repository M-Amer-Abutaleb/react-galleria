import { useEffect, useState } from 'react';

const mainURL = 'https://api.unsplash.com/photos/';

const searchURL = 'https://api.unsplash.com/search/photos/';

const ClientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

	const fetchImages = async () => {
		let url;
		url = mainURL + ClientID;
    try {
      setLoading(true);
			const response = await fetch(url);
			const data = await response.json();
      console.log(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		// fetchImages();
	}, []);

	return <div className='App'></div>;
}

export default App;
