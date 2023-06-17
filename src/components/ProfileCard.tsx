import "../styles/ProfileCard.css";

export default function ProfileCard() {
  return (
    <>
      <div className="profile-card">
        <div className="profile-card__content">
          <div className="profile-card__background">
            <img src="/bg-pattern-card.svg" alt="card-pattern" />
          </div>
          <div className="profile-card__avatar">
            <img src="/image-victor.jpg" alt="profile-image" />
          </div>
          <div className="profile-card__info">
            <div className="profile-card__details">
              <p>
                <span className="__name">Victor Crest</span>{" "}
                <span className="__age">26</span>
              </p>
              <p>
                <span className="__city">London</span>
              </p>
            </div>
            <div className="profile-card__info--stats">
              <div className="__followers">
                <p>80K</p>
                <p>Followers</p>
              </div>
              <div className="__likes">
                <p>803K</p>
                <p>Likes</p>
              </div>
              <div className="__photos">
                <p>1.4K</p>
                <p>Photos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/Sanjoymajee">Sanjoy Majee</a>.
      </div>
    </>
  );
}
