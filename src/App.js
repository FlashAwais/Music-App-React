import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "Kana Yaari",
      artist: "Coke Studio",
      img_src: "./images/song-1.jpg",
      src: "./music/Kana Yari.mp3"
    },
    {
      title: "Easy",
      artist: "Troye Sivan",
      img_src: "./images/song-2.jpg",
      src: "./music/easy.mp3"
    },
    {
      title: "I Like Me Better",
      artist: "Lauv",
      img_src: "./images/song-3.jpg",
      src: "./music/I Like Me Better.mp3"
    },
    {
      title: "Mehram",
      artist: "Coke Studio",
      img_src: "./images/song-4.jpg",
      src: "./music/Mehram.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
