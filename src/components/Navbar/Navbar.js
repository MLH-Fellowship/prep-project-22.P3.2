import { useAuth } from '../../context/AuthContext'



function Navbar() {
    const { currentUser } = useAuth();
    const { logout } = useAuth()


    return currentUser ? (


        <>

            <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong d-flex align-items-end ">

                <div class="container-fluid">

                    <a class="navbar-brand" href="/">WeatherApp</a>


                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/login" onClick={logout}>LogOut</a>
                            </li>
                        </ul>

                    </div>

                </div>

            </nav>

        </>) : (

        <>

            <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong d-flex align-items-end ">

                <div class="container-fluid">

                    <a class="navbar-brand" href="/">WeatherApp</a>


                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/login">Log In</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/signup">Sign up!</a>
                            </li>
                        </ul>

                    </div>

                </div>

            </nav>

        </>
    );
}

export default Navbar;