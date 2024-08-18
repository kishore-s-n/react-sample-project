import NavComp from "../Utils/NavComp";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className='Hero'>
        <div className='intro'>
          <h1>Helping people achieve financial independece</h1>
          <p>
            Learn. Implement. Experience everything in finance -in one lifetime
            membership
          </p>
          <NavComp text='Join the Club' variant='bordered bg' />
          <div className='members-grp'>
            <div className='member-grp-content'>
              <img
                src='src/assets/members.png'
                alt='Member count'
                className='membersimg'
              />
              <div className='members-count'>
                <p>50K+</p>
                <span>Active Members</span>
              </div>
            </div>
            <div className='member-grp-content'>
              <img
                src='src/assets/star.png'
                alt='Star Ratings'
                className='membersimg'
              />
              <div className='members-count'>
                <p>4.87/5</p>
                <span>Rated</span>
              </div>
            </div>
          </div>
        </div>
        <div className='hero-img'>
          <img src='src/assets/hero-img.webp' alt='images of people' />
        </div>
      </div>
    </>
  );
};

export default Hero;
