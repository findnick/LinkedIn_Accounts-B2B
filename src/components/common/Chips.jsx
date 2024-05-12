import Chip from "@mui/material/Chip";

const Chips = () => {
    return (
        <>
            <div className="chip">
                <Chip label="100% Automated" />
            </div>
            <div className="chip">
                <Chip label="50+ Monthly Meetings" />
            </div>
            <div className="chip">
                <Chip label="Setup" />
            </div>


            <div className="chip">
            </div>
            <div className="chip">
                <Chip label="Accounts" />
            </div>
            <div className="chip">
            </div>
        </>
    )
};

export default Chips;