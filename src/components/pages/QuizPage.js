import React from "react";
// import logo from "./logo.svg";
// import "./index.css";
import Card from "../Card.js";

class QuizPage extends React.Component {
  /* Your <div className="card"> instances below should really be a component on their own to promote re-use. There should be a "Card.js" and then in that file you'd have a single render() function and in that 
  render() g function you'd put a single instance of <div className="card"> up until the corresponding closing tafor that div into the render function. Then in this QuizPage.js, you'd have several instances of the 
  component you created. If you would like to have a help session on this we should schedule some time :) Anytime next week I am free as it is FHL so we can sync then as well. Thanks! :) */

  /*
  1. Are you looking for outdoor or indoor or outdoor activity? 

2. Are you looking for crowded place or quiet place? 

3. What do you prefer? (Sports, historical, social, adventurous) 

4. Are you into day event or night event or party? 

5. How much does saving money matter more to you? (Not at all; somewhat; definitely)  

6. What type of food do you like? (Images: American, Mexican, Indian)
*/
  render() {
    return (
      <div className="QuizPage">
        <div className="title">
          <div id="carouselExampleControls" className="carousel slide">
            <div className="box22">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <h1>
                    <span className="heading" style={{ color: "#2E4552" }}>
                      Are you into outdoor or indoor or outdoor activities?
                    </span>
                  </h1>
                  <div className="box">
                    <Card
                      heading="Outdoor"
                      detail="I am social!"
                      src="https://previews.123rf.com/images/tonobalaguer/tonobalaguer1506/tonobalaguer150601019/41299779-couple-young-walking-on-the-beach-palm-tree-in-summer-vacation.jpg"
                    />
                    <Card
                      heading="Indoor"
                      detail="I am chill!"
                      src="https://static.onecms.io/wp-content/uploads/sites/28/2017/06/moxy-hotel-rooftop-bar-new-york-city-skyline-NYCROOF0617.jpg"
                    />
                    <Card
                      heading="Outdoor Activity"
                      detail="I am adventurous!!!"
                      src="https://www.backroads.com/sites/default/files/styles/trip_page_hero_landscape/public/trips/2020/slideshows/top/MSWI9B-switzerland-multi-adventure-tour-1.jpg?itok=i8orTGxh"
                    />
                  </div>
                </div>
                <div className="carousel-item">
                  <h1>
                    <span className="heading" style={{ color: "#2E4552" }}>
                      Are you looking for a crowded place or a quiet place?
                    </span>
                  </h1>
                  <div className="box">
                    <Card
                      heading="Crowded place"
                      detail="I want to be with many people!"
                      src="https://www.ioes.ucla.edu/wp-content/uploads/beach-sea-people-vacation-amusement-park-park-519299-pxhere.com_-e1533774181971.jpg"
                    />
                    <Card
                      heading="Quiet place"
                      detail="I just want to chill! "
                      src="https://happiercamping.com/wp-content/uploads/camping-for-begginers.jpg"
                    />
                  </div>
                </div>
                <div className="carousel-item">
                  <h1>
                    <span className="heading" style={{ color: "#2E4552" }}>
                      What do you prefer?
                    </span>
                  </h1>
                  <div className="box">
                    <Card
                      heading="Sports"
                      detail="I am interested in sports!"
                      src="https://sportshub.cbsistatic.com/i/r/2019/07/19/8af936f9-0d1b-4555-b6b0-3414bc77afc3/thumbnail/1200x675/4e6a91e2dedf918b230320c9ffbf3b18/seattle-seahawks-stadium.jpg"
                    />
                    <Card
                      heading="Historical"
                      detail="I am curious about history of the place!"
                      src="https://previews.123rf.com/images/tonobalaguer/tonobalaguer1506/tonobalaguer150601019/41299779-couple-young-walking-on-the-beach-palm-tree-in-summer-vacation.jpg"
                    />
                    <Card
                      heading="Social"
                      detail="I want to meet new people!"
                      src="https://previews.123rf.com/images/tonobalaguer/tonobalaguer1506/tonobalaguer150601019/41299779-couple-young-walking-on-the-beach-palm-tree-in-summer-vacation.jpg"
                    />
                    <Card
                      heading="Adventurous"
                      detail="I want to explore and try new things!"
                      src="https://previews.123rf.com/images/tonobalaguer/tonobalaguer1506/tonobalaguer150601019/41299779-couple-young-walking-on-the-beach-palm-tree-in-summer-vacation.jpg"
                    />
                  </div>
                </div>
                <div className="carousel-item">
                  <h1>
                    <span className="heading" style={{ color: "#2E4552" }}>
                      Are you into day event or night event or party?
                    </span>
                  </h1>
                  <div className="box">
                    <Card
                      heading="Day Event"
                      detail="I want to somewhere before evening!"
                      src="https://dartmouth-cs52-21s.github.io/lab2-snow-kang/media/stretch.jpg"
                    />
                    <Card
                      heading="Night Event"
                      detail="I want to go somewhere at night!"
                      src="https://previews.123rf.com/images/tonobalaguer/tonobalaguer1506/tonobalaguer150601019/41299779-couple-young-walking-on-the-beach-palm-tree-in-summer-vacation.jpg"
                    />
                    <Card
                      heading="Party"
                      detail="I am down to party and have some fun!"
                      src="https://previews.123rf.com/images/tonobalaguer/tonobalaguer1506/tonobalaguer150601019/41299779-couple-young-walking-on-the-beach-palm-tree-in-summer-vacation.jpg"
                    />
                  </div>
                </div>
                <div className="carousel-item">
                  <h1>
                    <span className="heading" style={{ color: "#2E4552" }}>
                      How much does saving money matter more to you?
                    </span>
                  </h1>
                  <div className="box">
                    <Card
                      heading="Not at all"
                      detail="Price doesn't matter for me!"
                      src="https://dartmouth-cs52-21s.github.io/lab2-snow-kang/media/stretch.jpg"
                    />
                    <Card
                      heading="Somewhat"
                      detail="I would choose cheaper option if it is possible!"
                      src="https://previews.123rf.com/images/tonobalaguer/tonobalaguer1506/tonobalaguer150601019/41299779-couple-young-walking-on-the-beach-palm-tree-in-summer-vacation.jpg"
                    />
                    <Card
                      heading="Definitely"
                      detail="I am broke and wanna explore cheap options!"
                      src="https://previews.123rf.com/images/tonobalaguer/tonobalaguer1506/tonobalaguer150601019/41299779-couple-young-walking-on-the-beach-palm-tree-in-summer-vacation.jpg"
                    />
                  </div>
                </div>
                <div className="carousel-item">
                  <h1>
                    <span className="heading" style={{ color: "#2E4552" }}>
                      What type of food do you like?
                    </span>
                  </h1>
                  <div className="box">
                    <Card
                      heading="American"
                      detail="I want some burgers and french fries!"
                      src="https://dartmouth-cs52-21s.github.io/lab2-snow-kang/media/stretch.jpg"
                    />
                    <Card
                      heading="Asian"
                      detail="I am down for sushi today!"
                      src="https://previews.123rf.com/images/tonobalaguer/tonobalaguer1506/tonobalaguer150601019/41299779-couple-young-walking-on-the-beach-palm-tree-in-summer-vacation.jpg"
                    />
                    <Card
                      heading="Mexican/Latinx food"
                      detail="I want fat burritos!"
                      src="https://previews.123rf.com/images/tonobalaguer/tonobalaguer1506/tonobalaguer150601019/41299779-couple-young-walking-on-the-beach-palm-tree-in-summer-vacation.jpg"
                    />
                    <Card
                      heading="Seafood"
                      detail="I want to try seafood!"
                      src="https://previews.123rf.com/images/tonobalaguer/tonobalaguer1506/tonobalaguer150601019/41299779-couple-young-walking-on-the-beach-palm-tree-in-summer-vacation.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex mt-4 justify-content-between">
            <button
              type="button"
              className="btn btn-light "
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              Previous
            </button>
            <button
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
              type="button"
              className="btn btn-success"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizPage;
