import ReactAudioPlayer from "react-audio-player";
import AudioDetailModal from "../Modals/AudioDetailModal";
import { useEffect, useState } from "react";
import { useSongStore } from "../../store/useStore";

const ListAudio = () => {
  const [audios, setAudios] = useState([]);
  const getSongs = useSongStore(state => state.getSongs);
  useEffect(() => {
    const gets = async() => {
      const songs = await getSongs();
      setAudios(songs.data);
    };
    gets();
    
  },[]);
  
  return (
    <div className="flex justify-center items-center">
    <div className="grid grid-cols-3 gap-5 mt-5 m-auto">
      {audios?.length > 0 ? audios.map((item) => (
        <div className=" shadow rounded bg-white text-black px-2 py-3" key={item.id}>
          <div className="flex flex-col justify-center items-center">
            <div>
             <img src={`${import.meta.env.VITE_SERVER_URL}/images/${item.image}`}/>
            </div>
            <div className="font-bold">{item.title}</div>
            <div className="w-full flex justify-center">
              <ReactAudioPlayer controls  src={`${import.meta.env.VITE_SERVER_URL}/songs/${item.file}`}></ReactAudioPlayer>
            </div>
            <div>
              <AudioDetailModal openButtonTitle="Details"/>
            </div>
          </div>
        </div>
      )) : null}
    </div>
    </div>
  );
};

export default ListAudio;
