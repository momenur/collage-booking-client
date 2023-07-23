import Card from "../../../components/Card";
import useCollege from "../../../hooks/useCollage";

const Popular = () => {
    const [collages , loading] = useCollege();
    console.log(collages);
    if(loading){
        return <h1>Loading Data</h1>
    }
    return (
        <div>
            
            {
                collages.map(item => <Card
                key={item._id} item={item}
                ></Card>)
            }
        </div>
    );
};

export default Popular;