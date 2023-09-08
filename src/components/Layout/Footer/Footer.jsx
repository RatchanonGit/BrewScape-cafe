import React from 'react';
import './Footer.css'
import { BsFacebook, BsInstagram } from "react-icons/bs";


const Footer = () => {
    return (
        <div>
            <footer>
                <div class="phone">
                    <b>Call</b>
                    <a href="tel:0655708884">065-5708884</a>
                </div>
                <div class="email">
                    <b>Email</b>
                    <a href="mailto:peem.ratchanon13@gmail.com">peem.ratchanon13@gmail.com</a>
                </div>
                <div class="follow">
                    <b>Follow</b>
                    <ul>
                        <li><a href="https://www.facebook.com/profile.php?id=100015143076272"><BsFacebook color='white' /></a></li>
                        <li><a href="https://www.instagram.com/_rrratchanon/"><BsInstagram color='white' /></a></li>
                    </ul>
                </div>
            </footer>
        </div>


    );
}

export default Footer;
