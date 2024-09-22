import Header from "../components/Header";


const Home = () => {
    return (
        <main className="w-ful flex flex-col">
            <Header title={<p>Taste the world width<br/>Flavorverse</p>} type={"Home"}/>
        </main>
    );
};

export default Home;