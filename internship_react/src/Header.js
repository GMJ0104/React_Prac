import React from "react";

function Header(){
    return(
        <header className="h-20 mt-5">
            <div className="flex items-center text-sm text-black sm:text-center dark:text-black justify-between w-full ">
                <a href="https://about.google/?fg=1&utm_source=google-KR&utm_medium=referral&utm_campaign=hp-header"
                   className="pl-5">Google 정보</a>
                <a href="https://store.google.com/KR?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=ko-KR"
                   className="pl-2">스토어</a>
                <a href="https://mail.google.com/mail/&ogbl" className="pr-2 ml-auto">Gmail</a>
                <a href="https://www.google.com/imghp?hl=ko&ogbl" className="pr-2">이미지</a>
                <div className="pr-2 mr-0">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path
                            d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                    </svg>
                </div>
            </div>
        </header>
    );
}

export default Header;