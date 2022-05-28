import { useEffect, useState } from 'react';

const mainURL = 'https://api.unsplash.com/photos/?client_id=';
const KEY = '5pO-5HCDFlnCH-WxcPf_WX3S9YoWNlJmajqyT7zja4Q';
const searchURL = 'https://api.unsplash.com/search/photos/';

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

	const fetchImages = async () => {
		let url;
		url = mainURL + KEY;
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
