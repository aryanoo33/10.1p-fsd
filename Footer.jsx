import "./Footer.css";

const Footer  = () => {
    return(
        <div className="main">

        <div className="foot">
            <div className="Explore">
                <ul>
                    <p>
                    
                    Explore
                    </p>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Questions</a></li>
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">Tutorials</a></li>
                </ul>
            </div>
            <div className="Explore support">
                <ul>
                    <p>
                    Support
                    </p>
                    <li><a href="#">Faq's</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="Explore support1">
                <ul>
                    <p>
                    Stay Connected
                    </p>
                    <div className="pics">
                    <li> <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png"/></li>
                    <li><img src="https://w7.pngwing.com/pngs/213/828/png-transparent-facebook-logo-facebook-messenger-logo-social-media-icon-facebook-icon-blue-text-rectangle-thumbnail.png"/></li>
                    <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553"/></li>
                    </div>
                </ul>
            </div>
        </div>

        <div className="dev">
            <p>DeV@Deakin 2023</p>
            <div className="dev2">
                <p>Privacy Policy</p>
                <p>Terms</p>
                <p>Code Of Conduct</p>
                <ul>
                    <li>Privacy Policy</li>
                    <li>terms</li>
                    <li>Code of Conduct</li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Footer;