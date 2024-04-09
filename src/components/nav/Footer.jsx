import { useNavigate } from 'react-router-dom';

function Footer() {
    return (
        <div class='bg-dark mt-auto position-absolute w-100'>
            <footer class="footer container py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><a class="nav-link px-2 text-white" href="/">Home</a></li>
                    <li class="nav-item"><a class="nav-link px-2 text-white" href="/register">Register</a></li>
                    <li class="nav-item"><a class="nav-link px-2 text-white" href="/login">Log In</a></li>
                </ul>
                <p class="text-center text-white">© 2024 Luke Burton</p>
            </footer>
        </div>
    )
}

export default Footer;