import React, {useEffect} from 'react';

function Body() {
    useEffect(() => {
        const inputBox = document.getElementsByClassName('input-box')[0];
        inputBox.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                handleSearchButtonClick();
            }
        });

        return () => {
            inputBox.removeEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    handleSearchButtonClick();
                }
            });
        };
    }, []);
    const handleSearchButtonClick = () => {
        const inputBox = document.getElementsByClassName('input-box')[0];
        const url = "https://www.google.com/search?q=" + inputBox.value;
        window.location.href = url;
    };
    const handleLuckyButtonClick = () => {
        window.location.href = 'https://www.google.com/doodles';
    };
    return(
        <div className="flex flex-col items-center justify-center flex-1">
            <div className="mb-6">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                     alt="google Logo"
                     className="object-cover"/>
            </div>
            <div className="flex items-center w-full mx-auto mb-4 border rounded-full lg:max-w-2xl hover:shadow-md focus:shadow-md">
                <div className="pl-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </div>
                <input type="text" className="input-box w-full bg-transparent rounded-full py-[14px] pl-4 outline-none"/>
                <div className="pr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path
                            d="M140-200q-24 0-42-18.5T80-260v-440q0-24 18-42t42-18h680q24 0 42 18t18 42v440q0 23-18 41.5T820-200H140Zm0-60h680v-440H140v440Zm160-65h360v-60H300v60Zm-97-125h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60ZM203-575h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60ZM140-260v-440 440Z"/>
                    </svg>
                </div>
                <div className="pr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path
                            d="M480-423q-43 0-72-30.917-29-30.916-29-75.083v-251q0-41.667 29.441-70.833Q437.882-880 479.941-880t71.559 29.167Q581-821.667 581-780v251q0 44.167-29 75.083Q523-423 480-423Zm0-228Zm-30 531v-136q-106-11-178-89t-72-184h60q0 91 64.288 153t155.5 62Q571-314 635.5-376 700-438 700-529h60q0 106-72 184t-178 89v136h-60Zm30-363q18 0 29.5-13.5T521-529v-251q0-17-11.788-28.5Q497.425-820 480-820q-17.425 0-29.212 11.5Q439-797 439-780v251q0 19 11.5 32.5T480-483Z"/>
                    </svg>
                </div>
                <div className="pr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path
                            d="M480-376q-45 0-74.5-29.5T376-480q0-45 29.5-74.5T480-584q45 0 74.5 29.5T584-480q0 45-29.5 74.5T480-376Zm0-60q18 0 31-13t13-31q0-18-13-31t-31-13q-18 0-31 13t-13 31q0 18 13 31t31 13ZM180-120q-24 0-42-18t-18-42v-172h60v172h172v60H180Zm428 0v-60h172v-172h60v172q0 24-18 42t-42 18H608ZM120-608v-172q0-24 18-42t42-18h172v60H180v172h-60Zm660 0v-172H608v-60h172q24 0 42 18t18 42v172h-60Z"/>
                    </svg>
                </div>
            </div>
            <div className="flex gap-x-6">
                <button onClick={handleSearchButtonClick} className="px-3 py-2 text-base font-light cursor-pointer hover:shadow bg-gray-50">
                    Google 검색
                </button>
                <button onClick={handleLuckyButtonClick} className="px-3 py-2 text-base font-light cursor-pointer hover:shadow bg-gray-50">
                    I'm Feeling Lucky
                </button>
            </div>
        </div>
    );
}

export default Body;