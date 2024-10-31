import pool from "../../db/db.js";

import { getNotesOfUserQuery } from "./queries.js";

function getNotesOfUser(req, res) {

    const { id } = req.params;

    pool.query(getNotesOfUserQuery, [id], (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows);
    });
}

export { getNotesOfUser };
