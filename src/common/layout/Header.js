import React, { useContext, useEffect, useRef, useState } from 'react';
import logo from '../../assets/img/logo2.png';
import styles from '../../styles/Header.module.scss';
import ChatModal from '../../components/chat/ChatModal';
import useNavigation from '../func/useNavigation';
import AuthContext from '../../components/store/auth-context';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { API_BASE_URL, USER } from '../../config/host-config';

import basicProfile from '../../assets/img/anonymous.jpg';

const Header = () => {
  const { isLoggedIn, onLogout, userEmail, profileImage, nickname, userNo } =
    useContext(AuthContext);
  const profileRequestURL = `${API_BASE_URL}${USER}/load-profile`;
  const navigate = useNavigate();

  const [profileUrl, setProfileUrl] = useState(null);

  const logoutHandler = async () => {
    const res = await fetch(`${API_BASE_URL}${USER}/logout`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
      },
    });

    // AuthContext의 onLogout 함수를 호출하여 로그인 상태를 업데이트 합니다.
    onLogout();
    navigate('/login');
  };

  const fetchProfileImage = async () => {
    if (!isLoggedIn) return;
    const res = await fetch(profileRequestURL, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
      },
    });

    /*
    if (
      res.status === 200 &&
      res.headers.get('Content-type').startsWith('image')
    ) {
      // 서버에서는 byte[]로 직렬화된 이미지가 응답되므로
      // blob()을 통해 전달받아야 한다. (json() xxxxx)
      const profileBlob = await res.blob();
      // 해당 이미지를 imgUrl로 변경
      const imgUrl = window.URL.createObjectURL(profileBlob);
      setProfileUrl(imgUrl);
    } else if (
      res.status === 200 &&
      res.headers.get('Content-type').startsWith('text')
    ) {
      const imageUrl = await res.text();
      setProfileUrl(imageUrl);
    } else {
      const err = await res.text();
      console.log('err: ', err);
      setProfileUrl(null);
    }
      */
    if (res.status === 200) {
      const imageUrl = await res.text();
      setProfileUrl(imageUrl);
    } else {
      const err = await res.text();
      console.log('err: ', err);
      setProfileUrl(null);
    }
  };

  const {
    goLogin,
    goJoin,
    goHome,
    goNews,
    goBoard,
    goMyPage,
    goRegionInfo,
    goSubscribe,
  } = useNavigation();

  const {
    header,
    headerContainer,
    headerItem,
    items,
    btnGroup,
    btn,
    btn1,
    btn2,
    changeHeader,
    section,
    changeItem,
    changeBtnGroup,
    login,
    user,
    name,
    logout,
  } = styles;

  // 스크롤시 헤더 색상 변경
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  const childButtonRef = useRef(null);

  // '실시간' 메뉴 클릭 이벤트 핸들러
  const openChatModal = () => {
    console.log('click chat Button!');
    childButtonRef.current.handleOpen();
  };

  useEffect(() => {
    if (isLoggedIn) fetchProfileImage();
  }, [isLoggedIn]);

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  return (
    <header
      className={scrollPosition < 10 ? header : `${header} ${changeHeader}`}
    >
      <div className={headerContainer}>
        <div
          className={
            scrollPosition < 10 ? headerItem : `${headerItem} ${changeItem}`
          }
        >
          <div className={items} onClick={goNews}>
            뉴스{' '}
          </div>
          <div>|</div>
          <div className={items} onClick={goBoard}>
            게시판{' '}
          </div>
          <div>|</div>
          <div className={items} onClick={goRegionInfo}>
            지역별정보
          </div>
          {scrollPosition < 10 ? (
            <img
              src={logo}
              width='190'
              height='100'
              alt='로고이미지'
              onClick={goHome}
              style={{ cursor: 'pointer' }}
            />
          ) : (
            ''
          )}
          {scrollPosition > 10 ? <div>|</div> : ''}
          <div className={items} onClick={goSubscribe}>
            뉴스레터
          </div>
          <div>|</div>
          <div className={items} onClick={openChatModal}>
            실시간
          </div>

          <div style={{ display: 'none' }}>
            <ChatModal ref={childButtonRef} />
          </div>
        </div>

        <div
          className={
            scrollPosition < 10 ? btnGroup : `${btnGroup} ${changeBtnGroup}`
          }
        >
          {/*<div>{localStorage.getItem('NICK_NAME') + '님 안녕하세요'}</div> */}
          {isLoggedIn ? (
            <div className={login}>
              <div className={user}>
                {scrollPosition < 10 ? (
                  <img
                    src={profileImage || { basicProfile }}
                    alt='프로필 사진'
                  />
                ) : (
                  ''
                )}
                <div className={name}>{nickname + '님 안녕하세요'}</div>
              </div>
              <div className={`${btn} ${btn1}`} onClick={logoutHandler}>
                로그아웃
              </div>
              <div className={`${btn} ${btn2}`} onClick={goMyPage}>
                마이페이지
              </div>
            </div>
          ) : (
            <div className={logout}>
              <div className={`${btn} ${btn1}`} onClick={goLogin}>
                로그인
              </div>
              <div className={`${btn} ${btn2}`} onClick={goJoin}>
                회원가입
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
