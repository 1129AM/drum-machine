import './App.css'
import { audioclips } from './assets/audioClips'
import Drum from './assets/Drum'

function App() {
  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) =>{
    const clip = audioclips.find((clip) => clip.keyTrigger === e.key.toUpperCase())
  if(!clip) return;
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement).play().catch(console.error)
  document.getElementById("drum-" + clip.keyTrigger)?.focus()
  document.getElementById("display")!.innerText = clip.description;
}
  return (
  <div className='container' id='drum-machine' onKeyDown={playAudio}>
    <h1>Drum Machine</h1>
    <div className='whole-drum'>
        {audioclips.map((clip) => (
          <Drum audioClip = {clip} key={clip.keyTrigger} />
        ))}
    </div>
    <div id ="display"></div>
  </div>

  )
}

export default App
