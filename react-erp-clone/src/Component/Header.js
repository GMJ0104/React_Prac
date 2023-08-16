import React from "react";

function Header(){
    return (
        <>
            <div className="pb-5 pt-2 bg-gray-200 flex">
                <div className="mx-3">
                    <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 491.52 491.52" height="20px" width="20px">
                        <g>
                            <g>
                                <path
                                    d="M207.05,102.4l-53.53-51.2H0v389.12h491.52V102.4H207.05z M20.48,419.84V71.68H145.3l53.53,51.2h272.21v296.96H20.48z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <rect x="194.56" y="368.64" width="235.52" height="20.48"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <rect x="296.96" y="317.44" width="133.12" height="20.48"/>
                            </g>
                        </g>
                    </svg>
                </div>
                작업 현황
            </div>
        </>
    )
}

export default Header;