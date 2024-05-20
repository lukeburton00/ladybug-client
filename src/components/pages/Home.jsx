import hero from '../../assets/hero.jpg'
import team from '../../assets/team.jpg'

function Home() {
  return (
    <div>
        <div class="container display-flex justify-content-center align-items-center "> 
            <div class="row-sm my-5 py-5 text-center">
                <h1 class="display-2 fw-bold display-inline">Manage your projects with ease.</h1>
            </div>
            <div class="row">
                <a href="/login" class="container w-25 align-items-center justify-content-center text-center btn btn-primary">Get Started</a>
            </div>
            <div class="row container justify-content-center align-items-center my-5 py-5">
                <div class="col-md">
                    <h2 class="display-4 text-start fw-bold pb-4">Convenient task management</h2>
                    <p class="text-start fw-bold col-4">Track your upcoming, current, and completed tasks on a simple and intuitive Task Board.</p>
                </div>
                <div class="col-md">
                    <img src={hero} width="600" height="400" class="col"/>
                </div>
            </div>
            <div class="row container justify-content-center align-items-center my-5 py-5">
               <div class="col-md">
                    <img src={team} width="600" height="400" class="col"/>
                </div>
                <div class="col-md align-items-right justify-content-right">
                    <h2 class="display-4 fw-bold text-end pb-4">Collaborate Seamlessly</h2>
                    <p class="text-end fw-bold col-4 ms-auto">Adding new project members is as easy as sending an email.</p>
                </div>
            </div>
        </div>
        <p>This is the landing page content.</p>
    </div>
  );
}

export default Home;
