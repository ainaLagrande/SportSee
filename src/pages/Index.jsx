import { NavLink } from 'react-router-dom'


export default function Index() {
    return (
      <>
        <section className="index">
          <div className="button_box">
            <NavLink to="/user/12">Karl</NavLink>
            <NavLink to="/user/18">Cecilia</NavLink>
          </div>
        </section>
      </>
    )
  }