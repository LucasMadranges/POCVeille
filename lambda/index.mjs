import {Client} from "pg";

const dbConfig = {
    host: "database-veille.cf6go6kgqiog.eu-west-3.rds.amazonaws.com",
    user: "postgres",
    password: "pobsav-bifjuB-qiqfe3",
    database: "database-veille",
    port: 5432, // Par défaut pour PostgreSQL
};

exports.handler = async (event) => {
    const client = new Client(dbConfig);

    try {
        // Connecter à la base
        await client.connect();

        // Exécuter une requête
        const res = await client.query("SELECT * FROM users");

        // Retourner les données
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(res.rows),
        };
    } catch (error) {
        console.error("Erreur lors de la connexion à la base de données:", error);
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({error: "Impossible de récupérer les données de la base de données"}),
        };
    } finally {
        await client.end();
    }
};
