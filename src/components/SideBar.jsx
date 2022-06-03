import icons from "../assets/sidebar_icon.svg"

export default function SideBar() {
    return (<div className="sedeBar">
        <div className="icons_box">
            <img className="icon" src={icons} alt="icons" />
        </div>
        <p>Copiryght , SportSee 2020</p>
    </div>)
}