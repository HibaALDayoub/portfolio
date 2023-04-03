import  './Testimonials.css'
import { AiOutlineYoutube , AiFillTwitterCircle , AiOutlineLinkedin , AiOutlineFall} from "react-icons/ai";
import h1 from '../../assets/h1.jpg'
import h2 from '../../assets/h2.jpg'
import h3 from '../../assets/h3.jpg'


const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: h1 ,
      icon: <AiOutlineYoutube className="right rl"/>,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: h2,
      icon: <AiFillTwitterCircle className="right rl"/>,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: h3,
      icon: <AiOutlineLinkedin className="right rl"/>,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card" } key={d.id}>
            <div className="top">
              <AiOutlineFall className="left" />
              {/* <img src="assets/right-arrow.png" alt="" /> */}
              <img
                className="user"
                src={d.img}
                alt=""
              />
              {/* <div className="right rl" > </div> */}
              {d.icon}
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials