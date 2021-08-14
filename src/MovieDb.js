import React from 'react';
import './style.css';
function MovieContainer(props) {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="image-container">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
              alt=""
            />
          </div>
          <div className="basic-info">
            <div className="title">
              <h1>Inception</h1>
            </div>
            <div className="year">
              <h1>2010</h1>
            </div>
          </div>
          
          <div className="description">
            <p>
              Dom Cobb is a skilled thief, the absolute best in the dangerous
              art of extraction, stealing valuable secrets from deep within the
              subconscious during the dream state, when the mind is at its most
              vulnerable. Cobb's rare ability has made him a coveted player in
              this treacherous new world of corporate espionage, but it has also
              made him an international fugitive and cost him everything he has
              ever loved. Now Cobb is being offered a chance at redemption. One
              last job could give him his life back but only if he can
              accomplish the impossible, inception. Instead of the perfect
              heist, Cobb and his team of specialists have to pull off the
              reverse: their task is not to steal an idea, but to plant one. If
              they succeed, it could be the perfect crime. But no amount of
              careful planning or expertise can prepare the team for the
              dangerous enemy that seems to predict their every move. An enemy
              that only Cobb could have seen coming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieContainer;
