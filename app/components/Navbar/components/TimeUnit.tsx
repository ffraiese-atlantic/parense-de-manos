interface TimeUnitProps {
  label: string;
  amount?: number;
}

const TimeUnit: React.FC<TimeUnitProps> = ({ label, amount }) => {
  return (
    <div className="flex flex-col items-center gap-1 md:gap-2 lg:gap-3 w-10 2xs:w-[60px] sm:w-[90px] lg:w-[120px]">
      <h3 className="text-[8px] 2xs:text-sm sm:text-base lg:text-xl">
        {label}
      </h3>
      <h3 className="number-shadow text-sm 2xs:text-xl sm:text-2xl lg:text-3xl font-bold">
        {!!amount || amount === 0 ? amount : "-"}
      </h3>
    </div>
  );
};

export default TimeUnit;
