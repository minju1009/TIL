import React from "react";
import "./Main.css";
import Feed from "./Feed/Feed.js"

function Main(){
    return(
    <>
        <nav>
            <div className="navbar">
                <div className="navbar__logo">
                    <i className="fa-brands fa-instagram"></i>
                    <div className="navbar__logo__text">Westagram</div>
                </div>
                <div className="navbar__search">
                    <input className="navbar__searchBar" placeholder="검색" />
                    <i className="fa-solid fa-magnifying-glass searchIcon"></i>
                    <i className="fa-solid fa-circle-xmark"></i>
                </div>
                <div className="navbar__moreFunctions">
                        <i className="fa-regular fa-compass"></i>
                        <i className="fa-regular fa-heart"></i>
                        <i className="fas fa-regular fa-user-large"></i>
                </div>

                
                <div className="searchToggle">
                    <div className="toggle__arrow"></div>
                    <div className="searched__items"></div>
                </div>

              
                <div className="overlay"></div>
                <div className="profileOptions">
                    <div className="toggle__arrow"></div>
                    <div className="profileOptions__item">
                        <i className="fa-solid fa-user"></i>
                        <div className="profileOption__description">프로필</div>
                    </div>
                    <div className="profileOptions__item">
                        <i className="fa-regular fa-bookmark"></i>
                        <div className="profileOption__description">저장됨</div>
                    </div>
                    <div className="profileOptions__item">
                        <i className="fa-solid fa-gear"></i>
                        <div className="profileOption__description">설정</div>
                    </div>
                    <div className="profileOptions__item">로그아웃</div>
                </div>
            </div>
        </nav>

       
        <main className="main">
           
            <div className="main__left">
               <Feed />
               <Feed />
            </div>

           
            <div className="main__right">
                <div className="myId">
                    <div className="img__container">
                        <img className="avatar__img" alt="my profile image" src="/images/myprofile.jpeg" />
                    </div>
                    <div className="id__container">
                        <div className="avatar__id">wecode_bootcamp</div>
                        <div className="avatar__description">Wecode | 위코드</div>
                    </div>
                </div>
               
                <div className="story">
                    <div className="story__header">
                        <div className="header__text">스토리</div>
                        <div className="header__seeAll">모두 보기</div>
                    </div>
                    <div className="story__items">
                        <div className="story__items__item">
                            <div className="img__container">
                                <img className="avatar__img" alt="random user image" src="/images/profile3.jpeg" />
                            </div>   
                            <div className="id__container">
                                <div className="avatar__id">_yum_s</div>
                                <div className="avatar__description">16분 전</div>
                            </div>
                        </div>
                        <div className="story__items__item">
                            <div className="img__container">
                                <img className="avatar__img" alt="random user image" src="/images/profile4.jpeg" />
                            </div>   
                            <div className="id__container">
                                <div className="avatar__id">drink_eat_drink</div>
                                <div className="avatar__description">3시간 전</div>
                            </div>
                        </div>
                        <div className="story__items__item">
                            <div className="img__container">
                                <img className="avatar__img" alt="random user image" src="/images/profile5.jpeg" />
                            </div>   
                            <div className="id__container">
                                <div className="avatar__id">hyukyc</div>
                                <div className="avatar__description">20시간 전</div>
                            </div>
                        </div>
                        <div className="story__items__item">
                            <div className="img__container">
                                <img className="avatar__img"alt="random user image" src="/images/profile8.jpeg" />
                            </div>   
                            <div className="id__container">
                                <div className="avatar__id">jminkeek</div>
                                <div className="avatar__description">2주 전</div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="recommendations">
                    <div className="recommendations__header">
                        <div className="header__text">회원님을 위한 추천</div>
                        <div className="header__seeAll">모두 보기</div>
                    </div>
                    <div className="recommendations__items">
                        <div className="recommendations__items__item">
                            <div className="img__container">
                                <img className="avatar__img" alt="random user image" src="/images/profile6.jpeg" />
                            </div>     
                            <div className="id__container">
                                <div className="avatar__id">saranghaeeee</div>
                                <div className="avatar__description">joahaee님 외 2명이 팔로우합니다</div>
                            </div>
                            <button className="follow">팔로우</button>
                        </div>
                        <div className="recommendations__items__item">
                            <div className="img__container">
                                <img className="avatar__img" alt="random user image" src="/images/profile7.jpeg" />
                            </div>     
                            <div className="id__container">
                                <div className="avatar__id">wecode_bootcamp</div>
                                <div className="avatar__description">mijnink님 외 14명이 팔로우합니다</div>
                            </div>
                            <button className="follow">팔로우</button>
                        </div>
                        <div className="recommendations__items__item">
                            <div className="img__container">
                                <img className="avatar__img" alt="random user image" src="/images/profile8.jpeg" />
                            </div>     
                            <div className="id__container">
                                <div className="avatar__id">weworkspace</div>
                                <div className="avatar__description">wecode_bootcamp님 외 300명이 팔로우합니다</div>
                            </div>
                            <button className="follow">팔로우</button>
                        </div>
                        <div className="recommendations__items__item">
                            <div className="img__container">
                                <img className="avatar__img" alt="random user image" src="/images/profile8.jpeg" />
                            </div>     
                            <div className="id__container">
                                <div className="avatar__id">weworkspace</div>
                                <div className="avatar__description">wecode_bootcamp님 외 300명이 팔로우합니다</div>
                            </div>
                            <button className="follow">팔로우</button>
                        </div>
                    </div>
                </div>
               
                <div className="moreInfos">
                    <ul className="infolists">
                        <li><a>Instagram 정보</a></li>
                        <li><a>지원</a></li>
                        <li><a>홍보 센터</a></li>
                        <li><a>API</a></li>
                        <li><a>채용 정보</a></li>
                        <li><a>개인정보처리방침</a></li>
                        <li><a>약관</a></li>
                        <li><a>위치</a></li>
                        <li><a>디렉토리</a></li>
                        <li><a>프로필</a></li>
                        <li><a>해시태그</a></li>
                        <li><a>언어</a></li>
                    </ul>    
                    </div>
                <div className="copyright">© 2022 INSTAGRAM FROM META</div>
            </div>
        </main>
    </>
    )
}

export default Main;