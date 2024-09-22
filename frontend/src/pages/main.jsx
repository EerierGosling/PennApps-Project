import "../App.css";
import "../input.css";


export default function Layout() {

  setTimeout(() => {
    hide(document.getElementById('matchProfile'));
    hide(document.getElementById('reason'));

  }, 50);

  function hide(thing) {
    thing.style.visibility = 'hidden';
  }

  function matchMe() {
    const arrow = document.getElementById('arrow');
    arrow.classList.add('transition', 'duration-300', 'transform', 'md:-translate-y-0', 'translate-y-8', 'md:translate-x-16', 'ease-in-out');

    setTimeout(() => {
      document.getElementById('matchProfile').style.visibility = 'visible';
      document.getElementById('reason').style.visibility = 'visible';
    }, 400);
  }

  return (
    <div 
      id="main"
      className="h-full w-full"
      >
        <div 
          className="flex flex-col items-center justify-center h-full w-full">
          <div
            className="flex flex-col justify-center items-center mt-5"
          >
            <img 
              src='logo2.png'
              className="w-3/5"
            />
          
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-16">
            <div 
              id="profile"
              className="mt-5 bg-gradient-to-r rounded-xl from-tinderPink via-tinderRed to-tinderOrange flex justify-center items-center">
              <div 
                id="userProfile"
                className="bg-white m-3 rounded-xl flex flex-col ">
                  <div 
                    id="profileImage" 
                    className="bg-grey w-80 h-48 px-2 pt-6 flex items-end">
                    <p className="text-3xl pb-1">Name</p>
                  </div>
                  <div 
                    id="about"
                    className="p-2">
                    <h1 className="text-xl">Bio: </h1>
                  </div>
              </div>
            </div>
            <div id="arrow">
              <p className="text-7xl text-tinderOrange mx-16 transform md:-translate-x-8 rotate-90 md:rotate-0">
                &#10095;
              </p>
            </div>
            <div 
              id="matchProfile"
              className="mt-5 bg-gradient-to-r rounded-xl from-tinderPink via-tinderRed to-tinderOrange flex justify-center items-center">
              <div 
                id="profile"
                className="bg-white m-3 rounded-xl flex flex-col ">
                  <div 
                    id="profileImage" 
                    className="bg-grey w-80 h-48 px-2 pt-6 flex items-end">
                    <p className="text-3xl pb-1">Name</p>
                  </div>
                  <div 
                    id="about"
                    className="p-2">
                    <h1 className="text-xl">Bio: </h1>
                  </div>
              </div>
            </div>
          </div>
          <div id='button'>
            <button 
              id='matchButton'
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 bg-gradient-to-r rounded-xl from-tinderPink via-tinderRed to-tinderOrange p-2 px-4 mt-5 text-white text-xl"
              onClick={matchMe}
              >Match Me!
            </button>
          </div>
          <div 
            id='matchInfo'
            className='w-4/5 md:w-1/2 mt-10 mb-6'>
            <p id='reason' className="text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
            
        </div>
    </div>
  );
}