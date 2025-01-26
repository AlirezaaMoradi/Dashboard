import { Fragment } from "react";
import { Link } from 'react-router-dom';

// Page
const HomePage = () => {
  return(<Fragment>
    <h1 className="flex col-start-1 col-end-[-1] row-start-1 row-end-2 justify-center items-center">Home Page</h1>
    <div className="flex gap-4 col-start-1 col-end-[-1] row-start-2 row-end-3 justify-center items-center">
      <Link to="/dashboard">داشبورد</Link>
      <Link to="/settings">تنظیمات</Link>
    </div>
  </Fragment>);
};

export default HomePage;