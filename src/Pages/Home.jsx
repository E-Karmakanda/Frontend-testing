import Cards from "../components/Cards";
import image from "../assets/icon.png";

function Home() {
  return (
    <div className="container">
      {/* <h1 className="container__header">Tasks</h1> */}
      <div className="container__elements">
        <Cards
          title="User Login"
          label="Access your dashboard to manage tasks and track progress."
          buttonText="Sign in as User"
          buttonPath="/login"
          image={image}
          color="#FF68A7"
        />
        <Cards
          title="Admin Login"
          label="Manage users, oversee task progress, and configure settings."
          buttonText="Sign in as Admin"
          image={image}
          color="#68A4FF"
          buttonPath="/admin"
        />
      </div>
    </div>
  );
}

export default Home;    