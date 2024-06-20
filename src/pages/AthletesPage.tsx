import Table from '../components/common/Table';
import Form from '../components/common/Form';

export default function AthletesPage() {
    return (
        <>
            <h1 className="text-3xl"> Dette er AthletesPage</h1>
            <div className="flex justify-around">
                <div className="w-2/3 mr-20 h-full w-full">
                    <Table />
                </div>
                <div className="w-1/3 ml-20 ">
                    <Form />
                </div>
            </div>
        </>
    );
}
