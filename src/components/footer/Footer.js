import './Footer.css'

export default function Footer() {
    return (
        <footer className="foot">
            <div className="foottext">
                <p>Made for Leetcode❤️</p>
            </div>
            <div className="footlink">
                <a href="https://www.linkedin.com/in/shourya-sahu-b5310b242/"  target="_blank">
                    {/*<img src="../res/linkedin.png" alt="icon" width="32px">*/}
                </a>
                <a href="https://www.linkedin.com/in/shourya-sahu-b5310b242/" target="_blank">
                    {/*<img src="../res/linkedin.png" alt="icon" width="32px">*/}
                </a>
                <a  href="https://leetcode.com/shourya0/" target="_blank">
                    {/*<img src="../res/leetcode.png" alt="icon" width="20px">*/}
                </a>
            </div>
        </footer>
    );
}