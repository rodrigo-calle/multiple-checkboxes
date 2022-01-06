import { useState } from 'react';
import './App.css';
function App() {
  const [selection, setSelection] = useState(false);
  const [addEpisode, setAddEpisode] = useState(false);

  const checkBox = (id) => {
    (document.querySelector(`#${id}`).hasAttribute('class'))?
      document.querySelector(`#${id}`).removeAttribute('class', 'input')
    :  
      document.querySelector(`#${id}`).setAttribute('class', 'input');
  }


  return (
    <div className="wrapper">
      <div className="cover">
        <img src="/podcast-cover.png" alt="Compressed.fm" />
      </div>
      <div className="content">    
        <h1>Listen to all the Compressed.fm Episodes</h1>      

        <ul>
          <li>
            <label htmlFor="episode-1" >
              <input type="checkbox" name="episode-1" id="episode-1"  />
              <span onClick={ ()=> checkBox('episode-1') }
              >1 || Trailer</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-2">
              <input type="checkbox" name="episode-2" id="episode-2" />
              <span onClick={ ()=> checkBox('episode-2') }>2 || James Q Quick Origin Story</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-3">
              <input type="checkbox" name="episode-3" id="episode-3" />
              <span onClick={ ()=> checkBox('episode-3') }>3 || Amy Dutton's Origin Story</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-4">
              <input type="checkbox" name="episode-4" id="episode-4" />
              <span onClick={ ()=> checkBox('episode-4') }>4 || Starting a New Development Project</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-5">
              <input type="checkbox" name="episode-5" id="episode-5" />
              <span onClick={ ()=> checkBox('episode-5') }>5 || How Do you Start a New Design Project?</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-6">
              <input type="checkbox" name="episode-6" id="episode-6" />
              <span onClick={ ()=> checkBox('episode-6') }>6 || Freelancing (Part 1)</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-7">
              <input type="checkbox" name="episode-7" id="episode-7" />
              <span onClick={ ()=> checkBox('episode-7') }>7 || Freelancing (Part 2)</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-8">
              <input type="checkbox" name="episode-8" id="episode-8" />
              <span onClick={ ()=> checkBox('episode-8') }>8 || The Tech Behind jamesqquick.com</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-9">
              <input type="checkbox" name="episode-9" id="episode-9" />
              <span onClick={ ()=> checkBox('episode-9') }>9 || The Tech Behind SelfTeach.me</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-10">
              <input type="checkbox" name="episode-10" id="episode-10" />
              <span onClick={ ()=> checkBox('episode-10') }>10 || Tech Behind SelfTeach.me</span>
            </label>
          </li>
        </ul>
        {
          (selection === false)?
          <button type="button" onClick={() => {     
            setAddEpisode(false)
            document.querySelectorAll('input').forEach((e)=> {
              //e.setAttribute('checked', true);
              e.setAttribute('class', 'input');

            });
            document.querySelectorAll('span').forEach((e)=> {
              //e.removeAttribute('checked');
              e.removeAttribute('class')
            });
            setSelection(true)
            }} 
            className="selectAll-btn"
          >Mark as Played</button>
           :
           <button type="button" onClick={() => { 
                         setAddEpisode(false)     
            document.querySelectorAll('input').forEach((e)=> {
              //e.removeAttribute('checked');
              e.removeAttribute('class')
            });
            document.querySelectorAll('span').forEach((e)=> {
              //e.removeAttribute('checked');
              e.removeAttribute('class')
            });
            setSelection(false)
            }} 
            className="selectAll-btn"
          >Dismark all as Played</button>
        }

        {
          (addEpisode === false)?
          <button type="button"  onClick={() => {      
            setSelection(false)
            document.querySelectorAll('span').forEach((e)=> {
              e.setAttribute('class', 'span');
            });
            document.querySelectorAll('input').forEach((e)=> {
              //e.removeAttribute('checked');
              e.removeAttribute('class')
            });
              setAddEpisode(true)
            }} 
            className="selectAll-btn"
          >Select all Episodes</button>
           :
           <button type="button" onClick={() => {      
            setSelection(false)
            document.querySelectorAll('span').forEach((e)=> {
              //e.removeAttribute('checked');
              e.removeAttribute('class')
            });
            document.querySelectorAll('input').forEach((e)=> {
              //e.removeAttribute('checked');
              e.removeAttribute('class')
            });
            setAddEpisode(false)
            }} 
            className="selectAll-btn"
          >Unselect all Episodes</button>
        }
      </div>
    </div>
  );
}

export default App;
