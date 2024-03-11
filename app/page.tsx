const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Welcome to TaskFlow</h1>
      <p className="text-lg mb-8">Streamline your projects and enhance team collaboration with ease.</p>
      <div>
        <button className="btn btn-primary mx-2">Get Started</button>
        <button className="btn btn-outline mx-2">Learn More</button>
      </div>
    </div>
  );
};

export default Home;