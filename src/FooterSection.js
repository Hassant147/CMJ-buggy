import React from 'react';

// Images
import logo from './media/logo1.png';
import facebookIcon from './media/bxl-facebook.png';
import instagramIcon from './media/instagram-logo.png';
import twitterIcon from './media/bxl-twitter.png';
import youtubeIcon from './media/youtube-logo.png';

const Footer = () => {
    return (
        <footer className="bg-white text-black-600 py-8 w-4/5 mx-auto">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full mb-12 lg:w-auto">
                    <img src={logo} alt="Logo" className="w-24" />
                </div>
                <div className="w-full mb-12 lg:w-auto">
                    <h2 className="text-lg font-semibold">Learn More</h2>
                    <ul className="flex flex-col space-y-1 items-start">
                        {/* List items can be further extracted into a data array and mapped for cleaner code */}
                        <li><a href="#">About Lift</a></li>
                        <li><a href="#">Press Releases</a></li>
                        <li><a href="#">Environment</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
                <div className="w-full mb-12 lg:w-auto">
                    <h2 className="text-lg font-semibold mb-2">Tickets and Booking</h2>
                    <ul className="flex flex-col space-y-1 items-start">
                        <li><a href="#">Lift Tickets</a></li>
                        <li><a href="#">Season Passes</a></li>
                        <li><a href="#">Vacation Packages</a></li>
                    </ul>
                </div>
                <div className="w-full mb-12 lg:w-auto">
                    <h2 className="text-lg font-semibold mb-2">Contact us</h2>
                    <ul className="flex flex-col space-y-1 items-start">
                        <li><a href="#">Hotel Reservation: 123-456</a></li>
                        <li><a href="#">Ticket Office: 123-456</a></li>
                    </ul>
                </div>
                <div className="w-full lg:w-auto">
                    <h2 className="text-lg font-semibold mb-2">Social</h2>
                    <ul className="flex items-start space-x-8">
                        <li><a href="#"><img src={facebookIcon} alt="Facebook" /></a></li>
                        <li><a href="#"><img src={instagramIcon} alt="Instagram" /></a></li>
                        <li><a href="#"><img src={twitterIcon} alt="Twitter" /></a></li>
                        <li><a href="#"><img src={youtubeIcon} alt="YouTube" /></a></li>
                    </ul>
                </div>
            </div>
            <hr className="my-4 w-3/4 mx-auto" />
            <div className="text-gray-800 text-center text-sm absolute left-1/2 transform -translate-x-1/2 pt-5 pb-10">
                © 2019 Lift Media | All Rights Reserved
            </div>
        </footer>
    );
}

export default Footer;
