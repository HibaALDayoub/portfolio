import  './Works.css'
import { useState } from "react";
import mobile from '../../assets/mobile.png'
import globe from '../../assets/globe.jfif'
import writing from '../../assets/writing.jfif'
import { AiOutlineDoubleRight , AiOutlineDoubleLeft } from "react-icons/ai";


const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: mobile,
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: globe,
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: writing,
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className='Works' id='works'>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {/* itemسطر التنسييق في الاعلى لتحريك ال*/}
          {data.map((d) => (
            <div className="container" key={d.id}>
              <div className="item" key={d.id}>
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <span>Projects</span>
                  </div>
                </div>
              <div className="right">
                <img
                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <AiOutlineDoubleLeft className="arrow left ll" onClick={() => handleClick("left")}/>
        <AiOutlineDoubleRight className="arrow right rr" onClick={() => handleClick()}/>
      </div>
    );
  }

  export default Works