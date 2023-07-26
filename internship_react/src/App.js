import React, {useEffect} from 'react';
import './App.css';

function App() {

    // DOM이 다 로드된 이후에 이벤트를 추가해야 함.
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

    const handleLuckyButtonClick = () => {
        window.location.href = 'https://www.google.com/doodles';
    };

    const handleSearchButtonClick = () => {
        const inputBox = document.getElementsByClassName('input-box')[0];
        const url = "https://www.google.com/search?q=" + inputBox.value;
        window.location.href = url;
    };

    return (
        <div className="App">
            <div className="navbar">
                <a href="https://about.google/?fg=1&utm_source=google-KR&utm_medium=referral&utm_campaign=hp-header"
                   className="nav-item-left">Google 정보</a>
                <a href="https://store.google.com/KR?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=ko-KR"
                   className="nav-item-left">스토어</a>
                <a className="nav-item-margin">margin</a>
                <svg className="apps" focusable="false" viewBox="0 0 24 24">
                    <path
                        d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                </svg>
                <a href="https://www.google.com/imghp?hl=ko&ogbl" className="nav-item-right">Images</a>
                <a href="https://mail.google.com/mail/&ogbl" className="nav-item-right">Gmail</a>
            </div>


            <div className="main">
                <img
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    width="272px"/>
                <div className="input-area">
                    <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" height="48" viewBox="0 -960 960 960"
                         width="48">
                        <path
                            d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z"/>
                    </svg>
                    <input type="text" className="input-box"/>
                    <svg xmlns="http://www.w3.org/2000/svg" className="keyboard-icon" height="48"
                         viewBox="0 -960 960 960" width="48">
                        <path
                            d="M140-200q-24 0-42-18.5T80-260v-440q0-24 18-42t42-18h680q24 0 42 18t18 42v440q0 23-18 41.5T820-200H140Zm0-60h680v-440H140v440Zm160-65h360v-60H300v60Zm-97-125h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60ZM203-575h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60ZM140-260v-440 440Z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mic-icon" height="48" viewBox="0 -960 960 960"
                         width="48">
                        <path
                            d="M480-423q-43 0-72-30.917-29-30.916-29-75.083v-251q0-41.667 29.441-70.833Q437.882-880 479.941-880t71.559 29.167Q581-821.667 581-780v251q0 44.167-29 75.083Q523-423 480-423Zm0-228Zm-30 531v-136q-106-11-178-89t-72-184h60q0 91 64.288 153t155.5 62Q571-314 635.5-376 700-438 700-529h60q0 106-72 184t-178 89v136h-60Zm30-363q18 0 29.5-13.5T521-529v-251q0-17-11.788-28.5Q497.425-820 480-820q-17.425 0-29.212 11.5Q439-797 439-780v251q0 19 11.5 32.5T480-483Z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="camera-icon" height="48" viewBox="0 -960 960 960"
                         width="48">
                        <path
                            d="M480-376q-45 0-74.5-29.5T376-480q0-45 29.5-74.5T480-584q45 0 74.5 29.5T584-480q0 45-29.5 74.5T480-376Zm0-60q18 0 31-13t13-31q0-18-13-31t-31-13q-18 0-31 13t-13 31q0 18 13 31t31 13ZM180-120q-24 0-42-18t-18-42v-172h60v172h172v60H180Zm428 0v-60h172v-172h60v172q0 24-18 42t-42 18H608ZM120-608v-172q0-24 18-42t42-18h172v60H180v172h-60Zm660 0v-172H608v-60h172q24 0 42 18t18 42v172h-60Z"/>
                    </svg>
                </div>
                <div className="button-area">
                    <button onClick={handleSearchButtonClick} className="button-style">
                        Google 검색
                    </button>
                    <button onClick={handleLuckyButtonClick} className="button-style">
                        I'm feeling lucky
                    </button>
                </div>
            </div>

            <div className="footer">
                <div className="first-line">
                <span className="first-line-left">
                대한민국
                </span>
                </div>

                <div className="second-line">
                <span className="second-line-left">
                  <a href="https://www.google.com/intl/ko_kr/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
                     className="second-line-style-left">광고</a>
                  <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"
                     className="second-line-style-left">비즈니스</a>
                  <a href="https://google.com/search/howsearchworks/?fg=1" className="second-line-style-left">검색의 원리</a>
                </span>

                <span className="second-line-right">
                  <a href="https://policies.google.com/privacy?hl=ko&fg=1" className="second-line-style-right">개인정보처리방침</a>
                  <a href="https://policies.google.com/terms?hl=ko&fg=1" className="second-line-style-right">약관</a>
                  <a href="#" className="second-line-style-right">설정</a>
                </span>
                </div>
            </div>
        </div>
    );
}

export default App;
