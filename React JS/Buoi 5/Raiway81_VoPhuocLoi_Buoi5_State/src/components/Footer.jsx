import '../css/footer.css'
import { useState } from 'react';
export const Footer = () => {
  const [title, setTitle] = useState(true);
  const changeTitle = () => {
    // set lai phu dinh cuar title
    setTitle(!title);
    // true => false
    // fasle => true
    const 
const changeText =
  };
  return (
    <div>
      <footer>
        <div className="info-footer">
          <h6 className="title-ft" onClick={() => changeTitle()}>
            {title ? 'Quote of the Day' : 'We are hero'}
          </h6>
          <h6>---***---</h6>
          <p className="info-ft">
            "We are like butterflies who flutter for a day and think it is
            forever."
          </p>
          <p className="author-ft">Carl Sagan</p>
        </div>
      </footer>
    </div>
  );
};
