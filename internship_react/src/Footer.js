function Footer(){
    return(
        <footer className="bg-gray shadow dark:bg-gray-200 h-30">
            <div className="flex w-full mx-auto max-w-screen-xl p-3 border-b border-gray-300">
                <div className="flex items-center text-sm text-gray-500 sm:text-center dark:text-gray-500 ">
                    <div className="pl-5">대한민국</div>
                </div>
            </div>
            <div className="flex w-full mx-auto max-w-screen-xl p-3">
                <div className="flex items-center text-sm text-gray-500 sm:text-center dark:text-gray-500 justify-between w-full ">
                    <a href="https://www.google.com/intl/ko_kr/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
                       className="pl-5">광고</a>
                    <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"
                       className="pl-2">비즈니스</a>
                    <a href="https://google.com/search/howsearchworks/?fg=1" className="pl-2">검색의 원리</a>
                    <a href="https://policies.google.com/privacy?hl=ko&fg=1" className="pr-2 ml-auto">개인정보처리방침</a>
                    <a href="https://policies.google.com/terms?hl=ko&fg=1" className="pr-2">약관</a>
                    <a href="#" className="pr-5 mr-0">설정</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;