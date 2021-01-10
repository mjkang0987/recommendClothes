import { INITIAL_DASH } from '../constants/constants';

const getYear = _ => {
  return new Date().getFullYear();
}

const Footer = _ => {
  const {QUARTER} = INITIAL_DASH;
  return (
    <footer className="footer">
      <span className="year">{getYear() ? getYear() : QUARTER}</span>Made by MJ Kang
    </footer>
  );
};

export default Footer;
