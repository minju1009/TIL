import React from "react";
import "./Feed.css"

function Feed(){
    return (
        <article className="feed">                  
            <header className="feed__header">
                <div className="feed__header__left">
                    <div className="img__container">
                        <img className="avatar__img" alt="my profile image" src="/images/myprofile.jpeg" />
                     </div>
                    <div className="avatar__id">thisisme</div>
                </div>
                <div className="feed__header__right">
                    <i className="fa fa-light fa-ellipsis"></i>
                </div>
            </header>

            <div className="feed__image__container">
                <img alt="feed content image" src="/images/baking.jpeg" />
            </div>

            <div className="feed__reaction">
                <div className="feed__reaction__icons">
                    <div className="feed__reaction__icons__left">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        <i className="fas fa-arrow-up-from-bracket"></i>
                    </div>
                    <div className="feed__reaction__icons__right">
                        <i className="fa-regular fa-bookmark"></i>
                    </div>                        
                </div>
                <div className="feed__reaction__likes">
                    <div className="img__container">
                        <img className="avatar__img" alt="user image"src="/images/profile2.jpeg" />
                    </div>
                        <span>
                        <a className="avatar__id" href="#">aineworld</a>님 <b>외 10명</b>이 좋아합니다.
                    </span>                        
                </div>
            </div>

            <div className="feed__post">
                <a href="#" className="avatar__id">thisisme</a>
                <span>위워크에서 진행한 베이킹 클래스...</span>
                <button>더 보기</button>
            </div>

            <div className="feed__comments">
                <div className="feed__comment__item" data-num="1">
                    <a href="#" className="avatar__id">canon_mj</a>
                    <span>거봐~너무 좋았잖아~</span>
                    <span className="feed__comment__reactions">
                        <i className="fa-solid fa-x" data-num="1"></i>
                        <i className="fa-regular fa-heart" data-like="1"></i>
                    </span>
                </div>
            </div>
     
            <div className="feed__postTime">42분 전</div>

            <form className="feed__addComment">
                <input className="feed__addComment__input" type="text" placeholder="댓글 달기..." />
                <button type="submit" className="feed__addComment__button">게시</button>
            </form>
        </article>
    )
};

export default Feed;