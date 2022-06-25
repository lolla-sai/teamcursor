import { createClient } from "next-sanity";

function sanityTestHome({ pets }) {
    return (
        <>
            <header>
                <h1>Sanity + Next.js</h1>
            </header>
            <main>
                <h2>Pets</h2>
                {pets.length > 0 && (
                    <ul>
                        {pets.map((pet) => (
                            <li key={pet._id}>{pet?.name}</li>
                        ))}
                    </ul>
                )}
                {!pets.length > 0 && <p>No pets to show</p>}
                {pets.length > 0 && (
                    <div>
                        <pre>{JSON.stringify(pets, null, 2)}</pre>
                    </div>
                )}
                {!pets.length > 0 && (
                    <div>
                        <div>¯\_(ツ)_/¯</div>
                        <p>
                            Your data will show up here when you've configured
                            everything correctly
                        </p>
                    </div>
                )}
            </main>
        </>
    );
}

export default sanityTestHome;

const client = createClient({
    projectId: "y8wn9y1y",
    dataset: "production",
    apiVersion: "2022-06-13",
    useCdn: false,
});

export async function getStaticProps() {
    /* let pets = [
        {
            _createdAt: "2022-03-08T09:28:00Z",
            _id: "1f69c53d-418a-452f-849a-e92466bb9c75",
            _rev: "xnBg0xhUDzo561jnWODd5e",
            _type: "pet",
            _updatedAt: "2022-03-08T09:28:00Z",
            name: "Bamse",
        },
    ]; */

    const pets = await client.fetch(`*[_type == "pet"]`);

    return {
        props: {
            pets,
        },
    };
}
