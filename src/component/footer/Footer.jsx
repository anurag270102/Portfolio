const Footer = () => {
    return ([
        <div key={1212} className="w-full bg-[#ffffff]   text-black px-14 shadow-lg shadow-[#cec]">
            <div className="w-[10/12] flex justify-between flex-col md:flex-row items-center py-2 gap-3">
                <div>
                    <a href="#hero" >
                        <h2 className="text-4xl  md:text-[35px]  lg:text-[40px] font-berkishireswash pt-5 hover:text-gray-700 duration-200 animate-pulse">Anurag.</h2>
                    </a>
                </div>
                <div className="flex flex-row justify-between items-center gap-4 lg:pr-[170px]">
                    {/* linkdin */}
                    <div>
                        <a href="https://www.linkedin.com/in/anurag-dalsaniya-48a48b254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" viewBox="0 0 50 50" style={{ fill: '#000000' }}>
                                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                            </svg>
                        </a>
                    </div>
                    {/* facebook */}
                    <div>
                        <a href="https://www.facebook.com/anurag.dalsaniya.5?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" viewBox="0 0 256 256" style={{ fill: '#FFFFFF' }}>
                                <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                                    <g transform="scale(8.53333,8.53333)">
                                        <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z"></path>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                    {/* github */}
                    <div>
                        <a href="https://github.com/anurag270102" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" viewBox="0 0 30 30" style={{ fill: '#000000' }}>
                                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                            </svg>
                        </a>
                    </div>
                    {/* instagram */}
                    <div>
                        <a href="https://www.instagram.com/mr._anurag_009/" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" viewBox="0 0 50 50" style={{ fill: '#000000' }}>
                                <path d="M16 3C8.8324839 3 3 8.8324839 3 16L3 34C3 41.167516 8.8324839 47 16 47L34 47C41.167516 47 47 41.167516 47 34L47 16C47 8.8324839 41.167516 3 34 3L16 3zM16 5L34 5C40.086484 5 45 9.9135161 45 16L45 34C45 40.086484 40.086484 45 34 45L16 45C9.9135161 45 5 40.086484 5 34L5 16C5 9.9135161 9.9135161 5 16 5zM37 11A2 2 0 0 0 35 13A2 2 0 0 0 37 15A2 2 0 0 0 39 13A2 2 0 0 0 37 11zM25 14C18.936712 14 14 18.936712 14 25C14 31.063288 18.936712 36 25 36C31.063288 36 36 31.063288 36 25C36 18.936712 31.063288 14 25 14zM25 16C29.982407 16 34 20.017593 34 25C34 29.982407 29.982407 34 25 34C20.017593 34 16 29.982407 16 25C16 20.017593 20.017593 16 25 16z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    ])
}
export default Footer;