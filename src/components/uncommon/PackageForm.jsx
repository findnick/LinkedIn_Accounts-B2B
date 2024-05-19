import Package from "./Package";

const PackageForm = () => {
  return (
    <div className="packages flex flex-col flex-wrap justify-center">
      <Package cost="150" button="false" style={{ border: "1px solid var(--light)" }} />
      <Package cost="180" button="false" style={{ border: "1px solid var(--light)" }} />
    </div>
  );
};

export default PackageForm;
