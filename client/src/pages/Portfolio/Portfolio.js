import axios from 'axios';
import React, { createElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  const [skill, setSkill] = useState([]);
  const [career, setCareer] = useState([]);
  const [education, setEducation] = useState([]);
  const [project, setProject] = useState([]);
  const [etcEducation, setEtcEducation] = useState([]);
  const [language, setLanguage] = useState([]);
  const [certificate, setCertificate] = useState([]);
  const [award, setAward] = useState([]);
  const [introduce, setIntroduce] = useState([]);

  const getToken = localStorage.getItem('token');
  const getUserIdx = localStorage.getItem('userIdx');
  const { portfolio_idx } = useParams();

  const [userInfo, setUserInfo] = useState([]);

  // user 정보 get
  const getUserInfo = () => {
    axios
      .get(`http://localhost:3001/users/${getUserIdx}`, {
        headers: {
          authorization: getToken,
        },
      })
      .then((res) => {
        const userData = res.data.data;
        setUserInfo(userData);
      })
      .catch((err) => console.log(err));
  };

  // portfolio get
  const getPortfolio = () => {
    axios
      .get(`http://localhost:3001/portfolios/${portfolio_idx}`)
      .then((res) => {
        const datas = res.data.data;
        setSkill(datas.skill);
        setCareer(datas.career);
        setEducation(datas.education);
        setProject(datas.website);
        setLanguage(datas.language);
        setCertificate(datas.certificate);
        setEtcEducation(datas.etc_education);
        setAward(datas.award);
        setIntroduce(datas.introduce);
      })
      .catch((err) => console.log(err, '실패'));
  };

  useEffect(() => {
    getUserInfo();
    getPortfolio();
  }, []);

  return (
    <div className="PortfolioWrap">
      {/* <div className="MainBG2"></div> */}
      <div className="PortUserInfo">
        {userInfo.map((e) => {
          return (
            <div className="PortTxtWrap" key={e.user_idx}>
              <div className="PortImgWrap">
                <img src={e.profile_img} />
              </div>
              <div class="PortTxtWrap">
                <p>{e.name}</p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} />
                  {e.email}
                </p>
                <p>
                  <FontAwesomeIcon icon={faMobileScreen} />
                  {e.phone}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="PortEduInfo">
        <p className="PortMainTxt">한줄 소개</p>
        <div className="PortTxtWrap2">
          {introduce.map((e) => {
            return (
              <div className="PortTxtWrap3" key={e.introduce_idx}>
                <span>{e.comment}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="PortEduInfo">
        <p className="PortMainTxt">기술 스택</p>
        <div className="PortTxtWrap2 SkillWrap">
          {skill.map((e) => {
            return <span key={e.skill_idx}>{e.name}</span>;
          })}
        </div>
      </div>

      <div className="PortEduInfo">
        <p className="PortMainTxt">경력</p>
        <div className="PortTxtWrap2">
          {career.map((e) => {
            return (
              <div className="PortTxtWrap3" key={e.career_idx}>
                <p className="DateTxt">
                  {e.start_date.substr(0, 10)} ~ {e.end_date.substr(0, 10)}
                </p>
                <p>회사명 : {e.company}</p>
                <p>직무 : {e.position}</p>
                <p>비고 : {e.comment}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="PortEduInfo">
        <p className="PortMainTxt">학력</p>
        <div className="PortTxtWrap2">
          {education.map((e) => {
            return (
              <div className="PortTxtWrap3" key={e.education_idx}>
                <p>
                  학교 : {e.school} {e.status}
                </p>
                <p>전공 : {e.major}</p>
                <p>졸업일(예정일) : {e.graduate_date.substr(0, 10)}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="PortEduInfo">
        <p className="PortMainTxt">프로젝트/웹사이트</p>
        <div className="PortTxtWrap2 WebWrap">
          {project.map((e) => {
            return (
              <div className="PortTxtWrap3" key={e.website_idx}>
                <div className="WebImg">
                  <img src={e.thumbnail} />
                </div>
                <div className="WebText">
                  <p className="Title">{e.title}</p>
                  <p className="DateTxt">
                    {e.start_date.substr(0, 10)} ~ {e.end_date.substr(0, 10)}
                  </p>
                  <p>{e.comment}</p>
                  <div className="Link">
                    <FontAwesomeIcon icon={faLink} />
                    <a href={e.link} target="_blank">
                      {e.link}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="PortEduInfo">
        <p className="PortMainTxt">교육 및 기타 이력</p>
        <div className="PortTxtWrap2">
          {etcEducation.map((e) => {
            return (
              <div className="PortTxtWrap3" key={e.etc_education_idx}>
                <p className="DateTxt">
                  {e.start_date.substr(0, 10)} ~ {e.end_date.substr(0, 10)}
                </p>
                <p>활동명 : {e.title}</p>
                <p>교육기관 : {e.organization}</p>
                <p>비고 : {e.comment}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="PortEduInfo">
        <p className="PortMainTxt">수상</p>
        <div className="PortTxtWrap2 AwardWrap">
          {award.map((e) => {
            return (
              <div className="PortTxtWrap3" key={e.award_idx}>
                <p>
                  <span className="DateTxt">{e.award_date.substr(0, 10)}</span>
                  {e.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="PortEduInfo">
        <p className="PortMainTxt">시험 및 자격증</p>
        <div className="PortTxtWrap2">
          {certificate.map((e) => {
            return (
              <div className="PortTxtWrap3" key={e.certificate_idx}>
                <p className="DateTxt">{e.acquisition_date.substr(0, 10)}</p>
                <p>자격증명 : {e.title}</p>
                <p>발급기관 : {e.organization}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="PortEduInfo">
        <p className="PortMainTxt">외국어</p>
        <div className="PortTxtWrap2">
          {language.map((e) => {
            return (
              <div className="PortTxtWrap3" key={e.language_idx}>
                <p className="DateTxt">{e.acquisition_date.substr(0, 10)}</p>
                <p>외국어명 : {e.name}</p>
                <p>점수 : {e.level}점</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
