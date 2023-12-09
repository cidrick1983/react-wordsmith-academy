import { FaCopyright } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';

function Footer() {
  return (
    <main className="flex justify-between">
      <div className="flex justify-left items-center text-md">
        <FaCopyright className="mr-1" />
        <p className="font-semibold">wordsmith-academy 2023</p>
      </div>
      <div className="flex justify-end">
        <FaFacebookSquare className="flex justify-between" />
        <FaSquareTwitter className="mx-2" />
        <FaInstagramSquare className="mr-2" />
      </div>
    </main>
  );
}

export default Footer;
