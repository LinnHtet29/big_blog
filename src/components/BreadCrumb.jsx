import { Link, useLocation } from "react-router-dom"

export default function BreadCrumb() {

    const location = useLocation();
    
    let currentLocation = "";

    const crumbs = location.pathname.split("/")
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLocation += `/${crumb}`

            return (
                <div className="text-lg text-white font-extralight bread-crumb" key={crumb}>
                   <Link to={currentLocation} >{ crumb }</Link>
                </div>
            )
        })
        

  return (
    <div className="flex gap-2 w-full px-20 pt-5">
        { crumbs }
    </div>
  )
}
