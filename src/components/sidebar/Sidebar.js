import './Sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="buttons">
                <p id="home-text-sidebar">Display</p>
                <a href="">Abc</a>
                <a href="">Abc</a>
                <a href="">Abc</a>
            </div>
            <div className="right">
                <button id="close"> &times; </button>
            </div>
        </div>
    );
}