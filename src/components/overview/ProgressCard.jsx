import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import profileImage from '../../assets/dashboardImages/progressImg.png'; // Replace with your actual image path
import styles from './ProgressCard.module.css'; // Import the CSS module
import Line from '../../assets/dashboardImages/line.png';

const ProgressCard = () => {
  return (
    <div className={styles.progressCard + ' relative '}>
      <div className={styles.progressCardContent}>
        <div className={styles.progressImageContainer}>
          <CircularProgressbar
            value={75}
            styles={buildStyles({
              pathColor: '#4C6FFF',
              trailColor: '#E5E7EB',
              strokeLinecap: 'butt',
              rotation: 0.75,
            })}
          />
          <img
            src={profileImage}
            alt="Profile"
            className={styles.profileImage}
          />
        </div>
        <div className="flex flex-col items-start">
          <p className={styles.monthlyIncome}>
            Monthly Income <span className={styles.amount}>₦5000</span>
          </p>
          <div className="flex items-center  mt-2">
            <p>
              Spent <span className="text-red-600 mr-3">₦5.6K</span>
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
            >
              <circle cx="5.5" cy="5" r="5" fill="#4567F7" />
            </svg>{' '}
            <p>
              Left <span className="text-green-600">₦5.9K</span>
            </p>
          </div>
          <p className="mt-2">
            Total saving so far <span className="text-blue-600">₦1000</span>
          </p>
        </div>
      </div>
      <div className="mt-2">
        <img src={Line} alt="line" />
      </div>
    </div>
  );
};

export default ProgressCard;
