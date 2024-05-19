import Chip from "@mui/material/Chip";

const Chips = () => {
    return (
        <>
            <div className="chip cursor-default">
                <Chip label="100% Automated" />
            </div>
            <div className="chip">
                <Chip label="50+ Monthly Meetings" />
            </div>
            <div className="chip">
                <Chip label="Free Setup" />
            </div>


            <div className="chip">
            </div>
            <div className="chip">
                <Chip label="Real Accounts" />
            </div>
            <div className="chip">
            </div>
        </>
    )
};

export default Chips;